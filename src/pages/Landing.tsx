
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, LayoutTemplate, ArrowRight } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import Header from '../components/Header';


const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-white selection:text-black">
      <Header />
      <CustomCursor />


      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center">

        {/* Hero Text */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">The Kinetic Library</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            SAKUGA<span className="text-neutral-600">_UI</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 text-sm md:text-base leading-relaxed">
            A curated collection of high-performance animations, interaction patterns, and visual effects for modern web interfaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">

          {/* Component Card */}
          <Link to="/components" className="group relative h-64 md:h-80 bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Components</h2>
              <p className="text-neutral-500 text-sm group-hover:text-neutral-400 transition-colors">
                Explore individual effects <br/>and interaction primitives.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <span>EXPLORE</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Visual Abstract */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700">
               <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>
          </Link>

          {/* Template Card */}
          <Link to="/templates/aether" className="group relative h-64 md:h-80 bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Templates</h2>
              <p className="text-neutral-500 text-sm group-hover:text-neutral-400 transition-colors">
                View full-page demos <br/>and layout examples.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <span>VIEW ALL</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

        <footer className="absolute bottom-8 text-neutral-600 text-[10px] uppercase tracking-widest">
            Sakuga Design System © 2025
        </footer>
      </div>
    </div>
  );
};

export default Landing;
