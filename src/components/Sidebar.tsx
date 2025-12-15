
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Zap, MousePointer2, Waves, BoxSelect, Grid3X3, Eye } from 'lucide-react';

const Sidebar = () => {
  const links = [
    { name: 'Velocity Scroll', path: '/components/velocity', icon: Zap },
    { name: 'Fracture Glass', path: '/components/fracture', icon: Layers },
    { name: 'Liquid Distortion', path: '/components/liquid', icon: Waves },
    { name: 'Spotlight Grid', path: '/components/spotlight', icon: Grid3X3 },
    { name: 'Pixel Wave', path: '/components/pixel', icon: MousePointer2 },
    { name: 'Voxel Terrain', path: '/components/voxel', icon: BoxSelect },
    { name: 'Focus Lens', path: '/components/lens', icon: Eye },
  ];

  return (
    <aside className="w-64 h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-white/5">
        <h1 className="text-xl font-bold tracking-tighter text-white">SAKUGA<span className="text-neutral-500">_UI</span></h1>
        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Component Library</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              isActive ? 'bg-white text-black' : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`
          }
        >
          <span className="text-xs uppercase tracking-widest">Back to Home</span>
        </NavLink>

        <div className="pt-4 pb-2 px-4 text-[10px] font-mono uppercase text-neutral-600 tracking-widest">
          Components
        </div>

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group ${
                isActive
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <link.icon className="w-4 h-4" />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-neutral-400">Built with <span className="text-white">React + Tailwind</span></p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
