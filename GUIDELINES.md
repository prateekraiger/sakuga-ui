# Sakuga UI - Coding Guidelines

These guidelines are intended to ensure that the code in Sakuga UI is consistent, readable, and maintainable.

## General Principles

*   **Clarity over cleverness:** Write code that is easy to understand.
*   **Consistency:** Follow the existing coding style and conventions.
*   **Simplicity:** Keep your code as simple as possible. Avoid unnecessary complexity.

## File and Component Naming

*   **Component files:** Use PascalCase for component file names (e.g., `MyComponent.tsx`).
*   **Component names:** Use PascalCase for component names (e.g., `MyComponent`).
*   **Other files:** Use kebab-case for other files (e.g., `component-source.ts`).

## Component Structure

A typical component should be structured as follows:

```tsx
import React from 'react';

// Define the props interface
interface MyComponentProps {
  // ...props
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  // State and hooks
  // ...

  // Event handlers
  // ...

  // Render logic
  return (
    <div>
      {/* ...component JSX... */}
    </div>
  );
};

export default MyComponent;
```

## Styling

*   **Tailwind CSS:** This project uses Tailwind CSS for styling. Please use Tailwind utility classes whenever possible.
*   **CSS files:** For more complex styles that cannot be achieved with Tailwind, you can use a separate CSS file. Name the CSS file the same as the component (e.g., `MyComponent.css`) and import it into the component file.
*   **Class naming:** When writing custom CSS, use BEM (Block, Element, Modifier) naming conventions.

## Responsiveness

*   **Mobile-first:** Design for mobile first, then use Tailwind's responsive variants (e.g., `sm:`, `md:`, `lg:`) to adapt the layout for larger screens.
*   **Flexbox and Grid:** Use Flexbox and Grid for creating responsive layouts.
*   **Media queries:** For complex responsive styles, use media queries in your CSS files.

## Performance

*   **Memoization:** Use `React.memo` for functional components and `React.useMemo` and `React.useCallback` for memoizing values and functions to prevent unnecessary re-renders.
*   **Lazy loading:** For large components or components that are not immediately visible, consider using `React.lazy` and `Suspense` to lazy load them.
*   **Bundle size:** Be mindful of the bundle size. Avoid adding large dependencies unless absolutely necessary.

## Accessibility (a11y)

*   **Semantic HTML:** Use semantic HTML elements (e.g., `<nav>`, `<main>`, `<article>`) to improve accessibility.
*   **ARIA attributes:** Use ARIA attributes where necessary to provide additional information to assistive technologies.
*   **Keyboard navigation:** Ensure that all interactive elements are focusable and can be operated with a keyboard.
*   **Image alt text:** Provide descriptive alt text for all images.

By following these guidelines, you'll help us maintain a high-quality codebase and create a better experience for everyone.
