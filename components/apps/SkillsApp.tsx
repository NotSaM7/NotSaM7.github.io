'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Award, GraduationCap } from 'lucide-react';

export const SkillsApp: React.FC = () => {
  const { skills, education, certificate } = PORTFOLIO_DATA;

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Technical Skills &amp; Credentials</h2>
        <p className="text-xs text-neutral-400">
          Core competencies across languages, quantitative computing, full-stack web, and neural NLP.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category) => (
          <div
            key={category.title}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-1.5">
                <span>{category.title}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-medium text-neutral-200 hover:bg-sky-500/20 hover:border-sky-400/40 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Certification Section */}
      <div className="pt-2 border-t border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Education &amp; Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Degree Card */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Academic Foundation</span>
            </div>
            <h4 className="text-sm font-bold text-white">{education.degree}</h4>
            <div className="text-xs text-emerald-400 font-medium">{education.period}</div>
            <div className="flex flex-wrap gap-1 pt-1">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-neutral-400"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Certificate Card */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-purple-400">
              <Award className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">NPTEL Certification</span>
            </div>
            <h4 className="text-sm font-bold text-white">{certificate.title}</h4>
            <div className="text-xs text-neutral-400">{certificate.issuer} · {certificate.date}</div>
            <p className="text-xs text-neutral-300 leading-relaxed pt-1">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
