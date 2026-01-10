import React, { useRef } from 'react';
import SectionLabel from '../components/ui/SectionLabel';
import { Box } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const card = tiltRef.current;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // Rotate Y
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30; // Rotate X (inverted)

    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    }
  };

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <SectionLabel number="01" text="BENTO REVEAL" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Cinematic Focus */}
        <div className="group cursor-pointer hoverable relative overflow-hidden rounded-lg aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] grayscale group-hover:grayscale-0 group-hover:scale-110"
            alt="Fluidity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 z-30">
            <h3 className="text-xl font-medium text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Fluidity</h3>
            <p className="text-xs text-neutral-400 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">Cinematic Focus</p>
          </div>
        </div>

        {/* Card 2: Parallax Lag (Simulated with hover scale) */}
        <div className="md:mt-24 group cursor-pointer hoverable">
          <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 relative">
            <img
              src="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=2670&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              alt="Depth"
            />
          </div>
          <h3 className="text-xl font-medium text-white">Depth</h3>
          <p className="text-xs text-neutral-500">Lag Effect</p>
        </div>

        {/* Card 3: 3D Tilt */}
        <div
          className="group cursor-pointer hoverable"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={tiltRef}
            className="aspect-[3/4] rounded-lg mb-6 bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center transition-transform duration-100 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2487&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              alt="Perspective"
            />
            <div className="text-center z-20 mix-blend-difference" style={{ transform: 'translateZ(40px)' }}>
              <Box className="w-12 h-12 mx-auto mb-4 text-white" />
              <span className="text-sm tracking-widest uppercase text-white">Interactive 3D</span>
            </div>
          </div>
          <h3 className="text-xl font-medium text-white">Perspective</h3>
          <p className="text-xs text-neutral-500">Mouse Tracking</p>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
