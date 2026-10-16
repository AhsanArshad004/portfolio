export const projects = [
  {
    id: 'trapeze-resource-planner',
    title: 'Trapeze FX Resource & Timetable Planner',
    description: 'Reduced scheduling conflicts by 85% for 500+ transit agencies managing 10K+ resources',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Constraint Solver'],
    category: 'Enterprise Resource Planning',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://example.com/trapeze',
    startDate: '2022-01-01',
    endDate: '2023-06-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Resource Planning Overview' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Team Coordination Dashboard' },
        { url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format', caption: 'Conflict Resolution Results' },
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
          { label: 'Conflict Reduction', value: '85', icon: '✓' },
          { label: 'Time Saved', value: '85', icon: '⏱' },
          { label: 'Users', value: '500', icon: '👥' },
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
  {
    id: 'dokmee-ecm',
    title: 'Dokmee ECM & Forms Platform',
    description: 'Cut document processing from 30 days to 3 days while achieving 99% compliance for 1000+ organizations',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'WebForms', 'WPF'],
    category: 'ECM Platform',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://example.com/dokmee',
    startDate: '2020-06-01',
    endDate: '2022-12-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1507842217343-583f20270320?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1507842217343-583f20270320?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1450101499163-c8917c7b7c1d?w=600&q=80&auto=format', caption: 'Document Management' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Form Automation' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Workflow Orchestration' },
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
          { label: 'Processing Time', value: '3', icon: '⚡' },
          { label: 'Manual Work Eliminated', value: '60', icon: '✓' },
          { label: 'Compliance Score', value: '99', icon: '🔒' },
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
  },
  {
    id: 'validcheck',
    title: 'ValidCheck Data Validation Framework',
    description: 'Prevented 500+ critical issues before production, eliminated 75% of defects at entry point',
    technologies: ['C#', '.NET Core', 'Microservices', 'Domain-Driven Design'],
    category: 'Quality Assurance',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://example.com/validcheck',
    startDate: '2021-03-01',
    endDate: '2022-09-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70504ad0?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1516321318423-f06f70504ad0?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Validation Rules' },
        { url: 'https://images.unsplash.com/photo-1516321318423-f06f70504ad0?w=600&q=80&auto=format', caption: 'Error Detection' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Test Coverage' },
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
          { label: 'Defect Escape Rate', value: '75', icon: '✓' },
          { label: 'Issues Prevented', value: '500', icon: '💰' },
          { label: 'Code Duplication', value: '100', icon: '🗑' },
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
  },
  {
    id: 'scoreceO',
    title: 'ScoreCEO Analytics Dashboard',
    description: 'Eliminated reporting lag, increased decision velocity by 3x, identified $1M+ in cost savings',
    technologies: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSockets'],
    category: 'Analytics',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://example.com/scoreceO',
    startDate: '2021-09-01',
    endDate: '2023-03-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Live Metrics Dashboard' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Predictive Analytics' },
        { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format', caption: 'Executive Insights' },
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
          { label: 'Reporting Lag', value: '0', icon: '⚡' },
          { label: 'Decision Velocity', value: '3', icon: '🚀' },
          { label: 'Cost Savings Found', value: '1', icon: '💰' },
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
  },
  {
    id: 'middleware-layers',
    title: 'Middleware Architecture & Service Decoupling',
    description: 'Increased deployment frequency by 10x, reduced integration bugs by 80%, enabled microservices',
    technologies: ['C#', '.NET Core', 'RabbitMQ', 'Event Sourcing', 'Domain Events'],
    category: 'Middleware',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://example.com/middleware',
    startDate: '2020-01-01',
    endDate: '2021-12-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Service Architecture' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Message Integration' },
        { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format', caption: 'Deployment Pipeline' },
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
          { label: 'Deployment Frequency', value: '10', icon: '🚀' },
          { label: 'Integration Bugs', value: '80', icon: '✓' },
          { label: 'Microservices Ready', value: '1', icon: '🏗' },
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
  },
  {
    id: 'nebula-chat',
    title: 'Nebula Chat Collaboration Platform',
    description: 'Reduced email volume by 70%, achieved full compliance, cut response times by 50%',
    technologies: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Redis'],
    category: 'Chat',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://example.com/nebula-chat',
    startDate: '2022-04-01',
    endDate: '2023-09-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Team Messaging' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'File Sharing' },
        { url: 'https://images.unsplash.com/photo-1516321318423-f06f70504ad0?w=600&q=80&auto=format', caption: 'Audit Compliance' },
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
          { label: 'Email Volume', value: '70', icon: '✉️' },
          { label: 'Compliance', value: '1', icon: '🔒' },
          { label: 'Response Time', value: '50', icon: '⚡' },
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
  },
];
