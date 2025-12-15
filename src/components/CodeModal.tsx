import React, { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  code: string;
  title: string;
}

const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose, code, title }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-[fadeUp_0.3s_ease-out]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#161616]">
          <h3 className="font-display font-bold text-white tracking-wide">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5 text-neutral-400" />
          </button>
        </div>

        {/* Code Area */}
        <div className="flex-1 overflow-auto p-6 bg-[#0a0a0a] custom-scrollbar">
          <pre className="text-xs md:text-sm font-mono text-neutral-400 whitespace-pre-wrap break-all leading-relaxed">
            {code}
          </pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-[#161616] flex justify-end">
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md text-xs font-bold hover:bg-neutral-200 transition-colors"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'COPIED' : 'COPY CODE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeModal;