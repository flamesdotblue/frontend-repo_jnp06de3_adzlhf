import React, { useMemo, useState } from 'react';
import TemplateCard from './TemplateCard';
import { Layout } from 'lucide-react';

const TemplateGallery = ({ templates, selectedTemplate, onSelect, onPreview }) => {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');

  const tags = useMemo(() => {
    const t = new Set(['All']);
    templates.forEach((tpl) => tpl.tags.forEach((x) => t.add(x)));
    return Array.from(t);
  }, [templates]);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      const matchesTag = tag === 'All' || t.tags.includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [templates, query, tag]);

  return (
    <section id="templates" className="relative mx-auto max-w-7xl px-6 py-14 text-white sm:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">
            <Layout className="h-3.5 w-3.5" /> Template Gallery
          </div>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Curated designs to kickstart your portfolio</h2>
          <p className="mt-1 text-sm text-white/70">Filter by style or search for keywords to find your perfect starting point.</p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search templates"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder-white/50 outline-none backdrop-blur focus:border-white/30 sm:w-64"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none backdrop-blur focus:border-white/30 sm:w-40"
          >
            {tags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            template={tpl}
            selected={selectedTemplate?.id === tpl.id}
            onSelect={onSelect}
            onPreview={onPreview}
          />
        ))}
      </div>
    </section>
  );
};

export default TemplateGallery;
