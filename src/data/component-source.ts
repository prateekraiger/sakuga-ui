export const BENTO1_CODE = `// Source code for Bento1 placeholder`;
export const CTA_CODE = `// Source code for CTA placeholder`;
export const HEADER_CODE = `// Source code for Header placeholder`;
export { NEBULA_HERO_CODE } from '../sections/NebulaHeroCode';
export { FLUX_HERO_CODE } from '../sections/FluxHeroCode';
export { GROWTH_HERO_CODE } from '../sections/GrowthHeroCode';
export { HELIOS_HERO_CODE } from '../sections/HeliosHeroCode';
export { QUANTUM_HERO_CODE } from '../sections/QuantumHeroCode';
export const BENTO2_CODE = `// Source code for Bento2 placeholder`;
export { TANIA_LANDING_CODE } from '../sections/TaniaLandingCode';



export const REPOSITORY_CODE = `import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Repository = () => {
  const [copied, setCopied] = useState(false);

  // Escaped backticks for nested code string
  const codeString = \`
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Repository = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            The Repository
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explore our open-source component library, meticulously crafted with React, TypeScript, and Tailwind CSS.
          </p>
          <a
            href="https://github.com/your-repo/your-library"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-700"
          >
            View on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="relative mt-16 rounded-3xl border border-zinc-700 bg-zinc-900/50 p-6 lg:p-10">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-70"></div>

          <div className="relative overflow-hidden rounded-2xl bg-zinc-950/70 p-4 lg:p-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <pre className="overflow-x-auto text-sm text-zinc-300">
              <code>
{\`
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedFeature = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-start rounded-xl border border-zinc-700 bg-zinc-900/50 p-6 text-left"
  >
    <div className="rounded-full bg-zinc-700/50 p-3 text-white">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-zinc-400">{description}</p>
  </motion.div>
);

const Repository = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            The Repository
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explore our open-source component library, meticulously crafted with React, TypeScript, and Tailwind CSS.
          </p>
          <a
            href="https://github.com/your-repo/your-library"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-700"
          >
            View on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="relative mt-16 rounded-3xl border border-zinc-700 bg-zinc-900/50 p-6 lg:p-10">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-70"></div>

          <div className="relative overflow-hidden rounded-2xl bg-zinc-950/70 p-4 lg:p-6">
            {/* Some placeholder code for demonstration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <pre className="overflow-x-auto text-sm text-zinc-300">
              <code>
                {/* Real code content would go here */}
                {/* This is a simplified example */}
                {\`<Button variant="primary">Click Me</Button>\`}
              </code>
            </pre>

            <button className="absolute right-4 top-4 rounded-full bg-zinc-700/70 p-2 text-white transition-colors hover:bg-zinc-600/70">
              <Copy className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatedFeature
              title="Reusable Components"
              description="Build faster with our collection of accessible and customizable UI components."
              icon={<Laptop className="h-5 w-5" />}
            />
            <AnimatedFeature
              title="Tailwind CSS"
              description="Styled with utility-first classes for maximum flexibility and rapid development."
              icon={<Brush className="h-5 w-5" />}
            />
            <AnimatedFeature
              title="Open Source"
              description="Contribute to our growing library and help shape the future of UI development."
              icon={<Github className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
\`}
              </code>
            </pre>

            <button
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="absolute right-4 top-4 rounded-full bg-zinc-700/70 p-2 text-white transition-colors hover:bg-zinc-600/70"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
`;

