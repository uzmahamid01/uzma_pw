import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, Code2, Monitor } from 'lucide-react';

interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string[];
  description: string;
  output?: string[];
  theme: 'dark' | 'light';
}

const codeSnippets: CodeSnippet[] = [
  {
    id: 'ai-model',
    title: 'AI Model Training',
    language: 'python',
    description: 'Training a neural network for computer vision',
    theme: 'dark',
    code: [
      'import tensorflow as tf',
      'from tensorflow.keras import layers, models',
      '',
      '# Building the model architecture',
      'model = models.Sequential([',
      '    layers.Conv2D(32, (3, 3), activation="relu"),',
      '    layers.MaxPooling2D((2, 2)),',
      '    layers.Conv2D(64, (3, 3), activation="relu"),',
      '    layers.MaxPooling2D((2, 2)),',
      '    layers.Flatten(),',
      '    layers.Dense(64, activation="relu"),',
      '    layers.Dense(10, activation="softmax")',
      '])',
      '',
      '# Compiling with optimizer',
      'model.compile(',
      '    optimizer="adam",',
      '    loss="categorical_crossentropy",',
      '    metrics=["accuracy"]',
      ')',
      '',
      '# Training the model',
      'history = model.fit(',
      '    train_data, train_labels,',
      '    epochs=50,',
      '    validation_data=(val_data, val_labels)',
      ')'
    ],
    output: [
      'Epoch 1/50',
      '1875/1875 [==============================] - 4s 2ms/step',
      'loss: 0.2394 - accuracy: 0.9281 - val_loss: 0.1123 - val_accuracy: 0.9654',
      'Epoch 2/50',
      '1875/1875 [==============================] - 3s 2ms/step', 
      'loss: 0.0987 - accuracy: 0.9702 - val_loss: 0.0843 - val_accuracy: 0.9748',
      '...',
      'Training completed! 🎉',
      'Final accuracy: 98.7%'
    ]
  },
  {
    id: 'react-component',
    title: 'React Component',
    language: 'typescript',
    description: 'Building interactive UI components',
    theme: 'light',
    code: [
      'import React, { useState, useEffect } from "react";',
      'import { motion } from "framer-motion";',
      '',
      'interface ProjectCardProps {',
      '  title: string;',
      '  description: string;',
      '  image: string;',
      '  tags: string[];',
      '}',
      '',
      'export const ProjectCard: React.FC<ProjectCardProps> = ({',
      '  title,',
      '  description, ',
      '  image,',
      '  tags',
      '}) => {',
      '  const [isHovered, setIsHovered] = useState(false);',
      '',
      '  return (',
      '    <motion.div',
      '      className="project-card"',
      '      whileHover={{ scale: 1.05 }}',
      '      onHoverStart={() => setIsHovered(true)}',
      '      onHoverEnd={() => setIsHovered(false)}',
      '    >',
      '      <img src={image} alt={title} />',
      '      <h3>{title}</h3>',
      '      <p>{description}</p>',
      '      <div className="tags">',
      '        {tags.map(tag => (',
      '          <span key={tag}>{tag}</span>',
      '        ))}',
      '      </div>',
      '    </motion.div>',
      '  );',
      '};'
    ],
    output: [
      '✅ Component compiled successfully',
      '🎨 Styles applied',
      '⚡ Animations ready',
      '🚀 Component rendered',
      '',
      'Performance: 98/100',
      'Accessibility: 95/100',
      'Best Practices: 100/100'
    ]
  },
  {
    id: 'algorithm',
    title: 'Algorithm Implementation', 
    language: 'javascript',
    description: 'Optimized search algorithm',
    theme: 'dark',
    code: [
      '// Binary search with performance optimization',
      'function binarySearch(arr, target) {',
      '  let left = 0;',
      '  let right = arr.length - 1;',
      '  let steps = 0;',
      '',
      '  while (left <= right) {',
      '    steps++;',
      '    const mid = Math.floor((left + right) / 2);',
      '',
      '    if (arr[mid] === target) {',
      '      console.log(`Found in ${steps} steps`);',
      '      return mid;',
      '    }',
      '',
      '    if (arr[mid] < target) {',
      '      left = mid + 1;',
      '    } else {',
      '      right = mid - 1;',
      '    }',
      '  }',
      '',
      '  return -1;',
      '}',
      '',
      '// Test with large dataset',
      'const data = Array.from({length: 1000000}, ',
      '  (_, i) => i * 2);',
      '',
      'const result = binarySearch(data, 846284);'
    ],
    output: [
      'Searching array of 1,000,000 elements...',
      'Target: 846284',
      '',
      'Step 1: Checking position 500000',
      'Step 2: Checking position 750000', 
      'Step 3: Checking position 625000',
      '...',
      'Found in 19 steps',
      'Index: 423142',
      '',
      'Algorithm complexity: O(log n)',
      'Performance: Excellent ⚡'
    ]
  }
];

