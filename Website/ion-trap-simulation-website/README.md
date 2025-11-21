# Ion Trap Simulation Website

<div align="center">

**HardHaq 2025 Quantum Simulation Study**

A comprehensive web platform showcasing ion trap simulation research for quantum computing applications.

[Live Demo](#deployment) | [Features](#features) | [Getting Started](#getting-started)

</div>

---

## Overview

This website presents a full-stack physics platform simulating both **3D RF Paul Traps** and **2D Surface Ion Traps**. The research analyzes and optimizes electrode geometry, RF/DC voltages, trap depth, and ion stability for next-generation quantum hardware.

**Team:** Tings Quantum Engineers

## Features

- **Interactive Visualizations** - Quantum-themed animations and graphics
- **Comprehensive Documentation** - Detailed explanations of ion trap physics
- **Responsive Design** - Optimized for all devices
- **Dark Mode** - Quantum-themed dark interface
- **Performance Optimized** - Fast loading with Next.js 16
- **SEO Ready** - Optimized for search engines
- **Production Ready** - Configured for deployment on major platforms

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ion-trap-simulation-website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using pnpm
   pnpm install

   # Using yarn
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME="Ion Trap Simulation - Tings Quantum Engineers"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
ion-trap-simulation-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── hero-section.tsx     # Landing hero
│   ├── section-*.tsx        # Content sections
│   ├── floating-nav.tsx     # Navigation
│   └── ui/                  # shadcn/ui components
├── public/                  # Static assets
│   ├── icons/              # Favicon and app icons
│   └── images/             # Images
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
└── styles/                  # Additional styles
```

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

**Environment Variables in Vercel:**
- `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://yourdomain.com)
- `NEXT_PUBLIC_SITE_NAME`: Your site name

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in [Netlify](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard
6. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- AWS Amplify
- Google Cloud Platform
- Azure Static Web Apps
- Docker containers
- Self-hosted servers

See [Next.js Deployment Documentation](https://nextjs.org/docs/deployment) for more options.

## Customization

### Updating Content

1. **Hero Section**: Edit `components/hero-section.tsx`
2. **Main Content**: Edit `components/section-*.tsx` files
3. **Metadata**: Update `app/layout.tsx`
4. **Colors**: Modify CSS variables in `app/globals.css`

### Adding Pages

Create new files in the `app/` directory:
```tsx
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>
}
```

### Styling

The project uses Tailwind CSS v4. Modify styles in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Component-specific Tailwind classes

## Performance Optimization

The website is optimized for performance:

- ✅ React Server Components
- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ Minification and compression
- ✅ Font optimization (Geist font family)
- ✅ Analytics integration

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatible
- Color contrast compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the HardHaq 2025 submission by Tings Quantum Engineers.

## Support

For issues or questions:
1. Check existing documentation
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Open an issue in the repository

## Acknowledgments

- Built with [v0.dev](https://v0.dev) for rapid prototyping
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Quantum-themed design inspired by modern quantum computing interfaces

---

<div align="center">

**Made with ⚛️ by Tings Quantum Engineers**

</div>
