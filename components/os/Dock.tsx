'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useWindowManager } from '@/lib/windowManager';
import { APPS_REGISTRY, PORTFOLIO_DATA } from '@/lib/fileSystem';
import {
  User,
  Folder,
  Terminal,
  FileText,
  Mail,
  Github,
  Linkedin,
  Trash2,
} from 'lucide-react';

interface DockIconItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  isApp: boolean;
  url?: string;
  bgGradient: string;
}

export const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);
  const windows = useWindowManager((s) => s.windows);
  const openWindow = useWindowManager((s) => s.openWindow);
  const restoreWindow = useWindowManager((s) => s.restoreWindow);

  const dockItems: DockIconItem[] = [
    {
      id: 'about',
      title: 'About Me',
      isApp: true,
      bgGradient: 'from-sky-400 to-blue-600',
      icon: <User className="w-6 h-6 text-white" />,
    },
    {
      id: 'projects',
      title: 'Projects (Finder)',
      isApp: true,
      bgGradient: 'from-blue-400 to-indigo-600',
      icon: <Folder className="w-6 h-6 text-white" />,
    },
    {
      id: 'skills',
      title: 'Skills (Terminal)',
      isApp: true,
      bgGradient: 'from-neutral-800 to-neutral-900 border border-white/10',
      icon: <Terminal className="w-6 h-6 text-sky-400" />,
    },
    {
      id: 'resume',
      title: 'Resume',
      isApp: true,
      bgGradient: 'from-amber-500 to-orange-600',
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      id: 'contact',
      title: 'Messages',
      isApp: true,
      bgGradient: 'from-emerald-400 to-green-600',
      icon: <Mail className="w-6 h-6 text-white" />,
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      isApp: false,
      url: PORTFOLIO_DATA.personal.github,
      bgGradient: 'from-neutral-800 to-neutral-950 border border-white/10',
      icon: <Github className="w-6 h-6 text-white" />,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      isApp: false,
      url: PORTFOLIO_DATA.personal.linkedin,
      bgGradient: 'from-sky-600 to-blue-700',
      icon: <Linkedin className="w-6 h-6 text-white" />,
    },
    {
      id: 'trash',
      title: 'Trash',
      isApp: false,
      bgGradient: 'from-neutral-600 to-neutral-800',
      icon: <Trash2 className="w-6 h-6 text-neutral-300" />,
    },
  ];

  const handleIconClick = (item: DockIconItem) => {
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }

    if (item.isApp) {
      const existing = windows.find((w) => w.appId === item.id);
      if (existing && existing.isMinimized) {
        restoreWindow(existing.id);
      } else {
        openWindow(item.id);
      }
    }
  };

  return (
    <div className="fixed bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-[9000] select-none max-w-[calc(100vw-12px)]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-1.5 sm:gap-2.5 px-2 py-1.5 sm:px-3 sm:py-2.5 rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-x-auto custom-scrollbar"
      >
        {dockItems.map((item) => {
          const isRunning = windows.some((w) => w.appId === item.id);
          const isDividerBefore = item.id === 'trash';

          return (
            <React.Fragment key={item.id}>
              {isDividerBefore && (
                <div className="w-[1px] h-7 sm:h-9 bg-white/20 my-auto mx-0.5" />
              )}
              <DockIcon
                item={item}
                mouseX={mouseX}
                isRunning={isRunning}
                onClick={() => handleIconClick(item)}
              />
            </React.Fragment>
          );
        })}
      </motion.div>
    </div>
  );
};

interface DockIconProps {
  item: DockIconItem;
  mouseX: any;
  isRunning: boolean;
  onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ item, mouseX, isRunning, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [bouncing, setBouncing] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Real distance-based Gaussian mouse magnification curve
  const distance = useTransform(mouseX, (val: number) => {
    if (isMobile) return Infinity; // Disable magnification distortion on mobile touch
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], isMobile ? [38, 38, 38] : [48, 70, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  const handleClick = () => {
    setBouncing(true);
    onClick();
    setTimeout(() => setBouncing(false), 500);
  };

  return (
    <div className="relative group flex flex-col items-center flex-shrink-0">
      {/* Tooltip on Hover (Desktop only) */}
      <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-all pointer-events-none px-2.5 py-1 rounded-md bg-neutral-900/90 text-white text-[11px] font-medium whitespace-nowrap shadow-lg border border-white/10 backdrop-blur-md hidden sm:block">
        {item.title}
      </div>

      {/* Magnified Dock Icon Button with Spring Bounce */}
      <motion.button
        ref={ref}
        style={{ width: isMobile ? 38 : width, height: isMobile ? 38 : width }}
        animate={bouncing ? { y: [0, -12, 0] } : { y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        onClick={handleClick}
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br ${item.bgGradient} shadow-md overflow-hidden transition-shadow hover:shadow-cyan-500/20 active:scale-95 p-1.5`}
      >
        <div className="w-full h-full flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
          {item.icon}
        </div>
      </motion.button>

      {/* Running App Indicator Dot */}
      <div
        className={`w-1 h-1 rounded-full bg-white/90 shadow-[0_0_4px_white] transition-opacity duration-200 mt-1 ${
          isRunning ? 'opacity-90' : 'opacity-0'
        }`}
      />
    </div>
  );
};
