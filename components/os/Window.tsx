'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WindowItem, useWindowManager } from '@/lib/windowManager';
import { AboutMeApp } from '@/components/apps/AboutMeApp';
import { ProjectsApp } from '@/components/apps/ProjectsApp';
import { SkillsApp } from '@/components/apps/SkillsApp';
import { ResumeApp } from '@/components/apps/ResumeApp';
import { ContactApp } from '@/components/apps/ContactApp';

interface WindowProps {
  windowItem: WindowItem;
}

export const Window: React.FC<WindowProps> = ({ windowItem }) => {
  const closeWindow = useWindowManager((s) => s.closeWindow);
  const minimizeWindow = useWindowManager((s) => s.minimizeWindow);
  const toggleMaximizeWindow = useWindowManager((s) => s.toggleMaximizeWindow);
  const focusWindow = useWindowManager((s) => s.focusWindow);
  const updateWindowPosition = useWindowManager((s) => s.updateWindowPosition);

  const { id, appId, title, x, y, w, h, zIndex, isMinimized, isMaximized, isFocused } = windowItem;

  const renderAppContent = () => {
    switch (appId) {
      case 'about':
        return <AboutMeApp />;
      case 'projects':
        return <ProjectsApp />;
      case 'skills':
        return <SkillsApp />;
      case 'resume':
        return <ResumeApp />;
      case 'contact':
        return <ContactApp />;
      default:
        return <div className="p-6 text-neutral-400">Application not found</div>;
    }
  };

  if (isMinimized) return null;

  return (
    <AnimatePresence>
      <motion.div
        drag={!isMaximized}
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{ left: 10, top: 32, right: window.innerWidth - w - 10, bottom: window.innerHeight - 80 }}
        onDragEnd={(_, info) => {
          updateWindowPosition(id, x + info.offset.x, y + info.offset.y);
        }}
        onMouseDown={() => focusWindow(id)}
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={
          isMaximized
            ? {
                x: 10,
                y: 36,
                width: window.innerWidth - 20,
                height: window.innerHeight - 100,
                scale: 1,
                opacity: 1,
              }
            : {
                x,
                y,
                width: w,
                height: h,
                scale: 1,
                opacity: 1,
              }
        }
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        style={{
          zIndex,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        className={`flex flex-col rounded-2xl bg-[#1a1d24]/95 backdrop-blur-2xl border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden ${
          isFocused ? 'ring-1 ring-white/20' : 'opacity-95'
        }`}
      >
        {/* Window Titlebar */}
        <div
          className={`h-9 px-3.5 flex items-center justify-between border-b border-white/10 bg-[#161a22]/90 select-none cursor-grab active:cursor-grabbing ${
            isFocused ? 'opacity-100' : 'opacity-70'
          }`}
        >
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-2 group">
            {/* Close (Red) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(id);
              }}
              title="Close"
              className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E] flex items-center justify-center text-[8px] font-bold text-black/60 hover:brightness-110"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">×</span>
            </button>

            {/* Minimize (Yellow) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(id);
              }}
              title="Minimize"
              className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24] flex items-center justify-center text-[8px] font-bold text-black/60 hover:brightness-110"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">–</span>
            </button>

            {/* Maximize (Green) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMaximizeWindow(id);
              }}
              title="Maximize"
              className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29] flex items-center justify-center text-[8px] font-bold text-black/60 hover:brightness-110"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
            </button>
          </div>

          {/* Window Title */}
          <div className="text-xs font-semibold text-white/90 truncate flex-1 text-center -ml-12 pointer-events-none">
            {title}
          </div>

          <div className="w-12" />
        </div>

        {/* Window Content Area (Custom Scrollbar, Isolated Scroll) */}
        <div
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar bg-[#181a20]/95"
        >
          {renderAppContent()}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
