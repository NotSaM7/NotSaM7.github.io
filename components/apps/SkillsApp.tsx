'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Award, GraduationCap, Code2, Database, Cloud, Wrench, Layers } from 'lucide-react';

export const SkillsApp: React.FC = () => {
  const { skills, education, certificates, certificate } = PORTFOLIO_DATA;
  const certList = certificates && certificates.length > 0 ? certificates : [certificate];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Technical Skills &amp; Credentials</h2>
        <p className="text-xs text-neutral-400">
          Core competencies across quantitative systems, agentic AI, full-stack web, and neural NLP.
        </p>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((category) => (
          <div
            key={category.title}
            className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors"
          >
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-2">
                {getCategoryIcon(category.icon)}
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
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 md:col-span-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-emerald-400">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  {education.institution || 'SRM Institute of Science and Technology - Ghaziabad'}
                </span>
              </div>
              <span className="text-xs text-emerald-400 font-bold">{education.gpa}</span>
            </div>
            <h4 className="text-sm font-bold text-white">{education.degree}</h4>
            <div className="text-xs text-neutral-400 font-medium">{education.period}</div>
            <div className="pt-1">
              <span className="text-[11px] font-semibold text-neutral-400 block mb-1">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-1">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-neutral-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Cards */}
          {certList.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-purple-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{cert.issuer}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{cert.title}</h4>
              <div className="text-xs text-neutral-400">{cert.date}</div>
              <p className="text-xs text-neutral-300 leading-relaxed pt-1">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