export function LiveCodeVisualization() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);
  const [showOutput, setShowOutput] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout>();

  const snippet = codeSnippets[currentSnippet];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        const totalLines = snippet.code.length + (snippet.output?.length || 0);
        
        if (currentLine < snippet.code.length) {
          // Add code line
          setDisplayedCode(prev => [...prev, snippet.code[currentLine]]);
        } else if (snippet.output && currentLine < totalLines) {
          // Add output line
          if (!showOutput) {
            setShowOutput(true);
          }
          const outputIndex = currentLine - snippet.code.length;
          setDisplayedOutput(prev => [...prev, snippet.output![outputIndex]]);
        }

        if (currentLine >= totalLines - 1) {
          setIsPlaying(false);
          return;
        }

        setCurrentLine(prev => prev + 1);
      }, 200);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentLine, snippet]);

  const handlePlay = () => {
    if (currentLine >= snippet.code.length + (snippet.output?.length || 0)) {
      handleReset();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentLine(0);
    setDisplayedCode([]);
    setDisplayedOutput([]);
    setShowOutput(false);
  };

  const nextSnippet = () => {
    handleReset();
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'python': return 'text-blue-400';
      case 'typescript': return 'text-purple-400';
      case 'javascript': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const formatCode = (line: string, index: number) => {
    // Simple syntax highlighting
    let formattedLine = line;
    
    // Keywords
    const keywords = ['import', 'from', 'function', 'const', 'let', 'var', 'if', 'else', 'while', 'for', 'return', 'class', 'interface', 'export', 'default'];
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      formattedLine = formattedLine.replace(regex, `<span class="text-purple-400 font-semibold">${keyword}</span>`);
    });

    // Strings
    formattedLine = formattedLine.replace(/(["'`])((?:(?!\1)[^\\]|\\.)*)(\1)/g, 
      '<span class="text-green-400">$1$2$3</span>');

    // Comments
    formattedLine = formattedLine.replace(/(\/\/.*|#.*)/g, 
      '<span class="text-gray-500 italic">$1</span>');

    // Numbers
    formattedLine = formattedLine.replace(/\b\d+\.?\d*\b/g, 
      '<span class="text-orange-400">$&</span>');

    return formattedLine;
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Code2 className="text-gray-600" size={20} />
          <div>
            <h3 className="font-medium text-gray-900">{snippet.title}</h3>
            <p className="text-sm text-gray-600">{snippet.description}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 ${getLanguageColor(snippet.language)}`}>
            {snippet.language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePlay}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <RotateCcw size={16} />
          </button>
          <button
            onClick={nextSnippet}
            className="px-3 py-2 text-xs bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Panel */}
        <div className={`rounded-lg overflow-hidden border ${
          snippet.theme === 'dark' 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <div className={`px-4 py-2 border-b flex items-center gap-2 ${
            snippet.theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className={`text-xs ${
              snippet.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {snippet.title.toLowerCase().replace(/\s+/g, '_')}.{snippet.language === 'typescript' ? 'tsx' : snippet.language === 'python' ? 'py' : 'js'}
            </span>
          </div>
          
          <div className="p-4 font-mono text-sm h-80 overflow-y-auto">
            <AnimatePresence>
              {displayedCode.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    snippet.theme === 'dark' ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  <span className="text-gray-500 mr-4 select-none w-8 text-right">
                    {index + 1}
                  </span>
                  <span 
                    dangerouslySetInnerHTML={{ 
                      __html: formatCode(line, index) 
                    }} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Cursor */}
            {isPlaying && (
              <motion.div
                className={`w-2 h-5 ${
                  snippet.theme === 'dark' ? 'bg-green-400' : 'bg-black'
                } inline-block`}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Output Panel */}
        <div className="rounded-lg overflow-hidden border bg-black border-gray-700">
          <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center gap-2">
            <Monitor size={14} className="text-gray-400" />
            <span className="text-xs text-gray-300">Output</span>
          </div>
          
          <div className="p-4 font-mono text-sm h-80 overflow-y-auto">
            {showOutput ? (
              <AnimatePresence>
                {displayedOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-green-400 mb-1"
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <div className="text-gray-500 italic">
                Waiting for code execution...
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>
            {currentLine} / {snippet.code.length + (snippet.output?.length || 0)} lines
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <motion.div
            className="h-1 bg-black rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${(currentLine / (snippet.code.length + (snippet.output?.length || 0))) * 100}%` 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}