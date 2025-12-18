import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Code } from 'lucide-react';

interface ComponentViewProps {
  title: string;
  sourceCode: string;
  children: React.ReactNode;
}

interface OutletContextType {
  onShowCode: (code: string, title: string) => void;
}

const ComponentView: React.FC<ComponentViewProps> = ({ title, sourceCode, children }) => {
  const { onShowCode } = useOutletContext<OutletContextType>();

  return (
    <div className="relative w-full h-full group">
        {/* Floating Code Button */}
        <div className="absolute top-4 right-4 z-50">
             <button
                onClick={() => onShowCode(sourceCode, title)}
                className="flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg group-hover:opacity-100 opacity-50"
                title="View Code"
             >
                <Code size={20} />
             </button>
        </div>
        {children}
    </div>
  );
};

export default ComponentView;
