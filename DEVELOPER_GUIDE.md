# Sakuga UI - Developer Guide

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Adding New Components](#adding-new-components)
- [Component Categories](#component-categories)
- [Best Practices](#best-practices)
- [Code Organization](#code-organization)

## 🏗️ Project Structure

```
sakuga-ui/
├── src/
│   ├── config/
│   │   └── components.config.ts    # Central component registry
│   ├── components/
│   │   ├── bento/                  # Bento grid layouts
│   │   ├── layout/                 # Layout components (Header, Sidebar, Footer)
│   │   └── ui/                     # UI primitives (Buttons, Modals, etc.)
│   ├── sections/                   # Full-section components
│   │   ├── content/                # Content sections (Repository, Accordion, Pricing)
│   │   ├── effects/                # Visual effects (Canvas, Fracture, Liquid, etc.)
│   │   ├── media/                  # Media components (VideoExpand)
│   │   └── ui/                     # UI sections (Marquee)
│   │   └── (Hero files)            # Hero sections at root level
│   ├── pages/                      # Page components
│   ├── layouts/                    # Layout wrappers
│   ├── data/                       # Component source code exports
│   ├── styles/                     # Global styles
│   └── types/                      # TypeScript type definitions
├── public/                         # Static assets
└── App.tsx                         # Main app routing
```

## ✨ Adding New Components

Follow these steps to add a new component to Sakuga UI:

### Step 1: Create Your Component

Create your component file in the appropriate directory:

```typescript
// src/sections/effects/MyNewEffect.tsx
import React from 'react';

interface MyNewEffectProps {
  onShowCode?: (code: string, title: string) => void;
}

const MyNewEffect: React.FC<MyNewEffectProps> = ({ onShowCode }) => {
  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center">
      {/* Your component code here */}
      <h2 className="text-6xl font-bold text-white">My New Effect</h2>
    </section>
  );
};

export default MyNewEffect;
```

### Step 2: Create Code Export

Create a code export file in `src/data/component-source.ts`:

```typescript
// Add to src/data/component-source.ts
export const MY_NEW_EFFECT_CODE = `
import React from 'react';

const MyNewEffect: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#050505]">
      <h2 className="text-6xl font-bold text-white">My New Effect</h2>
    </section>
  );
};

export default MyNewEffect;
`;
```

### Step 3: Register in Component Config

Add your component to the registry in `src/config/components.config.ts`:

```typescript
// src/config/components.config.ts
import { Wand2 } from 'lucide-react';

export const COMPONENT_REGISTRY: ComponentMeta[] = [
  // ... existing components
  {
    id: 'my-new-effect',
    name: 'My New Effect',
    path: '/components/my-new-effect',
    category: 'effects',
    icon: Wand2,
    description: 'Description of your effect',
    featured: false, // Set to true for featured components
  },
  // ... rest of components
];
```

### Step 4: Add Route in App.tsx

Add your component route in `App.tsx`:

```typescript
// App.tsx
import MyNewEffect from './src/sections/effects/MyNewEffect';
import { MY_NEW_EFFECT_CODE } from './src/data/component-source';

// In the Routes section:
<Route path="my-new-effect" element={
  <ComponentView title="My New Effect" sourceCode={MY_NEW_EFFECT_CODE}>
    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
      <MyNewEffect onShowCode={handleShowCode} />
    </div>
  </ComponentView>
} />
```

### Step 5: Test Your Component

1. Start the dev server: `npm run dev`
2. Navigate to `/components` in your browser
3. Check if your component appears in the sidebar
4. Click on it to view and test the component
5. Verify the code modal works correctly

## 📂 Component Categories

Choose the right category for your component:

### **heroes**
Full-screen hero sections for landing pages
- Icon: `Sparkles`
- Examples: Nebula Hero, Flux Hero, Quantum Hero

### **effects**
Visual effects and interactive animations
- Icon: `Wand2`, `Eye`, `Box`
- Examples: Liquid Distortion, Fracture Glass, Canvas Network

### **content**
Content-focused sections
- Icon: `FileText`, `DollarSign`
- Examples: Repository, Accordion, Pricing Section

### **layout**
Layout components and grids
- Icon: `LayoutGrid`, `Grid2X2`, `Layout`
- Examples: Bento Grid, Header, CTA Section

### **media**
Media-related components
- Icon: `Video`, `Image`
- Examples: Video Expand, Image Gallery

### **ui**
UI elements and primitives
- Icon: `Type`, `Button`
- Examples: Marquee, Buttons, Cards

## 🎨 Best Practices

### 1. Component Structure
```typescript
// Always use TypeScript
interface ComponentProps {
  onShowCode?: (code: string, title: string) => void;
  className?: string;
}

const Component: React.FC<ComponentProps> = ({ onShowCode, className }) => {
  return (
    <section className={`relative min-h-screen bg-[#050505] ${className}`}>
      {/* Component content */}
    </section>
  );
};

export default Component;
```

### 2. Styling Guidelines
- Use Tailwind CSS for all styling
- Follow the dark theme: `bg-[#050505]`, `text-white`, `border-white/5`
- Keep consistent spacing: `p-8`, `gap-6`, `space-y-4`
- Use the font display class for headings: `font-display`

### 3. Animation Classes
Available animation utilities:
- `reveal-hidden` / `reveal-visible` - Fade in on scroll
- `animate-[fadeSlideIn_1.0s_ease-out]` - Fade and slide in
- `animate-[fadeIn_0.2s_ease-out]` - Simple fade in
- `animate-[spin_10s_linear_infinite]` - Slow rotation

### 4. Icons
Always use Lucide React icons:
```typescript
import { Sparkles, Wand2, Eye } from 'lucide-react';
```

### 5. Code Modal Integration
If your component can show code:
```typescript
<SectionLabel
  number="01"
  text="COMPONENT NAME"
  onCode={() => onShowCode(CODE_STRING, "Component Title")}
/>
```

## 🔄 Code Organization

### File Naming
- Components: PascalCase (e.g., `MyComponent.tsx`)
- Code exports: PascalCase with `Code` suffix (e.g., `MyComponentCode.ts`)
- Config files: camelCase (e.g., `components.config.ts`)

### Import Order
1. React imports
2. Third-party libraries
3. Local components
4. Types
5. Styles

```typescript
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { ComponentMeta } from '../types';
import '../styles/component.css';
```

### Export Pattern
```typescript
// Named exports for utilities
export const helperFunction = () => {};

// Default export for components
export default Component;
```

## 🚀 Quick Reference

### Add a Hero Section
```bash
1. Create: src/sections/MyHero.tsx
2. Create: src/sections/MyHeroCode.ts
3. Register: src/config/components.config.ts (category: 'heroes')
4. Route: App.tsx
5. Export code: src/data/component-source.ts
```

### Add an Effect
```bash
1. Create: src/sections/effects/MyEffect.tsx
2. Register: src/config/components.config.ts (category: 'effects')
3. Route: App.tsx
4. Export code: src/data/component-source.ts
```

### Add a Layout Component
```bash
1. Create: src/components/layout/MyLayout.tsx
2. Register: src/config/components.config.ts (category: 'layout')
3. Route: App.tsx
4. Export code: src/data/component-source.ts
```

## 🐛 Common Issues

### Component Not Showing in Sidebar
- Check if it's registered in `src/config/components.config.ts`
- Verify the path matches the route in `App.tsx`
- Make sure you've restarted the dev server

### Code Modal Not Working
- Ensure `onShowCode` prop is passed to component
- Check if code is exported in `src/data/component-source.ts`
- Verify the code string is properly escaped

### Styling Issues
- Check if Tailwind classes are correct
- Verify custom CSS is imported in `src/styles/index.css`
- Use browser dev tools to inspect applied styles

## 📝 Commit Guidelines

When adding a new component:
```bash
git add .
git commit -m "feat(components): add MyNewComponent to effects category

- Added MyNewComponent with smooth animation
- Registered in component registry
- Added route and code export
- Updated documentation"
```

## 🎯 Future Additions

The component registry system makes it easy to:
- Add new categories
- Filter components by tags
- Create featured component sections
- Build component search functionality
- Generate automatic documentation

---

**Happy coding! 🎨✨**
