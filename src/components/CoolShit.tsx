import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Sparkles, Zap, Rocket, Code, Brain, Atom } from 'lucide-react';

export function CoolShit() {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const coolProjects = [
    {
      id: 1,
      title: "AI Consciousness Simulator",
      description: "A neural network that dreams of electric sheep and occasionally writes poetry",
      tech: ["Python", "TensorFlow", "Philosophy", "Coffee"],
      status: "Sentient",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      demo: "Thinking...",
    },
    {
      id: 2,
      title: "Quantum Portfolio States",
      description: "Portfolio exists in multiple states simultaneously until observed by recruiters",
      tech: ["Quantum Physics", "React", "Schrödinger's JS", "Hope"],
      status: "Superposition",
      icon: Atom,
      gradient: "from-blue-500 to-cyan-500",
      demo: "Maybe deployed",
    },
    {
      id: 3,
      title: "Code Whisperer",
      description: "Communicates with bugs in their native language. Results vary.",
      tech: ["Bug Language", "TypeScript", "Patience", "Debugging Rituals"],
      status: "Debugging",
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      demo: "console.log('It works on my machine')",
    },
    {
      id: 4,
      title: "Procrastination Optimizer",
      description: "Algorithmically maximizes productivity by perfecting the art of productive procrastination",
      tech: ["Task Avoidance", "React", "Pomodoro++", "Self-Deception"],
      status: "TODO: Finish later",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      demo: "Starting soon™",
    },
    {
      id: 5,
      title: "Meme-Driven Development",
      description: "Generates code based on trending memes. Quality not guaranteed.",
      tech: ["Meme API", "React", "Cultural References", "Gen Z Energy"],
      status: "It's giving main character",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-500",
      demo: "No cap, this slaps fr fr",
    },
    {
      id: 6,
      title: "Reality.js Framework",
      description: "A JavaScript framework that attempts to manipulate reality itself. Side effects include existential crisis.",
      tech: ["Reality Manipulation", "JavaScript", "Physics Engine", "Therapy"],
      status: "Questioning existence",
      icon: Rocket,
      gradient: "from-indigo-500 to-purple-500",
      demo: "if (reality.isBroken()) reality.reload()",
    },
  ];

  const achievements = [
    "🏆 Successfully caused 404 errors in 37 different ways",
    "🎯 Turned coffee into code with 99.7% efficiency",
    "🚀 Made a loading spinner so hypnotic it became a meditation app",
    "🔥 Created a bug so rare it became a feature",
    "💡 Invented a new sorting algorithm: Chaos Sort (O(∞))",
    "🎨 Designed a color that doesn't exist yet",
    "🌟 Achieved enlightenment through Stack Overflow",
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isHovering ? 0.6 : 0.3,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl transition-all duration-700"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            opacity: isHovering ? 0.4 : 0.2,
          }}
        />
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Experimental Insanity
            </motion.h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Where logic goes to die and creativity is born from the ashes of conventional thinking. 
              These are the projects that shouldn't exist but somehow do.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {coolProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200`} />
                <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-xs text-purple-400 font-medium">{project.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <code className="text-xs text-green-400 bg-black/50 p-2 rounded block">
                      {project.demo}
                    </code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Questionable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-left"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <span className="text-white/90 text-sm">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Message */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <p className="text-white/80 text-lg mb-4">
                "The best way to predict the future is to create something so weird that the future has to adapt to it."
              </p>
              <p className="text-white/60 text-sm">
                - Probably someone wise, or possibly me after too much caffeine
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}