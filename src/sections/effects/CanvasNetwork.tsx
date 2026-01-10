import React, { useEffect, useRef } from 'react';
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

export default CanvasNetwork;