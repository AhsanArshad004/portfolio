# Ahsan Arshad - Portfolio

Professional portfolio showcasing 6+ enterprise projects built with .NET, Angular, and React.

**Live:** https://ahsanarshad004.github.io/portfolio/

## Technologies

- React 18 & React Router v6
- Tailwind CSS
- Vite
- GitHub Pages

## Projects Featured

1. **Trapeze FX - Global Transit Optimization Platform** — Enterprise scheduling system for 40+ countries
2. **Dokmee ECM Suite** — Enterprise document management platform
3. **ValidCheck** — Data validation framework for microservices
4. **ScoreCEO Analytics** — Real-time analytics dashboard
5. **Dokmee Forms** — Enterprise form automation platform
6. **AI Chat Support** — RAG-powered chatbot for PropertyScout

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
