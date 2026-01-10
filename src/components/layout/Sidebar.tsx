
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Zap, LayoutGrid } from 'lucide-react';


const Sidebar = () => {
  const links = [
    // Add your components here
    { name: 'Bento Grid', path: '/components/bento-1', icon: LayoutGrid },
    { name: 'CTA Section', path: '/components/cta', icon: Zap },
  ];

  return (
    <aside className="w-64 h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-white/5">
        <h1 className="text-xl font-bold tracking-tighter text-white">SAKUGA<span className="text-neutral-500">_UI</span></h1>
        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Component Library</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
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
        </div>

        <div>
            <div className="px-4 pb-2 text-[10px] font-mono uppercase text-neutral-600 tracking-widest">
                Components
            </div>
            <div className="space-y-1">
                {links.map((link: any) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
                            isActive
                            ? 'bg-white/10 text-white'
                            : 'text-neutral-400 hover:text-white hover:bg-white/5'
                        }`
                        }
                    >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                    </NavLink>
                ))}
                {/* Adding Header manually if not in links array yet */}
                 <NavLink
                    to="/components/header"
                    className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
                        isActive
                        ? 'bg-white/10 text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`
                    }
                >
                    <LayoutGrid className="w-4 h-4" />
                    <span>Glass Header</span>
                </NavLink>
            </div>
        </div>

        <div>
            <div className="px-4 pb-2 text-[10px] font-mono uppercase text-neutral-600 tracking-widest">
                Sections
            </div>
            <div className="space-y-1">
                 <NavLink
                    to="/components/hero-1"
                    className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
                        isActive
                        ? 'bg-white/10 text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`
                    }
                >
                    <Zap className="w-4 h-4" />
                    <span>Nebula Hero</span>
                </NavLink>
                 <NavLink
                    to="/components/flux-hero"
                    className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all group ${
                        isActive
                        ? 'bg-white/10 text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`
                    }
                >
                    <Zap className="w-4 h-4" />
                    <span>Flux Hero</span>
                </NavLink>
            </div>
        </div>
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
