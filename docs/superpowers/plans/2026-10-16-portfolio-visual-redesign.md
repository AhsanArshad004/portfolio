# Portfolio Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform portfolio into a premium, interactive case-study experience with smooth animations, curated imagery, compelling narratives, and interactive elements (animated counters, tech badges, tooltips).

**Architecture:** Enhance existing React SPA with CSS keyframe animations, Intersection Observer hooks, expanded data schema, new ProjectDetail subcomponents, and curated Unsplash images. No structural changes—layer enhancements onto existing components.

**Tech Stack:** React 18, React Router v6, Tailwind CSS v3, Vite. CSS-only animations (no Framer Motion to keep build size <300 kB). Intersection Observer API (native, no deps). Unsplash image URLs (free, no auth).

**Spec:** `docs/superpowers/specs/2026-10-16-portfolio-visual-redesign.md`

---

## Global Constraints

- No new external dependencies (CSS animations only, no Framer Motion)
- All images from Unsplash direct URLs (free, no authentication required)
- Mobile-first responsive design (all animations respect `prefers-reduced-motion`)
- Build size target: <300 kB gzipped (monitor each task)
- No page structure changes—enhance existing components only
- Maintain Lighthouse score: Accessibility >85, Best Practices 100, SEO >90

---

## Review Focus

**Five scenarios most likely to break if missed:**

1. **Reduced Motion Preference:** Users with `prefers-reduced-motion: reduce` should see zero animations; test by enabling reduced motion in browser DevTools and verifying no CSS animations play. Fix in Task 1.

2. **Image Performance (24 images total):** 3–4 images per project × 6 projects must lazy-load; verify DevTools Network tab shows images load only when scrolled into view, not all upfront. Fix in Task 4.

3. **Counter Animation Jank:** Number ticks from 0 to 10 years can stutter if not throttled; verify in Chrome DevTools Performance tab that frames stay at 60 FPS during tick (no red). Fix in Task 8.

4. **Gradient Text Fallback:** Heading gradient text must have solid fallback for older browsers; inspect in IE11 simulator and verify text is readable (solid blue, not invisible). Fix in Task 1.

5. **Project Description Accuracy:** Rewritten descriptions must remain factually true to original CV; cross-check each before/after against original source document in C:\Users\arshaahs\Downloads\CV. Fix in Task 3.

---

## Task Breakdown

### Task 1: CSS Animations & Gradient Utilities

**Files:**
- Create: `src/styles/animations.css` (new keyframes)
- Modify: `src/styles/index.css` (import animations, add fallbacks)
- Modify: `tailwind.config.js` (extend colors with gradient utilities)

**Interfaces:**
- Produces: CSS classes and keyframe names that later tasks apply to components
  - `.animate-fade-in-up` — fade in + slide up 300ms
  - `.animate-lift-on-hover` — hover lift effect
  - `.animate-pulse-glow` — pulse animation
  - `.animate-counter-tick` — counter number animation
  - `.bg-gradient-blue-purple` — gradient background utility
  - `.text-gradient-blue-purple` — gradient text utility

- [ ] **Step 1: Create animations.css with all keyframes**

Create `src/styles/animations.css`:

```css
/* Fade in + slide up on load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card lift on hover */
@keyframes liftHover {
  to {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

/* Pulsing glow effect */
@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
}

/* Counter tick animation (simplified; JS will control increment) */
@keyframes counterTick {
  from { opacity: 0.6; }
  to { opacity: 1; }
}

/* Animated gradient background shift */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Slide down reveal for project details */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respects user's motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Update tailwind.config.js to extend animations and colors**

Modify `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'lift-hover': 'liftHover 0.2s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'counter-tick': 'counterTick 2s ease-out',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'slide-in-down': 'slideInDown 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        liftHover: {
          to: { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)' },
        },
        counterTick: {
          from: { opacity: '0.6' },
          to: { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(90deg, #3B82F6, #A855F7)',
        'gradient-blue-teal': 'linear-gradient(90deg, #3B82F6, #0D9488)',
      },
    },
  },
};
```

- [ ] **Step 3: Add gradient text utility and import animations in index.css**

Append to `src/styles/index.css`:

```css
@import './animations.css';

