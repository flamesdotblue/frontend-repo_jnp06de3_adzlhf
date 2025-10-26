import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const colorMap = {
  indigo: 'from-indigo-500/20 via-indigo-500/10 to-transparent',
  emerald: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
  rose: 'from-rose-500/20 via-rose-500/10 to-transparent',
  sky: 'from-sky-500/20 via-sky-500/10 to-transparent',
  violet: 'from-violet-500/20 via-violet-500/10 to-transparent',
};

const TemplatePreview = ({ template, onUse }) => {
  if (!template) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-14 text-white sm:px-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-white/80">Select a template to see a live preview.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 text-white sm:px-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">{template.name}</h3>
          <p className="mt-1 text-white/70">{template.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUse(template)}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-90"
          >
            Use this template <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Live demo <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Live mock preview */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900">
        <div className={`relative h-40 w-full bg-gradient-to-br ${colorMap[template.theme] || 'from-indigo-500/20 to-transparent'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
              Hero section
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="h-4 w-2/3 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/10" />
              <div className="h-48 rounded-lg border border-white/10" style={{
                background: `linear-gradient(135deg, ${template.accent} 0%, ${template.primary} 100%)`
              }} />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {template.features.map((f) => (
                <div key={f} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 w-32 rounded bg-white/10" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-3 rounded bg-white/10" />
              ))}
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="h-24 rounded bg-white/5" />
              <div className="mt-3 h-3 w-2/3 rounded bg-white/10" />
              <div className="mt-2 h-3 w-1/2 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatePreview;
