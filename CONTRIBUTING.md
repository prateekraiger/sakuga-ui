# Contributing to Sakuga UI

First off, thank you for taking the time to contribute to **Sakuga UI**! 🎬✨ We are thrilled that you want to help make this interactive UI component playground and open-source landing catalog even better.

Please review the guidelines below to ensure a smooth, efficient, and consistent development workflow.

---

## 🛠️ Local Development Setup

To get started, make sure you have the following prerequisites installed on your system:
- **Node.js** (v20 or higher is recommended)
- **pnpm** (preferred package manager for this repository)

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/prateekraiger/sakuga-ui.git
   cd sakuga-ui
   ```

2. **Install Dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the Development Server:**
   ```bash
   pnpm dev
   ```
   This will spin up Vite and start the local development server (typically at `http://localhost:5173`).

4. **Build for Production:**
   Before submitting changes, verify that the project builds without errors:
   ```bash
   pnpm build
   ```

---

## 🎨 Design Systems & Coding Standards

Sakuga UI is focused on premium aesthetics, interactive elements, glassmorphism, and beautiful micro-interactions.

### Styling & CSS (Tailwind CSS v4)
- **CSS-First Configuration:** We use **Tailwind CSS v4** with `@tailwindcss/vite`.
- **Do not introduce ad-hoc utility hacks** if they violate the existing visual balance. Use cohesive, curated variables (e.g. HSL tailored colors, smooth gradients, and transitions).
- Keep animations smooth. If writing custom CSS, use native CSS variables or Tailwind's animation primitives.

### Code Style Guidelines
- **TypeScript:** The project is strictly typed. Avoid using `any` unless absolutely necessary.
- **React 19:** Follow React 19 best practices.
- **Component File Conventions:** Keep components modular and reusable. Place generic UI elements under `src/components` and page-specific layouts under `src/pages`.

---

## 🌿 Git Branching Model

We follow a structured branch naming convention to keep our git history clean and readable:

| Branch Prefix | Purpose | Example |
|---|---|---|
| `feature/` | Introducing a new UI component or template | `feature/interactive-canvas-v2` |
| `bugfix/` | Fixing a UI bug, style alignment, or code error | `bugfix/hero-pill-overlap` |
| `docs/` | Updates to the documentation, guides, or comments | `docs/update-readme-examples` |
| `refactor/` | Code structure cleanups with no visual/functional changes | `refactor/modularize-sidebar` |

---

## 💬 Conventional Commits

We enforce the **Conventional Commits** specification. Please format your commit messages accordingly:

```
<type>(<scope>): <description>
```

- **feat**: A new component, template, or feature.
- **fix**: A bug fix or visual correction.
- **docs**: Changes to documentation.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing tests or correcting existing tests.

**Examples:**
- `feat(hero): add conic border beam to main call-to-action button`
- `fix(navbar): resolve mobile navigation overlay transparency`
- `docs(readme): document new custom category icons`

---

## 🚀 Submitting a Pull Request

1. **Verify Types and Build:**
   Run the following commands locally before pushing your changes:
   ```bash
   pnpm exec tsc --noEmit
   pnpm build
   ```
2. **Commit and Push:**
   Commit using conventional commit rules and push your branch to your fork.
3. **Open a Pull Request:**
   Provide a detailed explanation of the change, design decisions, and screenshots/GIFs demonstrating visual differences if applicable.

Thank you again for contributing to **Sakuga UI**! 🚀
