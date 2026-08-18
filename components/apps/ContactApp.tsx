'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/fileSystem';
import { Send, CheckCircle2, Mail, Linkedin, Loader2 } from 'lucide-react';

export const ContactApp: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 900);
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-xl mx-auto">
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Get in Touch</h2>
        <p className="text-xs text-neutral-400">
          Have an interesting project, quantitative problem, or full-stack opportunity? Drop me a line below.
        </p>
      </div>

      {/* Direct Contact Info Pills */}
      <div className="flex flex-wrap gap-2.5">
        <a
          href={`mailto:${personal.email}`}
          className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:bg-white/10 flex items-center gap-2 transition-colors"
        >
          <Mail className="w-4 h-4 text-sky-400" />
          <span>{personal.email}</span>
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 hover:text-white hover:bg-white/10 flex items-center gap-2 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-sky-400" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Your Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
            Message
          </label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Hi Swayam, let's collaborate on..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-y"
          />
        </div>

        {/* Submit Button & Status Message */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-bold inline-flex items-center gap-2 transition-all shadow-lg shadow-sky-600/30 active:scale-95"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold animate-fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Message received! Thank you.</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
