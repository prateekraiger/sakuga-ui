
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ChevronDown, ChevronRight } from 'lucide-react';
import { COMPONENT_REGISTRY, getAllCategories, getComponentsByCategory, getCategoryLabel, ComponentCategory } from '../../config/components.config';

const Sidebar = () => {
  // Track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Set<ComponentCategory>>(
    new Set(['heroes', 'layout', 'effects']) // Start with some categories expanded
  );

  const toggleCategory = (category: ComponentCategory) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const categories = getAllCategories();

  return (
    <aside className="w-64 h-screen bg-[#050505] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <h1 className="text-xl font-bold tracking-tighter text-white">
          SAKUGA<span className="text-neutral-500">_UI</span>
        </h1>
        <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">Component Library</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {/* Back to Home */}
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive ? 'bg-white text-black' : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Home className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest">Home</span>
          </NavLink>
        </div>

        {/* Component Categories */}
        {categories.map((category) => {
          const components = getComponentsByCategory(category);
          const isExpanded = expandedCategories.has(category);
          const categoryLabel = getCategoryLabel(category);

          return (
            <div key={category} className="space-y-1">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-mono uppercase text-neutral-500 hover:text-neutral-300 tracking-widest transition-colors"
              >
                <span>{categoryLabel}</span>
                <span className="text-neutral-600">
                  {isExpanded ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </span>
              </button>

              {/* Category Items */}
              {isExpanded && (
                <div className="space-y-0.5 animate-[fadeIn_0.2s_ease-out]">
                  {components.map((component) => {
                    const Icon = component.icon;
                    return (
                      <NavLink
                        key={component.id}
                        to={component.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all group relative ${
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'text-neutral-400 hover:text-white hover:bg-white/5'
                          }`
                        }
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{component.name}</span>
                        {component.featured && (
                          <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        )}
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Component Count */}
        <div className="px-4 pt-4 border-t border-white/5">
          <p className="text-[10px] text-neutral-600 font-mono">
            {COMPONENT_REGISTRY.length} COMPONENTS
          </p>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-xs text-neutral-400">
            Built with <span className="text-white">React + Tailwind</span>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