export const ACCORDION_CODE = `import React from 'react';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const Accordion = () => {
  const items = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 days of purchase, provided the item is in its original condition with tags attached."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'Order History' section. A tracking number will be provided once your order ships."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary based on the destination."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available via email at support@example.com or by phone at (123) 456-7890 during business hours."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-zinc-950 text-zinc-300 p-8">
      <div className="w-full max-w-2xl bg-zinc-900/50 rounded-xl border border-zinc-800">
        {items.map((item, index) => (
          <div key={index} className="border-b border-zinc-800 last:border-b-0">
            <button
              className="flex justify-between items-center w-full p-6 text-lg font-medium text-left text-white hover:bg-zinc-800/50 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              {activeIndex === index ? (
                <Minus className="w-5 h-5 text-zinc-400" />
              ) : (
                <Plus className="w-5 h-5 text-zinc-400" />
              )}
            </button>
            <div
              className={\`overflow-hidden transition-all duration-300 ease-in-out \${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }\`}
            >
              <div className="p-6 pt-0 text-zinc-400">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;`;
export const CANVAS_NETWORK_CODE = `import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import { Particle } from '../types/types';

const CanvasNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';

      particles.forEach((p) => {
        // Update
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect to Mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="h-[80vh] bg-[#050505] relative border-t border-white/5 flex items-center justify-center overflow-hidden">
      <SectionLabel number="10" text="PARTICLE SYSTEM" />

      <canvas ref={canvasRef} className="absolute inset-0 z-1 opacity-40" />

      <div className="relative z-10 text-center pointer-events-none mix-blend-difference">
        <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 text-white">Connect</h2>
        <button className="pointer-events-auto bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-110 transition-transform duration-300 hoverable">
          Start Project
        </button>
      </div>
    </section>
  );
};

export default CanvasNetwork;`;
export const FOCUS_LENS_CODE = `import React, { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

interface FocusLensProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = \`// Focus Lens / Spyglass Effect
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
}\`;

const FocusLens: React.FC<FocusLensProps> = ({ onShowCode }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    sectionRef.current.style.setProperty('--lens-x', \`\${x}px\`);
    sectionRef.current.style.setProperty('--lens-y', \`\${y}px\`);

    if (hudRef.current) {
      hudRef.current.style.left = \`\${x - 125}px\`;
      hudRef.current.style.top = \`\${y - 125}px\`;
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

export default FocusLens;`;
export const FRACTURE_GLASS_CODE = `import React, { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

interface FractureGlassProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = \`// Fracture Glass Effect
const container = document.getElementById('fracture');
const slices = document.querySelectorAll('.slice');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);

  slices.forEach(slice => {
    const dir = parseFloat(slice.getAttribute('data-dir'));
    slice.style.transform = \\\`translateY(\\\${yVal * 40 * dir}px)\\\`;
  });
});`;

