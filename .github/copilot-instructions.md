<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Context

This is a **React + Vite + Tailwind CSS** portfolio website for a cybersecurity analyst.

## Tech Stack

- **React 18** with Hooks
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom dark theme
- **Framer Motion** for smooth animations
- **Lucide React** for icons

## Design Principles

1. **Cybersecurity Theme**: Terminal-inspired aesthetics, matrix effects, command-line prompts
2. **Glassmorphism**: Use backdrop-blur and transparency for modern UI
3. **Dark Mode First**: Primary focus on dark theme with excellent contrast
4. **Smooth Animations**: Use Framer Motion for entrance animations and hover effects
5. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Code Style

- Use functional components with hooks
- Follow React best practices
- Use Tailwind utility classes
- Keep components modular and reusable
- Use semantic HTML
- Ensure accessibility (ARIA labels, keyboard navigation)

## Component Guidelines

- Each component should be self-contained
- Use motion components from framer-motion for animations
- Apply `glass` class for glassmorphism effects
- Use `text-gradient` for accent text
- Use `terminal-text` class for monospace font

## Animation Patterns

- Entry animations: `initial`, `animate`, `transition`
- Viewport animations: `whileInView` with `viewport={{ once: true }}`
- Hover effects: `whileHover={{ scale: 1.05 }}`
- Stagger delays for multiple items: `delay: index * 0.1`

## Naming Conventions

- Components: PascalCase (e.g., `Hero.jsx`)
- Functions: camelCase
- CSS classes: Tailwind utilities

## Performance

- Lazy load images where possible
- Use React.memo for expensive components
- Optimize animations with GPU-accelerated transforms
- Keep bundle size minimal
