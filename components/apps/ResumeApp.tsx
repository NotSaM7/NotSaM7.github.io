'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Download, ExternalLink, FileCheck } from 'lucide-react';

export const ResumeApp: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <div className="p-6 md:p-8 flex flex-col h-full space-y-4">
      {/* Header with Download Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-400" />
            <span>Swayam Jain — Official Résumé</span>
          </h2>
          <p className="text-xs text-neutral-400">
            Software Engineering · Full-Stack &amp; Quantitative Development
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href={personal.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Swayam_Jain_Resume.pdf"
            className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-md shadow-sky-600/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
          <a
            href={personal.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-all border border-white/10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open in Drive</span>
          </a>
        </div>
      </div>

      {/* Embedded PDF / Drive Viewer Frame */}
      <div className="flex-1 w-full min-h-[420px] rounded-xl overflow-hidden border border-white/10 bg-neutral-900 shadow-inner relative">
        <iframe
          src="https://drive.google.com/file/d/1DWOgrfJzX5QozvldrtmI_3nujwqLKy89/preview"
          className="w-full h-full border-0"
          title="Resume Preview"
          allow="autoplay"
        />
      </div>
    </div>
  );
};
