import React from 'react';
import { Code2 } from 'lucide-react';

interface SectionLabelProps {
  number: string;
  text: string;
  onCode?: () => void;
  textColor?: string;
  borderColor?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ 
  number, 
  text, 
  onCode,
  textColor = "text-neutral-500",
  borderColor = "border-neutral-800"
}) => {
  return (
    <div className="absolute top-6 left-6 z-20 flex gap-3 items-center">
      <div className={`font-display text-[10px] tracking-[0.1em] ${textColor} border ${borderColor} px-2 py-1 rounded bg-black/50 backdrop-blur-sm uppercase`}>
        [ {number}. {text} ]
      </div>
      {onCode && (
        <button 
          onClick={onCode}
          className="group flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded hover:bg-white hover:text-black transition-all duration-300"
        >
          <Code2 className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          <span className="text-[9px] font-bold tracking-widest uppercase opacity-80">Code</span>
        </button>
      )}
    </div>
  );
};

export default SectionLabel;