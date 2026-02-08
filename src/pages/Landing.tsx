import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layers, LayoutTemplate, ArrowRight, Github, Sparkles, Zap, Code2, Star, Package, Rocket, Palette, CheckCircle, Copy } from 'lucide-react';
import { Header } from '../components/layouts';

const Landing: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const componentCategories = [
    { name: 'Heroes', count: 5, color: 'from-blue-500 to-cyan-500', icon: Rocket },
    { name: 'Effects', count: 11, color: 'from-purple-500 to-pink-500', icon: Sparkles },
    { name: 'Layouts', count: 3, color: 'from-green-500 to-emerald-500', icon: Layers },
    { name: 'Content', count: 4, color: 'from-orange-500 to-yellow-500', icon: Package },
  ];

  const features = [
    {
      icon: Copy,
      title: 'Copy & Paste',
      description: 'No npm install needed. Just copy the code and paste it into your project. Simple as that.',
      color: 'blue'
    },
    {
      icon: Code2,
      title: 'Modern Stack',
      description: 'Built with React 19, TypeScript, and Tailwind CSS v4. Future-proof and production-ready.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Optimized animations using CSS transforms and GPU acceleration for 60fps interactions.',
      color: 'yellow'
    },
    {
      icon: Palette,
      title: 'Premium Quality',
      description: 'Each component is crafted with attention to detail, animations, and user experience.',
      color: 'green'
    },
    {
      icon: Package,
      title: 'Zero Dependencies',
      description: 'Most components work standalone with minimal peer dependencies. Keep your bundle small.',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'TypeScript Native',
      description: 'Full type safety included. Autocomplete, type checking, and better developer experience.',
      color: 'cyan'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative selection:bg-blue-500 selection:text-white">
      <Header />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient orbs with parallax */}
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px] animate-pulse" 
          style={{ animationDelay: '1s', transform: `translateY(${-scrollY * 0.2}px)` }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: '2s', transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
        />
        
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_0%,transparent_100%)]" />
        
        {/* Mouse follower gradient - enhanced */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[120px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">

        {/* Hero Section - Enhanced */}
        <div ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center mb-20 space-y-8 max-w-6xl py-32">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 cursor-default group">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium uppercase tracking-wider text-neutral-300">Open Source UI Library</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 group-hover:animate-spin" />
              <span className="text-xs text-yellow-400 font-semibold">MIT</span>
            </div>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600 animate-gradient">
              SAKUGA
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
              _UI
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="max-w-3xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed px-4">
            A curated collection of <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">30+ high-performance</span> animations, 
            interaction patterns, and visual effects for modern web interfaces.
            <br />
            <span className="text-neutral-500 text-base mt-2 block">Built with React 19 & Tailwind CSS v4 • Copy, Paste, Ship 🚀</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link 
              to="/components" 
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2 z-10">
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Browse Components</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a 
              href="https://github.com/prateekraiger/sakuga-ui" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Star on GitHub</span>
              <div className="ml-2 px-2 py-0.5 bg-white/10 rounded text-xs">Free</div>
            </a>
          </div>

          {/* Enhanced Stats with Animation */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm">
            <div className="flex items-center gap-2 group">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-neutral-400 group-hover:text-white transition-colors">
                <span className="font-bold text-white">30+</span> Components
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <Zap className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-neutral-400 group-hover:text-white transition-colors">
                <span className="font-bold text-white">Zero</span> Config
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <Star className="w-4 h-4 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-neutral-400 group-hover:text-white transition-colors">
                <span className="font-bold text-white">MIT</span> Licensed
              </span>
            </div>
            <div className="flex items-center gap-2 group">
              <Package className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-neutral-400 group-hover:text-white transition-colors">
                <span className="font-bold text-white">TypeScript</span> First
              </span>
            </div>
          </div>

          {/* Component Categories Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {componentCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="group px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
                    <span className="text-sm text-neutral-300 font-medium">{category.name}</span>
                    <span className="text-xs text-neutral-500">({category.count})</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mb-24 px-4">

          {/* Components Card */}
          <Link 
            to="/components" 
            className="group relative p-8 h-80 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Components</h2>
              <p className="text-neutral-400 text-base mb-4 flex-grow leading-relaxed">
                Explore 30+ individual effects, heroes, layouts and interaction primitives. Each component is crafted for production use.
              </p>
              <div className="flex items-center text-sm text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                <span className="tracking-wide">EXPLORE ALL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Templates Card */}
          <Link 
            to="/templates/aether" 
            className="group relative p-8 h-80 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <LayoutTemplate className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Templates</h2>
              <p className="text-neutral-400 text-base mb-4 flex-grow leading-relaxed">
                View full-page demos, landing pages and complete layout examples. Ready to customize and deploy.
              </p>
              <div className="flex items-center text-sm text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                <span className="tracking-wide">VIEW DEMOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Open Source Card */}
          <a 
            href="https://github.com/prateekraiger/sakuga-ui" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 h-80 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/50 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full flex flex-col">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <Github className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Open Source</h2>
              <p className="text-neutral-400 text-base mb-4 flex-grow leading-relaxed">
                Free forever. MIT licensed. Contribute, fork, or star on GitHub. Built by the community.
              </p>
              <div className="flex items-center text-sm text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                <span className="tracking-wide">STAR ON GITHUB</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>

        {/* Enhanced Features Grid */}
        <div className="w-full max-w-7xl mb-24 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              Why Choose Sakuga UI?
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Everything you need to build stunning, high-performance interfaces. No compromises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorMap: Record<string, string> = {
                blue: 'from-blue-500/20 to-blue-600/20',
                purple: 'from-purple-500/20 to-purple-600/20',
                yellow: 'from-yellow-500/20 to-yellow-600/20',
                green: 'from-green-500/20 to-green-600/20',
                pink: 'from-pink-500/20 to-pink-600/20',
                cyan: 'from-cyan-500/20 to-cyan-600/20',
              };
              const iconColorMap: Record<string, string> = {
                blue: 'text-blue-400',
                purple: 'text-purple-400',
                yellow: 'text-yellow-400',
                green: 'text-green-400',
                pink: 'text-pink-400',
                cyan: 'text-cyan-400',
              };
              
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[feature.color]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${iconColorMap[feature.color]}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="w-full max-w-5xl mb-24 px-4">
          <div className="relative p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent)]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  Get Started in Seconds
                </span>
              </h2>
              <p className="text-neutral-400 text-center mb-10 text-lg">
                No installation required. Just copy, paste, and start building.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Browse</h3>
                  <p className="text-sm text-neutral-400">Explore our component library</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Copy</h3>
                  <p className="text-sm text-neutral-400">Click the code button and copy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Paste</h3>
                  <p className="text-sm text-neutral-400">Paste into your project and ship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-7xl px-4 py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">Sakuga UI © 2025</p>
              <p className="text-xs text-neutral-600">Crafted with passion by Prateek Raiger</p>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/prateekraiger/sakuga-ui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <Link to="/components" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Components
              </Link>
              <Link to="/templates/aether" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Templates
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
