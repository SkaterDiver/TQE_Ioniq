# Quick Start Guide

Get your Ion Trap Simulation website up and running in 5 minutes!

## 🚀 Fast Track

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 What's Included

Your website comes with:

- ✅ **Modern Stack**: Next.js 16, React 19, TypeScript
- ✅ **Beautiful UI**: Tailwind CSS v4 + shadcn/ui components
- ✅ **Animations**: Smooth transitions with Framer Motion
- ✅ **SEO Ready**: Optimized metadata and Open Graph tags
- ✅ **Analytics**: Vercel Analytics integrated
- ✅ **Responsive**: Mobile-first design
- ✅ **Accessible**: WCAG compliant
- ✅ **Production Ready**: Deployment configs for Vercel/Netlify

## 🛠️ Available Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Check code quality
npm run type-check # Verify TypeScript types
```

## 📁 Project Structure

```
ion-trap-simulation-website/
├── app/
│   ├── layout.tsx          # Root layout + SEO
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error page
│   ├── not-found.tsx       # 404 page
│   └── loading.tsx         # Loading state
├── components/
│   ├── hero-section.tsx    # Landing hero
│   ├── section-*.tsx       # Content sections
│   └── ui/                 # Reusable components
├── public/                 # Static files
└── .env.example            # Environment template
```

## ✏️ Customization

### Update Content

1. **Hero Section**: Edit `components/hero-section.tsx`
2. **Sections**: Modify files in `components/section-*.tsx`
3. **Metadata**: Update `app/layout.tsx`

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: oklch(0.7 0.2 200);    /* Main color */
  --secondary: oklch(0.65 0.25 280); /* Accent color */
  --background: oklch(0.08 0.02 250); /* Background */
}
```

### Add a New Page

Create a new folder in `app/`:

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Us</div>
}
```

Access at `/about`

## 🌐 Deploy

### Deploy to Vercel (1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or via CLI:
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Check types
npm run type-check
```

## 📚 Learn More

- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines

## 🆘 Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Docs](https://tailwindcss.com/docs)
- Open an issue on GitHub

## 🎉 You're All Set!

Your website is ready to customize and deploy. Happy coding!

---

**Made with ⚛️ by Tings Quantum Engineers**
