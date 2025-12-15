import React from 'react';
import SectionLabel from '../components/SectionLabel';

const Accordion: React.FC = () => {
  const items = [
    { title: "Structure", img: "https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&w=2500" },
    { title: "Robotics", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2600" },
    { title: "Network", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670" },
    { title: "Orbit", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative">
      <SectionLabel number="09" text="FLEX ACCORDION" />
      
      <div className="mb-12 flex justify-between items-end">
        <h3 className="text-4xl font-display font-bold text-white">Archives</h3>
        <p className="text-neutral-500 text-sm">Hover to expand</p>
      </div>

      <div className="flex flex-col md:flex-row h-[70vh] gap-4">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="flex-1 relative overflow-hidden rounded-xl transition-[flex] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[3] group grayscale hover:grayscale-0 cursor-pointer hoverable"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute bottom-8 left-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <h4 className="text-2xl font-bold text-white font-display">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;