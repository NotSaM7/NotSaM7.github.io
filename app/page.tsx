'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowManager } from '@/lib/windowManager';
import { BootScreen } from '@/components/os/BootScreen';
import { Desktop } from '@/components/os/Desktop';
import { MobileNotice } from '@/components/os/MobileNotice';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [showMobileNotice, setShowMobileNotice] = useState(false);
  const isBooted = useWindowManager((s) => s.isBooted);

  useEffect(() => {
    setMounted(true);
    // Check if mobile viewport & notice hasn't been dismissed in this session
    const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const dismissed = sessionStorage.getItem('mobileNoticeDismissed') === 'true';

    if (isMobile && !dismissed) {
      setShowMobileNotice(true);
    }
  }, []);

  const handleDismissMobileNotice = () => {
    sessionStorage.setItem('mobileNoticeDismissed', 'true');
    setShowMobileNotice(false);
  };

  if (!mounted) {
    return <main className="w-screen h-screen bg-black" />;
  }

  return (
    <main className="w-screen h-screen h-[100dvh] overflow-hidden bg-black relative select-none">
      <AnimatePresence mode="wait">
        {showMobileNotice ? (
          <motion.div
            key="mobile-notice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-[100000]"
          >
            <MobileNotice onContinue={handleDismissMobileNotice} />
          </motion.div>
        ) : !isBooted ? (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 z-50"
          >
            <BootScreen />
          </motion.div>
        ) : (
          <motion.div
            key="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 z-10"
          >
            <Desktop />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
