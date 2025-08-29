import { motion } from 'motion/react';

// Individual doodle SVG components
export const StarDoodle = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const CircleDoodle = ({ className = '', size = 32 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <circle 
      cx="16" 
      cy="16" 
      r="14" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeDasharray="3,2"
    />
  </svg>
);

export const ArrowDoodle = ({ className = '', size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" className={className}>
    <path 
      d="M7 21l8-8-8-8M15 21l8-8-8-8" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const SquiggleDoodle = ({ className = '', size = 40 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
    <path 
      d="M5 20c5-8 10 8 15-4s10 8 15-4" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

export const HeartDoodle = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
  </svg>
);

export const LightningDoodle = ({ className = '', size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className}>
    <path 
      d="M13 2L3 14h5l-1 4 10-12H12l1-4z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const SunDoodle = ({ className = '', size = 28 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" className={className}>
    <circle cx="14" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 1v2M14 25v2M25 14h2M1 14h2M21.49 6.51l1.41-1.41M5.1 22.9l1.41-1.41M25.49 21.49l-1.41-1.41M3.51 5.51l1.41-1.41" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const TriangleDoodle = ({ className = '', size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path 
      d="M12 2l10 20H2L12 2z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const DiamondDoodle = ({ className = '', size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" className={className}>
    <path 
      d="M10 2l8 8-8 8-8-8 8-8z" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const WaveDoodle = ({ className = '', size = 36 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" className={className}>
    <path 
      d="M2 18c4-6 8 6 12 0s8 6 12 0 8-6 6 0" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

// Animated Doodle wrapper component
interface AnimatedDoodleProps {
  children: React.ReactNode;
  animationType?: 'float' | 'rotate' | 'pulse' | 'wiggle' | 'bounce';
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedDoodle = ({ 
  children, 
  animationType = 'float', 
  delay = 0, 
  duration = 4,
  className = ''
}: AnimatedDoodleProps) => {
  const animations = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: duration * 2,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    wiggle: {
      rotate: [-5, 5, -5],
      transition: {
        duration: duration / 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    bounce: {
      y: [0, -12, 0],
      scaleY: [1, 0.9, 1],
      transition: {
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`pointer-events-none ${className}`}
      animate={animations[animationType]}
    >
      {children}
    </motion.div>
  );
};

// Background doodle patterns
export const BackgroundDoodles = ({ section = 'hero' }: { section?: string }) => {
  const getDoodlesForSection = () => {
    switch (section) {
      case 'hero':
        return (
          <>
            <AnimatedDoodle 
              animationType="float" 
              delay={0.5} 
              duration={6}
              className="absolute top-20 right-16 text-gray-300 opacity-40"
            >
              <StarDoodle size={28} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="rotate" 
              delay={2} 
              duration={8}
              className="absolute top-1/4 left-12 text-gray-200 opacity-30"
            >
              <CircleDoodle size={36} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="wiggle" 
              delay={1} 
              duration={4}
              className="absolute bottom-32 right-24 text-gray-300 opacity-35"
            >
              <SquiggleDoodle size={44} />
            </AnimatedDoodle>

            <AnimatedDoodle 
              animationType="pulse" 
              delay={3} 
              duration={5}
              className="absolute top-1/3 right-1/4 text-gray-200 opacity-25"
            >
              <SunDoodle size={32} />
            </AnimatedDoodle>
          </>
        );
      
      case 'about':
        return (
          <>
            <AnimatedDoodle 
              animationType="bounce" 
              delay={1.5} 
              duration={5}
              className="absolute top-16 left-16 text-gray-300 opacity-40"
            >
              <HeartDoodle size={26} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="float" 
              delay={0} 
              duration={7}
              className="absolute bottom-20 right-20 text-gray-200 opacity-30"
            >
              <LightningDoodle size={24} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="rotate" 
              delay={2.5} 
              duration={10}
              className="absolute top-1/2 left-8 text-gray-300 opacity-25"
            >
              <DiamondDoodle size={22} />
            </AnimatedDoodle>
          </>
        );
      
      case 'work':
        return (
          <>
            <AnimatedDoodle 
              animationType="wiggle" 
              delay={0.5} 
              duration={3}
              className="absolute top-12 right-12 text-gray-300 opacity-35"
            >
              <ArrowDoodle size={30} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="pulse" 
              delay={2} 
              duration={6}
              className="absolute bottom-16 left-16 text-gray-200 opacity-30"
            >
              <TriangleDoodle size={28} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="float" 
              delay={1} 
              duration={8}
              className="absolute top-1/3 left-1/4 text-gray-300 opacity-25"
            >
              <WaveDoodle size={40} />
            </AnimatedDoodle>
          </>
        );
      
      case 'contact':
        return (
          <>
            <AnimatedDoodle 
              animationType="rotate" 
              delay={1} 
              duration={12}
              className="absolute top-20 left-20 text-gray-300 opacity-40"
            >
              <StarDoodle size={32} />
            </AnimatedDoodle>
            
            <AnimatedDoodle 
              animationType="bounce" 
              delay={0} 
              duration={4}
              className="absolute bottom-24 right-16 text-gray-200 opacity-35"
            >
              <CircleDoodle size={38} />
            </AnimatedDoodle>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {getDoodlesForSection()}
    </div>
  );
};

// Inline doodles for text decoration
export const InlineDoodle = ({ 
  type, 
  className = '' 
}: { 
  type: 'underline' | 'highlight' | 'circle' | 'arrow';
  className?: string;
}) => {
  switch (type) {
    case 'underline':
      return (
        <svg 
          className={`inline-block ${className}`} 
          width="100" 
          height="8" 
          viewBox="0 0 100 8"
        >
          <path 
            d="M2 6c20-4 40 4 60-2s20 4 36 0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      );
    
    case 'highlight':
      return (
        <svg 
          className={`absolute inset-0 ${className}`} 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 20"
        >
          <path 
            d="M5 15c20-2 40-4 60-2s20-2 30-1" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.3"
          />
        </svg>
      );
    
    case 'circle':
      return (
        <svg 
          className={`absolute inset-0 ${className}`} 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 40"
        >
          <ellipse 
            cx="50" 
            cy="20" 
            rx="45" 
            ry="15" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="3,2"
            opacity="0.4"
          />
        </svg>
      );
    
    case 'arrow':
      return (
        <svg 
          className={`inline-block ${className}`} 
          width="24" 
          height="16" 
          viewBox="0 0 24 16"
        >
          <path 
            d="M18 8H2M18 8l-4-4M18 8l-4 4" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      );
    
    default:
      return null;
  }
};