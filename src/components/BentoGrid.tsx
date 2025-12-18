import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, LayoutGrid, ArrowRight } from 'lucide-react';

const ComponentsHome = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Components
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
                A collection of beautiful, reusable components built with React and Tailwind CSS.
                Ready to drop into your projects.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Bento 1 Card */}
                <Link to="/components/bento-1" className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-300">
                    <div className="aspect-video w-full bg-zinc-950 object-cover overflow-hidden relative">
                         {/* Mini preview or abstract representation of bento grid */}
                        <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-2 opacity-50 group-hover:opacity-80 transition-opacity">
                             <div className="col-span-4 row-span-2 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                             <div className="col-span-2 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                             <div className="col-span-2 row-span-1 rounded-lg border border-zinc-700 bg-zinc-800/50"></div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-2 text-blue-400">
                                <LayoutGrid size={18} />
                                <span className="text-sm font-medium">Layout</span>
                             </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Bento Grid 1</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            A modern, responsive bento grid layout ideal for dashboards and feature showcases.
                        </p>
                        <div className="flex items-center text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                            View Component <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </Link>

                 {/* CTA Card */}
                 <Link to="/components/cta" className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-300">
                    <div className="aspect-video w-full bg-zinc-950 object-cover overflow-hidden relative flex items-center justify-center">
                         {/* Mini preview of CTA */}
                        <div className="px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                            Get Started
                        </div>
                    </div>
                    <div className="p-6">
                         <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-2 text-purple-400">
                                <Share2 size={18} />
                                <span className="text-sm font-medium">Marketing</span>
                             </div>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">CTA Section</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            High-conversion call to action section with magnetic button effects and glows.
                        </p>
                        <div className="flex items-center text-sm text-white font-medium group-hover:translate-x-1 transition-transform">
                            View Component <ArrowRight size={16} className="ml-2" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ComponentsHome;
