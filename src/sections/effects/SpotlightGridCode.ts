export const SPOTLIGHT_GRID_CODE = `import React from 'react';
import SectionLabel from '../../components/ui/SectionLabel';
import { ScanLine, Layers, Zap } from 'lucide-react';

interface SpotlightGridProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = \\\`.spotlight-card {
  --mouse-x: -100px;
  --mouse-y: -100px;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
}

// Inner Glow (White)
.spotlight-card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
}

// Border Glow (Masked)
.spotlight-card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  // Mask logic to only show on border
}

// JS
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', \\\\\\\`\\\\\\\${e.clientX - rect.left}px\\\\\\\`);
  card.style.setProperty('--mouse-y', \\\\\\\`\\\\\\\${e.clientY - rect.top}px\\\\\\\`);
});\\\`;

const SpotlightGrid: React.FC<SpotlightGridProps> = ({ onShowCode }) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', \\\`\\\${e.clientX - rect.left}px\\\`);
    card.style.setProperty('--mouse-y', \\\`\\\${e.clientY - rect.top}px\\\`);
  };

  return (
    <section id="spotlight" className="relative py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">[ 04. INTELLIGENT LIGHTING ]</div>
            <h2 className="text-5xl font-bold tracking-tighter text-white">GRID<br/>SYSTEM</h2>
          </div>
          <button
            onClick={() => onShowCode(codeSnippet, "Spotlight Effect")}
            className="text-xs font-bold bg-white text-black px-4 py-2 rounded hover:scale-105 transition-transform"
          >
            VIEW CODE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: ScanLine, title: "Raycasting", desc: "Light follows cursor coordinates." },
            { icon: Layers, title: "Depth Map", desc: "Gradient masking for borders." },
            { icon: Zap, title: "Zero Latency", desc: "GPU accelerated composition." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="spotlight-card h-[400px] group cursor-default relative rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden"
              onMouseMove={handleMouseMove}
              style={{
                backgroundSize: '20px 20px',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
              } as React.CSSProperties}
            >
              {/* Inner Glow */}
              <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(800px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(255, 255, 255, 0.06), transparent 40%)'
                }}
              />

              {/* Border Glow */}
              <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(255, 255, 255, 0.4), transparent 40%)',
                  maskImage: 'linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px'
                }}
              />

              <div className="card-content relative z-10 h-full flex flex-col justify-end p-8">
                <item.icon className="text-white w-6 h-6 mb-6" />
                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightGrid;`;
