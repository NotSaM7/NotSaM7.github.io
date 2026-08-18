'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { ExternalLink, Github, TrendingUp, Gamepad2, MessageSquare } from 'lucide-react';

export const ProjectsApp: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-purple-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      default:
        return <TrendingUp className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Featured Projects</h2>
        <p className="text-xs text-neutral-400">
          Selected full-stack products, quantitative systems, and data-driven applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/40 hover:bg-white/[0.05] transition-all flex flex-col justify-between gap-4 shadow-lg"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getProjectIcon(project.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-medium text-neutral-400">
                      {project.category} · {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs md:text-[13px] leading-relaxed text-neutral-300 mb-4 selectable-text">
                {project.description}
              </p>

              {/* Features List */}
              <div className="space-y-1 mb-4">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/30"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all border border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
