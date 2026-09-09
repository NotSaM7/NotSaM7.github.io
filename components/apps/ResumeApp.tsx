'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Download, ExternalLink, FileCheck, Eye, FileText, Sparkles, GraduationCap, Award, Briefcase, Code, BookOpen, Trophy } from 'lucide-react';

export const ResumeApp: React.FC = () => {
  const { personal, education, certificates, skills, projects, extracurriculars } = PORTFOLIO_DATA;
  const [viewMode, setViewMode] = useState<'pdf' | 'document'>('pdf');

  return (
    <div className="p-3 sm:p-5 md:p-6 flex flex-col h-full space-y-3.5 bg-neutral-950 text-neutral-200 overflow-hidden">
      {/* Top Header & Action Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10 shrink-0">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Swayam Jain — Official Résumé</span>
          </h2>
          <p className="text-xs text-neutral-400">
            Software Engineering · Full-Stack &amp; Quantitative Development
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Mode Switcher */}
          <div className="flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10 text-xs">
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'pdf'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF View</span>
            </button>
            <button
              onClick={() => setViewMode('document')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                viewMode === 'document'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Document</span>
            </button>
          </div>

          {/* Download & Open buttons */}
          <a
            href={personal.resumeDownloadUrl}
            download="Swayam_Jain_Resume.pdf"
            className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
          <a
            href={personal.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all border border-white/10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Open Tab</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'pdf' ? (
        <div className="flex-1 w-full min-h-[440px] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-inner flex flex-col relative">
          <iframe
            src="/resume.pdf#view=FitH"
            className="w-full h-full border-0 rounded-xl"
            title="Swayam Jain Resume"
          />
          {/* Subtle Mobile Fallback Notice */}
          <div className="sm:hidden p-2 bg-neutral-900/90 border-t border-white/10 text-center">
            <span className="text-[11px] text-neutral-400">
              PDF viewer not loading? Switch to{' '}
              <button
                onClick={() => setViewMode('document')}
                className="text-sky-400 underline font-medium"
              >
                Document View
              </button>{' '}
              or{' '}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline font-medium"
              >
                Open in new tab
              </a>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto pr-1 select-text space-y-6 max-w-4xl mx-auto w-full bg-neutral-900/60 p-4 sm:p-7 rounded-xl border border-white/10">
          {/* Header info */}
          <div className="text-center pb-5 border-b border-white/10 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {personal.name}
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-2 text-xs text-neutral-300">
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                {personal.email}
              </a>
              <span>|</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                GitHub
              </a>
              <span>|</span>
              <a
                href={personal.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors underline underline-offset-2"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Projects</span>
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-sm font-bold text-white">{proj.title}</span>
                      <div className="flex items-center gap-1.5 text-xs">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 underline font-medium"
                        >
                          GitHub
                        </a>
                        {proj.liveUrl && (
                          <>
                            <span className="text-neutral-500">|</span>
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-400 hover:text-sky-300 underline font-medium"
                            >
                              Live Demo
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-neutral-400 font-medium shrink-0">
                      {proj.year}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-300 leading-relaxed">
                    {proj.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-300">
              {skills.map((cat) => (
                <div key={cat.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                  <span className="font-semibold text-white sm:min-w-44 shrink-0">
                    {cat.title}:
                  </span>
                  <span className="text-neutral-300">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </h2>
            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-bold text-white">
                  {education.institution || 'SRM Institute of Science and Technology - Ghaziabad'}
                </span>
                <span className="text-neutral-400 font-medium">{education.period}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-neutral-300">
                <span>{education.degree}</span>
                <span className="font-semibold text-emerald-400">{education.gpa}</span>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications</span>
            </h2>
            <div className="space-y-2.5 text-xs text-neutral-300">
              {certificates?.map((cert, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-white">
                      {cert.issuer} - {cert.title}
                    </span>
                    <span className="text-neutral-400">{cert.date}</span>
                  </div>
                  <p className="text-neutral-300 pl-3 border-l-2 border-white/10">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework Section */}
          <section className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Relevant Coursework</span>
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {education.coursework.join(', ')}
            </p>
          </section>

          {/* Extracurricular Activities Section */}
          {extracurriculars && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-white/10 pb-1">
                <Trophy className="w-3.5 h-3.5" />
                <span>Extracurricular Activities</span>
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-neutral-300 leading-relaxed">
                {extracurriculars.map((act, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{act.title}:</strong> {act.description}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
};