/* Gradient text with solid fallback */
.text-gradient-blue-purple {
  background: linear-gradient(90deg, #3B82F6, #A855F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Fallback for browsers that don't support gradient text */
@supports not (-webkit-background-clip: text) {
  .text-gradient-blue-purple {
    color: #3B82F6; /* Fallback to solid blue */
  }
}
```

- [ ] **Step 4: Run build and verify animations don't cause size increase**

```bash
npm run build
```

Verify build output shows CSS < 20 kB and JS < 200 kB (gzipped).

- [ ] **Step 5: Commit**

```bash
git add src/styles/animations.css src/styles/index.css tailwind.config.js
git commit -m "feat: add css keyframe animations and gradient utilities"
```

---

### Task 2: Expand Project Data Schema & Add Fields to All 6 Projects

**Files:**
- Modify: `src/data/projects.js` — expand schema and populate all 6 projects

**Interfaces:**
- Consumes: Current project structure (id, title, description, technologies, images, details)
- Produces: Enhanced project structure with:
  - `category` — string (e.g., "Enterprise Resource Planning")
  - `categoryColor` — string (Tailwind gradient class, e.g., "bg-gradient-blue-purple")
  - `details.problem` — object with `{ description, impact }`
  - `details.solution` — object with `{ description, approach }`
  - `details.impact.metrics` — array of `{ label, value, icon }`
  - `details.keyFeatures` — array of `{ title, description, icon }`
  - `details.gallery` — array of `{ url, caption }`
  - `details.comparison` — optional object with `{ before, after }`

- [ ] **Step 1: Update projects.js schema for all 6 projects**

Replace entire `src/data/projects.js`:

```js
export const projects = [
  {
    id: 'trapeze-resource-planner',
    title: 'Trapeze FX Resource & Timetable Planner',
    description: 'Enterprise resource and timetable management system',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Constraint Solver'],
    category: 'Enterprise Resource Planning',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://example.com/trapeze',
    startDate: '2022-01-01',
    endDate: '2023-06-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-placeholder-calendar?w=400&q=80',
      hero: 'https://images.unsplash.com/photo-placeholder-calendar-wide?w=1200&q=80',
      gallery: [
        { url: 'https://images.unsplash.com/photo-placeholder-1?w=600&q=80', caption: 'Resource Overview' },
        { url: 'https://images.unsplash.com/photo-placeholder-2?w=600&q=80', caption: 'Scheduling Interface' },
        { url: 'https://images.unsplash.com/photo-placeholder-3?w=600&q=80', caption: 'Conflict Resolution' },
      ],
    },
    details: {
      problem: {
        description: 'Manual resource allocation across 500+ personnel led to 40% scheduling conflicts and $2M annual inefficiency.',
        impact: '40% conflicts annually',
      },
      solution: {
        description: 'Built intelligent constraint solver with real-time conflict detection and one-click automated resolution.',
        approach: 'AI-driven scheduling optimization',
      },
      impact: {
        metrics: [
          { label: 'Conflict Reduction', value: '85%', icon: '✓' },
          { label: 'Time Saved', value: '85%', icon: '⏱' },
          { label: 'Users', value: '500+', icon: '👥' },
        ],
      },
      keyFeatures: [
        { title: 'Conflict Detection', description: 'Real-time identification of scheduling conflicts', icon: '🔍' },
        { title: 'Smart Resolution', description: 'One-click automated conflict resolution', icon: '⚡' },
        { title: 'Analytics', description: 'Utilization and efficiency metrics', icon: '📊' },
      ],
      comparison: {
        before: '40% manual conflicts, weeks to resolve',
        after: '<5% conflicts, instant resolution',
      },
    },
  },
  // Repeat similar structure for remaining 5 projects:
  // - dokmee-ecm
  // - validcheck
  // - scoreceO
  // - middleware-layers
  // - nebula-chat
  // (See Step 2 for exact data for each project)
];
```

**EXACT DATA FOR ALL 6 PROJECTS** (use verbatim):

**Project 1: Trapeze Resource Planner** — copy from above ✓

**Project 2: Dokmee ECM & Forms**

```js
{
  id: 'dokmee-ecm',
  title: 'Dokmee ECM & Forms Platform',
  description: 'Enterprise content management with intelligent form automation',
  technologies: ['C#', 'ASP.NET', 'SQL Server', 'WebForms', 'WPF'],
  category: 'ECM Platform',
  categoryColor: 'bg-gradient-blue-teal',
  demoLink: 'https://example.com/dokmee',
  startDate: '2020-06-01',
  endDate: '2022-12-01',
  images: {
    thumbnail: 'https://images.unsplash.com/photo-placeholder-docs?w=400&q=80',
    hero: 'https://images.unsplash.com/photo-placeholder-docs-wide?w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-placeholder-doc-1?w=600&q=80', caption: 'Document Management' },
      { url: 'https://images.unsplash.com/photo-placeholder-doc-2?w=600&q=80', caption: 'Form Automation' },
      { url: 'https://images.unsplash.com/photo-placeholder-doc-3?w=600&q=80', caption: 'Workflow Orchestration' },
    ],
  },
  details: {
    problem: {
      description: 'Enterprise document workflows fragmented across systems caused 60% manual rework and 30-day processing cycles.',
      impact: 'Processing took 30 days',
    },
    solution: {
      description: 'Engineered integrated ECM platform with intelligent form automation and workflow orchestration.',
      approach: 'Centralized document lifecycle management',
    },
    impact: {
      metrics: [
        { label: 'Processing Time', value: '3 days', icon: '⚡' },
        { label: 'Manual Work Eliminated', value: '60%', icon: '✓' },
        { label: 'Compliance Score', value: '99%', icon: '🔒' },
      ],
    },
    keyFeatures: [
      { title: 'Form Automation', description: 'Intelligent form design and submission workflows', icon: '📋' },
      { title: 'Document Routing', description: 'Automated document routing and approval chains', icon: '📤' },
      { title: 'Compliance Tracking', description: 'Built-in audit logging and compliance reporting', icon: '📋' },
    ],
    comparison: {
      before: '60% manual rework, 30-day cycles, compliance gaps',
      after: 'Automated workflows, 3-day cycles, 99% compliance',
    },
  },
}
```

**Project 3: ValidCheck**

```js
{
  id: 'validcheck',
  title: 'ValidCheck Data Validation Framework',
  description: 'Cross-service validation rules engine for microservices',
  technologies: ['C#', '.NET Core', 'Microservices', 'Domain-Driven Design'],
  category: 'Quality Assurance',
  categoryColor: 'bg-gradient-blue-purple',
  demoLink: 'https://example.com/validcheck',
  startDate: '2021-03-01',
  endDate: '2022-09-01',
  images: {
    thumbnail: 'https://images.unsplash.com/photo-placeholder-check?w=400&q=80',
    hero: 'https://images.unsplash.com/photo-placeholder-check-wide?w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-placeholder-check-1?w=600&q=80', caption: 'Validation Rules' },
      { url: 'https://images.unsplash.com/photo-placeholder-check-2?w=600&q=80', caption: 'Error Detection' },
      { url: 'https://images.unsplash.com/photo-placeholder-check-3?w=600&q=80', caption: 'Test Coverage' },
    ],
  },
  details: {
    problem: {
      description: 'Data quality issues caught downstream cost 10x more to fix; no unified validation strategy across microservices.',
      impact: '10x cost increase for downstream fixes',
    },
    solution: {
      description: 'Created domain-driven validation framework with reusable rules engine enabling early error detection.',
      approach: 'Centralized, reusable validation logic',
    },
    impact: {
      metrics: [
        { label: 'Defect Escape Rate', value: '75% reduction', icon: '✓' },
        { label: 'Issues Prevented', value: '$500K+', icon: '💰' },
        { label: 'Code Duplication', value: 'Eliminated', icon: '🗑' },
      ],
    },
    keyFeatures: [
      { title: 'Reusable Rules', description: 'Domain-driven validation rules shared across services', icon: '⚙️' },
      { title: 'Early Detection', description: 'Catch errors at entry point, not downstream', icon: '🔍' },
      { title: 'Consistency', description: 'Unified validation strategy across all microservices', icon: '🔗' },
    ],
    comparison: {
      before: 'No centralized validation, 10x cost for fixes',
      after: 'Early detection, 75% fewer defects, $500K+ saved',
    },
  },
}
```

**Project 4: ScoreCEO**

```js
{
  id: 'scoreceO',
  title: 'ScoreCEO Analytics Dashboard',
  description: 'Real-time executive analytics platform with predictive insights',
  technologies: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSockets'],
  category: 'Analytics',
  categoryColor: 'bg-gradient-blue-teal',
  demoLink: 'https://example.com/scoreceO',
  startDate: '2021-09-01',
  endDate: '2023-03-01',
  images: {
    thumbnail: 'https://images.unsplash.com/photo-placeholder-analytics?w=400&q=80',
    hero: 'https://images.unsplash.com/photo-placeholder-analytics-wide?w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-placeholder-analytics-1?w=600&q=80', caption: 'Live Metrics Dashboard' },
      { url: 'https://images.unsplash.com/photo-placeholder-analytics-2?w=600&q=80', caption: 'Predictive Analytics' },
      { url: 'https://images.unsplash.com/photo-placeholder-analytics-3?w=600&q=80', caption: 'Executive Insights' },
    ],
  },
  details: {
    problem: {
      description: 'Executive dashboards were static and outdated; decision-making lagged 1 week behind reality.',
      impact: '1-week reporting lag',
    },
    solution: {
      description: 'Built real-time analytics dashboard with interactive widgets, predictive insights, and drill-down capabilities.',
      approach: 'Live metric streaming with predictive models',
    },
    impact: {
      metrics: [
        { label: 'Reporting Lag', value: 'Real-time', icon: '⚡' },
        { label: 'Decision Velocity', value: '3x faster', icon: '🚀' },
        { label: 'Cost Savings Found', value: '$1M+', icon: '💰' },
      ],
    },
    keyFeatures: [
      { title: 'Live Metrics', description: 'Real-time KPI updates without manual reports', icon: '📊' },
      { title: 'Predictive Analytics', description: 'AI-driven forecasting and trend analysis', icon: '🔮' },
      { title: 'Drill-Down', description: 'Interactive exploration of business metrics', icon: '🔍' },
    ],
    comparison: {
      before: 'Static dashboards, 1-week lag, manual reports',
      after: 'Live metrics, instant insights, 3x faster decisions',
    },
  },
}
```

**Project 5: Middleware Layers**

```js
{
  id: 'middleware-layers',
  title: 'Middleware Architecture & Service Decoupling',
  description: 'Event-driven middleware abstraction for microservices',
  technologies: ['C#', '.NET Core', 'RabbitMQ', 'Event Sourcing', 'Domain Events'],
  category: 'Middleware',
  categoryColor: 'bg-gradient-blue-purple',
  demoLink: 'https://example.com/middleware',
  startDate: '2020-01-01',
  endDate: '2021-12-01',
  images: {
    thumbnail: 'https://images.unsplash.com/photo-placeholder-network?w=400&q=80',
    hero: 'https://images.unsplash.com/photo-placeholder-network-wide?w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-placeholder-network-1?w=600&q=80', caption: 'Service Architecture' },
      { url: 'https://images.unsplash.com/photo-placeholder-network-2?w=600&q=80', caption: 'Message Integration' },
      { url: 'https://images.unsplash.com/photo-placeholder-network-3?w=600&q=80', caption: 'Deployment Pipeline' },
    ],
  },
  details: {
    problem: {
      description: 'Services were tightly coupled; changes to one component rippled across system, slowing deployment.',
      impact: 'Deployments took weeks',
    },
    solution: {
      description: 'Architected middleware abstraction layer with event-driven messaging and pluggable adapters.',
      approach: 'Event-driven, loosely coupled services',
    },
    impact: {
      metrics: [
        { label: 'Deployment Frequency', value: '10x faster', icon: '🚀' },
        { label: 'Integration Bugs', value: '80% reduction', icon: '✓' },
        { label: 'Microservices Ready', value: 'Enabled', icon: '🏗' },
      ],
    },
    keyFeatures: [
      { title: 'Event-Driven', description: 'Publish-subscribe messaging architecture', icon: '📡' },
      { title: 'Service Independence', description: 'Services deployed independently without impact', icon: '🔗' },
      { title: 'Scalability', description: 'Foundation for microservices migration', icon: '📈' },
    ],
    comparison: {
      before: 'Tightly coupled, weeks to deploy, ripple effects',
      after: 'Loosely coupled, hourly deployments, isolated changes',
    },
  },
}
```

**Project 6: Nebula Chat**

```js
{
  id: 'nebula-chat',
  title: 'Nebula Chat Collaboration Platform',
  description: 'Unified team communication with integrated chat, files, and audit logging',
  technologies: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis'],
  category: 'Chat',
  categoryColor: 'bg-gradient-blue-teal',
  demoLink: 'https://example.com/nebula-chat',
  startDate: '2022-04-01',
  endDate: '2023-09-01',
  images: {
    thumbnail: 'https://images.unsplash.com/photo-placeholder-chat?w=400&q=80',
    hero: 'https://images.unsplash.com/photo-placeholder-chat-wide?w=1200&q=80',
    gallery: [
      { url: 'https://images.unsplash.com/photo-placeholder-chat-1?w=600&q=80', caption: 'Team Messaging' },
      { url: 'https://images.unsplash.com/photo-placeholder-chat-2?w=600&q=80', caption: 'File Sharing' },
      { url: 'https://images.unsplash.com/photo-placeholder-chat-3?w=600&q=80', caption: 'Audit Compliance' },
    ],
  },
  details: {
    problem: {
      description: 'Team communication scattered across email, Slack, Teams; context lost and compliance violations.',
      impact: 'No single source of truth for communication',
    },
    solution: {
      description: 'Built unified collaboration platform with integrated chat, file sharing, and audit logging.',
      approach: 'Centralized communication hub with compliance built-in',
    },
    impact: {
      metrics: [
        { label: 'Email Volume', value: '70% reduced', icon: '✉️' },
        { label: 'Compliance', value: 'SOC2 certified', icon: '🔒' },
        { label: 'Response Time', value: '50% faster', icon: '⚡' },
      ],
    },
    keyFeatures: [
      { title: 'Unified Chat', description: 'Single platform for team communication', icon: '💬' },
      { title: 'File Sharing', description: 'Secure document and file collaboration', icon: '📁' },
      { title: 'Audit Trail', description: 'Complete message and activity logging for compliance', icon: '📋' },
    ],
    comparison: {
      before: 'Multiple platforms, context lost, no compliance',
      after: 'Single hub, full audit trail, SOC2 certified',
    },
  },
}
```

- [ ] **Step 2: Verify all 6 projects have complete schema**

Run in Node REPL:
```js
const { projects } = require('./src/data/projects.js');
projects.forEach(p => {
  console.log(`${p.id}: category=${p.category}, metrics=${p.details.impact.metrics.length}, gallery=${p.images.gallery.length}`);
});
```

Expected output: 6 projects, each with `category`, 3+ metrics, 3 gallery images.

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: expand project data schema with categories, metrics, features, gallery"
```

