'use client';

import React, { useEffect } from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { Window } from './Window';
import { DesktopIcon } from './DesktopIcon';
import { useWindowManager } from '@/lib/windowManager';
import { APPS_REGISTRY } from '@/lib/fileSystem';

export const Desktop: React.FC = () => {
  const windows = useWindowManager((s) => s.windows);
  const openWindow = useWindowManager((s) => s.openWindow);
  const selectIcon = useWindowManager((s) => s.selectIcon);

  // Auto-open "About Me" window on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      openWindow('about');
    }, 350);
    return () => clearTimeout(timer);
  }, [openWindow]);

  const appsList = Object.values(APPS_REGISTRY);

  return (
    <div
      onClick={() => selectIcon(null)}
      className="fixed inset-0 w-screen h-screen overflow-hidden select-none bg-[#0c0d14]"
    >
      {/* Dynamic macOS Sonoma Wave Dunes Wallpaper */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <rect width="1440" height="900" fill="url(#bg-sonoma)" />
          <path
            d="M-100 450 C 300 200, 700 700, 1540 300 L 1540 950 L -100 950 Z"
            fill="url(#dune-grad-1)"
            opacity="0.85"
          />
          <path
            d="M-100 550 C 400 350, 900 850, 1540 450 L 1540 950 L -100 950 Z"
            fill="url(#dune-grad-2)"
            opacity="0.9"
          />
          <path
            d="M-100 700 C 500 500, 1000 800, 1540 600 L 1540 950 L -100 950 Z"
            fill="url(#dune-grad-3)"
            opacity="0.95"
          />
          <defs>
            <linearGradient id="bg-sonoma" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#140428" />
              <stop offset="35%" stopColor="#2c0c3e" />
              <stop offset="65%" stopColor="#4c114f" />
              <stop offset="100%" stopColor="#111638" />
            </linearGradient>
            <linearGradient id="dune-grad-1" x1="0" y1="300" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="dune-grad-2" x1="0" y1="400" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#db2777" />
              <stop offset="60%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="dune-grad-3" x1="0" y1="500" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="40%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top MenuBar */}
      <MenuBar />

      {/* Desktop Icons (Neatly bounded on the top right) */}
      <div className="absolute top-10 right-4 z-10 flex flex-col gap-2.5 pointer-events-auto">
        {appsList.map((app) => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>

      {/* Windows Layer */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {windows.map((win) => (
          <div key={win.id} className="pointer-events-auto">
            <Window windowItem={win} />
          </div>
        ))}
      </div>

      {/* Bottom macOS Dock */}
      <Dock />
    </div>
  );
};
