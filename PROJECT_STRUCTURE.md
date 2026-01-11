# Sakuga UI - Project Structure

## 📁 Organized Folder Structure

This project follows a clear, intuitive folder structure designed for easy navigation and maintainability.

```
sakuga-ui/
├── src/
│   ├── components/          # All reusable components organized by category
│   │   ├── heroes/         # Hero section components
│   │   │   ├── NebulaHero.tsx
│   │   │   ├── FluxHero.tsx
│   │   │   ├── GrowthHero.tsx
│   │   │   ├── HeliosHero.tsx
│   │   │   ├── QuantumHero.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── *Code.ts   # Source code exports
│   │   │   └── index.ts   # Barrel export
│   │   │
│   │   ├── content/        # Content components
│   │   │   ├── Accordion.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── Repository.tsx
│   │   │   ├── *Code.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── effects/        # Visual effects components
│   │   │   ├── CanvasNetwork.tsx
│   │   │   ├── FocusLens.tsx
│   │   │   ├── FractureGlass.tsx
│   │   │   ├── HorizontalScroll.tsx
│   │   │   ├── LiquidDistortion.tsx
│   │   │   ├── MagneticSection.tsx
│   │   │   ├── PixelWave.tsx
│   │   │   ├── SpotlightGrid.tsx
│   │   │   ├── VelocityText.tsx
│   │   │   ├── VisualMask.tsx
│   │   │   ├── VoxelTerrain.tsx
│   │   │   ├── *Code.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── media/          # Media components
│   │   │   ├── VideoExpand.tsx
│   │   │   ├── VideoExpandCode.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── layouts/        # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Bento1.tsx
│   │   │   ├── Bento2.tsx
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── *Code.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/             # UI primitives
│   │   │   ├── CTA.tsx
│   │   │   ├── CodeModal.tsx
│   │   │   ├── ComponentView.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Preloader.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── *Code.ts
│   │   │   └── index.ts
│   │   │
│   │   └── templates/      # Full template components
│   │       ├── TaniaLanding.tsx
│   │       ├── MasKokoLanding.tsx
│   │       ├── *Code.ts
│   │       └── index.ts
│   │
│   ├── pages/              # Page components
│   │   ├── Landing.tsx
│   │   ├── AetherTemplate.tsx
│   │   └── MasKokoTemplate.tsx
│   │
│   ├── layouts/            # Layout wrappers
│   │   └── ShowcaseLayout.tsx
│   │
│   ├── config/             # Configuration files
│   │   └── components.config.ts
│   │
│   ├── data/               # Data and exports
│   │   └── component-source.ts
│   │
│   ├── styles/             # Global styles
│   │   └── index.css
│   │
│   └── types/              # TypeScript types
│       └── types.ts
│
├── public/                 # Static assets
├── dist/                   # Build output
├── App.tsx                 # Main app component
├── index.tsx               # Entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
└── README.md               # This file

```

## 🎯 Component Categories

### Heroes (`src/components/heroes/`)
Landing page hero sections with stunning animations:
- **NebulaHero** - Cosmic-themed with floating particles
- **FluxHero** - 3D-style with floating glass panels
- **GrowthHero** - Clean corporate design
- **HeliosHero** - Warm sun-drenched aesthetic
- **QuantumHero** - Physics-based particle effects

### Content (`src/components/content/`)
Content-focused components:
- **Accordion** - Expandable/collapsible sections
- **PricingSection** - Pricing cards and tables
- **Repository** - GitHub-style repository display

### Effects (`src/components/effects/`)
Visual effects and animations:
- **CanvasNetwork** - Animated particle connections
- **FocusLens** - Magnifying glass cursor effect
- **FractureGlass** - Shattered glass interaction
- **HorizontalScroll** - Smooth horizontal scrolling
- **LiquidDistortion** - WebGL fluid distortion
- **MagneticSection** - Magnetic cursor attraction
- **PixelWave** - Retro pixelated wave effect
- **SpotlightGrid** - Illuminating grid on hover
- **VelocityText** - Velocity-based text animations
- **VisualMask** - Image masking effects
- **VoxelTerrain** - 3D voxel-based terrain

### Media (`src/components/media/`)
Media-related components:
- **VideoExpand** - Expandable video player

### Layouts (`src/components/layouts/`)
Layout and structural components:
- **Header** - Glass header navigation
- **Footer** - Footer component
- **Navbar** - Navigation bar
- **Sidebar** - Sidebar navigation
- **Bento1** - Basic bento grid layout
- **Bento2** - Analytics-focused bento layout
- **BentoGrid** - Main components showcase grid

### UI (`src/components/ui/`)
Base UI primitives:
- **CTA** - Call-to-action sections
- **CodeModal** - Modal for displaying code
- **ComponentView** - Component showcase wrapper
- **CustomCursor** - Custom cursor implementation
- **Preloader** - Loading animations
- **SectionLabel** - Section headers
- **Marquee** - Infinite scrolling text

### Templates (`src/components/templates/`)
Full-page templates:
- **TaniaLanding** - House of Tania luxury landing
- **MasKokoLanding** - MasKoko template

## 🔄 Import System

Each category folder includes an `index.ts` barrel file that exports all components and their code:

```typescript
// Import from a category
import { NebulaHero, FluxHero, NEBULA_HERO_CODE } from './src/components/heroes';

// Import specific component
import NebulaHero from './src/components/heroes/NebulaHero';
```

## 🚀 Benefits of This Structure

1. **Intuitive Organization** - Components are grouped by their purpose and function
2. **Easy Navigation** - Find components quickly without searching through large folders
3. **Scalable** - Easy to add new components to appropriate categories
4. **Clean Imports** - Barrel exports make imports cleaner and more maintainable
5. **Separation of Concerns** - Each category has a specific purpose
6. **Better Developer Experience** - Clear structure makes onboarding easier

## 📝 Adding New Components

To add a new component:

1. **Choose the appropriate category folder**
2. **Create your component file** (e.g., `MyComponent.tsx`)
3. **Create corresponding code export** (e.g., `MyComponentCode.ts`)
4. **Add exports to the category's `index.ts`**
5. **Import and use in App.tsx**

Example:
```typescript
// In src/components/heroes/MyNewHero.tsx
export default function MyNewHero() {
  return <div>My New Hero</div>;
}

// In src/components/heroes/MyNewHeroCode.ts
export const MY_NEW_HERO_CODE = `...component source code...`;

// In src/components/heroes/index.ts
export { default as MyNewHero } from './MyNewHero';
export { MY_NEW_HERO_CODE } from './MyNewHeroCode';
```

## 🎨 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/prateekraiger/sakuga-ui.git
   cd sakuga-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📚 Documentation

- **CONTRIBUTING.md** - Contribution guidelines
- **DEVELOPER_GUIDE.md** - Development workflow
- **GUIDELINES.md** - Code style and best practices

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Prateek Raiger**
