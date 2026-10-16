# Development Setup

## Prerequisites

- Node.js 16+ (verify: `node --version`)
- npm 7+ (verify: `npm --version`)
- Git (verify: `git --version`)

## Installation

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

## Starting Development Server

```bash
npm run dev
```

Server runs at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

Output in `dist/` directory.

## Project Structure

- `src/components/` — Reusable components (Header, Hero, ProjectCard, etc.)
- `src/pages/` — Page-level components (HomePage, ProjectDetail)
- `src/data/projects.js` — Project metadata (edit this to add/modify projects)
- `tailwind.config.js` — Tailwind CSS configuration
- `vite.config.js` — Vite build configuration

## Adding a New Project

1. Open `src/data/projects.js`
2. Add new project object to `projects` array:

```javascript
{
  id: 'my-project',
  title: 'My Project',
  description: 'Brief description',
  technologies: ['Tech1', 'Tech2'],
  images: ['/images/projects/my-project-1.png'],
  demoLink: 'https://example.com',
  startDate: '01/2023',
  endDate: '03/2023',
  details: {
    problem: 'Problem statement',
    solution: 'How you solved it',
    impact: 'Results and impact',
    keyFeatures: ['Feature 1', 'Feature 2']
  }
}
```

3. Add screenshots to `public/images/projects/`
4. Run `npm run dev` to see changes

## Customization

### Colors

Edit `tailwind.config.js` theme colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      // Change these to your brand colors
    }
  }
}
```

### Content

- About section: Edit `src/components/About.jsx`
- Contact info: Edit `src/components/Contact.jsx`
- Social links: Update Header and Footer components

## Deployment

Automatic via GitHub Actions on push to `main` branch.

To manually test production build:

```bash
npm run build
npm run preview
```

## Troubleshooting

**Images not loading:**
- Check image paths in `public/images/projects/`
- Verify paths in `src/data/projects.js` match exactly

**Routing issues:**
- Ensure GitHub Pages base path in `vite.config.js` matches repo URL
- Test with `npm run preview` before deploying

**Styles not applying:**
- Check Tailwind CSS cache: `rm -rf node_modules/.vite && npm run dev`
- Verify Tailwind content paths in `tailwind.config.js`
