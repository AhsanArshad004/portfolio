export const projects = [
  {
    id: 'trapeze-resource-planner',
    title: 'Trapeze FX - Global Transit Optimization Platform',
    description: 'Powered scheduling for MILLIONS of users across 40+ countries (Germany, Denmark, Netherlands, Saudi Arabia, etc.)',
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
        description: 'Transit agencies across 40+ countries managing millions of personnel faced impossible scheduling complexity. Manual resource allocation resulted in 40% scheduling conflicts, $2M+ in annual cost overruns, and 2-3 weeks to resolve conflicts. Each region had different regulatory requirements (EU work-time directives, regional union rules, vehicle compliance). No real-time visibility into 10K+ resources across multiple terminals and regions.',
        impact: '40% conflicts, millions in inefficiency',
      },
      solution: {
        description: 'Built enterprise-grade constraint-solving optimization engine handling millions of scheduling variables across global deployments. Engineered multi-region support with localized regulatory compliance (EU, Middle East, Nordic regulations). Real-time conflict detection across all terminals with one-click auto-resolution. Predictive capacity planning using historical data patterns. Multi-language admin dashboards for operators in each region.',
        approach: 'Global constraint optimization + regional compliance',
      },
      impact: {
        metrics: [
          { label: 'Global Reach', value: '40', display: '40+', icon: '🌍' },
          { label: 'Conflict Reduction', value: '85', display: '85%', icon: '✓' },
          { label: 'Users Served', value: '1M+', display: '1M+', icon: '👥' },
        ],
      },
      keyFeatures: [
        { title: 'Global Scale', description: 'Handles millions of users across 40+ countries with regional compliance', icon: '🌐' },
        { title: 'Constraint Solver', description: 'Advanced algorithm managing EU work directives, union rules, vehicle constraints', icon: '⚙️' },
        { title: 'Real-Time Optimization', description: 'Live conflict detection and instant auto-resolution across all terminals', icon: '⚡' },
        { title: 'Multi-Region Support', description: 'Localized dashboards, compliance reporting, regional regulatory requirements', icon: '🗺️' },
      ],
      comparison: {
        before: '40% conflicts, weeks to resolve, fragmented regional systems',
        after: 'Serves MILLIONS globally, <5% conflicts, instant resolution, unified platform across 40+ countries',
      },
    },
  },
  {
    id: 'dokmee-ecm',
    title: 'Dokmee ECM Suite - Enterprise Document Platform',
    description: 'Unified content management suite (OCR, PDF editing, merge, etc.) serving banks and 1000+ enterprises with SOC2 compliance',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'WebForms', 'WPF'],
    category: 'ECM Platform',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://example.com/dokmee',
    startDate: '2020-06-01',
    endDate: '2022-12-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Document Management' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Form Automation' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Workflow Orchestration' },
      ],
    },
    details: {
      problem: {
        description: 'Banks and large enterprises struggled with fragmented document workflows across email, shared drives, and disconnected systems. Document processing took 30 days with 60% manual rework. Compliance violations for regulatory requirements (SOX, HIPAA, banking regulations). Form submissions routed manually between departments. No unified content management across all document types (PDFs, images, scans).',
        impact: '30-day cycles, 60% rework, compliance gaps',
      },
      solution: {
        description: 'Built comprehensive ECM Suite with multiple integrated products: intelligent form builder, OCR engine, PDF editor, document merge tools, and centralized repository. Automated approval workflows, e-signature integration, metadata extraction, and comprehensive audit logging. Full compliance support for banking and healthcare regulations.',
        approach: 'Unified ECM with integrated product suite',
      },
      impact: {
        metrics: [
          { label: 'Processing Time', value: '3', display: '3 days', icon: '⚡' },
          { label: 'Manual Work Cut', value: '60', display: '60%', icon: '✓' },
          { label: 'Compliance Score', value: '99', display: '99%', icon: '🔒' },
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
      thumbnail: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Validation Rules' },
        { url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format', caption: 'Error Detection' },
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
          { label: 'Defect Escape Rate', value: '75', display: '75% reduced', icon: '✓' },
          { label: 'Critical Issues Prevented', value: '500', display: '500+', icon: '💰' },
          { label: 'Code Duplication Eliminated', value: '80', display: '80%', icon: '🗑' },
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
          { label: 'Reporting Lag', value: '0', display: 'Real-time', icon: '⚡' },
          { label: 'Decision Velocity', value: '3', display: '3x faster', icon: '🚀' },
          { label: 'Cost Savings Identified', value: '1', display: '$1M+', icon: '💰' },
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
    id: 'dokmee-forms',
    title: 'Dokmee Forms - Enterprise Form Platform',
    description: 'Standalone form platform delivering intelligent form automation before integration into ECM Suite',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'Angular', '.NET Framework'],
    category: 'Forms Management',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://example.com/dokmee-forms',
    startDate: '2019-01-01',
    endDate: '2021-06-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Form Design Studio' },
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Workflow Automation' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Form Analytics' },
      ],
    },
    details: {
      problem: {
        description: 'Organizations relied on paper forms and manual data entry processes, resulting in errors, delays, and poor data quality. Form submission workflows were completely manual with no tracking or automation. No way to capture structured data efficiently. Organizations needed flexible form creation without IT dependency.',
        impact: 'Manual processes, data entry errors, slow workflows',
      },
      solution: {
        description: 'Built standalone Forms platform enabling business users to create sophisticated forms without coding. Implemented drag-drop form builder with conditional logic, field validation, calculations, and dynamic sections. Automated form routing with approval workflows. Integrated with backend systems for seamless data capture and processing.',
        approach: 'Low-code form automation platform',
      },
      impact: {
        metrics: [
          { label: 'Time to Build Form', value: '90', display: '90% faster', icon: '⚡' },
          { label: 'Manual Entry Reduction', value: '95', display: '95%', icon: '✓' },
          { label: 'Data Quality Improvement', value: '99', display: '99%', icon: '📊' },
        ],
      },
      keyFeatures: [
        { title: 'Drag-Drop Builder', description: 'No-code form designer for business users', icon: '🎨' },
        { title: 'Smart Workflows', description: 'Conditional logic, branching, approval chains', icon: '🔄' },
        { title: 'Data Integration', description: 'Seamless integration with backend systems', icon: '🔌' },
        { title: 'Analytics Dashboard', description: 'Form submissions, completion rates, performance metrics', icon: '📈' },
      ],
      comparison: {
        before: 'Manual paper forms, data entry errors, no workflow automation',
        after: 'Digital forms, 95% error reduction, automated workflows, instant processing',
      },
    },
  },
  {
    id: 'ai-chat-support',
    title: 'AI Auto-Assistance Chat Bot - PropertyScout',
    description: 'Eliminated support wait times - transformed hours-long support delays into instant AI-powered answers',
    technologies: ['Angular', '.NET', 'LLM Integration', 'RAG (Retrieval-Augmented Generation)', 'SQL Server'],
    category: 'AI/Chatbot',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://propertyscout.io',
    startDate: '2023-06-01',
    endDate: '2024-09-01',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80&auto=format',
      gallery: [
        { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format', caption: 'Chat Interface' },
        { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format', caption: 'Admin Analytics Dashboard' },
        { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format', caption: 'User Engagement Metrics' },
      ],
    },
    details: {
      problem: {
        description: 'PropertyScout users faced massive support delays - customers waiting hours or even days for answers to FAQ questions. Support team overwhelmed with repetitive questions. No after-hours support coverage. Customers abandoning product due to lack of immediate help. Support costs scaling linearly with user growth.',
        impact: 'Hours-long wait times, frustrated users, support bottleneck',
      },
      solution: {
        description: 'Built AI-powered auto-assistance chatbot using LLM (Large Language Models) with RAG (Retrieval-Augmented Generation) for context-aware answers. Bot trained on FAQ pages and product documentation to provide accurate, instant responses. Implemented like/dislike feedback system for continuous improvement. Built comprehensive admin dashboard tracking user interactions, satisfaction metrics, chat analytics, and engagement patterns.',
        approach: 'LLM + RAG architecture with feedback loop',
      },
      impact: {
        metrics: [
          { label: 'Wait Time Reduction', value: '100', display: 'Instant', icon: '⚡' },
          { label: 'Support Satisfaction', value: '95', display: '95%', icon: '😊' },
          { label: 'Support Cost Savings', value: '40', display: '40%', icon: '💰' },
        ],
      },
      keyFeatures: [
        { title: 'Instant Answers', description: 'AI provides immediate responses from FAQ context, no wait time', icon: '🤖' },
        { title: 'Suggested Questions', description: 'Shows users next 2 likely questions they might ask', icon: '💡' },
        { title: 'Feedback System', description: 'Users can like/dislike responses for continuous model improvement', icon: '👍' },
        { title: 'Analytics Dashboard', description: 'Admin views all chat history, user engagement, satisfaction metrics', icon: '📊' },
      ],
      comparison: {
        before: 'Hours-long wait times, no after-hours support, support team overwhelmed',
        after: 'Instant AI responses 24/7, support cost reduced by 40%, user satisfaction 95%, complete chat analytics',
      },
    },
  },
];
