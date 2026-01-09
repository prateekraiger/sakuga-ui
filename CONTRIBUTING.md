# Contributing to Sakuga UI

First off, thank you for considering contributing to Sakuga UI! It's people like you that make Sakuga UI such a great tool.

## Where do I start?

If you have an idea for a new component or template, or if you've found a bug, please open an issue on GitHub. This allows us to discuss the potential change and make sure it aligns with the project's goals.

## Setting up the project

1.  Fork the repository on GitHub.
2.  Clone your fork locally:
    ```bash
    git clone https://github.com/prateekraiger/sakuga-ui.git
    ```
3.  Navigate to the project directory:
    ```bash
    cd sakuga-ui
    ```
4.  Install the dependencies:
    ```bash
    pnpm install
    ```
5.  Start the development server:
    ```bash
    pnpm dev
    ```

## Adding a new component

1.  **Create the component file:**
    -   Create a new `.tsx` file for your component in the appropriate directory. For standalone components, use `src/components/`. For larger, section-like components, use `src/sections/`.
    -   Follow the existing coding style and conventions. See `GUIDELINES.md` for more details.

2.  **Add the component to the showcase:**
    -   Add a new route for your component in `App.tsx`.
    -   Add a link to your component in the `src/components/Sidebar.tsx` file.

3.  **Add the component's source code for display:**
    -   Create a new file in `src/data/code/` named `[YourComponent]Code.ts`.
    -   In this new file, export the source code of your component as a string constant. For example:
        ```typescript
        export const YOUR_COMPONENT_CODE = `... your component code ...`;
        ```
    -   Open `src/data/component-source.ts` and add an export for your new code file:
        ```typescript
        export { YOUR_COMPONENT_CODE } from './code/YourComponentCode';
        ```

## Adding a new template

1.  **Create the template file:**
    -   Create a new `.tsx` file for your template in `src/pages/`.
    -   Templates are composed of multiple sections. You can reuse existing sections from `src/sections/` or create new ones.

2.  **Add the template to the showcase:**
    -   Add a new route for your template in `App.tsx`.
    -   Add a link to your template in the `src/components/Sidebar.tsx` file.

## Submitting a Pull Request

1.  Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feat/my-new-component
    ```
2.  Make your changes and commit them with a descriptive message.
3.  Push your branch to your fork:
    ```bash
    git push origin feat/my-new-component
    ```
4.  Open a pull request on the Sakuga UI repository.
5.  In the pull request description, please describe the changes you've made and link to any relevant issues.

Thank you for your contribution!
