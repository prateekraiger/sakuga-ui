import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const offset = sectionRef.current.offsetTop;
      const height = sectionRef.current.offsetHeight;
      const winH = window.innerHeight;
      const scrollTop = window.scrollY;

      // Start scrolling when the section hits the top of viewport
      if (scrollTop >= offset && scrollTop <= offset + height - winH) {
        const percent = (scrollTop - offset) / (height - winH);
        const move = (trackRef.current.scrollWidth - window.innerWidth) * percent;
        trackRef.current.style.transform = `translateX(-${move}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="h-[400vh] relative bg-[#050505]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <SectionLabel number="02" text="HORIZONTAL PIPELINE" />

        <div ref={trackRef} className="flex gap-24 px-12 md:px-32 items-center will-change-transform">

          <div className="w-[80vw] md:w-[600px] flex-shrink-0">
            <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-700">
              Design<br />Systems
            </h2>
          </div>

          <div className="w-[70vw] md:w-[60vw] aspect-video flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 group hoverable">
            <img
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="Process 1"
            />
          </div>

          <div className="w-[60vw] md:w-[400px] flex-shrink-0 flex flex-col justify-center border-l border-white/10 pl-20">
            <svg width="120" height="120" viewBox="0 0 100 100" className="mb-8">
              <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" className="animate-[spin_10s_linear_infinite]" />
              <path d="M30 50 L50 70 L70 30" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            <h3 className="text-4xl font-display mb-4 text-white">Vector Logic</h3>
            <p className="text-neutral-500">Mathematical precision in motion.</p>
          </div>

          <div className="w-[70vw] md:w-[60vw] aspect-video flex-shrink-0 relative rounded-xl overflow-hidden border border-white/10 group hoverable">
            <img
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2694&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              alt="Process 2"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
