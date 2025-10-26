import React from 'react';
import { Rocket } from 'lucide-react';

const BuilderCTA = ({ selectedTemplate, onBuild }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 text-white sm:px-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 sm:flex-row">
        <div>
          <h4 className="text-xl font-semibold">Ready to build your portfolio?</h4>
          <p className="mt-1 text-sm text-white/70">
            {selectedTemplate
              ? `You chose the ${selectedTemplate.name} template. Continue to personalize and publish.`
              : 'Pick a template first, then continue to the builder.'}
          </p>
        </div>
        <button
          onClick={onBuild}
          disabled={!selectedTemplate}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition enabled:hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Rocket className="h-4 w-4" />
          Continue
        </button>
      </div>
    </section>
  );
};

export default BuilderCTA;
