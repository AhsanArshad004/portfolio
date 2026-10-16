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
        description: 'Transit agencies managing 500+ personnel across multiple shifts faced crippling scheduling inefficiency. Manual resource allocation resulted in 40% scheduling conflicts, $2M in annual cost overruns due to overtime and duplicate assignments, and 2-3 weeks to resolve single conflicts. No visibility into resource utilization or predictive capacity planning.',
        impact: '40% conflicts annually, $2M+ cost overruns',
      },
      solution: {
        description: 'Engineered constraint-solving optimization engine powered by advanced algorithms that model complex constraints (shift lengths, vehicle types, qualifications, legal rest periods, union rules). Built real-time conflict detection with WebSocket updates, predictive analytics dashboard showing utilization and bottlenecks, and one-click auto-resolution using AI-driven optimization.',
        approach: 'Constraint satisfaction + predictive optimization',
      },
      impact: {
        metrics: [
          { label: 'Conflict Reduction', value: '85', icon: '✓' },
          { label: 'Resolution Time', value: '1', icon: '⚡' },
          { label: 'Agencies Served', value: '500', icon: '👥' },
        ],
      },
      keyFeatures: [
        { title: 'Constraint Solver', description: 'Advanced algorithm solving multi-dimensional scheduling constraints in seconds', icon: '⚙️' },
        { title: 'Real-Time Sync', description: 'WebSocket-powered live conflict detection across all terminals', icon: '📡' },
        { title: 'Predictive Analytics', description: 'Forecast bottlenecks, recommend staffing adjustments', icon: '🔮' },
        { title: 'Audit Trail', description: 'Complete change history with rollback capability for compliance', icon: '📋' },
      ],
      comparison: {
        before: '40% conflicts, 2-3 weeks to resolve, $2M annual waste',
        after: '<5% conflicts, instant auto-resolution, $2M+ savings, 10K+ resources optimized',
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
        description: 'Large enterprises struggled with fragmented document workflows spread across email, shared drives, and multiple disconnected systems. Document processing took 30 days with 60% manual rework due to lost context, missing approvals, and compliance violations. No audit trail for regulatory requirements (SOX, HIPAA). Form submissions routed manually between departments, creating bottlenecks and errors.',
        impact: '30-day cycles, 60% rework, compliance gaps',
      },
      solution: {
        description: 'Built unified Enterprise Content Management platform with intelligent form builder (drag-drop, conditional logic, field validation), automated approval workflows, centralized document repository, and comprehensive audit logging. Integrated e-signature, OCR for document processing, metadata extraction, and compliance reporting dashboard.',
        approach: 'Centralized ECM with intelligent automation',
      },
      impact: {
        metrics: [
          { label: 'Processing Time', value: '3', icon: '⚡' },
          { label: 'Manual Work Cut', value: '60', icon: '✓' },
          { label: 'Compliance Score', value: '99', icon: '🔒' },
        ],
      },
      keyFeatures: [
        { title: 'Form Builder', description: 'No-code form designer with conditional workflows and validation rules', icon: '🎨' },
        { title: 'Automated Routing', description: 'Smart document routing based on type, value, and approver availability', icon: '🚀' },
        { title: 'e-Signature & OCR', description: 'Digital signatures and automated document data extraction', icon: '✍️' },
        { title: 'Compliance Suite', description: 'Audit logging, retention policies, regulatory reporting (SOX, HIPAA, GDPR)', icon: '🔐' },
      ],
      comparison: {
        before: '30-day cycles, 60% rework, fragmented systems, no audit trail',
        after: '3-day cycles, automated approval chains, SOC2 Type II certified, complete audit trail for 1000+ orgs',
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
        description: 'Data quality issues escaped to production because each microservice had its own validation logic (duplicated, inconsistent, incomplete). Cost of fixing defects downstream was 10x higher than catching at entry. No single source of truth for validation rules. Testing validation across services was nearly impossible due to fragmentation.',
        impact: '10x cost per defect, validation redundancy, testing gaps',
      },
      solution: {
        description: 'Architected domain-driven validation framework as shared NuGet package with fluent API for declarative rules (type checking, business logic, cross-field validation). Built rules engine supporting composition, async validation, custom error messages, and multi-language support. Integrated with API middleware for automatic request validation.',
        approach: 'Centralized, composable validation framework',
      },
      impact: {
        metrics: [
          { label: 'Defect Escape Rate', value: '75', icon: '✓' },
          { label: 'Critical Issues Prevented', value: '500', icon: '💰' },
          { label: 'Code Duplication Eliminated', value: '80', icon: '🗑' },
        ],
      },
      keyFeatures: [
        { title: 'Fluent Rules API', description: 'Composable domain rules with clear business language', icon: '📝' },
        { title: 'Async Validation', description: 'Database checks and external API validation in rules', icon: '🔄' },
        { title: 'Shared Package', description: 'Single source of truth distributed via NuGet across all services', icon: '📦' },
        { title: 'Error Localization', description: 'Multi-language error messages with business context', icon: '🌍' },
      ],
      comparison: {
        before: 'Each service duplicated validation, 10x cost to fix, defects in production',
        after: 'Centralized rules, 75% fewer production defects, $500K+ savings, consistent behavior',
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
        description: 'C-suite executives received static Excel reports every Friday, but business moved at daily pace. Decision-making lagged 1 week behind reality. Wanted to understand "why" behind metrics but reports were just numbers. Manual consolidation from 15+ sources prone to errors. No ability to drill into exceptions or anomalies.',
        impact: '1-week lag, manual consolidation, slow decisions',
      },
      solution: {
        description: 'Built real-time analytics platform with live WebSocket streaming from 15+ data sources (CRM, ERP, billing, support), interactive D3.js visualizations with drill-down capability, and predictive analytics powered by ML models. Implemented custom alerting for anomalies, trend detection, and forecasting. Real-time collaboration with shared annotations and insights.',
        approach: 'Live streaming architecture with ML-powered insights',
      },
      impact: {
        metrics: [
          { label: 'Reporting Lag', value: '0', icon: '⚡' },
          { label: 'Decision Velocity', value: '3', icon: '🚀' },
          { label: 'Cost Savings Identified', value: '1', icon: '💰' },
        ],
      },
      keyFeatures: [
        { title: 'Live Data Streaming', description: 'Real-time metrics from 15+ enterprise data sources via WebSockets', icon: '📡' },
        { title: 'Interactive Visualizations', description: 'D3.js-powered drill-down from executive summary to transaction-level', icon: '📊' },
        { title: 'Predictive Models', description: 'ML-powered forecasting, anomaly detection, trend analysis', icon: '🤖' },
        { title: 'Smart Alerting', description: 'Configurable alerts for KPI thresholds and business events', icon: '🔔' },
      ],
      comparison: {
        before: 'Weekly static reports, 1-week decision lag, manual consolidation errors',
        after: 'Live metrics, 3x decision velocity, $1M+ cost savings identified quarterly, instant anomaly alerts',
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
        description: 'Monolithic architecture with tightly coupled services meant changing one component required redeploying entire system, testing all 12 services, and managing complex dependency chains. Deployments took 2-3 weeks. Integration bugs from service interdependencies blocked releases. Horizontal scaling limited by architectural constraints.',
        impact: 'Weeks-long deployments, tight coupling, integration bugs',
      },
      solution: {
        description: 'Designed event-driven middleware abstraction layer using RabbitMQ with domain events. Implemented publish-subscribe pattern enabling services to emit domain events without knowing subscribers. Built pluggable adapter infrastructure for adding new services. Added service registry for dynamic discovery, health checks, and graceful shutdown. Decoupled data ownership with event sourcing.',
        approach: 'Event-driven, loosely-coupled microservices',
      },
      impact: {
        metrics: [
          { label: 'Deployment Frequency', value: '10', icon: '🚀' },
          { label: 'Integration Bugs Reduced', value: '80', icon: '✓' },
          { label: 'Services Deployed Hourly', value: '100', icon: '⚡' },
        ],
      },
      keyFeatures: [
        { title: 'Event Bus', description: 'RabbitMQ-based pub/sub for domain events', icon: '📡' },
        { title: 'Service Registry', description: 'Dynamic service discovery with health checks and failover', icon: '📍' },
        { title: 'Event Sourcing', description: 'Audit trail of all state changes with event replay', icon: '📜' },
        { title: 'Pluggable Adapters', description: 'Framework for onboarding new services without core changes', icon: '🔌' },
      ],
      comparison: {
        before: '2-3 week deployment cycles, tight coupling, ripple effects, centralized scaling bottleneck',
        after: 'Hourly independent deployments, zero ripple effects, 10x deployment frequency, independent service scaling',
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
        description: 'Enterprise teams used email, Slack, Teams, and SMS simultaneously causing critical context loss, missed messages, and regulatory violations. No compliance audit trail for financial institutions and healthcare providers. 70% of team communication through email caused information silos. No way to track decision context across channels. Legal holds impossible to execute across multiple platforms.',
        impact: 'No single source of truth, compliance gaps, context loss',
      },
      solution: {
        description: 'Built unified collaboration platform (Nebula) with real-time chat using WebSockets, integrated file sharing with version control, complete audit logging for compliance (HIPAA, SOX, GDPR), advanced search with AI-powered context discovery, and team analytics. Implemented message encryption, thread-based organization, and smart notifications. Built admin controls for legal holds, data retention, and compliance reporting.',
        approach: 'Centralized hub with compliance-first architecture',
      },
      impact: {
        metrics: [
          { label: 'Email Reduced', value: '70', icon: '✉️' },
          { label: 'Compliance Ready', value: '100', icon: '🔒' },
          { label: 'Response Time Improved', value: '50', icon: '⚡' },
        ],
      },
      keyFeatures: [
        { title: 'Real-Time Chat', description: 'WebSocket-based messaging with threading and reactions', icon: '💬' },
        { title: 'File Management', description: 'Version control, secure sharing, DLP (Data Loss Prevention)', icon: '📁' },
        { title: 'Compliance Suite', description: 'Legal holds, audit logs, retention policies, HIPAA/SOX/GDPR ready', icon: '🔐' },
        { title: 'AI Search', description: 'Full-text search with context understanding and decision recovery', icon: '🔍' },
      ],
      comparison: {
        before: '70% email-based communication, fragmented across 4 platforms, no audit trail, compliance violations',
        after: 'Single unified hub, 70% email reduction, SOC2 Type II certified, complete audit trail, legal-hold ready',
      },
    },
  },
];
