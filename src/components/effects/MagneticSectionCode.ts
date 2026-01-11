export const MAGNETIC_SECTION_CODE = `import React, { useRef, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

interface MagneticButtonProps {
  text: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ text }) => {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.5;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.5;

    // Move the inner text/circle
    const content = btnRef.current.querySelector('.magnetic-content') as HTMLElement;
    if (content) {
      content.style.transform = \`translate(\${x}px, \${y}px) scale(1.1)\`;
    }
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    const content = btnRef.current.querySelector('.magnetic-content') as HTMLElement;
    if (content) {
      content.style.transform = \`translate(0px, 0px) scale(1)\`;
    }
  };

  return (
    <div
      ref={btnRef}
      className="magnetic-wrap hoverable inline-block p-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="magnetic-content w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group hover:bg-white hover:text-black transition-colors duration-300 ease-out will-change-transform">
        <span className="text-sm font-bold tracking-widest">{text}</span>
      </div>
    </div>
  );
};

const MagneticSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Trail Effect Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    // Randomly spawn trail images
    if (Math.random() < 0.1) {
      const img = document.createElement('img');
      img.src = \`https://picsum.photos/200/300?random=\${Math.floor(Math.random() * 100)}\`;
      img.className = 'fixed w-[140px] h-[180px] object-cover rounded-md pointer-events-none z-10 opacity-0 animate-[trailAnim_0.8s_forwards]';
      img.style.left = \`\${e.clientX}px\`;
      img.style.top = \`\${e.clientY}px\`;
      img.style.transform = \`translate(-50%, -50%) rotate(\${Math.random() * 30 - 15}deg) scale(0.5)\`;

      // We append to body to ensure it floats over everything in this section context
      // But typically we'd append to a specific container. For this demo, let's append to the section container.
      containerRef.current.appendChild(img);

      setTimeout(() => img.remove(), 800);
    }
  };

  return (
    <section
      ref={containerRef}
      id="magnetic-section"
      className="py-32 bg-[#050505] flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <SectionLabel number="04" text="PHYSICS & TRAIL" />

      <div className="relative z-20 text-center mb-16">
        <h2 className="text-3xl font-display font-bold text-white">Magnetic & Trail</h2>
        <p className="text-neutral-500 mt-2">Move cursor rapidly</p>
      </div>

      <div className="relative z-20 flex flex-wrap justify-center gap-12">
        <MagneticButton text="DRAG ME" />
        <MagneticButton text="PULL ME" />
      </div>

      <style>{\`
        @keyframes trailAnim {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.8) rotate(var(--r)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.2) rotate(var(--r)); }
        }
      \`}</style>
    </section>
  );
};

export default MagneticSection;`;
