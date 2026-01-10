import React from 'react';

const Marquee = () => {
    const items = ["DIGITAL", "CREATIVE", "AGENCY", "DESIGN", "DEVELOPMENT", "DIGITAL", "CREATIVE", "AGENCY", "DESIGN", "DEVELOPMENT"];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/20 py-10">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {items.map((item, index) => (
            <span key={index} className="mx-8 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white opacity-50">
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee absolute top-10 left-0">
          {items.map((item, index) => (
            <span key={index + items.length} className="mx-8 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white opacity-50">
              {item}
            </span>
          ))}
        </div>
      </div>
       <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
