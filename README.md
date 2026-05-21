# ⚡ Sakuga UI

<div align="center">

![Sakuga UI Banner](https://img.shields.io/badge/Sakuga--UI-Modern%20React%20Gallery-blueviolet?style=for-the-badge&logo=react)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TS 5.8](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**A premium collection of high-performance, interactive React components designed to make your web applications look and feel state-of-the-art.**

*"Sakuga" (作画) refers to those breathtaking sequences in anime where the animation quality shoots through the roof. This library brings that exact visual punch and fluid motion to your user interface.*

[🚀 Live Demo](https://5173-ig4c0e0wnlo2gv4xzd34s-a402f90a.sandbox.novita.ai) • [📦 Browse Components](#-component-catalog) • [🛠️ Setup](#-quick-start) • [🤝 Contribute](CONTRIBUTING.md)

</div>

---

## 🚀 Quick Start

Get the local showcase up and running in under a minute:

```bash
# 1. Clone the repository
git clone https://github.com/prateekraiger/sakuga-ui.git
cd sakuga-ui

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
```
Open `http://localhost:5173` to explore the gallery.

---

## ⚡ How to Use

Sakuga UI is **copy-paste friendly**. No bulky npm packages, no dependency bloat—just clean, modular code.

1. **Explore**: Run the showcase locally or visit the [Live Demo](https://5173-ig4c0e0wnlo2gv4xzd34s-a402f90a.sandbox.novita.ai) to find the component you need.
2. **Copy**: Click the **Code** button in the showcase interface to preview the component source.
3. **Paste**: Copy the code directly into your codebase (e.g., `src/components/ui/MyComponent.tsx`).
4. **Use**: Import and render it in your application!

```tsx
import MyComponent from '@/components/ui/MyComponent';

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <MyComponent />
    </div>
  );
}
```

---

## 📦 Component Catalog

### 🌌 Hero Sections
- **Nebula Hero**: Cosmic-themed interactive particle fields.
- **Flux Hero**: 3D-feeling layout using floating glassmorphic panels.
- **Quantum Hero**: Fully interactive canvas-based physics node sandbox.
- **Helios & Growth Heroes**: High-conversion corporate layouts.
- **House of Tania**: Editorial luxury fashion landing layout.

### 🍱 Layouts & Bento Grids
- **Bento Grid 1**: Balanced grid layout ideal for features or portfolios.
- **Analytics Bento**: Interactive data-heavy layout complete with real-time style charts.
- **Glass Header**: Premium glassmorphic navigation bar with scroll-adaptive styles.

### 🎭 Visual Effects
- **Liquid Distortion**: WebGL/Shader-based fluid ripples.
- **Voxel Terrain**: Real-time 3D voxel hills built on Three.js.
- **Pixel Wave**: Retro-inspired interactive pixel grid.
- **Focus Lens & Fracture Glass**: Dynamic cursor masking and screen cracking.
- **Velocity Text & Marquee**: Kinetic text layouts reacting to scroll speed.

---

## 🛠️ Tech Stack

| Tool | Version | Role |
| :--- | :--- | :--- |
| **React** | `19.2.1` | Modern declarative UI component model |
| **TypeScript** | `5.8.2` | High-integrity type safety |
| **Tailwind CSS** | `4.1.17` | Utility-first, performance-tuned styling |
| **Vite** | `6.2.0` | Ultra-fast local compilation & bundling |
| **Three.js** | `0.182.0` | WebGL 3D scene engine & interactive voxels |
| **Lucide React** | `0.556.0` | High-quality visual icon pack |

---

## 📁 Repository Structure

```
sakuga-ui/
├── .github/              # CI workflows & issue templates
├── public/               # Static web assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── bento/        # Bento grids & dashboard mockups
│   │   ├── content/      # Pricing & Accordion layout elements
│   │   ├── effects/      # Particle, WebGL & Canvas effects
│   │   ├── heroes/       # Landing page hero headers
│   │   └── templates/    # Full layout templates (Bila Studio, Estetico)
│   ├── pages/            # Page routing endpoints
│   ├── styles/           # Tailwind configuration & global CSS
│   └── main.tsx          # App bootstrap point
├── LICENSE               # MIT License
└── CONTRIBUTING.md       # Developer setup and PR flow guide
```

---

## 🎯 Production Performance

Sakuga UI is optimized for real-world deployments:

- **Optimized Bundling**: Automatic code splitting outputs clean chunks:
  - `react-vendor` (~48KB gzipped)
  - `three-vendor` (~124KB gzipped)
  - `icons` (~7KB gzipped)
- **Zero Runtime Overhead**: No layout shifts, hardware-accelerated animations, and minimal component state.
- **Tailwind v4 Compilation**: Static coloring maps ensure 100% class safety at build time.

---

## 🤝 Contributing

Contributions are highly encouraged! Please read the [Contributing Guidelines](CONTRIBUTING.md) to learn about our branch naming, commit patterns (Conventional Commits), and code guidelines.

---

## 📜 License

This project is licensed under the **MIT License**. Check out [LICENSE](LICENSE) for more details.

---

<div align="center">

**Built with ❤️ by [Prateek Raiger](https://github.com/prateekraiger)**

If you like Sakuga UI, give it a ⭐ on GitHub!

[![Star History Chart](https://api.star-history.com/svg?repos=prateekraiger/sakuga-ui&type=Date)](https://star-history.com/#prateekraiger/sakuga-ui&Date)

</div>