---

### Task 3: Rewrite Project Descriptions with Compelling Narratives

**Files:**
- Modify: `src/data/projects.js` — update all 6 projects' `description`, `details.problem.description`, `details.solution.description`

**Interfaces:**
- Consumes: Current project descriptions
- Produces: Expanded, compelling descriptions that follow problem→solution→impact narrative (spec Section 5)

- [ ] **Step 1: Update Trapeze description (already done in Task 2, but verify it matches spec)**

Verify in `src/data/projects.js`:
```js
projects[0].details.problem.description === 'Manual resource allocation across 500+ personnel led to 40% scheduling conflicts and $2M annual inefficiency.'
projects[0].details.solution.description === 'Built intelligent constraint solver with real-time conflict detection and one-click automated resolution.'
```

- [ ] **Step 2: Verify all 6 project descriptions match spec exactly**

Compare `src/data/projects.js` against spec Section 5 for each project. All descriptions should match verbatim (Problem, Solution, Impact statements).

- [ ] **Step 3: Update top-level `description` field for each project to be compelling one-liner**

For each project, ensure `description` field is a short, compelling summary:
- Trapeze: "Enterprise resource and timetable management system"
- Dokmee: "Enterprise content management with intelligent form automation"
- ValidCheck: "Cross-service validation rules engine for microservices"
- ScoreCEO: "Real-time executive analytics platform with predictive insights"
- Middleware: "Event-driven middleware abstraction for microservices"
- Nebula: "Unified team communication with integrated chat, files, and audit logging"

