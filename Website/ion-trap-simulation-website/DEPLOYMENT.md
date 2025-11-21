# Deployment Guide

This guide covers deploying your Ion Trap Simulation website to various platforms.

## Prerequisites

Before deploying, ensure:
- ✅ All dependencies are installed
- ✅ Build runs successfully locally (`npm run build`)
- ✅ Environment variables are configured
- ✅ Code is committed to Git repository

## Quick Deploy Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js applications.

**One-Click Deploy:**
1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Configure environment variables:
   - `NEXT_PUBLIC_SITE_URL` → Your production URL
   - `NEXT_PUBLIC_SITE_NAME` → Your site name
5. Click "Deploy"

**CLI Deploy:**
```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Netlify

**Deploy via Git:**
1. Push code to GitHub
2. Visit [app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Settings
7. Deploy!

**CLI Deploy:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3: Self-Hosted

**Using PM2:**
```bash
# Install PM2
npm install -g pm2

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "ion-trap-web" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

**Using Docker:**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

## Environment Variables

Set these in your deployment platform:

### Required
- `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://yourdomain.com)
- `NEXT_PUBLIC_SITE_NAME` - Your site name

### Optional
- Analytics and tracking IDs
- Custom API endpoints

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Navigation works
- [ ] SEO metadata is correct (check with browser dev tools)
- [ ] Mobile responsiveness
- [ ] Performance (run Lighthouse audit)
- [ ] 404 page works
- [ ] Error handling works
- [ ] Analytics tracking (if configured)

## Performance Optimization

### Vercel Edge Functions
Already optimized with Next.js 16 App Router.

### CDN Configuration
- Static assets automatically served via CDN on Vercel/Netlify
- Images optimized with Next.js Image component

### Caching Headers
Configured in `vercel.json` and `netlify.toml`.

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate provisioning

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS
4. SSL is automatic

## Monitoring

### Vercel Analytics
Already integrated via `@vercel/analytics`.

### Custom Analytics
Add tracking codes in `app/layout.tsx`.

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side access
- Rebuild after changing environment variables
- Check platform-specific env var syntax

### 404 on Page Refresh
- Ensure your hosting platform is configured for SPA routing
- Check `vercel.json` or `netlify.toml` configuration

## Rollback

### Vercel
1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify
1. Go to Deploys
2. Find previous deployment
3. Click "Publish deploy"

## Support

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)
- [Netlify Support](https://www.netlify.com/support/)
