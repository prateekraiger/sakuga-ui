import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  LayoutTemplate,
  ArrowRight,
  Github,
  Sparkles,
  Zap,
  Code2,
  Star,
  Package,
  Rocket,
  Palette,
  CheckCircle,
  Copy,
  Terminal,
  Check,
  Shield,
  Globe
} from 'lucide-react';
import { Header } from '../components/layouts';

// ---------------------------------------------------------
// Sub-component: HeroCanvas
// High-performance particle connection animation in Hero
// ---------------------------------------------------------
const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(59, 130, 246, 0.35)',  // Blue
      'rgba(168, 85, 247, 0.35)',  // Purple
      'rgba(236, 72, 153, 0.35)',  // Pink
      'rgba(6, 182, 212, 0.35)',   // Cyan
    ];

    const particleCount = Math.min(Math.floor(width / 18), 75);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.fill();

        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const dx = mouseX - p1.x;
        const dy = mouseY - p1.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          const alpha = (1 - dist / 150) * 0.15;
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          p1.x += dx * 0.003;
          p1.y += dy * 0.003;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dxPart = p1.x - p2.x;
          const dyPart = p1.y - p2.y;
          const distPart = Math.sqrt(dxPart * dxPart + dyPart * dyPart);

          if (distPart < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - distPart / 100) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-55" />;
};

