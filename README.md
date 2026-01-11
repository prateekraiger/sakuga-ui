# Sakuga UI ⚡

<div align="center">

![Sakuga UI Banner](https://img.shields.io/badge/Sakuga-UI-blue?style=for-the-badge&logo=react)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A premium collection of high-performance, aesthetically pleasing React components for modern web applications.**

"Sakuga" (作画) refers to sequences in anime where the quality of animation improves drastically — we bring that same energy to your UI.

[Browse Components](https://your-demo-url.com/components) • [View Templates](https://your-demo-url.com/templates) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🌟 Features

- **30+ Premium Components** - Heroes, effects, layouts, and interactive elements
- **Copy & Paste Ready** - No npm package needed, just copy the code
- **Modern Tech Stack** - Built with React 19, TypeScript, and Tailwind CSS v4
- **Performance First** - Optimized animations and interactions
- **Fully Responsive** - Mobile-first design approach
- **Dark Mode Native** - Beautiful dark theme out of the box
- **TypeScript Support** - Full type safety included
- **Zero Dependencies*** - Most components work standalone (*minimal peer dependencies)

## 📦 Component Categories

### 🎯 Hero Sections
Beautiful landing page heroes with stunning animations:
- **Nebula Hero** - Cosmic-themed with floating particles
- **Flux Hero** - 3D-style with floating glass panels
- **Growth Hero** - Clean corporate design
- **Helios Hero** - Warm sun-drenched aesthetic
- **Quantum Hero** - Physics-based particle effects
- **House of Tania** - Luxury fashion landing page

### 📐 Layout Components
Modern layout patterns for any project:
- **Bento Grid 1** - Responsive grid for dashboards
- **Analytics Bento** - Data-heavy layout with charts
- **Glass Header** - Frosted glass navigation bar

### ✨ Visual Effects
Eye-catching effects to elevate your design:
- **Canvas Network** - Animated particle connections
- **Focus Lens** - Magnifying glass cursor effect
- **Fracture Glass** - Shattered glass on interaction
- **Horizontal Scroll** - Smooth horizontal scrolling
- **Liquid Distortion** - WebGL fluid distortion
- **Magnetic Section** - Magnetic cursor attraction
- **Marquee** - Infinite scrolling text
- **Pixel Wave** - Retro pixelated wave effect
- **Spotlight Grid** - Illuminating grid on hover
- **Velocity Text** - Velocity-based text animations
- **Video Expand** - Expandable video player
- **Visual Mask** - Image masking effects
- **Voxel Terrain** - 3D voxel-based terrain

### 📝 Content Components
Essential UI elements for any website:
- **CTA Section** - High-conversion call-to-actions
- **Repository** - GitHub-style repository display
- **Accordion** - Smooth expanding accordions
- **Pricing Section** - Beautiful pricing cards

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prateekraiger/sakuga-ui.git
   cd sakuga-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to explore the component gallery.

### Using Components in Your Project

Sakuga UI is designed to be **copy-paste friendly**. Here's how to use it:

1. **Browse the component library** at `/components`
2. **Click on any component** to view it in action
3. **Copy the source code** using the code modal
4. **Paste it into your project** - that's it!

#### Example: Adding a Hero Section

```tsx
// 1. Copy the component code from the showcase
// 2. Paste it into your project (e.g., src/components/Hero.tsx)
// 3. Import and use it

import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Hero />
      {/* Your other components */}
    </div>
  );
}
```

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://react.dev/) | 19.2.1 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.2 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.17 | Styling |
| [Vite](https://vitejs.dev/) | 6.2.0 | Build Tool |
| [Lucide React](https://lucide.dev/) | 0.556.0 | Icons |
| [React Router](https://reactrouter.com/) | 7.10.1 | Routing |

## 📚 Documentation

### Project Structure

```
sakuga-ui/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── bento/       # Bento grid layouts
│   │   ├── layout/      # Layout components (Header, Footer, etc.)
│   │   └── ui/          # UI primitives (Buttons, Modals, etc.)
│   ├── sections/        # Full-section components
│   │   ├── content/     # Content sections
│   │   ├── effects/     # Visual effects
│   │   ├── media/       # Media components
│   │   └── ui/          # UI sections
│   ├── pages/           # Page components
│   ├── layouts/         # Layout wrappers
│   └── data/            # Component source code exports
├── public/              # Static assets
└── ...config files
```

### Component Architecture

Each component follows this structure:
- **Self-contained** - Minimal external dependencies
- **Tailwind-first** - Styling with Tailwind CSS v4
- **TypeScript** - Full type safety
- **Responsive** - Mobile-first approach
- **Accessible** - WCAG guidelines followed where applicable

### Customization

All components use Tailwind CSS, making customization easy:

```tsx
// Change colors
<Hero className="bg-purple-900" /> 

// Adjust spacing
<BentoGrid className="gap-8 p-12" />

// Modify text
<CTA 
  title="Your Custom Title"
  description="Your custom description"
/>
```

## 🎨 Design Philosophy

Sakuga UI components are designed with these principles:

1. **Performance First** - Optimized animations using CSS transforms and GPU acceleration
2. **Visual Impact** - "Wow" factor in every interaction
3. **Production Ready** - Battle-tested patterns and code
4. **Developer Experience** - Easy to understand and modify
5. **Accessibility** - Semantic HTML and keyboard navigation

## 🤝 Contributing

We welcome contributions! Whether it's:

- 🐛 Bug reports
- 💡 Feature suggestions
- 📝 Documentation improvements
- 🎨 New component designs
- ⚡ Performance optimizations

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

This means you can:
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use

## 🙏 Acknowledgments

- Inspired by the art of "sakuga" animation
- Built with amazing open-source technologies
- Community contributions and feedback

## 📧 Contact & Support

- **Author:** Prateek Raiger
- **GitHub:** [@prateekraiger](https://github.com/prateekraiger)
- **Issues:** [GitHub Issues](https://github.com/prateekraiger/sakuga-ui/issues)

## ⭐ Star History

If you find this project useful, please consider giving it a star on GitHub!

---

<div align="center">

**Built with 🖤 by Prateek Raiger**

[Website](https://your-website.com) • [Twitter](https://twitter.com/your-handle) • [LinkedIn](https://linkedin.com/in/your-profile)

</div>
