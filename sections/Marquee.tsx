import React from 'react';
import SectionLabel from '../components/SectionLabel';

const Marquee: React.FC = () => {
  return (
    <section className="py-20 bg-[#050505] border-t border-white/5 border-b relative overflow-hidden">
      <SectionLabel number="07" text="INFINITE SCROLL" />
      
      <div className="flex gap-16 animate-[marquee_20s_linear_infinite] hoverable hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 flex-shrink-0">
             <span className="text-8xl md:text-[10rem] font-bold font-display text-stroke text-transparent transition-all duration-500 hover:text-white hover:text-stroke-0">MOTION LANGUAGE</span>
             <span className="text-8xl md:text-[10rem] font-bold font-display text-stroke text-transparent transition-all duration-500 hover:text-white hover:text-stroke-0">SAKUGA ENGINE</span>
             <span className="text-8xl md:text-[10rem] font-bold font-display text-stroke text-transparent transition-all duration-500 hover:text-white hover:text-stroke-0">KINETIC TYPE</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Marquee;