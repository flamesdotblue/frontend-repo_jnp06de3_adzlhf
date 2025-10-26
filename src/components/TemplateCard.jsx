import React from 'react';
import { Check, Eye } from 'lucide-react';

const TemplateCard = ({ template, selected, onSelect, onPreview }) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white/5 backdrop-blur transition hover:shadow-xl ${
        selected ? 'border-white/40' : 'border-white/10'
      }`}
    >
      {/* Visual */}
      <div
        className="relative h-40 w-full overflow-hidden"
        style={{
          background:
            `linear-gradient(135deg, ${template.accent} 0%, ${template.primary} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white/25_0,transparent_50%)] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 inline-block">
            {template.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4 text-white/90">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-white">{template.name}</h3>
            <p className="mt-1 text-xs text-white/70 line-clamp-2">{template.description}</p>
          </div>
          {selected && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
              <Check className="h-3 w-3" /> Selected
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {template.tags.slice(0, 3).map((t) => (
              <span key={t} className="rounded-md bg-white/10 px-2 py-0.5 text-[10px]">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPreview(template)}
              className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-xs text-white transition hover:bg-white/10"
            >
              <Eye className="h-3.5 w-3.5" /> Preview
            </button>
            <button
              onClick={() => onSelect(template)}
              className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-slate-900 transition hover:opacity-90"
            >
              Use
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
