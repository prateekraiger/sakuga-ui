import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="fixed bottom-0 left-0 w-full h-[80vh] z-0 flex items-center justify-center bg-black text-white pointer-events-none">
      <div className="max-w-7xl w-full px-6 flex flex-col items-center text-center">
        <h2 className="text-[15vw] font-display font-bold leading-none tracking-tighter text-neutral-800">
          SAKUGA
        </h2>
        <div className="mt-20 text-neutral-600 text-xs tracking-widest uppercase">
          © 2024 Sakuga UI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;