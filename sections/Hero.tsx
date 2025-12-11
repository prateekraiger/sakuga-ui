import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0005})`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <SectionLabel number="00" text="HERO PARALLAX" />
      
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="w-full h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2553&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125 scale-110" 
            alt="Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-8 flex justify-center overflow-hidden">
          <div className="animate-[fadeUp_1s_ease-out_0.2s_both] border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            System v2.0
          </div>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter mix-blend-overlay text-white">
          <span className="block overflow-hidden">
             <span className="block animate-[slideUp_1.2s_cubic-bezier(0.23,1,0.32,1)_both]">DIGITAL</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-[slideUp_1.2s_cubic-bezier(0.23,1,0.32,1)_0.1s_both]">ALCHEMY</span>
          </span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-xl mx-auto animate-[fadeUp_1.2s_ease-out_0.5s_both]">
          Engineering the <span className="text-white hoverable border-b border-white/50 pb-1 cursor-pointer hover:border-white transition-colors">intangible</span>.
        </p>
      </div>
    </header>
  );
};

export default Hero;