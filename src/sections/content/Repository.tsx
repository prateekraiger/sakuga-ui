import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import SectionLabel from '../../components/ui/SectionLabel';
import { RepositoryItem } from '../../types/types';

const libraryData: RepositoryItem[] = [
  { id: 'velocity', name: 'Velocity Scroll', category: 'Typography', code: `// Calculate skew based on scroll speed\nconst skew = Math.min(Math.max((target - current) * 0.15, -10), 10);` },
  { id: 'fracture', name: 'Fracture Glass', category: 'Distortion', code: `// Move slices in opposite directions\nslice.style.transform = \`translateY(\${yVal * 40 * dir}px)\`;` },
  { id: 'liquid', name: 'Liquid SVG', category: 'Distortion', code: `<feDisplacementMap in="SourceGraphic" scale="60" />\n// Animate baseFrequency of feTurbulence` },
  { id: 'spotlight', name: 'Spotlight Grid', category: 'Interaction', code: `background: radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent);` },
  { id: 'pixel', name: 'Pixel Wave', category: 'Interaction', code: `// Distance check on mousemove\nif (dist < 100) pixel.classList.add('active');` },
  { id: 'voxel', name: 'Voxel Elevation', category: '3D', code: `transform: translateZ(60px);\nbox-shadow: 0 0 30px rgba(6,182,212,0.4);` },
  { id: 'lens', name: 'Focus Lens', category: 'Overlay', code: `mask-image: radial-gradient(circle at var(--x) var(--y), black, transparent);` },
  { id: 'smooth-scale', name: 'Smooth Scale', category: 'Layout', code: `<div class="transition-transform duration-700 hover:scale-110">...</div>` },
  { id: 'parallax', name: 'Parallax Lag', category: 'Scroll', code: `bg.style.transform = \`translateY(\${scrollY * 0.5}px)\`;` },
];

const Repository: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="repository" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5 relative">
      <SectionLabel number="11" text="THE REPOSITORY" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-12 text-white">The Repository</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryData.map((item) => (
            <button
              key={item.id}
              onClick={() => copyToClipboard(item.code, item.id)}
              className="p-6 border border-white/10 bg-white/5 rounded-lg text-left hover:bg-white hover:text-black transition-all group hoverable relative overflow-hidden flex flex-col gap-2"
            >
              <div className="flex justify-between items-center z-10 relative w-full">
                <span className="font-mono text-sm font-bold">{item.name}</span>
                {copiedId === item.id ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                )}
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{item.category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repository;
