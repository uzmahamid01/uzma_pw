import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

interface TextAnimationProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  speed?: number;
}

// Typewriter effect with cursor
export function TypewriterText({ 
  children, 
  className = '', 
  delay = 0, 
  speed = 80,
  threshold = 0.5 
}: TextAnimationProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (isInView && currentIndex < children.length) {
      const timer = setTimeout(() => {
        setDisplayedText(children.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed + delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, currentIndex, children, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div ref={elementRef} className={className}>
      <span>
        {displayedText}
        {currentIndex < children.length && (
          <span className={`inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        )}
      </span>
    </div>
  );
}

// Word-by-word reveal animation
export function WordRevealText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  threshold = 0.3 
}: TextAnimationProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });
  const words = children.split(' ');

  return (
    <div ref={elementRef} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)' 
          } : { 
            opacity: 0, 
            y: 20, 
            filter: 'blur(4px)' 
          }}
          transition={{
            duration: duration,
            delay: delay + (index * 0.1),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Character-by-character animation with wave effect
export function CharacterWaveText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  threshold = 0.4 
}: TextAnimationProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });
  const characters = children.split('');

  return (
    <div ref={elementRef} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotateX: 0 
          } : { 
            opacity: 0, 
            y: 50, 
            rotateX: -90 
          }}
          transition={{
            duration: duration,
            delay: delay + (index * 0.03),
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block"
          style={{ transformOrigin: 'bottom center' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

// Sliding text reveal from bottom
export function SlideUpText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1.2,
  threshold = 0.3 
}: TextAnimationProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { 
          y: '0%', 
          opacity: 1 
        } : { 
          y: '100%', 
          opacity: 0 
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Typewriter with line-by-line reveal
export function MultiLineTypewriter({ 
  lines, 
  className = '', 
  delay = 0, 
  speed = 60,
  threshold = 0.3 
}: {
  lines: string[];
  className?: string;
  delay?: number;
  speed?: number;
  threshold?: number;
}) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isInView && currentLine < lines.length) {
      const currentLineText = lines[currentLine];
      
      if (currentIndex < currentLineText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + currentLineText[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, speed + (currentLine === 0 ? delay * 1000 : 0));
        
        return () => clearTimeout(timer);
      } else if (currentLine < lines.length - 1) {
        // Move to next line
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCurrentIndex(0);
          setDisplayedText(prev => prev + '\n');
        }, 300);
      }
    }
  }, [isInView, currentLine, currentIndex, lines, speed, delay]);

  return (
    <div ref={elementRef} className={className}>
      <pre className="whitespace-pre-wrap font-inherit">{displayedText}</pre>
    </div>
  );
}

// Gradient text reveal animation
export function GradientRevealText({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 2,
  threshold = 0.3 
}: TextAnimationProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          backgroundPosition: '200% 0',
          backgroundImage: 'linear-gradient(90deg, transparent 0%, currentColor 50%, currentColor 100%)'
        }}
        animate={isInView ? { 
          backgroundPosition: '-200% 0',
        } : {
          backgroundPosition: '200% 0',
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          backgroundImage: isInView 
            ? 'linear-gradient(90deg, transparent 0%, currentColor 50%, currentColor 100%)'
            : 'linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)'
        }}
        className="bg-gradient-to-r from-transparent via-current to-current bg-clip-text text-transparent"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Sophisticated word-by-word with emphasis on specific words
export function SmartWordReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  threshold = 0.3,
  emphasizeWords = [] as string[]
}: TextAnimationProps & { emphasizeWords?: string[] }) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });
  const words = children.split(' ');

  return (
    <div ref={elementRef} className={className}>
      {words.map((word, index) => {
        const isEmphasized = emphasizeWords.some(emphWord => 
          word.toLowerCase().includes(emphWord.toLowerCase())
        );
        
        return (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0, 
              y: 30, 
              scale: 0.8,
              filter: 'blur(8px)' 
            }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0, 
              scale: isEmphasized ? 1.05 : 1,
              filter: 'blur(0px)' 
            } : { 
              opacity: 0, 
              y: 30, 
              scale: 0.8,
              filter: 'blur(8px)' 
            }}
            transition={{
              duration: duration + (isEmphasized ? 0.2 : 0),
              delay: delay + (index * 0.08),
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={`inline-block mr-[0.3em] ${isEmphasized ? 'text-black font-semibold' : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}