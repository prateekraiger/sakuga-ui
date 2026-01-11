import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/layouts';
import { Copy, X, Code2 } from 'lucide-react';

interface ShowcaseLayoutProps {
  codeString?: string;
  codeTitle?: string;
  isCodeOpen?: boolean;
  onCloseCode?: () => void;
  onShowCode?: (code: string, title: string) => void;
}

const ShowcaseLayout: React.FC<ShowcaseLayoutProps> = ({
  codeString,
  codeTitle,
  isCodeOpen,
  onCloseCode,
  onShowCode,
}) => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  // Sidebar Collapse State
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  // If props are provided (for the route wrapper usage), use them
  // Otherwise manage local state (for standalone usage if any)

  const handleCloseCode = () => {
    if (onCloseCode) {
      onCloseCode();
    } else {
      setModalOpen(false);
    }
  };

  const handleShowCode = (code: string, title: string) => {
    if (onShowCode) {
      onShowCode(code, title);
    } else {
      setModalCode(code);
      setModalTitle(title);
      setModalOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* CustomCursor and noise-overlay would go here if global */}

      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <main
        className={`flex-1 relative z-10 w-full min-h-screen overflow-x-hidden transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'ml-20' : 'ml-64'
        } ${isCodeOpen ? 'mr-96' : ''}`}
      >
        <div className="w-full h-full">
            <Outlet context={{ onShowCode: handleShowCode }} />
        </div>
      </main>

      {/* Right Side Code Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-96 bg-[#0a0a0a] border-l border-white/10 z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
            isCodeOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0a0a0a]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="font-mono text-sm font-medium text-white/90">{codeTitle || 'Source Code'}</span>
                </div>
                <button
                    onClick={handleCloseCode}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
                >
                   <X size={16} className="text-white/50 group-hover:text-white" />
                </button>
            </div>

            <div className="flex-1 overflow-auto custom-scrollbar bg-[#050505]">
                <div className="p-4">
                  <pre className="font-mono text-xs leading-relaxed text-zinc-400 whitespace-pre-wrap">
                    <code>{codeString}</code>
                  </pre>
                </div>
            </div>

             <div className="p-4 border-t border-white/10 bg-[#0a0a0a]">
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(codeString || '');
                        // Could add toast here
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                >
                   <Copy size={16} />
                   Copy Snippet
                </button>
            </div>
        </div>
      </aside>
    </div>
  );
};

export default ShowcaseLayout;
