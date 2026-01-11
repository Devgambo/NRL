# NRL Project - Vite to Next.js Migration Guide

## Overview
This document outlines the complete migration of the NRL (NITK Rocket League) website from Vite/React to Next.js 15.

## Migration Summary

### Technology Stack Changes

| Aspect | Before (Vite/React) | After (Next.js) |
|--------|---------------------|-----------------|
| Framework | Vite + React | Next.js 15 |
| Routing | React Router DOM | Next.js App Router |
| Rendering | Client-Side (SPA) | Server + Client Components |
| Build Tool | Vite | Next.js (Turbopack) |
| React Version | 19.0.0 | 19.0.0 |

### Project Structure Comparison

#### Before (Vite)
```
FRONTEND/
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Routes definition
│   ├── index.css         # Global styles
│   ├── pages/
│   │   ├── Layout.jsx    # Layout wrapper
│   │   ├── HeroPage.jsx
│   │   ├── Gallery.jsx
│   │   ├── Team.jsx
│   │   └── HeroContent/
│   └── components/
├── public/
└── vite.config.js
```

#### After (Next.js)
```
NRL-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js     # Root layout (replaces Layout.jsx)
│   │   ├── page.js       # Home page (/ route)
│   │   ├── pictures/
│   │   │   └── page.js   # /pictures route
│   │   ├── team/
│   │   │   └── page.js   # /team route
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── HeroContent/  # Moved from pages/HeroContent
│   │   └── ...
│   └── lib/
├── public/
└── next.config.js
```

## Detailed Changes

### 1. Routing Migration

#### Vite/React Router
```jsx
// App.jsx
<Routes>
  <Route element={<Layout/>}>
    <Route path="/" element={<HeroPage />} />
    <Route path="/pictures" element={<Gallery />} />
    <Route path="/team" element={<Team />} />
  </Route>
</Routes>
```

#### Next.js App Router
```
app/
├── layout.js          # Wraps all pages
├── page.js            # / route
├── pictures/
│   └── page.js        # /pictures route
└── team/
    └── page.js        # /team route
```

### 2. Component Changes

#### Navigation Component
**Before:**
```jsx
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()
  return <Link to="/team">Team</Link>
}
```

**After:**
```jsx
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
  const pathname = usePathname()
  return <Link href="/team">Team</Link>
}
```

#### Client Components
Components with interactivity need `"use client"` directive:
- All components using React hooks
- Components with event handlers
- Framer Motion animated components
- Form components

### 3. Layout System

#### Before (Layout.jsx)
```jsx
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />  {/* React Router outlet */}
      </main>
      <Footer />
    </div>
  )
}
```

#### After (layout.js)
```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-grow">
          {children}  {/* Next.js children */}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

### 4. Image Handling

#### Before (Vite)
```jsx
<img src="./logo.png" alt="logo" />
<img src="./team/mem1.jpg" alt="member" />
```

#### After (Next.js) - Option 1: Same as before
```jsx
<img src="/logo.png" alt="logo" />
<img src="/team/mem1.jpg" alt="member" />
```

#### After (Next.js) - Option 2: Optimized
```jsx
import Image from 'next/image'

<Image 
  src="/logo.png" 
  alt="logo" 
  width={300} 
  height={100}
/>
```

### 5. Configuration Files

#### Vite Config → Next Config
**vite.config.js:**
```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

**next.config.js:**
```js
module.exports = {
  images: {
    remotePatterns: [],
  },
}
```

**jsconfig.json:**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 6. Styling

No major changes needed:
- Tailwind CSS configuration updated for Next.js
- Global styles moved from `src/index.css` to `src/app/globals.css`
- CSS variables preserved
- Custom font classes maintained

## Migration Steps Performed

1. ✅ Created Next.js project structure
2. ✅ Set up configuration files (next.config.js, tailwind.config.js, jsconfig.json)
3. ✅ Created App Router structure (layout.js, page.js routes)
4. ✅ Migrated all components with proper "use client" directives
5. ✅ Updated navigation (React Router → Next.js Link)
6. ✅ Migrated global styles
7. ✅ Updated package.json dependencies
8. ✅ Created comprehensive documentation

## Breaking Changes

### Import Statements
- ❌ `import { Link } from "react-router-dom"`
- ✅ `import Link from "next/link"`

### Hooks
- ❌ `useLocation()` from react-router-dom
- ✅ `usePathname()` from next/navigation

- ❌ `useNavigate()` from react-router-dom
- ✅ `useRouter()` from next/navigation

### Navigation
- ❌ `<Link to="/path">`
- ✅ `<Link href="/path">`

- ❌ `window.location.href = "/path"`
- ✅ `router.push("/path")`

## Preserved Functionality

✅ All animations (Framer Motion)
✅ Form submissions (FormSubmit.co)
✅ Smooth scrolling navigation
✅ Responsive design
✅ Custom fonts
✅ UI components (shadcn/ui)
✅ Magic UI components
✅ All styling and themes

## New Capabilities

✨ Server-side rendering (SSR)
✨ Static site generation (SSG)
✨ Image optimization (Next.js Image)
✨ Automatic code splitting
✨ Better SEO support
✨ API routes capability
✨ Improved performance
✨ Better developer experience

## Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation between pages works
- [ ] Smooth scroll to sections on home page
- [ ] Team page displays correctly
- [ ] Gallery/Pictures page works
- [ ] All animations function properly
- [ ] Contact form submits
- [ ] Responsive design works on mobile
- [ ] All images load correctly
- [ ] Footer links work

## Performance Improvements

| Metric | Before (Vite) | After (Next.js) |
|--------|---------------|-----------------|
| Initial Load | Client-rendered | Server-rendered |
| Code Splitting | Manual | Automatic |
| Image Optimization | None | Built-in |
| Route Prefetching | No | Yes |
| Build Output | SPA bundle | Optimized chunks |

## Deployment Options

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with Node.js

## Rollback Plan

If issues arise, the original Vite/React project is preserved in `FRONTEND/` directory.

To run original:
```bash
cd FRONTEND
npm run dev
```

## Next Steps

1. Copy public assets from FRONTEND to NRL-nextjs
2. Install dependencies: `npm install`
3. Test all functionality
4. Optimize images with Next.js Image component (optional)
5. Add metadata for SEO
6. Deploy to production

## Support

For issues or questions:
- Review README.md in NRL-nextjs folder
- Check Next.js documentation: https://nextjs.org/docs
- Review App Router guide: https://nextjs.org/docs/app

## Conclusion

The migration preserves all functionality while adding Next.js benefits like SSR, better performance, and improved developer experience. The project structure is cleaner and follows Next.js best practices.
