# Contributing Guide

Thank you for your interest in contributing to the Ion Trap Simulation website!

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone <your-fork-url>
   cd ion-trap-simulation-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── *.tsx        # Feature components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── public/          # Static assets
└── styles/          # Global styles
```

## Code Style

### TypeScript
- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` types

### React Components
- Use functional components
- Prefer `const` arrow functions
- Use proper TypeScript types for props

### Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Files: kebab-case for utilities
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Example Component
```tsx
interface MyComponentProps {
  title: string
  count?: number
}

export function MyComponent({ title, count = 0 }: MyComponentProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  )
}
```

## Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing patterns
   - Test thoroughly

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: description of changes"
   ```

   Commit message prefixes:
   - `Add:` New features
   - `Fix:` Bug fixes
   - `Update:` Improvements to existing features
   - `Refactor:` Code restructuring
   - `Docs:` Documentation changes
   - `Style:` Formatting, styling

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Testing

Before submitting:
- [ ] Code builds successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] All features work as expected

## Adding New Sections

To add a new content section:

1. Create component in `components/`:
   ```tsx
   // components/section-new-feature.tsx
   export function SectionNewFeature() {
     return (
       <section id="new-feature" className="py-20">
         {/* Your content */}
       </section>
     )
   }
   ```

2. Import in `app/page.tsx`:
   ```tsx
   import { SectionNewFeature } from "@/components/section-new-feature"
   ```

3. Add to page structure

## Adding UI Components

We use shadcn/ui. To add a new component:

```bash
npx shadcn@latest add <component-name>
```

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Documentation improvements
- General questions

Thank you for contributing! 🚀