// ---------------------------------------------------------
// Sub-component: PhysicsSandbox
// Live, interactive physics engine mockup for the Hero section
// ---------------------------------------------------------
const PhysicsSandbox: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gravity, setGravity] = useState<number>(0.25);
  const [forceMode, setForceMode] = useState<'attract' | 'repel'>('attract');
  const [particleCount, setParticleCount] = useState<number>(0);
  const [activeNodes, setActiveNodes] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = container.clientWidth;
    let height = canvas.height = container.clientHeight;
    let animationFrameId: number;

    const balls: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const sparks: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      life: number;
      size: number;
    }> = [];

    const colors = [
      '#06b6d4',  // Cyan
      '#a855f7',  // Purple
      '#ec4899',  // Pink
      '#3b82f6',  // Blue
      '#e11d48',  // Rose
    ];

    const colorDarkMap: Record<string, string> = {
      '#06b6d4': '#083344',
      '#a855f7': '#3b0764',
      '#ec4899': '#500724',
      '#3b82f6': '#172554',
      '#e11d48': '#4c0519',
    };

    // Initial particles
    const initialCount = 16;
    for (let i = 0; i < initialCount; i++) {
      const radius = Math.random() * 8 + 12;
      balls.push({
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height / 2 - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 3.5,
        vy: (Math.random() - 0.5) * 3.5,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticleCount(balls.length);
    setActiveNodes(balls.length);

    const createSparks = (x: number, y: number, color: string) => {
      const count = Math.floor(Math.random() * 3) + 4;
      for (let k = 0; k < count; k++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5 + 1.2;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          life: 1.0,
          size: Math.random() * 2 + 1,
        });
      }
    };

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Spawn 3 balls
      for (let i = 0; i < 3; i++) {
        const radius = Math.random() * 6 + 10;
        balls.push({
          x,
          y: y - 5,
          vx: (Math.random() - 0.5) * 5,
          vy: (Math.random() - 0.5) * 5 - 2.5,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
        createSparks(x, y, colors[Math.floor(Math.random() * colors.length)]);
      }
      setParticleCount(balls.length);
      setActiveNodes(balls.length);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const resize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Grid Background with Crossing "+" Intersections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 0.75;
      const crossSize = 3;
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x - crossSize, y);
          ctx.lineTo(x + crossSize, y);
          ctx.moveTo(x, y - crossSize);
          ctx.lineTo(x, y + crossSize);
          ctx.stroke();
        }
      }

      // Draw Gravity Force Field Zone
      if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 130, 0, Math.PI * 2);
        ctx.strokeStyle = forceMode === 'attract' ? 'rgba(168, 85, 247, 0.08)' : 'rgba(225, 29, 72, 0.08)';
        
        const forceGlow = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 130);
        forceGlow.addColorStop(0, forceMode === 'attract' ? 'rgba(168, 85, 247, 0.03)' : 'rgba(225, 29, 72, 0.03)');
        forceGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = forceGlow;
        ctx.fill();
        ctx.stroke();
      }

      // Update and draw elastic/spring connective mesh lines between close nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < balls.length; i++) {
        const b1 = balls[i];
        for (let j = i + 1; j < balls.length; j++) {
          const b2 = balls[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(b1.x, b1.y);
            ctx.lineTo(b2.x, b2.y);
            const alpha = (1 - dist / 110) * 0.14;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Update & Draw sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.08; // Spark gravity
        s.life -= 0.035; // Spark fade rate
        
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.life * 0.8;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // Draw Node Bodies with specular glossy glass shading
      balls.forEach((b) => {
        // Gravity
        b.vy += gravity;

        // Mouse force field influence
        if (mouseX > -500 && mouseY > -500) {
          const dx = mouseX - b.x;
          const dy = mouseY - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140 && dist > 5) {
            const force = (140 - dist) * 0.0055;
            const dirX = dx / dist;
            const dirY = dy / dist;

            if (forceMode === 'attract') {
              b.vx += dirX * force;
              b.vy += dirY * force;
            } else {
              b.vx -= dirX * force;
              b.vy -= dirY * force;
            }
          }
        }

        // Friction
        b.vx *= 0.99;
        b.vy *= 0.99;

        // Position update
        b.x += b.vx;
        b.y += b.vy;

        // Wall collisions & Spark trigger
        const bounce = -0.72;
        if (b.x - b.radius < 0) {
          b.x = b.radius;
          b.vx *= bounce;
          createSparks(0, b.y, b.color);
        } else if (b.x + b.radius > width) {
          b.x = width - b.radius;
          b.vx *= bounce;
          createSparks(width, b.y, b.color);
        }

        if (b.y - b.radius < 0) {
          b.y = b.radius;
          b.vy *= bounce;
          createSparks(b.x, 0, b.color);
        } else if (b.y + b.radius > height) {
          b.y = height - b.radius;
          b.vy *= bounce;
          b.vx *= 0.95; // floor friction
          if (Math.abs(b.vy) > 0.4 || Math.abs(b.vx) > 0.4) {
            createSparks(b.x, height, b.color);
          }
        }

        // Particle collisions
        for (let j = 0; j < balls.length; j++) {
          const b2 = balls[j];
          if (b === b2) continue;

          const dx = b2.x - b.x;
          const dy = b2.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b.radius + b2.radius;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / (dist || 1);
            const ny = dy / (dist || 1);

            // Separate
            b.x -= nx * overlap * 0.5;
            b.y -= ny * overlap * 0.5;
            b2.x += nx * overlap * 0.5;
            b2.y += ny * overlap * 0.5;

            // Elastic bounce
            const kx = b.vx - b2.vx;
            const ky = b.vy - b2.vy;
            const p = (nx * kx + ny * ky);

            b.vx -= p * nx * 0.8;
            b.vy -= p * ny * 0.8;
            b2.vx += p * nx * 0.8;
            b2.vy += p * ny * 0.8;

            // Spark on high energy node collisions
            if (Math.abs(p) > 1.2) {
              createSparks((b.x + b2.x) / 2, (b.y + b2.y) / 2, Math.random() > 0.5 ? b.color : b2.color);
            }
          }
        }

        // 1. Draw outer glowing radial halo (neon bloom)
        ctx.beginPath();
        const distToMouse = Math.sqrt(Math.pow(mouseX - b.x, 2) + Math.pow(mouseY - b.y, 2));
        const isHovered = mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && distToMouse < b.radius + 12;
        const glowRadius = isHovered ? b.radius * 3.6 : b.radius * 2.4;
        const radGradGlow = ctx.createRadialGradient(b.x, b.y, b.radius * 0.4, b.x, b.y, glowRadius);
        radGradGlow.addColorStop(0, b.color);
        radGradGlow.addColorStop(0.2, b.color);
        radGradGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = radGradGlow;
        ctx.arc(b.x, b.y, glowRadius, 0, Math.PI * 2);
        ctx.globalAlpha = isHovered ? 0.45 : 0.22;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        // 2. Draw 3D-shaded node body (glass volume)
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        const bodyGrad = ctx.createRadialGradient(
          b.x - b.radius * 0.2,
          b.y - b.radius * 0.2,
          b.radius * 0.05,
          b.x,
          b.y,
          b.radius
        );
        bodyGrad.addColorStop(0, '#ffffff');
        bodyGrad.addColorStop(0.25, b.color);
        bodyGrad.addColorStop(1, colorDarkMap[b.color] || '#111827');
        ctx.fillStyle = bodyGrad;
        ctx.fill();

        // 3. Highlight boundary ring
        ctx.strokeStyle = isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // 4. Draw glossy specular white light reflection dot
        ctx.beginPath();
        const specularGrad = ctx.createRadialGradient(
          b.x - b.radius * 0.35,
          b.y - b.radius * 0.35,
          0,
          b.x - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.35
        );
        specularGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
        specularGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = specularGrad;
        ctx.arc(b.x - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [gravity, forceMode]);

  return (
    <div className="w-full max-w-[500px] aspect-square rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-purple-500/20 transition-colors duration-500 flex flex-col relative group/sandbox">
      {/* Chrome header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-zinc-900/40 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="text-[9px] font-mono text-neutral-400 flex items-center gap-1.5 bg-neutral-900/80 border border-white/5 px-2.5 py-0.5 rounded-md">
          <span className="w-1 h-1 bg-green-400 rounded-full animate-ping" />
          <span>physics_sandbox.tsx</span>
        </div>
        <span className="text-[9px] font-mono text-neutral-500 tracking-wider">60 FPS</span>
      </div>

      {/* Main Canvas Area */}
      <div ref={containerRef} className="flex-grow w-full relative overflow-hidden bg-black/10 cursor-crosshair">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Floating instructions */}
        <div className="absolute top-3 left-3 pointer-events-none z-10 flex flex-col gap-1 select-none opacity-80 group-hover/sandbox:opacity-100 transition-opacity">
          <p className="text-[9px] text-neutral-400 font-mono bg-zinc-900/90 border border-white/5 px-2 py-0.5 rounded">
            Click inside to spawn balls
          </p>
          <p className="text-[9px] text-neutral-400 font-mono bg-zinc-900/90 border border-white/5 px-2 py-0.5 rounded">
            Hover to attract gravity
          </p>
        </div>

        {/* Counter */}
        <div className="absolute top-3 right-3 pointer-events-none z-10 select-none">
          <span className="text-[9px] text-neutral-400 font-mono bg-zinc-900/90 border border-white/5 px-2 py-0.5 rounded">
            Nodes: {particleCount}
          </span>
        </div>
      </div>

      {/* Control panel footer */}
      <div className="px-5 py-3.5 border-t border-white/5 bg-zinc-900/25 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Force Field:</span>
          <button
            onClick={() => setForceMode(forceMode === 'attract' ? 'repel' : 'attract')}
            className={`px-2 py-0.5 rounded border text-[8px] font-mono uppercase tracking-wider transition ${
              forceMode === 'attract'
                ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20'
            }`}
          >
            {forceMode}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-wider">Gravity:</span>
          <input
            type="range"
            min="0"
            max="0.6"
            step="0.05"
            value={gravity}
            onChange={(e) => setGravity(parseFloat(e.target.value))}
            className="w-14 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <span className="text-[8px] font-mono text-neutral-400 w-4">{gravity}</span>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// Sub-components: Playground Interactive Elements
// ---------------------------------------------------------
const PlaygroundSpotlight: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-6 relative z-10">
      {[
        { title: "Raycasting Lighting", desc: "Dynamic cursor boundary tracking." },
        { title: "Depth Gradient", desc: "Smooth HSL border masks." }
      ].map((card, idx) => (
        <div
          key={idx}
          onMouseMove={handleMouseMove}
          className="relative h-[180px] rounded-2xl border border-white/10 bg-zinc-950/40 p-6 flex flex-col justify-end overflow-hidden group/card cursor-default"
          style={{
            backgroundSize: '16px 16px',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(350px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(59, 130, 246, 0.08), transparent 45%)'
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(250px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(168, 85, 247, 0.4), transparent 45%)',
              maskImage: 'linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px'
            }}
          />
          <div className="relative z-10">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="font-bold text-white text-base mb-1">{card.title}</h4>
            <p className="text-neutral-400 text-xs leading-normal">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const PlaygroundPixelWave: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const total = 128; // 16 cols x 8 rows
    container.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const p = document.createElement('div');
      p.className = 'bg-white/[0.04] rounded-[1px] transition-all duration-350 ease-out h-full w-full aspect-square';
      container.appendChild(p);
    }

    const pixels = Array.from(container.children) as HTMLDivElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      pixels.forEach((p) => {
        const px = p.offsetLeft + p.offsetWidth / 2;
        const py = p.offsetTop + p.offsetHeight / 2;
        const dist = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));

        if (dist < 65) {
          p.style.backgroundColor = 'rgba(168, 85, 247, 0.8)';
          p.style.transform = 'scale(0.6)';
          p.style.boxShadow = '0 0 8px rgba(168, 85, 247, 0.6)';
          p.style.zIndex = '10';

          const prevTimer = p.getAttribute('data-timer');
          if (prevTimer) clearTimeout(parseInt(prevTimer));

          const timer = setTimeout(() => {
            p.style.backgroundColor = '';
            p.style.transform = '';
            p.style.boxShadow = '';
            p.style.zIndex = '';
          }, 350);
          p.setAttribute('data-timer', timer.toString());
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
      <div
        ref={containerRef}
        className="grid grid-cols-[repeat(16,1fr)] gap-[2.5px] w-full max-w-[380px] aspect-[2/1] cursor-crosshair"
      />
      <p className="text-[10px] text-neutral-500 font-mono mt-4 uppercase tracking-widest">Move cursor to disturb the field</p>
    </div>
  );
};

const PlaygroundVoxelTerrain: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const total = 36; // 6x6
    grid.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const v = document.createElement('div');
      v.className = 'w-full h-full bg-[#16161a] border border-[#232329] transition-all duration-200 ease-out relative aspect-square';
      
      const shadow = document.createElement('div');
      shadow.className = 'absolute -bottom-[6px] left-0 w-full h-[6px] bg-inherit brightness-50 origin-bottom opacity-0 transition-opacity duration-200';
      shadow.style.transform = 'skewX(45deg)';
      v.appendChild(shadow);

      grid.appendChild(v);
    }

    const voxels = Array.from(grid.children) as HTMLDivElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;

      voxels.forEach((v) => {
        const rect = v.getBoundingClientRect();
        const dist = Math.sqrt(
          Math.pow(mx - (rect.left + rect.width / 2), 2) +
          Math.pow(my - (rect.top + rect.height / 2), 2)
        );

        if (dist < 75) {
          v.style.transform = 'translateZ(25px)';
          v.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6)';
          v.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.4)';
          v.style.borderColor = 'transparent';
          v.style.zIndex = '30';

          const shadow = v.firstChild as HTMLElement;
          if (shadow) shadow.style.opacity = '1';

          const prevTimer = v.getAttribute('data-timer');
          if (prevTimer) clearTimeout(parseInt(prevTimer));

          const timer = setTimeout(() => {
            v.style.transform = '';
            v.style.background = '';
            v.style.boxShadow = '';
            v.style.borderColor = '';
            v.style.zIndex = '';
            if (shadow) shadow.style.opacity = '0';
          }, 250);
          v.setAttribute('data-timer', timer.toString());
        }
      });
    };

    const parent = grid.parentElement;
    if (parent) parent.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (parent) parent.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative" style={{ perspective: '800px' }}>
      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(6,1fr)] gap-1.5 w-[180px] h-[180px]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(55deg) rotateZ(45deg)' }}
      />
      <p className="text-[10px] text-neutral-500 font-mono mt-4 uppercase tracking-widest">Hover to elevate 3D terrain</p>
    </div>
  );
};

const PlaygroundCanvasNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = container.clientWidth;
    let height = canvas.height = container.clientHeight;
    let animationFrameId: number;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const count = 24;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2 + 1
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const resize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(236, 72, 153, 0.7)';
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.15)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        particles.forEach((p2) => {
          if (p === p2) return;
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 55) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-crosshair">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4 pointer-events-none z-10">
        <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">Connect particles with cursor</p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------
// Main Landing Page Component
// ---------------------------------------------------------
const Landing: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [copiedId, setCopiedId] = useState<string>('');
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'spotlight' | 'pixel' | 'voxel' | 'canvas'>('spotlight');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(''), 2000);
  };

  const componentCategories = [
    { name: 'Heroes', count: 5, color: 'from-blue-500 to-cyan-500', icon: Rocket },
    { name: 'Effects', count: 11, color: 'from-purple-500 to-pink-500', icon: Sparkles },
    { name: 'Layouts', count: 3, color: 'from-green-500 to-emerald-500', icon: Layers },
    { name: 'Content', count: 4, color: 'from-orange-500 to-yellow-500', icon: Package },
  ];

  const features = [
    {
      icon: Copy,
      title: 'Copy & Paste',
      description: 'No heavy npm packages needed. Copy the clean Tailwind & TS code directly into your component library.',
      color: 'blue'
    },
    {
      icon: Code2,
      title: 'React 19 & Tailwind v4',
      description: 'Modern, future-proof stack built on top of the latest Tailwind v4 specifications and React 19 API primitives.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'GPU Accelerated',
      description: 'Zero lag. High performance, hardware-accelerated transforms targeting a smooth 60fps framerate.',
      color: 'yellow'
    },
    {
      icon: Palette,
      title: 'Harmonious Palette',
      description: 'Crafted with curated dark palettes, glowing accents, and typography configurations to elevate UI standards.',
      color: 'green'
    },
    {
      icon: Package,
      title: 'Zero Dependencies',
      description: 'Self-contained code units which limit external bloat, ensuring your build bundles remain compact.',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'Fully Typed',
      description: 'Native TypeScript declaration, providing autocompletion and robust safety out of the box.',
      color: 'cyan'
    }
  ];

  const playgroundData = {
    spotlight: {
      title: "Interactive Spotlight Grid",
      desc: "An intelligent border glow effect that tracks cursor movement in real-time, utilizing CSS custom properties and radial masking.",
      code: `// React Mouse Tracker
const handleMouseMove = (e: React.MouseEvent) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mouse-x', \`\${e.clientX - rect.left}px\`);
  card.style.setProperty('--mouse-y', \`\${e.clientY - rect.top}px\`);
};

// CSS Border Masking
.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
}`
    },
    pixel: {
      title: "Digital Wave Field",
      desc: "Hovering over this grid scale-transforms neighboring pixels relative to cursor distance, mimicking fluid-like digital response.",
      code: `// Proximity calculation
const dx = mouseX - (pixel.offsetLeft + pixel.offsetWidth / 2);
const dy = mouseY - (pixel.offsetTop + pixel.offsetHeight / 2);
const dist = Math.sqrt(dx * dx + dy * dy);

if (dist < 100) {
  pixel.style.backgroundColor = '#ffffff';
  pixel.style.transform = 'scale(0.5)';
}`
    },
    voxel: {
      title: "3D Voxel Terrain Elevation",
      desc: "A rotated 3D perspective surface that reacts to coordinate distance by elevating voxel block elements on the Z axis.",
      code: `// Perspective Wrapper
<div style={{
  transformStyle: 'preserve-3d',
  transform: 'rotateX(60deg) rotateZ(45deg)'
}}>
  {voxels.map((v) => (
    <div 
      className="transition-transform duration-200" 
      style={{ transform: active ? 'translateZ(30px)' : '' }}
    />
  ))}
</div>`
    },
    canvas: {
      title: "Canvas Particle Proximity Connection",
      desc: "Highly-performant HTML5 canvas particle cluster creating lines between nearby particles and attracting to cursor paths.",
      code: `// Proximity calculation & Draw
const dx = mouseX - p1.x;
const dy = mouseY - p1.y;
const dist = Math.sqrt(dx*dx + dy*dy);

if (dist < 150) {
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
}`
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative selection:bg-blue-500 selection:text-white font-sans">
      <Header />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Animated gradient orbs with parallax */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '1.5s', transform: `translateY(${-scrollY * 0.15}px)` }}
        />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_10%,black_0%,transparent_100%)]" />

        {/* Mouse follower gradient */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[120px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 350}px, ${mousePosition.y - 350}px)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">

        {/* Hero Section */}
        <div ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-center items-center w-full max-w-7xl py-20 lg:py-32 overflow-hidden">
          {/* Render High Performance Interactive Background Canvas */}
          <HeroCanvas />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full px-2 lg:px-4">
            {/* Left Column (Content) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 rounded-full bg-neutral-900/60 backdrop-blur-md hover:border-blue-500/30 hover:bg-neutral-800/80 transition-all duration-300 cursor-default group">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">Open Source Component Kit</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-400 group-hover:rotate-[72deg] transition-transform duration-500" />
                  <span className="text-xs text-yellow-400 font-semibold">MIT</span>
                </div>
              </div>

              {/* Main Heading with Gradient Animation */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-none font-display select-none group/title flex flex-wrap items-center justify-center lg:justify-start gap-x-3 sm:gap-x-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 group-hover/title:from-white group-hover/title:to-zinc-300 transition-all duration-700 cursor-default">
                  SAKUGA
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[size:200%_200%] animate-gradient group-hover/title:scale-[1.02] transition-transform duration-500 cursor-default filter drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
                  _UI
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="max-w-xl text-neutral-400 text-sm md:text-base lg:text-lg leading-relaxed">
                A curated catalog of <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-sans">30+ high-performance</span> interactive components,
                dynamic templates, and visual physics animations built to copy and paste.
                <span className="text-neutral-500 text-xs mt-3 block font-mono">React 19 & Tailwind CSS v4 Compatible</span>
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/components"
                  className="group relative flex overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none text-sm font-semibold tracking-wide rounded-full py-4 px-8 items-center justify-center"
                >
                  {/* Full Border Beam */}
                  <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_320deg,#a855f7_340deg,#ec4899_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                    <div className="absolute inset-[1px] rounded-full bg-black"></div>
                  </div>

                  {/* Inner Background & Effects */}
                  <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/40 to-transparent"></div>
                    <div className="opacity-20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '10px 10px', animation: 'dots-move 8s linear infinite' }}></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/10 blur-xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-purple-500/25"></div>
                  </div>

                  <span className="relative z-10 flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Browse Components</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>

                <a
                  href="https://github.com/prateekraiger/sakuga-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 border border-white/10 bg-white/[0.02] hover:border-blue-500/20 hover:bg-neutral-900/60 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md overflow-hidden hover:scale-105"
                >
                  {/* Subtle inner radial gradient shadow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform text-neutral-300 group-hover:text-white relative z-10" />
                  <span className="text-neutral-300 group-hover:text-white transition-colors relative z-10">Star on GitHub</span>
                  <span className="ml-2 px-1.5 py-0.5 bg-neutral-800 text-[10px] text-neutral-400 border border-white/5 rounded relative z-10">Free</span>
                </a>
              </div>

              {/* Sleek Premium Badges Grid */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5 w-full max-w-xl">
                {[
                  { icon: Sparkles, label: "30+ Animations", color: "text-blue-400", border: "hover:border-blue-500/30" },
                  { icon: Zap, label: "Zero Package Bloat", color: "text-yellow-400", border: "hover:border-yellow-500/30" },
                  { icon: Package, label: "TypeScript Native", color: "text-purple-400", border: "hover:border-purple-500/30" }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className={`flex flex-col items-center lg:items-start p-3 rounded-2xl bg-neutral-900/40 border border-white/5 hover:bg-neutral-800/35 transition-all duration-300 group/stat ${stat.border}`}>
                      <Icon className={`w-4 h-4 ${stat.color} mb-1.5 group-hover/stat:scale-110 transition-transform duration-300`} />
                      <span className="text-[11px] font-medium text-neutral-300 font-mono tracking-tight">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Component Categories Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2 w-full max-w-xl">
                {componentCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={index}
                      className="group px-3 py-1.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-purple-500/30 hover:bg-neutral-900/80 transition-all duration-300 cursor-default flex items-center gap-2 hover:shadow-[0_0_15px_rgba(168,85,247,0.05)]"
                    >
                      <Icon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300" />
                      <span className="text-[11px] text-neutral-300 font-medium font-sans">{category.name}</span>
                      <span className="text-[9px] text-neutral-500 font-mono group-hover:text-purple-300 transition-colors">({category.count})</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Interactive Physics Sandbox) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
              <PhysicsSandbox />
            </div>
          </div>
        </div>

        {/* Section: Showcase Cards (Feature highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mb-32 px-4">
          {/* Card: Components */}
          <Link
            to="/components"
            className="group relative p-8 h-80 bg-neutral-900/20 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/35 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white font-display">Code Components</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow leading-relaxed">
                Explore a rich library of interactive panels, buttons, cards, and canvas visualizers designed for React developers.
              </p>
              <div className="flex items-center text-xs text-white font-bold group-hover:gap-2.5 gap-1.5 transition-all">
                <span className="tracking-widest uppercase">Explore Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Card: Templates */}
          <Link
            to="/templates"
            className="group relative p-8 h-80 bg-neutral-900/20 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/35 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <LayoutTemplate className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white font-display">SaaS Templates</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow leading-relaxed">
                View fully composed web showcases, landing pages, and responsive layout kits optimized for performance.
              </p>
              <div className="flex items-center text-xs text-white font-bold group-hover:gap-2.5 gap-1.5 transition-all">
                <span className="tracking-widest uppercase">View Showcases</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Card: Open Source */}
          <a
            href="https://github.com/prateekraiger/sakuga-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 h-80 bg-neutral-900/20 border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/35 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-500 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Github className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white font-display">100% Open Source</h2>
              <p className="text-neutral-400 text-sm mb-4 flex-grow leading-relaxed">
                Free to use under the MIT license. Clone, modify, fork, or build commercially. PRs and sponsorships are welcome.
              </p>
              <div className="flex items-center text-xs text-white font-bold group-hover:gap-2.5 gap-1.5 transition-all">
                <span className="tracking-widest uppercase">View Repository</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </a>
        </div>

        {/* Section: Live Components Playground */}
        <div id="playground" className="w-full max-w-7xl mb-32 px-4 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              Live Interactive Previews
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Play with the Effects
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Click a tab below to load the interaction prototype and review its corresponding React implementation.
            </p>
          </div>

          {/* Playground Tabs Header */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 bg-zinc-950/60 p-2 rounded-2xl border border-white/5 max-w-2xl mx-auto backdrop-blur-md">
            {[
              { id: 'spotlight', label: 'Spotlight Grid' },
              { id: 'pixel', label: 'Pixel Field' },
              { id: 'voxel', label: '3D Voxel' },
              { id: 'canvas', label: 'Canvas Connections' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePlaygroundTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activePlaygroundTab === tab.id
                    ? 'bg-white text-black shadow-md shadow-white/5'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Playground Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Live Render Area */}
            <div className="flex flex-col bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden min-h-[380px] backdrop-blur-xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.03),transparent)] pointer-events-none" />
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest ml-2">Interactive Preview</span>
                </div>
                <div className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                  Live View
                </div>
              </div>

              {/* Render Selected Playground Tab Component */}
              <div className="flex-grow flex items-center justify-center min-h-[300px]">
                {activePlaygroundTab === 'spotlight' && <PlaygroundSpotlight />}
                {activePlaygroundTab === 'pixel' && <PlaygroundPixelWave />}
                {activePlaygroundTab === 'voxel' && <PlaygroundVoxelTerrain />}
                {activePlaygroundTab === 'canvas' && <PlaygroundCanvasNetwork />}
              </div>
            </div>

            {/* Code Output Card */}
            <div className="flex flex-col bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden min-h-[380px] relative">
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                    {activePlaygroundTab === 'spotlight' && 'SpotlightGrid.tsx'}
                    {activePlaygroundTab === 'pixel' && 'PixelWave.tsx'}
                    {activePlaygroundTab === 'voxel' && 'VoxelTerrain.tsx'}
                    {activePlaygroundTab === 'canvas' && 'CanvasNetwork.tsx'}
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(playgroundData[activePlaygroundTab].code, activePlaygroundTab)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/10 transition text-[10px] font-mono uppercase tracking-widest text-neutral-300"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedId === activePlaygroundTab ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              {/* Code Area */}
              <div className="flex-grow p-6 overflow-y-auto text-left custom-scrollbar bg-black/20">
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-neutral-300 mb-1">
                    {playgroundData[activePlaygroundTab].title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-normal">
                    {playgroundData[activePlaygroundTab].desc}
                  </p>
                </div>
                <pre className="text-xs font-mono text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
                  <code>{playgroundData[activePlaygroundTab].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Features List */}
        <div id="features" className="w-full max-w-7xl mb-32 px-4 scroll-mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              Engineered for Production
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Why Choose Sakuga UI?
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Each component is engineered with meticulous attention to detail, performance benchmarks, and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorMap: Record<string, string> = {
                blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/20 text-blue-400',
                purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/20 text-purple-400',
                yellow: 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/20 text-yellow-400',
                green: 'from-green-500/10 to-green-600/10 border-green-500/20 text-green-400',
                pink: 'from-pink-500/10 to-pink-600/10 border-pink-500/20 text-pink-400',
                cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/20 text-cyan-400',
              };

              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-white/5 bg-neutral-950/20 hover:border-white/10 hover:bg-neutral-900/35 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${colorMap[feature.color].split(' ')[0]} ${colorMap[feature.color].split(' ')[1]} border ${colorMap[feature.color].split(' ')[2]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${colorMap[feature.color].split(' ')[3]}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white font-display">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Terminal CLI Quick Start */}
        <div id="how-it-works" className="w-full max-w-4xl mb-32 px-4 scroll-mt-24">
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/5 bg-neutral-950/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.03),transparent)] pointer-events-none" />

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center font-display">
                Get Started in Seconds
              </h2>
              <p className="text-neutral-400 text-center mb-8 text-sm md:text-base">
                No installations, no complex modules. Just clone the repository, run the dev server, and copy the effects.
              </p>

              {/* Terminal Mockup */}
              <div className="rounded-2xl border border-white/5 bg-black overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 bg-zinc-950/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">bash - local setup</span>
                  <div className="w-12" />
                </div>
                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs text-left text-neutral-400 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold"># 1. Clone repository</span>
                      <button
                        onClick={() => copyToClipboard("git clone https://github.com/prateekraiger/sakuga-ui.git", "git")}
                        className="text-[10px] text-neutral-600 hover:text-neutral-300 flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedId === 'git' ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-neutral-300 mt-1">git clone https://github.com/prateekraiger/sakuga-ui.git</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold"># 2. Install dependencies</span>
                      <button
                        onClick={() => copyToClipboard("pnpm install", "install")}
                        className="text-[10px] text-neutral-600 hover:text-neutral-300 flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedId === 'install' ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-neutral-300 mt-1">pnpm install</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-400 font-semibold"># 3. Boot dev environment</span>
                      <button
                        onClick={() => copyToClipboard("pnpm dev", "dev")}
                        className="text-[10px] text-neutral-600 hover:text-neutral-300 flex items-center gap-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedId === 'dev' ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-neutral-300 mt-1">pnpm dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Open Source Pricing / Sponsorship */}
        <div id="pricing" className="w-full max-w-7xl mb-32 px-4 scroll-mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              <Globe className="w-3.5 h-3.5 text-pink-400" />
              Sponsorship & Access
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
              Transparent Plans
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              Sakuga UI is completely free and open source. Support the creator to help maintain and release more effects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="flex flex-col p-8 rounded-3xl border border-white/5 bg-neutral-950/20 backdrop-blur-md relative overflow-hidden">
              <div className="mb-6">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">Community</span>
                <h3 className="text-2xl font-bold text-white font-display">MIT License</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">$0</span>
                  <span className="text-neutral-500 text-xs font-mono">/ forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-neutral-400 flex-grow">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>30+ Components Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Copy and paste ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Commercial use allowed</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>React 19 & Tailwind v4</span>
                </li>
              </ul>
              <Link
                to="/components"
                className="w-full text-center px-4 py-3 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-neutral-200 transition"
              >
                Explore Components
              </Link>
            </div>

            {/* Plan 2 */}
            <div className="flex flex-col p-8 rounded-3xl border border-purple-500/20 bg-neutral-950/40 backdrop-blur-md relative overflow-hidden shadow-xl shadow-purple-500/5">
              <div className="absolute top-0 right-0 bg-purple-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl font-mono">
                Popular
              </div>
              <div className="mb-6">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">Developer</span>
                <h3 className="text-2xl font-bold text-white font-display">Sponsor</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">$10</span>
                  <span className="text-neutral-500 text-xs font-mono">/ month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-neutral-300 flex-grow">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Everything in MIT License</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Access to premium templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Sponsor badge on GitHub</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Priority Discord Channel</span>
                </li>
              </ul>
              <a
                href="https://github.com/prateekraiger/sakuga-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition"
              >
                Sponsor on GitHub
              </a>
            </div>

            {/* Plan 3 */}
            <div className="flex flex-col p-8 rounded-3xl border border-white/5 bg-neutral-950/20 backdrop-blur-md relative overflow-hidden">
              <div className="mb-6">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">Enterprise</span>
                <h3 className="text-2xl font-bold text-white font-display">Custom</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-display">Contact</span>
                  <span className="text-neutral-500 text-xs font-mono">/ project</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-neutral-400 flex-grow">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Custom component design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Dedicated support SLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Integration consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Unlimited developer seats</span>
                </li>
              </ul>
              <a
                href="mailto:contact@prateekraiger.com"
                className="w-full text-center px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-7xl px-4 py-16 border-t border-white/5 bg-neutral-950/40 rounded-t-3xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link
                to="/"
                className="font-display font-black text-2xl tracking-tighter text-white hover:opacity-90 transition flex items-center gap-1 mb-4"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SAKUGA</span>
                <span className="text-neutral-500 font-medium">_UI</span>
              </Link>
              <p className="text-xs text-neutral-500 max-w-sm leading-relaxed mb-4">
                A premium repository of open-source interactive physics animations and layout primitives. Built on modern tech stack paradigms.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/prateekraiger/sakuga-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition p-2 bg-white/5 border border-white/5 hover:border-white/10 rounded-lg"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to="/" className="text-neutral-500 hover:text-white transition">Home</Link></li>
                <li><Link to="/components" className="text-neutral-500 hover:text-white transition">Components</Link></li>
                <li><Link to="/templates" className="text-neutral-500 hover:text-white transition">Templates</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">Sections</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#features" className="text-neutral-500 hover:text-white transition">Features</a></li>
                <li><a href="#playground" className="text-neutral-500 hover:text-white transition">Playground</a></li>
                <li><a href="#how-it-works" className="text-neutral-500 hover:text-white transition">CLI Quick Start</a></li>
                <li><a href="#pricing" className="text-neutral-500 hover:text-white transition">Pricing Plans</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
            <div className="text-center md:text-left">
              <p className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1 font-mono">Sakuga UI © 2025</p>
              <p className="text-[11px] text-neutral-500 font-sans">Crafted with passion by Prateek Raiger</p>
            </div>
            <p className="text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
              MIT License • Commercial OK
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
