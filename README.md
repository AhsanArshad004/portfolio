# Ahsan Arshad - Portfolio

Professional portfolio showcasing 6+ enterprise projects built with .NET, Angular, and React.

**Live:** https://ahsanarshad.dev (or https://yourusername.github.io)

## Technologies

- React 18 & React Router v6
- Tailwind CSS
- Vite
- GitHub Pages

## Projects Featured

1. **Trapeze FX - Resource Planner** — Real-time trip visualization with Gantt charts
2. **Trapeze FX - Timetable Planner** — Transit timetable creation system
3. **Dokmee ECM** — Enterprise content management platform
4. **Dokmee Forms** — Mobile-first form builder
5. **ValidCheck** — Electronic check processing platform
6. **ScoreCEO** — Credit repair business software

## Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## Deployment

Automatic deployment to GitHub Pages via GitHub Actions on push to `main`.

## Structure

```
src/
  ├── components/    # Reusable UI components
  ├── pages/         # Page components (HomePage, ProjectDetail)
  ├── data/          # Project metadata (projects.js)
  ├── styles/        # Tailwind CSS config
  └── App.jsx        # Router setup
```

## Adding Projects

Edit `src/data/projects.js` and add a new project object:

```javascript
{
  id: 'unique-id',
  title: 'Project Title',
  description: '...',
  technologies: [...],
  images: [...],
  demoLink: 'https://...',
  startDate: '01/2023',
  endDate: 'Present',
  details: { problem: '...', solution: '...', impact: '...', keyFeatures: [...] }
}
```

## License

Open for sharing and inspiration. Modify for your own portfolio.
