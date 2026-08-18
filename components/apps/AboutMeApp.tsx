'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Linkedin, Github, Instagram, Mail, Sparkles, Terminal, Code2, Flame } from 'lucide-react';

export const AboutMeApp: React.FC = () => {
  const { personal, bio, education } = PORTFOLIO_DATA;

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 text-neutral-200">
      {/* Left Column: Bio, Story & Badges */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider w-fit mb-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Software Engineer &amp; Full-Stack Builder
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
          Hi, I&apos;m {personal.name}
        </h1>

        <div className="text-xs font-medium text-sky-400 mb-4 sm:mb-5 flex items-center gap-1.5 flex-wrap">
          <Code2 className="w-3.5 h-3.5" />
          <span>Full-Stack Development · Quantitative Systems · Neural NLP</span>
        </div>

        {/* Bio Paragraphs */}
        <div className="text-[13.5px] leading-relaxed text-neutral-300 space-y-3.5 mb-6 selectable-text">
          <p className="font-medium text-white/95 text-[14.5px] leading-snug">
            {bio.lead}
          </p>
          {bio.paragraphs.map((p, i) => (
            <p key={i} className="text-neutral-300">
              {p}
            </p>
          ))}
        </div>

        {/* Fun Facts / Developer DNA Grid */}
        {bio.funFacts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
            {bio.funFacts.map((fact, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-[10.5px] font-bold text-sky-400 uppercase tracking-wider mb-0.5">
                  {fact.label}
                </div>
                <div className="text-xs font-medium text-white/90">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Current Focus Highlight Card */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/40 via-purple-950/30 to-black/40 border border-sky-500/20 mb-6">
          <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Current Mission</span>
          </div>
          <p className="text-xs text-neutral-300 leading-normal">{bio.currentFocus}</p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-sky-600 hover:border-sky-500 text-white flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-md"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-neutral-800 hover:border-neutral-600 text-white flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-md"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-600 hover:border-pink-500 text-white flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-md"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            title="Send Email"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-600 hover:border-emerald-500 text-white flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-md"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right Column: Portrait Photo Card */}
      <div className="w-full lg:w-72 flex-shrink-0 flex items-center justify-center lg:sticky lg:top-4">
        <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 relative group">
          <img
            src="/images/developer_portrait.jpg"
            alt={personal.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (img.src.indexOf('developer_original') === -1) {
                img.src = '/images/developer_original.jpg';
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent flex flex-col justify-end p-4">
            <span className="text-white font-bold text-base">{personal.name}</span>
            <span className="text-xs text-sky-400 font-medium">Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
