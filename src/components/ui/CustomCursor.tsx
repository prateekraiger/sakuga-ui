import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${mouseX}px`;
        cursorDotRef.current.style.top = `${mouseY}px`;
      }

      // Check hover state via DOM traversal to avoid React Context overhead for cursor
      const target = e.target as HTMLElement;
      const hoverable = target.closest('.hoverable, button, a, input, textarea');
      setIsHovered(!!hoverable);
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      if (cursorCircleRef.current) {
        cursorCircleRef.current.style.left = `${cursorX}px`;
        cursorCircleRef.current.style.top = `${cursorY}px`;
      }
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999]"
      />
      <div 
        ref={cursorCircleRef}
        className={`fixed top-0 left-0 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-all duration-300 ease-out
          ${isHovered ? 'w-20 h-20 bg-white/5 backdrop-blur-[2px] border-transparent' : 'w-10 h-10'}
        `}
      />
    </>
  );
};

export default CustomCursor;