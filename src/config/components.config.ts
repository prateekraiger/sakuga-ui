import { LucideIcon, LayoutGrid, Sparkles, Wand2, Layout, Eye, Box, DollarSign, FileText, Video, Type, Grid2X2 } from 'lucide-react';

// Component category types
export type ComponentCategory = 'heroes' | 'effects' | 'content' | 'layout' | 'media' | 'ui';

// Component metadata interface
export interface ComponentMeta {
  id: string;
  name: string;
  path: string;
  category: ComponentCategory;
  icon: LucideIcon;
  description?: string;
  tags?: string[];
  featured?: boolean;
}

// Component registry - Single source of truth for all components
export const COMPONENT_REGISTRY: ComponentMeta[] = [
  // === HEROES ===
  {
    id: 'nebula-hero',
    name: 'Nebula Hero',
    path: '/components/hero-1',
    category: 'heroes',
    icon: Sparkles,
    description: 'Cosmic-themed hero with floating particles',
    featured: true,
  },
  {
    id: 'flux-hero',
    name: 'Flux Hero',
    path: '/components/flux-hero',
    category: 'heroes',
    icon: Sparkles,
    description: '3D-style with floating glass panels',
  },
  {
    id: 'growth-hero',
    name: 'Growth Hero',
    path: '/components/growth-hero',
    category: 'heroes',
    icon: Sparkles,
    description: 'Clean corporate design',
  },
  {
    id: 'helios-hero',
    name: 'Helios Hero',
    path: '/components/helios-hero',
    category: 'heroes',
    icon: Sparkles,
    description: 'Warm sun-drenched aesthetic',
  },
  {
    id: 'quantum-hero',
    name: 'Quantum Hero',
    path: '/components/quantum-hero',
    category: 'heroes',
    icon: Sparkles,
    description: 'Physics-based particle effects',
  },
  {
    id: 'tania-landing',
    name: 'House of Tania',
    path: '/components/tania-landing',
    category: 'heroes',
    icon: Sparkles,
    description: 'Luxury fashion landing page',
  },

  // === EFFECTS ===
  {
    id: 'canvas-network',
    name: 'Canvas Network',
    path: '/components/canvas-network',
    category: 'effects',
    icon: Wand2,
    description: 'Animated particle connections',
  },
  {
    id: 'focus-lens',
    name: 'Focus Lens',
    path: '/components/focus-lens',
    category: 'effects',
    icon: Eye,
    description: 'Magnifying glass cursor effect',
  },
  {
    id: 'fracture-glass',
    name: 'Fracture Glass',
    path: '/components/fracture-glass',
    category: 'effects',
    icon: Wand2,
    description: 'Shattered glass on interaction',
  },
  {
    id: 'horizontal-scroll',
    name: 'Horizontal Scroll',
    path: '/components/horizontal-scroll',
    category: 'effects',
    icon: Wand2,
    description: 'Smooth horizontal scrolling',
  },
  {
    id: 'liquid-distortion',
    name: 'Liquid Distortion',
    path: '/components/liquid-distortion',
    category: 'effects',
    icon: Wand2,
    description: 'WebGL fluid distortion',
  },
  {
    id: 'magnetic-section',
    name: 'Magnetic Section',
    path: '/components/magnetic-section',
    category: 'effects',
    icon: Wand2,
    description: 'Magnetic cursor attraction',
  },
  {
    id: 'pixel-wave',
    name: 'Pixel Wave',
    path: '/components/pixel-wave',
    category: 'effects',
    icon: Wand2,
    description: 'Retro pixelated wave effect',
  },
  {
    id: 'spotlight-grid',
    name: 'Spotlight Grid',
    path: '/components/spotlight-grid',
    category: 'effects',
    icon: Wand2,
    description: 'Illuminating grid on hover',
  },
  {
    id: 'velocity-text',
    name: 'Velocity Text',
    path: '/components/velocity-text',
    category: 'effects',
    icon: Type,
    description: 'Velocity-based text animations',
  },
  {
    id: 'visual-mask',
    name: 'Visual Mask',
    path: '/components/visual-mask',
    category: 'effects',
    icon: Wand2,
    description: 'Image masking effects',
  },
  {
    id: 'voxel-terrain',
    name: 'Voxel Terrain',
    path: '/components/voxel-terrain',
    category: 'effects',
    icon: Box,
    description: '3D voxel-based terrain',
  },

  // === CONTENT ===
  {
    id: 'repository',
    name: 'Repository',
    path: '/components/repository',
    category: 'content',
    icon: FileText,
    description: 'GitHub-style repository display',
  },
  {
    id: 'accordion',
    name: 'Accordion',
    path: '/components/accordion',
    category: 'content',
    icon: FileText,
    description: 'Smooth expanding accordions',
  },
  {
    id: 'pricing',
    name: 'Pricing Section',
    path: '/components/pricing',
    category: 'content',
    icon: DollarSign,
    description: 'Beautiful pricing cards',
    featured: true,
  },

  // === LAYOUT ===
  {
    id: 'bento-1',
    name: 'Bento Grid',
    path: '/components/bento-1',
    category: 'layout',
    icon: LayoutGrid,
    description: 'Responsive grid for dashboards',
  },
  {
    id: 'bento-2',
    name: 'Analytics Bento',
    path: '/components/bento-2',
    category: 'layout',
    icon: Grid2X2,
    description: 'Data-heavy layout with charts',
  },
  {
    id: 'header',
    name: 'Glass Header',
    path: '/components/header',
    category: 'layout',
    icon: Layout,
    description: 'Frosted glass navigation bar',
  },
  {
    id: 'cta',
    name: 'CTA Section',
    path: '/components/cta',
    category: 'layout',
    icon: Layout,
    description: 'High-conversion call-to-actions',
  },

  // === MEDIA ===
  {
    id: 'video-expand',
    name: 'Video Expand',
    path: '/components/video-expand',
    category: 'media',
    icon: Video,
    description: 'Expandable video player',
  },

  // === UI ===
  {
    id: 'marquee',
    name: 'Marquee',
    path: '/components/marquee',
    category: 'ui',
    icon: Type,
    description: 'Infinite scrolling text',
  },
];

// Helper functions to get components by category
export const getComponentsByCategory = (category: ComponentCategory): ComponentMeta[] => {
  return COMPONENT_REGISTRY.filter(comp => comp.category === category);
};

export const getAllCategories = (): ComponentCategory[] => {
  return ['heroes', 'effects', 'content', 'layout', 'media', 'ui'];
};

export const getCategoryLabel = (category: ComponentCategory): string => {
  const labels: Record<ComponentCategory, string> = {
    heroes: 'Hero Sections',
    effects: 'Visual Effects',
    content: 'Content Sections',
    layout: 'Layout Components',
    media: 'Media Components',
    ui: 'UI Elements',
  };
  return labels[category];
};

export const getFeaturedComponents = (): ComponentMeta[] => {
  return COMPONENT_REGISTRY.filter(comp => comp.featured);
};

export const getComponentById = (id: string): ComponentMeta | undefined => {
  return COMPONENT_REGISTRY.find(comp => comp.id === id);
};
