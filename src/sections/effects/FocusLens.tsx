import React, { useRef } from 'react';
import SectionLabel from '../../components/ui/SectionLabel';

interface FocusLensProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = `// Focus Lens / Spyglass Effect
// Layer 1: Blurred Background
.blur {
  filter: grayscale(1) blur(8px) brightness(0.4);
}

// Layer 2: Clear Foreground with Mask
.clear {
  mask-image: radial-gradient(
    250px circle at var(--x) var(--y),
    black 0%,
    transparent 100%
  );
}

// JS Update
document.body.onmousemove = e => {
  el.style.setProperty('--x', e.clientX + 'px');
  el.style.setProperty('--y', e.clientY + 'px');
}`;

const FocusLens: React.FC<FocusLensProps> = ({ onShowCode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionRef.current.style.setProperty('--lens-x', `${x}px`);
    sectionRef.current.style.setProperty('--lens-y', `${y}px`);

    if (hudRef.current) {
      hudRef.current.style.left = `${x - 125}px`;
      hudRef.current.style.top = `${y - 125}px`;
    }
  };

  return (
    <section
      id="lens"
      ref={sectionRef}
      className="relative h-[100vh] bg-black overflow-hidden border-t border-white/5 cursor-none group"
      onMouseMove={handleMouseMove}
      style={{ '--lens-x': '50%', '--lens-y': '50%' } as React.CSSProperties}
    >
      <SectionLabel
        number="07"
        text="FOCUS LENS"
        onCode={() => onShowCode(codeSnippet, "Focus Lens")}
        textColor="text-white"
        borderColor="border-white"
      />

      {/* Layer 1: Blurred */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672')",
          filter: 'grayscale(100%) blur(8px) brightness(0.4)'
        }}
      />

      {/* UI Layer: Dimmed */}
      <div className="absolute inset-0 grid grid-cols-[1fr_2fr_1fr] gap-16 p-16 items-center pointer-events-none text-[#333]">
        <div className="flex flex-col justify-between h-full py-20 border-r border-white/5 pr-10">
           <div className="space-y-4 font-mono text-sm">
             <div className="flex justify-between border-b border-[#222] pb-2"><span>SYS_ID</span><span>--</span></div>
             <div className="flex justify-between border-b border-[#222] pb-2"><span>STATUS</span><span>OFFLINE</span></div>
           </div>
        </div>
        <div className="flex justify-center"><h2 className="text-[8vw] font-black">DATA</h2></div>
        <div className="flex flex-col justify-end h-full py-20 border-l border-white/5 pl-10 text-right font-mono text-sm">
           <div className="border-b border-[#222] pb-2"><span>ENCRYPTED</span></div>
        </div>
      </div>

      {/* Layer 2: Focused (Masked) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672')",
          maskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)'
        }}
      />

      {/* UI Layer: Bright (Masked) */}
      <div
        className="absolute inset-0 grid grid-cols-[1fr_2fr_1fr] gap-16 p-16 items-center pointer-events-none text-white"
        style={{
          maskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(250px circle at var(--lens-x) var(--lens-y), black 0%, transparent 100%)'
        }}
      >
        <div className="flex flex-col justify-between h-full py-20 border-r border-white/20 pr-10">
           <div className="space-y-4 font-mono text-sm text-cyan-400 font-bold">
             <div className="flex justify-between border-b border-white/20 pb-2"><span>SYS_ID</span><span className="text-white">AE-9000</span></div>
             <div className="flex justify-between border-b border-white/20 pb-2"><span>STATUS</span><span className="text-emerald-400">ONLINE</span></div>
           </div>
        </div>
        <div className="flex justify-center"><h2 className="text-[8vw] font-black drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">DATA</h2></div>
        <div className="flex flex-col justify-end h-full py-20 border-l border-white/20 pl-10 text-right font-mono text-sm text-cyan-400 font-bold">
           <div className="flex justify-between border-b border-white/20 pb-2"><span>PACKET_01</span><span className="text-white">0x44...F2</span></div>
        </div>
      </div>

      {/* HUD Ring */}
      <div
        ref={hudRef}
        className="absolute w-[250px] h-[250px] border border-white/50 rounded-full z-50 pointer-events-none animate-[spin_10s_linear_infinite]"
        style={{ top: 0, left: 0 }}
      />
    </section>
  );
};

export default FocusLens;
