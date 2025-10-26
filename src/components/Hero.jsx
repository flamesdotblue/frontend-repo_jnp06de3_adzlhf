import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay so text is always readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-950/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <Star className="h-3.5 w-3.5 text-yellow-300" />
          Interactive 3D hero • Modern portfolio vibes
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Pick a template. Ship your portfolio in minutes.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A playful, tech-forward builder with curated templates and an interactive 3D hero.
          Choose a style, customize the content, and publish with one click.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-900 shadow-lg shadow-white/10 transition hover:translate-y-[-1px] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <Rocket className="h-4 w-4" />
            Get Started
          </button>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Explore Templates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