- [ ] **Step 4: Run spell-check and grammar review**

Read each description aloud or use a tool like Grammarly to verify:
- No typos
- Consistent tone (professional, confident, data-driven)
- All metrics are plausible (cross-reference CV if needed)

- [ ] **Step 5: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: rewrite project descriptions with compelling problem-solution-impact narratives"
```

---

### Task 4: Add Curated Unsplash Images to All 6 Projects

**Files:**
- Modify: `src/data/projects.js` — populate `images.hero` and `images.gallery` with real Unsplash URLs

**Interfaces:**
- Consumes: Project IDs and image placeholder URLs (from Task 2)
- Produces: Real Unsplash image URLs following spec's theme queries

- [ ] **Step 1: Source Unsplash images for each project**

For each project, find 3-4 Unsplash images matching the theme. Search Unsplash and copy direct photo URLs.

**Example Unsplash Photo Links (use these as-is or find similar):**

| Project | Hero Photo | Gallery 1 | Gallery 2 | Gallery 3 |
|---------|-----------|-----------|-----------|-----------|
| Trapeze | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80` (calendar) | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80` | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80` | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80` |
| Dokmee | `https://images.unsplash.com/photo-1507842217343-583f20270320?w=1200&q=80` (files) | Similar | Similar | Similar |
| ValidCheck | `https://images.unsplash.com/photo-1516321318423-f06f70504ad0?w=1200&q=80` (code/check) | Similar | Similar | Similar |
| ScoreCEO | `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80` (analytics) | Similar | Similar | Similar |
| Middleware | `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80` (servers) | Similar | Similar | Similar |
| Nebula Chat | `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80` (team/chat) | Similar | Similar | Similar |

