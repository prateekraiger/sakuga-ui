export const VIDEO_EXPAND_CODE = `import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { Play } from 'lucide-react';

const VideoExpand: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const centerDist = Math.abs(rect.top + rect.height / 2 - winH / 2);

      // Calculate expansion based on distance to center of screen
      if (centerDist < winH * 0.6) {
        const expand = 1 - (centerDist / (winH * 0.6));
        const width = Math.min(70 + (expand * 30), 100);
        const radius = 20 * (1 - expand);

        containerRef.current.style.width = \\\`\\\${width}%\\\`;
        containerRef.current.style.borderRadius = \\\`\\\${radius}px\\\`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-[#050505] overflow-hidden relative min-h-[80vh] flex items-center">
      <SectionLabel number="05" text="IMMERSIVE EXPAND" />

      <div
        ref={containerRef}
        className="w-[70%] mx-auto h-[70vh] bg-neutral-900 rounded-[20px] overflow-hidden relative group hoverable transition-[width,border-radius] duration-100 ease-linear"
      >
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500" />

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500">
            <Play className="fill-white text-white translate-x-1" />
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Video Thumb"
        />
      </div>
    </section>
  );
};

export default VideoExpand;`;
