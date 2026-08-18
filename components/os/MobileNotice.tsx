'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';

interface MobileNoticeProps {
  onContinue: () => void;
}

export const MobileNotice: React.FC<MobileNoticeProps> = ({ onContinue }) => {
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking terminal cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black px-4 py-6 select-none font-mono text-white">
      {/* Centered Terminal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full max-w-sm border-2 border-white bg-black p-5 sm:p-6 shadow-[0_0_50px_rgba(255,255,255,0.08)] flex flex-col gap-4 text-left"
      >
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
          Portfolio of {PORTFOLIO_DATA.personal.name}
        </h1>

        {/* Warning Banner */}
        <div className="text-xs sm:text-[13px] leading-relaxed text-[#FFD60A] font-medium">
          WARNING: This portfolio is best experienced on a desktop, laptop or a tablet computer.
        </div>

        {/* CV Direct Download Prompt */}
        <div className="text-xs sm:text-[13px] leading-relaxed text-neutral-300">
          If you&apos;re interested, you can download my CV from{' '}
          <a
            href={PORTFOLIO_DATA.personal.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Swayam_Jain_Resume.pdf"
            className="text-sky-400 underline underline-offset-2 hover:text-sky-300 font-semibold inline-flex items-center gap-0.5"
          >
            <span>here</span>
            <ExternalLink className="w-3 h-3 inline ml-0.5" />
          </a>
          .
        </div>

        {/* Blinking Cursor Prompt */}
        <div className="text-xs sm:text-[13px] text-neutral-200 flex items-center gap-1 font-medium pt-1">
          <span>Click continue to begin</span>
          <span
            className={`inline-block w-2.5 h-4 bg-white align-middle transition-opacity duration-100 ${
              cursorVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Continue Button */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            onClick={onContinue}
            className="w-full py-2.5 px-6 border-2 border-white bg-black hover:bg-white hover:text-black active:scale-[0.98] text-sm font-bold tracking-wide transition-all uppercase flex items-center justify-center gap-2 group shadow-md"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Quick Direct Links for Mobile Visitors */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-400 pt-1">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white underline underline-offset-2"
            >
              Email
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