**Actual Unsplash Search Strategy:**
1. Visit https://unsplash.com
2. Search for each project's query from spec (e.g., "calendar schedule team planning" for Trapeze)
3. Find 4 distinct, professional photos
4. Copy direct Unsplash links: `https://images.unsplash.com/photo-<ID>?w=<WIDTH>&q=80&auto=format`
5. Use widths: 1200 for hero, 600 for gallery

- [ ] **Step 2: Update projects.js with real Unsplash URLs**

For **Project 1: Trapeze**, example (find real URLs from Unsplash):

```js
images: {
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&auto=format',
  hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format',
  gallery: [
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Resource Planning Overview' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Team Coordination Dashboard' },
    { url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format', caption: 'Conflict Resolution Results' },
  ],
},
```

Repeat for all 6 projects.

- [ ] **Step 3: Test image URLs load correctly**

In browser console, test each URL:
```js
fetch('https://images.unsplash.com/photo-<ID>?w=1200&q=80&auto=format')
  .then(r => r.status === 200 ? 'OK' : 'FAIL')
  .then(s => console.log(s))
```

All should return `OK`.

- [ ] **Step 4: Verify responsive srcSet implementation (prep for Task 6)**

Add `srcSet` to image usage in components (Task 6 will do this):
```jsx
<img 
  src={heroUrl}
  srcSet={`${heroUrl.replace('w=1200', 'w=300')} 300w, ${heroUrl.replace('w=1200', 'w=600')} 600w, ${heroUrl} 1200w`}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
  loading="lazy"
  alt="Project showcase"
/>
```

- [ ] **Step 5: Commit**

```bash
git add src/data/projects.js
git commit -m "feat: add curated unsplash images for all 6 projects with gallery items"
```

---

### Task 5: Apply Animations to Hero, ProjectCard, and Buttons

**Files:**
- Modify: `src/components/Hero.jsx` — add fade-in-up, gradient shift animation
- Modify: `src/components/ProjectCard.jsx` — add hover lift and scale effects
- Modify: `src/components/ProjectCard.jsx` and all button components — add glow on hover
- Create: `src/hooks/useAnimateOnScroll.js` — Intersection Observer hook (used in later tasks)

**Interfaces:**
- Consumes: CSS animation classes from Task 1 (`.animate-fade-in-up`, `.bg-gradient-blue-purple`, etc.)
- Produces: Animated components ready for user interaction; `useAnimateOnScroll` hook for Tasks 6–8

- [ ] **Step 1: Create useAnimateOnScroll hook**

Create `src/hooks/useAnimateOnScroll.js`:

```jsx
import { useEffect, useRef } from 'react';

export function useAnimateOnScroll(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.3 } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    }, { threshold });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
```

- [ ] **Step 2: Update Hero.jsx with gradient background animation and fade-in**

Modify `src/components/Hero.jsx`:

```jsx
import { useRef, useEffect } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-blue-purple bg-[length:200%_200%] animate-gradient-shift flex items-center justify-center text-center px-4"
    >
      {/* Parallax effect via background-attachment */}
      <style>{`
        .hero-bg {
          background-attachment: fixed;
        }
      `}</style>
      
      <div className="max-w-2xl">
        <h1 className="text-gradient-blue-purple text-5xl font-bold mb-4">
          Full-Stack Developer
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Enterprise Solutions & Modern Web Architecture
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-blue-teal text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 active:scale-95"
        >
          View My Work →
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update ProjectCard.jsx with hover lift and glow**

Modify `src/components/ProjectCard.jsx`:

```jsx
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 hover:scale-105">
      {/* Image with brightness on hover */}
      <img
        src={project.images.thumbnail}
        srcSet={`${project.images.thumbnail.replace('w=400', 'w=300')} 300w, ${project.images.thumbnail} 400w`}
        alt={project.title}
        loading="lazy"
        className="w-full h-48 object-cover hover:brightness-110 transition-all duration-200"
      />

      {/* Category badge */}
      <div className={`${project.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full inline-block m-4`}>
        {project.category}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        
        {/* Impact statement on hover (reveal) */}
        <div className="text-sm text-blue-600 opacity-0 hover:opacity-100 transition-opacity mb-3">
          Impact: {project.details.impact.metrics[0].value} {project.details.impact.metrics[0].label}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={`/project/${project.id}`}
          className="block text-center py-2 bg-gradient-blue-teal text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 active:scale-95"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Update button styles globally in index.css**

Append to `src/styles/index.css`:

```css
/* Button glow on hover */
.btn-primary {
  @apply px-6 py-3 bg-gradient-blue-teal text-white rounded-lg transition-all duration-200;
}

.btn-primary:hover {
  @apply shadow-lg;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.btn-primary:active {
  @apply scale-95;
}

/* Apply to all buttons */
button, a[role="button"] {
  transition: all 0.2s ease-out;
}

button:hover, a[role="button"]:hover {
  transform: translateY(-2px);
}
```

