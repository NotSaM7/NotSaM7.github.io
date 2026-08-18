'use client';

import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Sliders, Search } from 'lucide-react';
import { useWindowManager } from '@/lib/windowManager';

export const MenuBar: React.FC = () => {
  const activeAppTitle = useWindowManager((s) => s.activeAppTitle);
  const openWindow = useWindowManager((s) => s.openWindow);
  const [timeString, setTimeString] = useState('');
  const [appleMenuOpen, setAppleMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = days[now.getDay()];
      const month = months[now.getMonth()];
      const date = now.getDate();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTimeString(`${day} ${month} ${date}  ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-7 z-[9000] flex items-center justify-between px-3 text-[13px] font-medium text-white/90 bg-black/40 backdrop-blur-2xl border-b border-white/10 select-none">
      {/* Left Menu Section */}
      <div className="flex items-center gap-1">
        {/* Apple Menu */}
        <div className="relative">
          <button
            onClick={() => setAppleMenuOpen(!appleMenuOpen)}
            className={`px-2 py-0.5 rounded transition-colors ${
              appleMenuOpen ? 'bg-white/20' : 'hover:bg-white/10'
            }`}
            title="Apple Menu"
          >
            <svg
              className="w-3.5 h-3.5 fill-current inline-block -mt-0.5"
              viewBox="0 0 170 170"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.81-11.64-14.31-6.19-9.88-11.13-20.97-14.83-33.27-3.7-12.3-5.55-23.77-5.55-34.41 0-14.57 3.59-26.68 10.77-36.33 7.18-9.65 16.48-14.64 27.9-14.97 4.9 0 10.39 1.25 16.47 3.75 6.08 2.5 10.33 3.86 12.74 4.09 1.96-.23 6.42-1.63 13.39-4.21 6.96-2.58 12.59-3.75 16.89-3.52 12.63.65 22.42 5.25 29.38 13.8-11.09 6.74-16.53 16.09-16.32 28.05.22 9.57 3.81 17.56 10.77 23.97 6.96 6.41 15.34 10.05 25.13 10.92-2.17 6.52-4.89 13.43-8.16 20.73zM119.22 31.84c0-7.39 2.61-14.19 7.83-20.4 5.22-6.21 11.75-10.33 19.58-12.36.65 1.09.98 2.29.98 3.6 0 7.39-2.72 14.3-8.16 20.73-5.44 6.43-12.18 10.49-20.23 12.18-.54-1.3-.81-2.45-.81-3.75z" />
            </svg>
          </button>

          {/* Apple Dropdown Menu */}
          {appleMenuOpen && (
            <div
              className="absolute top-7 left-0 w-52 py-1.5 bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-lg shadow-2xl z-[9500] text-xs text-white"
              onClick={() => setAppleMenuOpen(false)}
            >
              <button
                onClick={() => openWindow('about')}
                className="w-full text-left px-3 py-1.5 hover:bg-sky-600 rounded flex items-center justify-between"
              >
                <span>About Swayam Jain</span>
              </button>
              <div className="my-1 border-t border-white/10" />
              <button
                onClick={() => openWindow('projects')}
                className="w-full text-left px-3 py-1.5 hover:bg-sky-600 rounded"
              >
                Featured Projects
              </button>
              <button
                onClick={() => openWindow('resume')}
                className="w-full text-left px-3 py-1.5 hover:bg-sky-600 rounded"
              >
                View Resume
              </button>
              <div className="my-1 border-t border-white/10" />
              <button
                onClick={() => window.location.reload()}
                className="w-full text-left px-3 py-1.5 hover:bg-sky-600 rounded"
              >
                Restart Portfolio
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Active App Name */}
        <span className="font-bold px-2 py-0.5 text-white">{activeAppTitle}</span>

        {/* Menus */}
        <div className="hidden sm:flex items-center">
          <button className="px-2 py-0.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors">File</button>
          <button className="px-2 py-0.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors">Edit</button>
          <button className="px-2 py-0.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors">View</button>
          <button className="px-2 py-0.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors">Window</button>
          <button className="px-2 py-0.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors">Help</button>
        </div>
      </div>

      {/* Right Status Section */}
      <div className="flex items-center gap-3 pr-1 text-white/90">
        <span title="Wi-Fi: Connected" className="cursor-default">
          <Wifi className="w-3.5 h-3.5" />
        </span>
        <span title="Battery: 100%" className="cursor-default flex items-center gap-1 text-[11px]">
          <Battery className="w-4 h-4 text-emerald-400" />
        </span>
        <span title="Control Center" className="cursor-default">
          <Sliders className="w-3.5 h-3.5" />
        </span>
        <span className="font-medium text-xs tracking-tight tabular-nums pl-1">
          {timeString || 'Mon 10:42 AM'}
        </span>
      </div>
    </header>
  );
};
