import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import TemplateGallery from './components/TemplateGallery';
import TemplatePreview from './components/TemplatePreview';
import BuilderCTA from './components/BuilderCTA';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const templates = useMemo(() => [
    {
      id: 'neo-aura',
      name: 'Neo Aura',
      description: 'Bold gradients, large typography, and smooth sections. Great for product designers and devs.',
      category: 'Modern',
      theme: 'indigo',
      primary: '#6366F1',
      accent: '#22D3EE',
      tags: ['Modern', 'Gradient', 'Bold'],
      features: ['Project spotlight grid', 'Testimonials carousel', 'Case study pages'],
    },
    {
      id: 'minimal-folio',
      name: 'Minimal Folio',
      description: 'White space focused with refined type. Ideal for writers, strategists, and minimalist portfolios.',
      category: 'Minimal',
      theme: 'emerald',
      primary: '#10B981',
      accent: '#34D399',
      tags: ['Minimal', 'Clean', 'Type'],
      features: ['Masonry projects', 'About with timeline', 'Contact form'],
    },
    {
      id: 'play-lab',
      name: 'Play Lab',
      description: 'Playful cards, rounded corners, and fun color pops. Perfect for creative technologists.',
      category: 'Playful',
      theme: 'rose',
      primary: '#FB7185',
      accent: '#F472B6',
      tags: ['Playful', 'Cards', 'Colorful'],
      features: ['Interactive hover states', 'Tag filters', 'Case study templates'],
    },
    {
      id: 'aero-sky',
      name: 'Aero Sky',
      description: 'Airy, translucent glassmorphism with soft blues. Great for web and iOS engineers.',
      category: 'Glass',
      theme: 'sky',
      primary: '#0EA5E9',
      accent: '#22D3EE',
      tags: ['Glass', 'Tech', 'Soft'],
      features: ['Stats and achievements', 'Blog-ready posts', 'Sticky nav sections'],
    },
  ], []);

  const handleSelect = (tpl) => {
    setSelectedTemplate(tpl);
    setPreviewTemplate(tpl);
  };

  const handlePreview = (tpl) => {
    setPreviewTemplate(tpl);
  };

  const handleBuild = () => {
    // For now, just scroll to preview or show an alert. Backend builder can be integrated later.
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (selectedTemplate) {
      // eslint-disable-next-line no-alert
      alert(`Starting builder with template: ${selectedTemplate.name}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter">
      <Hero onGetStarted={() => {
        const el = document.getElementById('templates');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <TemplateGallery
        templates={templates}
        selectedTemplate={selectedTemplate}
        onSelect={handleSelect}
        onPreview={handlePreview}
      />

      <TemplatePreview template={previewTemplate || selectedTemplate} onUse={handleSelect} />

      <BuilderCTA selectedTemplate={selectedTemplate} onBuild={handleBuild} />

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        Built with an interactive 3D hero. Pick a template and ship your portfolio fast.
      </footer>
    </div>
  );
}

export default App;