const FractureGlass: React.FC<FractureGlassProps> = ({ onShowCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);

    slicesRef.current.forEach((slice, i) => {
      if (slice) {
        // Different movement multipliers for each slice
        const multipliers = [1.5, -1.2, 2.0, -1.5, 1.0];
        slice.style.transform = \\\`translateY(\\\${yVal * 40 * multipliers[i]}px)\\\`;
      }
    });
  };

  const handleMouseLeave = () => {
    slicesRef.current.forEach(slice => {
      if (slice) slice.style.transform = \\\`translateY(0)\\\`;
    });
  };

  // Positions for background image alignment
  const bgPositions = ['5% 50%', '27% 50%', '50% 50%', '73% 50%', '95% 50%'];

  return (
    <section
      id="fracture"
      className="relative h-[100vh] w-full bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden"
    >
      <SectionLabel
        number="02"
        text="MOUSE FRACTURE"
        onCode={() => onShowCode(codeSnippet, "Fracture Glass")}
      />

      <div
        ref={containerRef}
        className="flex w-[80%] h-[70vh] gap-1 group hoverable cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => { slicesRef.current[i] = el; }}
            className="flex-1 relative overflow-hidden h-full bg-[#111] transition-transform duration-100 ease-linear"
          >
            <div
              className="absolute top-[-20%] left-0 w-[100vw] h-[140%] bg-cover bg-center transition-all duration-500 grayscale group-hover:grayscale-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2600')",
                backgroundPosition: bgPositions[i],
                // We need to counteract the flex layout to make the image look continuous
                // But simplified here for the "sliced" aesthetic
                left: \`-\${i * 20}vw\`
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FractureGlass;`;
export const HORIZONTAL_SCROLL_CODE = `import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

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
        trackRef.current.style.transform = \`translateX(-\${move}px)\`;
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

export default HorizontalScroll;`;
export const LIQUID_DISTORTION_CODE = `import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

interface LiquidDistortionProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = \`<!-- SVG Filter in HTML -->
<filter id="liquid-filter">
  <feTurbulence id="turb" type="fractalNoise" baseFrequency="0" numOctaves="2" />
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
</filter>

// JS Animation
const turb = document.getElementById('turb');
let val = 0, target = 0;

img.onmouseenter = () => target = 0.03;
img.onmouseleave = () => target = 0.00;

function loop() {
  val += (target - val) * 0.05;
  turb.setAttribute('baseFrequency', \\\`\\\${val} \\\${val}\\\`);
  requestAnimationFrame(loop);
}
loop();`;

const LiquidDistortion: React.FC<LiquidDistortionProps> = ({ onShowCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // We'll access the global SVG filter ID defined in App.tsx or index.html
  // But for React safety, we can direct manipulation here if we assume the ID exists.

  useEffect(() => {
    const turb = document.getElementById('turb');
    const container = containerRef.current;
    if (!turb || !container) return;

    let val = 0.00;
    let target = 0.00;
    let rafId: number;

    const loop = () => {
      val += (target - val) * 0.05;
      // Accessing DOM directly for performance in animation loop
      turb.setAttribute('baseFrequency', \`\${val} \${val}\`);
      rafId = requestAnimationFrame(loop);
    };

    const onEnter = () => { target = 0.02; }; // Slightly lower for smoother effect
    const onLeave = () => { target = 0.00; };

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    loop();

    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="liquid" className="relative min-h-screen bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden py-20">
      <SectionLabel
        number="03"
        text="SVG TURBULENCE"
        onCode={() => onShowCode(codeSnippet, "Liquid Distortion")}
      />

      <div className="flex flex-col md:flex-row gap-20 items-center justify-center w-full px-6 max-w-7xl mx-auto">

        <div className="text-right max-w-sm order-2 md:order-1">
          <h2 className="text-6xl font-bold mb-6 tracking-tighter text-white">LIQUID<br />REALITY</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Hover the image. A dynamically generated SVG noise map displaces the pixel data in real-time, creating a fluid surface tension effect.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-[500px] aspect-[5/7] overflow-hidden border border-neutral-800 order-1 md:order-2 group hoverable cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"
            style={{ filter: "url('#liquid-filter')" }}
            alt="Liquid"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
            <h3 className="text-9xl font-black text-white opacity-20 tracking-tighter">FLUX</h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiquidDistortion;`;
export const MAGNETIC_SECTION_CODE = `import React, { useRef, useState } from 'react';
import SectionLabel from '../components/SectionLabel';

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
export const MARQUEE_CODE = `// Source code coming soon for Marquee...`;
export const PIXEL_WAVE_CODE = `// Source code coming soon for PixelWave...`;
export const SPOTLIGHT_GRID_CODE = `// Source code coming soon for SpotlightGrid...`;
export const VELOCITY_TEXT_CODE = `// Source code coming soon for VelocityText...`;
export const VIDEO_EXPAND_CODE = `// Source code coming soon for VideoExpand...`;
export const VISUAL_MASK_CODE = `// Source code coming soon for VisualMask...`;
export const VOXEL_TERRAIN_CODE = `// Source code coming soon for VoxelTerrain...`;

export const PRICING_SECTION_CODE = `import React, { useState } from 'react';
import { Check, CheckCircle2, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Start Building',
      featured: false,
      features: [
        'Up to 1K API calls per month',
        'Basic data ingestion pipelines',
        'Web console access',
        'Community support',
        'Basic monitoring & alerts',
      ],
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$49' : '$470',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Upgrade to Pro',
      featured: true,
      tag: 'Most Popular',
      image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4ca8123b-2b44-4ef6-9ce7-51db6671104c_800w.jpg',
      features: [
        'Unlimited API calls',
        'Advanced reasoning models & orchestration',
        'Performance analytics & insights',
        'Custom workflows & integrations',
        'Priority support with SLA',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Contact Sales',
      featured: false,
      features: [
        'On‑premises & private cloud deployment',
        'Advanced security & compliance controls',
        'Dedicated support team & onboarding',
        'Team management & usage analytics',
        'Custom model training & fine‑tuning',
      ],
    },
  ];

  return (
    <section className="isolate overflow-hidden pt-24 pb-24 relative bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>

      <div className="z-10 md:px-8 max-w-7xl mx-auto px-6 relative">
        <div className="text-center">
          <h2 className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-display animate-[fadeSlideIn_1.0s_ease-out_0.1s_both]">
            Pricing Plans
          </h2>

          <div className="flex mt-6 gap-x-4 items-center justify-center animate-[fadeSlideIn_1.0s_ease-out_0.2s_both]">
            <span className={\`text-sm transition-colors \${billingCycle === 'monthly' ? 'text-white' : 'text-white/70'}\`}>Monthly</span>
            <button
              id="billingToggle"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <span
                id="billingKnob"
                className={\`inline-flex h-6 w-6 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform will-change-transform \${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }\`}
              />
            </button>
            <span className={\`text-sm transition-colors \${billingCycle === 'annual' ? 'text-white' : 'text-white/70'}\`}>
              Annual
              <span className="ml-2 inline-flex items-center rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300 ring-1 ring-amber-300/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={\`animate-[fadeSlideIn_1.0s_ease-out_both] border-white/10 border rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/5 \${
                plan.featured ? 'ring-amber-300/10 ring-1 pt-2 px-2 pb-2' : 'p-6'
              }\`}
              style={{ animationDelay: \`\${0.3 + index * 0.1}s\` }}
            >
              {plan.featured ? (
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent h-full flex flex-col">
                  <div className="absolute inset-0 -z-10">
                    <img
                      src={plan.image}
                      alt="Premium background"
                      className="h-48 w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(251,191,36,0.25),transparent_60%)]"></div>
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.18em] text-white/70 font-display">
                          {plan.name}
                        </div>
                        <div className="mt-2 flex items-end gap-2">
                          <div className="text-4xl font-medium tracking-tight text-white font-display">
                            {plan.price}
                          </div>
                          <div className="text-sm text-white/60 mb-1">{plan.period}</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] text-amber-300 ring-1 ring-amber-300/25 font-medium uppercase tracking-wider">
                        <Star className="h-3.5 w-3.5 fill-amber-300/20" /> {plan.tag}
                      </span>
                    </div>

                    <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-3 text-sm font-semibold tracking-tight text-black shadow-[0_10px_30px_rgba(251,191,36,0.25)] transition-all hover:from-amber-200 hover:to-amber-300 hover:scale-[1.02] active:scale-95">
                      {plan.buttonText}
                    </button>

                    <ul className="mt-8 space-y-3.5 text-sm text-white/85">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.18em] text-white/60 font-display">{plan.name}</div>
                      <div className="mt-2 flex items-end gap-2">
                        <div className="text-4xl font-medium tracking-tight text-white font-display">
                          {plan.price}
                        </div>
                        <div className="text-sm text-white/50 mb-1">{plan.period}</div>
                      </div>
                    </div>
                  </div>

                  <button className={\`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition-all active:scale-95 \${
                    plan.name === 'Enterprise'
                      ? 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/30'
                      : 'bg-white text-black hover:bg-white/90 hover:scale-[1.02]'
                  }\`}>
                    {plan.buttonText}
                  </button>

                  <ul className="mt-8 space-y-3.5 text-sm text-white/75">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="animate-[fadeSlideIn_1.0s_ease-out_0.6s_both] text-xs text-white/50 text-center mt-8">
          All plans include 14-day free trial. No setup fees.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
`;
