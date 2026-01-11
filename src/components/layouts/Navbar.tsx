import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-display font-bold text-xl tracking-tighter hoverable cursor-pointer">
          SAKUGA UI
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 text-[10px] font-bold tracking-widest uppercase text-neutral-400">
          <a href="#velocity" className="hover:text-white transition-colors">01. Velocity</a>
          <a href="#fracture" className="hover:text-white transition-colors">02. Fracture</a>
          <a href="#liquid" className="hover:text-white transition-colors">03. Liquid</a>
          <a href="#spotlight" className="hover:text-white transition-colors">04. Spotlight</a>
          <a href="#pixel" className="hover:text-white transition-colors">05. Pixel</a>
          <a href="#voxel" className="hover:text-white transition-colors">06. Voxel</a>
          <a href="#lens" className="hover:text-white transition-colors">07. Lens</a>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hoverable border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2"
        >
          <span className="hidden md:inline">Menu</span>
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-[cubic-bezier(0.86,0,0.07,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-center`}>
        <div className="flex flex-col gap-8 text-center">
           {['Velocity', 'Fracture', 'Liquid', 'Spotlight', 'Pixel', 'Voxel', 'Lens', 'Repository'].map((item) => (
             <a 
               key={item}
               href={`#${item.toLowerCase()}`}
               onClick={() => setIsOpen(false)}
               className="text-4xl font-display font-bold text-white hover:text-neutral-500 transition-colors"
             >
               {item}
             </a>
           ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;