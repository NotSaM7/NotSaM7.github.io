'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowManager } from '@/lib/windowManager';

export const BootScreen: React.FC = () => {
  const setBooted = useWindowManager((s) => s.setBooted);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    // 1. Progress completes after 1.8s
    const progressTimer = setTimeout(() => {
      setFlash(true);
    }, 1800);

    // 2. Flash ends and transitions to desktop
    const bootTimer = setTimeout(() => {
      setBooted(true);
    }, 2050);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(bootTimer);
    };
  }, [setBooted]);

  const welcomeText = 'Welcome';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Expressive easeOut curve
      },
    },
  };

  return (
    <div
      onClick={() => setBooted(true)}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none cursor-pointer"
      title="Click anywhere to skip"
    >
      {/* Centered Welcome Text & Progress Bar */}
      <div className="flex flex-col items-center gap-7">
        {/* Staggered "Welcome" Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center tracking-tight text-white font-semibold text-4xl sm:text-5xl md:text-6xl font-sans drop-shadow-lg"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
          }}
        >
          {welcomeText.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Rounded Progress Bar Track & Animated Fill */}
        <div className="w-56 sm:w-64 h-1.5 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.75, ease: 'easeInOut' }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </div>

      {/* Brief Phosphor Flash Overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.92 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="fixed inset-0 bg-white pointer-events-none z-[100000]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};