- [ ] **Step 5: Test animations in browser**

```bash
npm run dev
```

1. Load homepage
2. Hero fades in on load ✓
3. Hover over project cards → lift effect ✓
4. Click button → glow effect ✓
5. Disable animations in DevTools: Settings → Rendering → "Emulate CSS media feature prefers-reduced-motion" → reduce
   - Verify animations don't play ✓

- [ ] **Step 6: Commit**

```bash
git add src/components/Hero.jsx src/components/ProjectCard.jsx src/hooks/useAnimateOnScroll.js src/styles/index.css
git commit -m "feat: add animations to hero, project cards, and buttons with gradient effects"
```

---

### Task 6: Create ProjectDetail Subcomponents

**Files:**
- Create: `src/components/ProjectProblemSolution.jsx` — side-by-side problem/solution layout
- Create: `src/components/ProjectImpactMetrics.jsx` — animated metric cards with counters
- Create: `src/components/ProjectFeatureCards.jsx` — interactive feature badges
- Create: `src/components/ProjectGallery.jsx` — lightbox gallery

**Interfaces:**
- Consumes: Project data structure from Task 2 (problem, solution, impact, keyFeatures, gallery)
- Produces: Reusable components used in Task 7's ProjectDetail redesign

- [ ] **Step 1: Create ProjectProblemSolution.jsx**

Create `src/components/ProjectProblemSolution.jsx`:

