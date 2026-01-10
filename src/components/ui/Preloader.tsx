import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 1;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoaded(true);
        setTimeout(onComplete, 1000); // Wait for transition to finish
      }, 200);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.86,0,0.07,1)] ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-white">
        {progress}%
      </div>
      <div className="w-48 h-[1px] bg-neutral-800 relative overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;