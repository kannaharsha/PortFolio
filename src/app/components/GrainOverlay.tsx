import { motion } from 'motion/react';

export function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.04] mix-blend-soft-light overflow-hidden">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            numOctaves="4" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <motion.div 
        animate={{ 
          x: [0, -20, 10, -5, 0],
          y: [0, 15, -10, 5, 0]
        }}
        transition={{ 
          duration: 0.2, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 bg-transparent"
      />
    </div>
  );
}