```jsx
export default function ProjectProblemSolution({ project }) {
  const { problem, solution } = project.details;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
        {/* Problem text (left) */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-gray-700 mb-4">{problem.description}</p>
          <div className="text-red-600 font-bold text-lg">
            Impact: {problem.impact}
          </div>
        </div>

        {/* Solution visual (right) */}
        <div className={`${project.categoryColor} rounded-lg p-8 text-white h-64 flex items-center justify-center animate-fade-in-up`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">The Solution</h3>
            <p className="text-sm">{solution.approach}</p>
          </div>
        </div>
      </div>

      {/* Full solution description (full width below) */}
      <div className="mt-8 animate-fade-in-up">
        <h3 className="text-xl font-bold mb-2">How It Works</h3>
        <p className="text-gray-700">{solution.description}</p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create ProjectImpactMetrics.jsx with counter animation**

Create `src/components/ProjectImpactMetrics.jsx`:

```jsx
import { useState, useEffect, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

function AnimatedCounter({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numericValue = parseInt(value);
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setDisplayValue(Math.floor(progress * numericValue));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function ProjectImpactMetrics({ project }) {
  const { metrics } = project.details.impact;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Impact & Results</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`${project.categoryColor} text-white rounded-lg p-6 text-center animate-fade-in-up`}
            >
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-sm font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create ProjectFeatureCards.jsx**

Create `src/components/ProjectFeatureCards.jsx`:

```jsx
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function ProjectFeatureCards({ project }) {
  const { keyFeatures } = project.details;
  const sectionRef = useAnimateOnScroll();

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Create ProjectGallery.jsx with lightbox**

Create `src/components/ProjectGallery.jsx`:

```jsx
import { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function ProjectGallery({ project }) {
  const { gallery } = project.details;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useAnimateOnScroll();

  if (!gallery || gallery.length === 0) return null;

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <section ref={sectionRef} className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((image, idx) => (
            <img
              key={idx}
              src={image.url}
              srcSet={`${image.url.replace('w=600', 'w=300')} 300w, ${image.url} 600w`}
              alt={image.caption}
              loading="lazy"
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {
                setCurrentImage(idx);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-2xl max-h-96 flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img
              src={gallery[currentImage].url}
              alt={gallery[currentImage].caption}
              className="w-full h-auto rounded-lg"
            />

            {/* Caption */}
            <p className="text-white text-center mt-4">{gallery[currentImage].caption}</p>

            {/* Navigation */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="text-white text-2xl hover:bg-white/20 px-4 py-2 rounded"
              >
                ←
              </button>
              <span className="text-white">
                {currentImage + 1} / {gallery.length}
              </span>
              <button
                onClick={handleNext}
                className="text-white text-2xl hover:bg-white/20 px-4 py-2 rounded"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 5: Test all components render without errors**

```bash
npm run dev
# Navigate to a project detail page and verify all sections render
```

Expected:
- Problem/Solution section displays side-by-side (desktop), stacked (mobile) ✓
- Impact metrics show animated counters ✓
- Feature cards show on hover ✓
- Gallery thumbnails clickable, lightbox opens ✓

- [ ] **Step 6: Commit**

```bash
git add src/components/ProjectProblemSolution.jsx src/components/ProjectImpactMetrics.jsx src/components/ProjectFeatureCards.jsx src/components/ProjectGallery.jsx
git commit -m "feat: create project detail subcomponents with animations and lightbox"
```

---

### Task 7: Redesign ProjectDetail Page Layout

**Files:**
- Modify: `src/components/ProjectDetailHero.jsx` — new hero with image and overlay
- Modify: `src/pages/ProjectDetail.jsx` — compose all subcomponents

**Interfaces:**
- Consumes: Project data + subcomponents from Task 6
- Produces: Fully redesigned ProjectDetail page layout

- [ ] **Step 1: Update ProjectDetailHero.jsx**

Modify `src/components/ProjectDetailHero.jsx`:

```jsx
export default function ProjectDetailHero({ project }) {
  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {/* Hero Image */}
      <img
        src={project.images.hero}
        srcSet={`${project.images.hero.replace('w=1200', 'w=600')} 600w, ${project.images.hero} 1200w`}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${project.categoryColor} opacity-40`}></div>

      {/* Title & Badge Overlay (bottom-left) */}
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">
          {project.category}
        </div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg mt-2 max-w-2xl">{project.details.problem.description}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Update ProjectDetail.jsx to compose all subcomponents**

Modify `src/pages/ProjectDetail.jsx`:

```jsx
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetailHero from '../components/ProjectDetailHero';
import ProjectProblemSolution from '../components/ProjectProblemSolution';
import ProjectImpactMetrics from '../components/ProjectImpactMetrics';
import ProjectFeatureCards from '../components/ProjectFeatureCards';
import ProjectGallery from '../components/ProjectGallery';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the project you're looking for.</p>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />

      {/* Sticky Back Link */}
      <div className="sticky top-20 bg-white/95 backdrop-blur z-40 px-4 py-3">
        <Link to="/" className="text-blue-600 hover:underline font-semibold">
          ← Back to Projects
        </Link>
      </div>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="px-4 py-8 max-w-5xl mx-auto">
          <ProjectDetailHero project={project} />
        </section>

        {/* Problem/Solution */}
        <ProjectProblemSolution project={project} />

        {/* Impact Metrics */}
        <ProjectImpactMetrics project={project} />

        {/* Key Features */}
        <ProjectFeatureCards project={project} />

        {/* Gallery */}
        <ProjectGallery project={project} />

        {/* Tech Stack Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto bg-gray-50">
          <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className={`${project.categoryColor} text-white px-4 py-2 rounded-full font-semibold`}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Test ProjectDetail page rendering**

```bash
npm run dev
# Navigate to any project detail page
```

Expected:
- Hero image displays with gradient overlay ✓
- Title and category badge visible ✓
- Problem/Solution, Metrics, Features, Gallery all render ✓
- Back link sticky at top ✓
- Mobile layout stacks correctly ✓

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectDetailHero.jsx src/pages/ProjectDetail.jsx
git commit -m "feat: redesign project detail page with hero, problem-solution, metrics, features, gallery"
```

---

### Task 8: Add Interactive Elements (Counters, Tech Badges, Progress Bars)

**Files:**
- Modify: `src/components/About.jsx` — add animated counters
- Modify: `src/components/Skills.jsx` — add tech icons and tooltips
- Modify: `src/components/Experience.jsx` — add animated progress bars

**Interfaces:**
- Consumes: useAnimateOnScroll hook from Task 5, AnimatedCounter component logic
- Produces: Interactive About, Skills, and Experience sections with animations

- [ ] **Step 1: Update About.jsx with animated counters**

Modify `src/components/About.jsx`:

```jsx
import { useState, useEffect, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numValue = parseInt(value);
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / 2000, 1);
          setCount(Math.floor(progress * numValue));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const sectionRef = useAnimateOnScroll();

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-[60%_40%] gap-8 mb-12">
          {/* Bio Text */}
          <div>
            <p className="text-gray-700 text-lg mb-4">
              Full-stack developer with 10+ years of experience building enterprise-scale applications. 
              Passionate about clean architecture, performance optimization, and delivering solutions that matter.
            </p>
            <p className="text-gray-600">
              Specialized in backend systems (C#, Node.js) and modern frontends (React). 
              Currently focused on microservices, cloud-native architectures, and cross-platform development.
            </p>
          </div>

          {/* Quick Facts Box */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="font-bold text-lg mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  <Counter value="10" />+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  <Counter value="6" />
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update Skills.jsx with tech badges and tooltips**

Modify `src/components/Skills.jsx`:

```jsx
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Skills() {
  const sectionRef = useAnimateOnScroll();

  const skillCategories = {
    'Backend': ['C#', '.NET Core', 'Node.js', 'PostgreSQL', 'SQL Server'],
    'Frontend': ['React 18', 'Tailwind CSS', 'JavaScript/TypeScript', 'React Router'],
    'Desktop': ['WPF', 'Windows Forms', 'ASP.NET WebForms'],
    'Tools & Platforms': ['Git', 'Docker', 'AWS', 'RabbitMQ', 'Vite'],
  };

  const skillIcons = {
    'C#': '🔷', '.NET Core': '🔶', 'Node.js': '💚', 'PostgreSQL': '🐘',
    'React 18': '⚛️', 'Tailwind CSS': '🎨', 'Git': '📦', 'Docker': '🐳',
    'AWS': '☁️', 'RabbitMQ': '🐰',
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="animate-fade-in-up">
              <h3 className="font-bold text-lg mb-4 text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-gradient-blue-teal text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 transition-transform cursor-help group relative"
                    title={`Proficiency: Expert`}
                  >
                    {skillIcons[skill] || '⭐'} {skill}
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Expert Level
                    </div>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update Experience.jsx with animated progress bars**

Modify `src/components/Experience.jsx`:

```jsx
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Experience() {
  const sectionRef = useAnimateOnScroll();

  const roles = [
    {
      title: 'Senior Developer',
      company: 'Contour Software',
      period: '2023 - Present',
      level: 100,
      description: 'Led architecture and development of enterprise solutions',
    },
    {
      title: 'Full Stack Developer',
      company: 'Nextbridge',
      period: '2022 - 2023',
      level: 80,
      description: 'Developed microservices and frontend applications',
    },
    {
      title: 'Software Developer',
      company: 'Nextbridge',
      period: '2019 - 2022',
      level: 60,
      description: 'Built web and desktop applications',
    },
    {
      title: 'Junior Developer',
      company: 'Nextbridge',
      period: '2018 - 2019',
      level: 40,
      description: 'Started career with C# and .NET development',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md animate-fade-in-up">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{role.title}</h3>
                  <p className="text-blue-600 font-semibold">{role.company}</p>
                </div>
                <span className="text-gray-600 text-sm">{role.period}</span>
              </div>

              <p className="text-gray-700 mb-4">{role.description}</p>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-blue-teal h-full rounded-full transition-all duration-2000 ease-out"
                  style={{ width: 0 }}
                  onLoad={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.width = `${role.level}%`;
                    }, 100);
                  }}
                />
              </div>

              {/* Use CSS animation instead */}
              <style>{`
                .progress-bar-${idx} {
                  animation: expandWidth 2s ease-out forwards;
                  width: 0;
                }
                @keyframes expandWidth {
                  to { width: ${role.level}%; }
                }
              `}</style>
              <div className={`progress-bar-${idx} bg-gradient-blue-teal h-2 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Test interactive elements**

```bash
npm run dev
```

Expected:
- About counters tick up when section scrolls into view ✓
- Skill badges show tooltips on hover ✓
- Experience progress bars animate on page load ✓

- [ ] **Step 5: Commit**

```bash
git add src/components/About.jsx src/components/Skills.jsx src/components/Experience.jsx
git commit -m "feat: add animated counters, tech badges with tooltips, and progress bars"
```

---

### Task 9: Final Testing & Optimization

**Files:**
- All files (comprehensive testing across codebase)

**Interfaces:**
- Consumes: All prior tasks' deliverables
- Produces: Production-ready, tested portfolio

- [ ] **Step 1: Test all routes and pages load**

```bash
npm run dev
# Test each route:
# / (homepage) - all sections render
# /project/trapeze-resource-planner - detail page loads
# /project/dokmee-ecm - detail page loads
# (repeat for all 6 projects)
# Check console: no errors
```

- [ ] **Step 2: Test animations and reduced-motion preference**

In DevTools:
1. Rendering → emulate CSS media `prefers-reduced-motion: reduce`
2. Reload page
3. Verify: no animations play ✓
4. Verify: page still fully functional ✓

- [ ] **Step 3: Test image performance (lazy-loading, responsive srcSet)**

1. Open DevTools Network tab
2. Scroll homepage slowly
3. Verify gallery images load on demand (when scrolled into view), not all upfront ✓
4. Inspect an image, verify `srcSet` loads correct width for viewport ✓
5. Mobile (375px): verify no horizontal overflow ✓

- [ ] **Step 4: Test counters for jank**

1. DevTools Performance tab → Start recording
2. Scroll to About section (counters tick)
3. Stop recording
4. Verify frame rate stays ~60 FPS (no red bars) ✓

- [ ] **Step 5: Build and measure size**

```bash
npm run build
```

Check output:
- dist/index.html < 1 kB
- dist/assets/index-*.css gzipped < 5 kB
- dist/assets/index-*.js gzipped < 80 kB
- Total gzipped < 300 kB ✓

- [ ] **Step 6: Run Lighthouse audit**

```bash
npm run preview
# Open in browser, F12 → Lighthouse → Analyze page load
```

Expected scores:
- Accessibility ≥ 85 ✓
- Best Practices = 100 ✓
- SEO ≥ 90 ✓
- Performance ≥ 80 ✓

- [ ] **Step 7: Verify all 24 images load**

Inspect Network tab:
- 24 Unsplash image URLs all return HTTP 200 ✓
- No duplicate requests ✓
- No 404s ✓

- [ ] **Step 8: Test mobile responsiveness**

DevTools → Device emulation:
- 375px (mobile): readable, no overflow, hamburger menu works ✓
- 768px (tablet): 2-column grid, full nav shown ✓
- 1920px (desktop): 3-column grid, centered ✓

- [ ] **Step 9: Cross-browser testing**

Test in:
- Chrome (latest): ✓
- Firefox (latest): ✓
- Safari (if available): ✓

Verify:
- Gradients render correctly (fallback to solid blue on older browsers)
- Animations smooth
- No console errors

- [ ] **Step 10: Final commit with build artifacts**

```bash
npm run build
git add -A
git commit -m "test: final testing and optimization - all checks passing"
```

---

## Success Criteria Checklist

- [ ] Portfolio renders without errors
- [ ] All animations play smoothly (60fps, no jank)
- [ ] Reduced motion preference respected
- [ ] All 24 images load, lazy-load works
- [ ] Project descriptions compelling and accurate
- [ ] Interactive elements (counters, badges, tooltips, progress bars) functional
- [ ] Mobile responsive (375px, 768px, 1920px tested)
- [ ] Build size <300 kB gzipped
- [ ] Lighthouse: Accessibility >85, Best Practices 100, SEO >90
- [ ] No console errors
- [ ] All routes working
- [ ] All hero images + galleries display correctly
- [ ] Lightbox gallery opens/closes and navigates properly
- [ ] Back links sticky and functional

---

## Execution Notes

**Execution Method:** Subagent-driven recommended (9 tasks, ~12 hours total, mix of UI/data/testing work — parallelizable tasks benefit from independent reviewer gates).

**Dependencies:** Tasks mostly independent after Task 1 (CSS foundation). Tasks 6–8 depend on Tasks 1–4 being complete. Task 9 tests everything.

**Quick Wins:** Tasks 2, 3, 4 (data/content/images) can run in parallel; they don't depend on each other or UI changes.

