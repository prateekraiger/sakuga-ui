import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Share2, LayoutGrid, ArrowRight, Sparkles, Zap, Box, Eye, 
  Image, Grid3x3, MessageSquare, DollarSign, Waves, Compass,
  Maximize, Film, Mouse, Palette, Hash, Layers
} from 'lucide-react';

const ComponentsHome = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Components', icon: Layers },
        { id: 'hero', label: 'Hero Sections', icon: Sparkles },
        { id: 'layout', label: 'Layout', icon: LayoutGrid },
        { id: 'effects', label: 'Effects', icon: Zap },
        { id: 'content', label: 'Content', icon: MessageSquare },
    ];

    const components = [
        // Hero Sections
        {
            id: 'hero-1',
            title: 'Nebula Hero',
            description: 'Modern SaaS hero section with animated buttons and glassmorphism IDE preview.',
            category: 'hero',
            icon: Sparkles,
            color: 'sky',
            preview: (
                <div className="absolute inset-4 flex flex-col items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-24 h-6 mx-auto rounded-full bg-sky-500/20 border border-sky-500/30 mb-3"></div>
                    <div className="w-48 h-8 mx-auto rounded-lg bg-zinc-800 mb-2"></div>
                    <div className="w-32 h-3 mx-auto rounded-full bg-zinc-800/50"></div>
                </div>
            )
        },
        {
            id: 'flux-hero',
            title: 'Flux Hero',
            description: 'Immersive 3D-style hero with floating glass panels and beam animations.',
            category: 'hero',
            icon: Box,
            color: 'orange',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 border border-orange-500/50 rounded flex items-center justify-center transform rotate-12 group-hover:rotate-45 transition-transform duration-700">
                        <div className="w-8 h-8 border border-purple-500/50 rounded"></div>
                    </div>
                    <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
                </div>
            )
        },
        {
            id: 'growth-hero',
            title: 'Growth Hero',
            description: 'Clean, corporate-growth oriented design with elegant animations.',
            category: 'hero',
            icon: Sparkles,
            color: 'green',
            preview: (
                <div className="absolute inset-4 flex flex-col items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-32 h-8 mx-auto rounded-lg bg-green-500/20 border border-green-500/30 mb-2"></div>
                    <div className="w-40 h-4 mx-auto rounded bg-zinc-800/60"></div>
                </div>
            )
        },
        {
            id: 'helios-hero',
            title: 'Helios Hero',
            description: 'Sun-drenched, warm aesthetic with dynamic lighting effects.',
            category: 'hero',
            icon: Sparkles,
            color: 'yellow',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-24 h-24 rounded-full bg-yellow-500/20 border border-yellow-500/30 blur-sm"></div>
                </div>
            )
        },
        {
            id: 'quantum-hero',
            title: 'Quantum Hero',
            description: 'Physics-based animation showcase with particle effects.',
            category: 'hero',
            icon: Zap,
            color: 'purple',
            preview: (
                <div className="absolute inset-4 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute w-2 h-2 bg-purple-500 rounded-full" style={{ top: `${20 + i * 10}%`, left: `${30 + i * 8}%` }}></div>
                    ))}
                </div>
            )
        },
        {
            id: 'tania-landing',
            title: 'House of Tania',
            description: 'Luxury fashion landing page with elegant animations.',
            category: 'hero',
            icon: Palette,
            color: 'pink',
            preview: (
                <div className="absolute inset-4 bg-white/10 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="text-white/60 text-xs font-serif">TANIA</div>
                </div>
            )
        },

        // Layout Components
        {
            id: 'bento-1',
            title: 'Bento Grid 1',
            description: 'A modern, responsive bento grid layout ideal for dashboards and feature showcases.',
            category: 'layout',
            icon: LayoutGrid,
            color: 'blue',
            preview: (
                <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="col-span-4 row-span-2 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                    <div className="col-span-2 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                    <div className="col-span-2 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                </div>
            )
        },
        {
            id: 'bento-2',
            title: 'Analytics Bento',
            description: 'Data-heavy bento grid with charts, KPI cards, and predictive model visualizations.',
            category: 'layout',
            icon: Grid3x3,
            color: 'indigo',
            preview: (
                <div className="absolute inset-4 grid grid-cols-3 grid-rows-2 gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="col-span-2 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                    <div className="col-span-1 row-span-1 rounded-lg border border-zinc-700 bg-indigo-900/30"></div>
                    <div className="col-span-1 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                    <div className="col-span-1 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                    <div className="col-span-1 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                </div>
            )
        },
        {
            id: 'header',
            title: 'Glass Header',
            description: 'Frosted glass navigation bar with mobile menu and scroll animations.',
            category: 'layout',
            icon: LayoutGrid,
            color: 'green',
            preview: (
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-[80%] h-4 rounded-full bg-zinc-800 border border-zinc-700/50 mb-2"></div>
                    <div className="flex gap-2 w-[80%] opacity-40">
                        <div className="w-1/4 h-2 rounded-full bg-zinc-800"></div>
                        <div className="w-1/4 h-2 rounded-full bg-zinc-800"></div>
                        <div className="w-1/4 h-2 rounded-full bg-zinc-800"></div>
                    </div>
                </div>
            )
        },

        // Content Components
        {
            id: 'cta',
            title: 'CTA Section',
            description: 'High-conversion call to action section with magnetic button effects and glows.',
            category: 'content',
            icon: Share2,
            color: 'purple',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
                        Get Started
                    </div>
                </div>
            )
        },
        {
            id: 'repository',
            title: 'The Repository',
            description: 'GitHub-style repository display with stats and contribution graph.',
            category: 'content',
            icon: Grid3x3,
            color: 'blue',
            preview: (
                <div className="absolute inset-4 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="grid grid-cols-7 gap-1">
                        {[...Array(35)].map((_, i) => (
                            <div key={i} className="w-full aspect-square rounded-sm bg-blue-500/30"></div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'accordion',
            title: 'Accordion',
            description: 'Smooth expanding accordion with animations.',
            category: 'content',
            icon: MessageSquare,
            color: 'cyan',
            preview: (
                <div className="absolute inset-4 flex flex-col gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-full h-8 rounded bg-cyan-500/20 border border-cyan-500/30"></div>
                    <div className="w-full h-8 rounded bg-zinc-800/50 border border-zinc-700"></div>
                    <div className="w-full h-8 rounded bg-zinc-800/50 border border-zinc-700"></div>
                </div>
            )
        },
        {
            id: 'pricing',
            title: 'Pricing Section',
            description: 'Beautiful pricing cards with hover effects and feature lists.',
            category: 'content',
            icon: DollarSign,
            color: 'emerald',
            preview: (
                <div className="absolute inset-4 grid grid-cols-3 gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-2"></div>
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2"></div>
                    <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 p-2"></div>
                </div>
            )
        },

        // Effects
        {
            id: 'canvas-network',
            title: 'Canvas Network',
            description: 'Animated particle network with canvas connections.',
            category: 'effects',
            icon: Zap,
            color: 'cyan',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full" style={{ top: `${20 + Math.random() * 60}%`, left: `${20 + Math.random() * 60}%` }}></div>
                    ))}
                </div>
            )
        },
        {
            id: 'focus-lens',
            title: 'Focus Lens',
            description: 'Magnifying glass effect that follows cursor.',
            category: 'effects',
            icon: Eye,
            color: 'blue',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-16 h-16 rounded-full border-2 border-blue-500/50 bg-blue-500/10"></div>
                </div>
            )
        },
        {
            id: 'fracture-glass',
            title: 'Fracture Glass',
            description: 'Shattered glass effect on hover with realistic physics.',
            category: 'effects',
            icon: Zap,
            color: 'red',
            preview: (
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="absolute w-8 h-8 border border-zinc-600 bg-zinc-800/30" style={{ top: `${i * 8}%`, left: `${i * 8}%`, transform: `rotate(${i * 30}deg)` }}></div>
                    ))}
                </div>
            )
        },
        {
            id: 'horizontal-scroll',
            title: 'Horizontal Scroll',
            description: 'Smooth horizontal scrolling section with parallax.',
            category: 'effects',
            icon: ArrowRight,
            color: 'purple',
            preview: (
                <div className="absolute inset-4 flex gap-2 overflow-hidden opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="min-w-[60%] h-full rounded-lg bg-purple-500/20 border border-purple-500/30"></div>
                    <div className="min-w-[60%] h-full rounded-lg bg-zinc-800/50 border border-zinc-700"></div>
                </div>
            )
        },
        {
            id: 'liquid-distortion',
            title: 'Liquid Distortion',
            description: 'Fluid distortion effect with WebGL shaders.',
            category: 'effects',
            icon: Waves,
            color: 'teal',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/30 to-blue-500/30 blur-2xl"></div>
                </div>
            )
        },
        {
            id: 'magnetic-section',
            title: 'Magnetic Section',
            description: 'Elements that attract toward cursor with magnetic force.',
            category: 'effects',
            icon: Compass,
            color: 'pink',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <Mouse className="w-12 h-12 text-pink-500/50" />
                </div>
            )
        },
        {
            id: 'marquee',
            title: 'Marquee',
            description: 'Infinite scrolling marquee with smooth animations.',
            category: 'effects',
            icon: ArrowRight,
            color: 'yellow',
            preview: (
                <div className="absolute inset-4 flex items-center gap-4 overflow-hidden opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="whitespace-nowrap text-yellow-500/50 text-xs font-bold">SCROLL • SCROLL • SCROLL •</div>
                </div>
            )
        },
        {
            id: 'pixel-wave',
            title: 'Pixel Wave',
            description: 'Pixelated wave effect with retro aesthetics.',
            category: 'effects',
            icon: Hash,
            color: 'orange',
            preview: (
                <div className="absolute inset-4 grid grid-cols-8 gap-1 opacity-50 group-hover:opacity-80 transition-opacity">
                    {[...Array(32)].map((_, i) => (
                        <div key={i} className="w-full aspect-square rounded-sm bg-orange-500/30"></div>
                    ))}
                </div>
            )
        },
        {
            id: 'spotlight-grid',
            title: 'Spotlight Grid',
            description: 'Grid that illuminates on hover like a spotlight.',
            category: 'effects',
            icon: Eye,
            color: 'blue',
            preview: (
                <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-1 opacity-50 group-hover:opacity-80 transition-opacity">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className={`rounded ${i === 6 ? 'bg-blue-500/50' : 'bg-zinc-800/30'}`}></div>
                    ))}
                </div>
            )
        },
        {
            id: 'velocity-text',
            title: 'Velocity Text',
            description: 'Text animations with velocity-based effects.',
            category: 'effects',
            icon: Zap,
            color: 'purple',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="text-purple-500/50 font-bold text-2xl">TEXT</div>
                </div>
            )
        },
        {
            id: 'video-expand',
            title: 'Video Expand',
            description: 'Video player that expands smoothly on interaction.',
            category: 'effects',
            icon: Film,
            color: 'red',
            preview: (
                <div className="absolute inset-4 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-full h-full rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
                        <Maximize className="w-8 h-8 text-red-500/50" />
                    </div>
                </div>
            )
        },
        {
            id: 'visual-mask',
            title: 'Visual Mask',
            description: 'Image masking effect with smooth reveals.',
            category: 'effects',
            icon: Image,
            color: 'green',
            preview: (
                <div className="absolute inset-4 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-green-500/30 to-blue-500/30"></div>
                </div>
            )
        },
        {
            id: 'voxel-terrain',
            title: 'Voxel Terrain',
            description: '3D voxel-based terrain with interactive controls.',
            category: 'effects',
            icon: Box,
            color: 'cyan',
            preview: (
                <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity">
                    <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-6 h-6 bg-cyan-500/30 border border-cyan-500/50" style={{ transform: `translateY(${i % 3 * -2}px)` }}></div>
                        ))}
                    </div>
                </div>
            )
        },
    ];

    const filteredComponents = selectedCategory === 'all' 
        ? components 
        : components.filter(c => c.category === selectedCategory);

    const colorClasses: Record<string, { border: string; bg: string; text: string; hover: string }> = {
        blue: { border: 'border-blue-500/20', bg: 'bg-blue-500/10', text: 'text-blue-400', hover: 'hover:border-blue-500/40' },
        indigo: { border: 'border-indigo-500/20', bg: 'bg-indigo-500/10', text: 'text-indigo-400', hover: 'hover:border-indigo-500/40' },
        purple: { border: 'border-purple-500/20', bg: 'bg-purple-500/10', text: 'text-purple-400', hover: 'hover:border-purple-500/40' },
        pink: { border: 'border-pink-500/20', bg: 'bg-pink-500/10', text: 'text-pink-400', hover: 'hover:border-pink-500/40' },
        red: { border: 'border-red-500/20', bg: 'bg-red-500/10', text: 'text-red-400', hover: 'hover:border-red-500/40' },
        orange: { border: 'border-orange-500/20', bg: 'bg-orange-500/10', text: 'text-orange-400', hover: 'hover:border-orange-500/40' },
        yellow: { border: 'border-yellow-500/20', bg: 'bg-yellow-500/10', text: 'text-yellow-400', hover: 'hover:border-yellow-500/40' },
        green: { border: 'border-green-500/20', bg: 'bg-green-500/10', text: 'text-green-400', hover: 'hover:border-green-500/40' },
        emerald: { border: 'border-emerald-500/20', bg: 'bg-emerald-500/10', text: 'text-emerald-400', hover: 'hover:border-emerald-500/40' },
        teal: { border: 'border-teal-500/20', bg: 'bg-teal-500/10', text: 'text-teal-400', hover: 'hover:border-teal-500/40' },
        cyan: { border: 'border-cyan-500/20', bg: 'bg-cyan-500/10', text: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
        sky: { border: 'border-sky-500/20', bg: 'bg-sky-500/10', text: 'text-sky-400', hover: 'hover:border-sky-500/40' },
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                    Component Library
                </h1>
                <p className="text-zinc-400 text-lg max-w-3xl mb-8">
                    A collection of 30+ beautiful, reusable components built with <span className="text-white font-semibold">React 19</span> and <span className="text-white font-semibold">Tailwind CSS v4</span>.
                    Ready to copy and paste into your projects.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                    isActive 
                                        ? 'bg-white text-black border-white' 
                                        : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-700'
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{cat.label}</span>
                                <span className="text-xs opacity-60">
                                    {cat.id === 'all' ? components.length : components.filter(c => c.category === cat.id).length}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredComponents.map((component) => {
                    const Icon = component.icon;
                    const colors = colorClasses[component.color];
                    return (
                        <Link 
                            key={component.id}
                            to={`/components/${component.id}`} 
                            className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 ${colors.hover} transition-all duration-300`}
                        >
                            {/* Preview Area */}
                            <div className="aspect-video w-full bg-zinc-950 object-cover overflow-hidden relative">
                                {component.preview}
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border`}>
                                        <Icon size={16} className={colors.text} />
                                    </div>
                                    <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
                                        {component.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                                    {component.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                    {component.description}
                                </p>
                                <div className="flex items-center text-sm text-white font-semibold group-hover:translate-x-1 transition-transform">
                                    <span>View Component</span>
                                    <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ComponentsHome;
