'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useWindowManager } from '@/lib/windowManager';
import { AppMeta } from '@/lib/fileSystem';

interface DesktopIconProps {
  app: AppMeta;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ app }) => {
  const selectedIconId = useWindowManager((s) => s.selectedIconId);
  const selectIcon = useWindowManager((s) => s.selectIcon);
  const openWindow = useWindowManager((s) => s.openWindow);
  const isSelected = selectedIconId === app.id;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      openWindow(app.id);
    } else {
      selectIcon(app.id);
    }
  };

  const handleDoubleClick = () => {
    openWindow(app.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openWindow(app.id);
    }
  };

  return (
    <motion.div
      drag={typeof window !== 'undefined' && window.innerWidth >= 768}
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        left: -800,
        right: 20,
        top: -10,
        bottom: 500,
      }}
      tabIndex={0}
      role="button"
      aria-label={app.title}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      className={`group flex flex-col items-center justify-center p-2 rounded-xl outline-none cursor-pointer select-none transition-colors w-20 text-center ${
        isSelected ? 'bg-sky-500/30 ring-1 ring-sky-400/60 shadow-lg' : 'hover:bg-white/10'
      }`}
    >
      {/* SF Document / Folder Icon */}
      <div className="w-12 h-12 relative flex items-center justify-center drop-shadow-xl transition-transform group-hover:scale-105 active:scale-95">
        <svg className="w-full h-full" viewBox="0 0 54 54" fill="none">
          <path
            d="M8 16C8 13.79 9.79 12 12 12H21.5C23.09 12 24.57 12.76 25.48 14.04L27.12 16.36C27.58 17 28.32 17.38 29.12 17.38H42C44.21 17.38 46 19.17 46 21.38V38C46 40.21 44.21 42 42 42H12C9.79 42 8 40.21 8 38V16Z"
            fill="url(#folder-back-grad)"
          />
          <rect
            x="8"
            y="18"
            width="38"
            height="24"
            rx="4"
            fill="url(#folder-front-grad)"
          />
          <defs>
            <linearGradient id="folder-back-grad" x1="8" y1="12" x2="46" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="folder-front-grad" x1="8" y1="18" x2="46" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Label with legibility text-shadow */}
      <span
        className={`mt-1 text-[11px] font-medium text-white px-1.5 py-0.5 rounded leading-tight max-w-[76px] truncate shadow-sm ${
          isSelected ? 'bg-sky-600 shadow-md' : 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
        }`}
      >
        {app.title}
      </span>
    </motion.div>
  );
};
