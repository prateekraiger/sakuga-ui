
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../../components/CustomCursor';
import { X, Copy, Check } from 'lucide-react';

interface ShowcaseLayoutProps {
  codeString: string;
  codeTitle: string;
  isCodeOpen: boolean;
  onCloseCode: () => void;
}

const ShowcaseLayout: React.FC<ShowcaseLayoutProps> = ({
  codeString,
  codeTitle,
  isCodeOpen,
  onCloseCode
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-30 z-0" />

      <Sidebar />

      <main className={`flex-1 ml-64 relative z-10 w-full min-h-screen overflow-x-hidden transition-all duration-300 ${isCodeOpen ? 'mr-96' : ''}`}>
        <div className="w-full h-full p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Right Side Code Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-96 bg-[#0a0a0a] border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${
          isCodeOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
            <div>
              <h3 className="font-bold text-lg text-white">{codeTitle || 'Component Code'}</h3>
              <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Source</p>
            </div>
            <button
              onClick={onCloseCode}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-neutral-400" />
            </button>
          </div>

          {/* Code Content */}
          <div className="flex-1 overflow-y-auto p-6 font-mono text-xs text-neutral-300 leading-relaxed custom-scrollbar">
            <pre className="whitespace-pre-wrap">{codeString}</pre>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY CODE</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ShowcaseLayout;
