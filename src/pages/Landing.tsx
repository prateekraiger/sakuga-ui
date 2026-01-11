import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, LayoutTemplate, ArrowRight, Github, Sparkles, Zap, Code2, Star } from 'lucide-react';
import { Header } from '../components/layouts';

const Landing: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-blue-500 selection:text-white">
      <Header />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        
        {/* Mouse follower gradient */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center py-20">

        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6 max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all">
            <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Open Source UI Library</span>
            <Star className="w-3 h-3 text-yellow-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
              SAKUGA
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              _UI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed">
            A curated collection of <span className="text-white font-semibold">high-performance animations</span>, interaction patterns, and visual effects for modern web interfaces. Built with React 19 & Tailwind CSS v4.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              to="/components" 
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                <span>Browse Components</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a 
              href="https://github.com/prateekraiger/sakuga-ui" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-neutral-500">30+ Components</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-neutral-500">Copy & Paste</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-neutral-500">MIT Licensed</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">

          {/* Components Card */}
          <Link 
            to="/components" 
            className="group relative p-8 h-72 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Components</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow">
                Explore 30+ individual effects, heroes, layouts and interaction primitives.
              </p>
              <div className="flex items-center text-sm text-white font-semibold">
                <span>EXPLORE ALL</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Templates Card */}
          <Link 
            to="/templates/aether" 
            className="group relative p-8 h-72 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Templates</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow">
                View full-page demos, landing pages and complete layout examples.
              </p>
              <div className="flex items-center text-sm text-white font-semibold">
                <span>VIEW DEMOS</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Open Source Card */}
          <a 
            href="https://github.com/prateekraiger/sakuga-ui" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 h-72 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Open Source</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow">
                Free forever. MIT licensed. Contribute, fork, or star on GitHub.
              </p>
              <div className="flex items-center text-sm text-white font-semibold">
                <span>STAR ON GITHUB</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Features Grid */}
        <div className="w-full max-w-6xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Why Sakuga UI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Copy & Paste</h3>
              <p className="text-neutral-400 text-sm">No npm install needed. Just copy the code and paste it into your project.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Modern Stack</h3>
              <p className="text-neutral-400 text-sm">Built with React 19, TypeScript, and Tailwind CSS v4.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-neutral-400 text-sm">Each component is crafted with attention to detail and animations.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-neutral-600 text-xs uppercase tracking-wider pt-6">
          <p>Sakuga UI © 2025 • Crafted by Prateek Raiger</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
