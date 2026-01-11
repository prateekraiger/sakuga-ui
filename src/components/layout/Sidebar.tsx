import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Home,
  ChevronDown,
  ChevronRight,
  LayoutTemplate,
  Sparkles,
  FileText,
  Grid,
  Image as ImageIcon,
  MousePointer2,
  PanelLeftClose,
  PanelLeftOpen,
  Box
} from 'lucide-react';
import { COMPONENT_REGISTRY, ComponentCategory, getCategoryLabel, ComponentMeta } from '../../config/components.config';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<ComponentCategory>>(
    new Set(['heroes', 'layout', 'effects', 'content', 'media', 'ui'])
  );

  const toggleCategory = (category: ComponentCategory) => {
    // If collapsed, opening a category should expand the sidebar?
    // Or maybe we use a popover? For now, let's keep it simple.
    // If sidebar is collapsed, we might not show sub-items in the same way.

    if (isCollapsed) {
        onToggle(); // Auto-expand if clicking to toggle category from collapsed state (if we allowed that)
        return;
    }

    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const categories: ComponentCategory[] = ['heroes', 'effects', 'content', 'layout', 'media', 'ui'];

  const categoryIcons: Record<ComponentCategory, React.ElementType> = {
    heroes: LayoutTemplate,
    effects: Sparkles,
    content: FileText,
    layout: Grid,
    media: ImageIcon,
    ui: MousePointer2
  };

  // Group components by category
  const componentsByCategory = COMPONENT_REGISTRY.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<ComponentCategory, ComponentMeta[]>);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#0a0a0a] border-r border-white/10 z-50 transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
        {!isCollapsed && (
             <div className="flex items-center gap-2 overflow-hidden">
                <Box className="w-6 h-6 text-white" />
                <span className="font-bold text-lg text-white tracking-tight">Sakuga</span>
             </div>
        )}
        <button
            onClick={onToggle}
            className={`p-2 text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
            {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar py-4 space-y-1">

        {/* Home Link */}
        <div className="px-2">
            <NavLink
                to="/components"
                end
                className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group
                    ${isActive
                        ? 'bg-white text-black font-medium'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                    ${isCollapsed ? 'justify-center' : ''}
                `}
            >
                <Home size={18} />
                {!isCollapsed && <span>Overview</span>}
            </NavLink>
        </div>

        {/* Categories */}
        <div className="mt-6">
            {!isCollapsed && (
                <div className="px-5 mb-2 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                    Components
                </div>
            )}

            {categories.map(category => {
                const Icon = categoryIcons[category];
                const components = componentsByCategory[category] || [];
                const isExpanded = expandedCategories.has(category);
                const isActiveCategory = components.some(c => location.pathname === c.path);

                if (isCollapsed) {
                    // Collapsed View: Show Category Icons with Tooltip/Active state
                    return (
                        <div key={category} className="px-2 mb-1 relative group/item">
                           <button
                             onClick={onToggle} // Expand on click
                             className={`w-full flex justify-center p-3 rounded-lg transition-colors ${
                                isActiveCategory ? 'text-white bg-white/10' : 'text-zinc-500 hover:text-white hover:bg-white/5'
                             }`}
                           >
                             <Icon size={20} />
                           </button>
                           {/* Tooltip */}
                           <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover/item:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                                {getCategoryLabel(category)}
                           </div>
                        </div>
                    );
                }

                // Expanded View
                return (
                    <div key={category} className="px-2 mb-1">
                        <button
                            onClick={() => toggleCategory(category)}
                            className={`
                                w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group
                                ${isActiveCategory ? 'text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} className={isActiveCategory ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'} />
                                <span className="text-sm">{getCategoryLabel(category)}</span>
                            </div>
                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                        </button>

                        <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                {components.map(component => (
                                    <NavLink
                                        key={component.id}
                                        to={component.path}
                                        className={({ isActive }) => `
                                            flex items-center gap-2 pl-10 pr-3 py-1.5 text-sm rounded-md transition-colors border-l border-transparent ml-3
                                            ${isActive
                                                ? 'text-white border-white bg-white/5'
                                                : 'text-zinc-500 hover:text-zinc-300 hover:border-white/20'}
                                        `}
                                    >
                                        {component.name}
                                        {component.featured && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-auto" />
                                        )}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Templates Section (New) */}
         <div className="mt-6 border-t border-white/5 pt-4">
             {!isCollapsed && (
                <div className="px-5 mb-2 text-[10px] font-mono uppercase tracking-widest text-zinc-600">
                    Templates
                </div>
            )}
             <div className="px-2">
                <NavLink
                    to="/templates/maskoko"
                    className={({ isActive }) => `
                        flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group
                        ${isActive
                            ? 'bg-white text-black font-medium'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'}
                        ${isCollapsed ? 'justify-center' : ''}
                    `}
                >
                    <LayoutTemplate size={18} />
                    {!isCollapsed && <span>MasKoko Agency</span>}
                </NavLink>
             </div>
         </div>

      </div>

      {/* Footer / User */}
      <div className="p-4 border-t border-white/10">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                PR
            </div>
            {!isCollapsed && (
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium text-white truncate">Prateek Raiger</span>
                    <span className="text-xs text-zinc-500 truncate">Pro Plan</span>
                </div>
            )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
