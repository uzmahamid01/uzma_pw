import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

// Glass fade in from bottom with blur effect
export function GlassFadeUp({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1,
  threshold = 0.15 
}: AnimationWrapperProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 60,
          filter: 'blur(10px)',
          backdropFilter: 'blur(0px)'
        }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : 60,
          filter: isInView ? 'blur(0px)' : 'blur(10px)',
          backdropFilter: isInView ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Glass morphing scale effect
export function GlassScale({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1.2,
  threshold = 0.15 
}: AnimationWrapperProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.9,
          filter: 'blur(15px) brightness(1.1)',
          backdropFilter: 'blur(0px)'
        }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 0.9,
          filter: isInView ? 'blur(0px) brightness(1)' : 'blur(15px) brightness(1.1)',
          backdropFilter: isInView ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ 
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Glass slide in from left
export function GlassSlideLeft({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.9,
  threshold = 0.15 
}: AnimationWrapperProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          x: -80,
          filter: 'blur(8px)',
          backdropFilter: 'blur(0px)'
        }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : -80,
          filter: isInView ? 'blur(0px)' : 'blur(8px)',
          backdropFilter: isInView ? 'blur(10px)' : 'blur(0px)'
        }}
        transition={{ 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Glass slide in from right
export function GlassSlideRight({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.9,
  threshold = 0.15 
}: AnimationWrapperProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          x: 80,
          filter: 'blur(8px)',
          backdropFilter: 'blur(0px)'
        }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : 80,
          filter: isInView ? 'blur(0px)' : 'blur(8px)',
          backdropFilter: isInView ? 'blur(10px)' : 'blur(0px)'
        }}
        transition={{ 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Staggered glass children animation
export function GlassStagger({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.15,
  staggerDelay = 0.1 
}: AnimationWrapperProps & { staggerDelay?: number }) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: delay,
              staggerChildren: staggerDelay
            }
          }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Individual stagger item
export function GlassStaggerItem({ 
  children, 
  className = '' 
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40,
          filter: 'blur(8px)',
          backdropFilter: 'blur(0px)'
        },
        visible: { 
          opacity: 1, 
          y: 0,
          filter: 'blur(0px)',
          backdropFilter: 'blur(10px)',
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Premium glass reveal effect
export function GlassReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 1.4,
  threshold = 0.1 
}: AnimationWrapperProps) {
  const { elementRef, isInView } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 1.05,
          filter: 'blur(20px) brightness(1.3) saturate(1.2)',
          backdropFilter: 'blur(0px)'
        }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 1.05,
          filter: isInView ? 'blur(0px) brightness(1) saturate(1)' : 'blur(20px) brightness(1.3) saturate(1.2)',
          backdropFilter: isInView ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ 
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}