# NRL Next.js Project

This is the Next.js migration of the NRL (NITK Rocket League) website.

## Migration from Vite/React

This project has been successfully migrated from Vite/React to Next.js 15 with App Router.

### Key Changes:
- **Routing**: Migrated from React Router to Next.js App Router
- **Components**: All components converted to Next.js compatible with proper "use client" directives
- **Imports**: Changed from `react-router-dom` Link to Next.js Link
- **Navigation**: Updated to use `usePathname()` and `useRouter()` from `next/navigation`

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy Public Assets

You need to copy the public assets from the original FRONTEND project:

**From `FRONTEND/public/` copy to `NRL-nextjs/public/`:**
- All image files (logo.png, hero.jpeg, hero2.jpeg, etc.)
- Video files (ved1.mp4)
- All files from `public/media/` folder
- All files from `public/team/` folder

```bash
# Windows (PowerShell)
Copy-Item -Path "..\FRONTEND\public\*" -Destination ".\public\" -Recurse -Force

# Or manually copy the folders
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
NRL-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Navbar and Footer
│   │   ├── page.js            # Home page
│   │   ├── pictures/
│   │   │   └── page.js        # Gallery page
│   │   ├── team/
│   │   │   └── page.js        # Team page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Title.jsx
│   │   ├── TeamCard.jsx
│   │   ├── Pictures.jsx
│   │   ├── HeroContent/       # Hero page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── SubSigs.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Sponsers.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/               # UI components (shadcn/ui)
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── card-hover-effect.jsx
│   │   └── magicui/          # Magic UI components
│   │       ├── interactive-hover-button.jsx
│   │       ├── neon-gradient-card.jsx
│   │       └── typing-animation.jsx
│   └── lib/
│       └── utils.js          # Utility functions
├── public/                    # Static assets (copy from FRONTEND)
├── package.json
├── next.config.js
├── tailwind.config.js
└── components.json

```

## Key Features

- **Next.js 15** with App Router
- **React 19** with latest features
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Smooth scrolling** navigation
- **Responsive design**

## Routes

- `/` - Home page with hero sections
- `/team` - Team members page
- `/pictures` - Gallery/Media page

## Components

### Client Components
Most interactive components use `"use client"` directive:
- Navbar (uses usePathname for active route)
- All animated components (Framer Motion)
- Interactive cards and buttons
- Forms

### Server Components
- Page layouts
- Static content sections

## Styling

The project uses:
- Tailwind CSS for utility classes
- CSS variables for theming
- Custom fonts (Space Grotesk, Roboto Flex, Archivo Black, Space Mono)
- Dark mode support (via CSS variables)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment

Make sure you have Node.js 18+ installed.

## Notes

- All images should be placed in the `public` folder
- The contact form submits to FormSubmit.co
- Smooth scrolling is enabled for section navigation on the home page
- Components use path aliases (`@/components`, `@/lib`, etc.)

## Troubleshooting

If you encounter issues:

1. **Missing images**: Make sure all assets are copied from FRONTEND/public
2. **Module not found**: Run `npm install` again
3. **Port already in use**: Change port with `npm run dev -- -p 3001`

## Migration Notes

### React Router → Next.js Navigation
- `<Link to="/path">` → `<Link href="/path">`
- `useLocation()` → `usePathname()`
- `useNavigate()` → `useRouter()` from `next/navigation`

### Component Changes
- Added `"use client"` to components using hooks or interactivity
- Changed `Link` imports from `react-router-dom` to `next/link`
- Updated navigation logic for Next.js routing

## License

© 2026 NITK Rocket League. All rights reserved.
Made with ❤️ by Devgambo
