import trapezeImg from '../assets/projects/trapeze-scheduling.jpg'
import dokmeeImg from '../assets/projects/dokmee-capture.jpg'
import scoreCeoImg from '../assets/projects/scoreceo-platform.jpg'
import propertyScoutImg from '../assets/projects/propertyscout-platform.jpg'

export const projects = [
  {
    id: 'trapeze-resource-planner',
    title: 'Trapeze FX - Transit Resource & Crew Scheduling',
    description: 'Contributed to Trapeze FX, Trapeze Group\'s fixed-route scheduling and crew/vehicle planning suite used by transit agencies.',
    technologies: ['C#', '.NET', 'SQL Server', 'WPF', 'Oracle'],
    category: 'Transit Scheduling Software',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://trapezegroup.com/fixed-route-scheduling/',
    startDate: '2022-04-01',
    endDate: 'Present',
    images: {
      thumbnail: trapezeImg,
      hero: trapezeImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'Transit agencies plan fixed bus/rail routes, driver rosters, and vehicle assignments by hand or with disconnected tools, which makes it slow to react when a route changes, a driver calls in, or a regulatory rule (union agreements, work-time limits, vehicle compliance) is violated by the schedule.',
        impact: 'Manual, error-prone scheduling across regions with different compliance rules',
      },
      solution: {
        description: 'Worked on Trapeze FX, the resource/crew scheduling module within Trapeze Group\'s transit suite: a Gantt-style scheduling interface backed by SQL Server/Oracle that lets planners build routes, assign crews and vehicles, and check assignments against regulatory and union constraints before publishing a schedule.',
        approach: 'Enterprise scheduling UI + constrained rostering against SQL Server/Oracle data',
      },
      impact: {
        metrics: [
          { label: 'Platform', value: 'Enterprise', display: 'Enterprise-grade', icon: '🚌' },
          { label: 'Deployment', value: 'Global', display: 'Global deployments', icon: '🌍' },
          { label: 'Role', value: 'Contributor', display: 'Team contributor', icon: '👥' },
        ],
      },
      keyFeatures: [
        { title: 'Gantt Scheduling UI', description: 'Visual route and crew scheduling with drag-and-drop trip assignment', icon: '📅' },
        { title: 'Compliance Checks', description: 'Flags schedule conflicts against work-time and union rules before publishing', icon: '⚙️' },
        { title: 'Vehicle Assignment', description: 'Assigns vehicles to routes based on availability and maintenance status', icon: '🚐' },
        { title: 'Multi-Agency Support', description: 'Configurable per-agency rules for regions with different regulations', icon: '🗺️' },
      ],
      comparison: null,
    },
  },
  {
    id: 'dokmee-ecm',
    title: 'Dokmee ECM - Enterprise Document Management',
    description: 'Contributed to Dokmee, an enterprise content management platform with OCR capture, automated workflows, and e-signature.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'WebForms', 'WPF'],
    category: 'ECM Platform',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://www.dokmee.com',
    startDate: '2020-06-01',
    endDate: '2022-03-01',
    images: {
      thumbnail: dokmeeImg,
      hero: dokmeeImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'Organizations capturing paper and digital documents at scale need a way to index, search, and route them without manual re-keying, while keeping an audit trail for compliance-heavy industries like banking and healthcare.',
        impact: 'Manual document routing and no centralized audit trail',
      },
      solution: {
        description: 'Worked on modules of the Dokmee ECM suite: OCR-based capture that indexes scanned documents automatically, a workflow engine for routing documents through approval chains, and e-signature integration. Documents are stored with full version history and an audit log for compliance reporting.',
        approach: 'OCR capture + workflow engine on a C#/SQL Server stack',
      },
      impact: {
        metrics: [
          { label: 'Rating', value: '4.7', display: '4.7/5 on Capterra', icon: '⭐' },
          { label: 'Reviews', value: '100', display: '100+ reviews', icon: '📝' },
          { label: 'Deployment', value: 'Hybrid', display: 'On-prem + cloud', icon: '☁️' },
        ],
      },
      keyFeatures: [
        { title: 'OCR Capture', description: 'Automated indexing and classification of scanned documents', icon: '🔍' },
        { title: 'Workflow Engine', description: 'Drag-and-drop approval routing with role-based permissions', icon: '🚀' },
        { title: 'e-Signature', description: 'Digital signature collection integrated into document workflows', icon: '✍️' },
        { title: 'Audit Logging', description: 'Full version history and access logs for compliance reporting', icon: '🔐' },
      ],
    },
  },
  {
    id: 'validcheck',
    title: 'ValidCheck - Internal Validation Framework',
    description: 'An internal .NET library built to centralize data validation logic shared across several backend services.',
    technologies: ['C#', '.NET Core', 'Microservices', 'Domain-Driven Design'],
    category: 'Quality Assurance',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: null,
    startDate: '2021-03-01',
    endDate: '2022-09-01',
    images: {
      // No public demo exists for this internal tool; illustrative stock photo only.
      thumbnail: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&q=80&auto=format',
      hero: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80&auto=format',
      gallery: [],
    },
    details: {
      problem: {
        description: 'Each backend microservice had its own validation logic (type checks, business rules, cross-field checks), duplicated and inconsistent across services. Bugs caught by validation in one service often weren\'t caught in another, and there was no single place to look up the rules.',
        impact: 'Duplicated, inconsistent validation logic across services',
      },
      solution: {
        description: 'Built a shared .NET validation library with a fluent API for declarative rules (type checking, business logic, cross-field validation), distributed as an internal package so every service could reference the same rule definitions instead of reimplementing them.',
        approach: 'Shared fluent-API validation library distributed across services',
      },
      impact: {
        metrics: [
          { label: 'Scope', value: 'Shared', display: 'Shared across services', icon: '📦' },
          { label: 'Type', value: 'Internal', display: 'Internal library', icon: '🔧' },
          { label: 'Stack', value: '.NET', display: '.NET Core', icon: '✓' },
        ],
      },
      keyFeatures: [
        { title: 'Fluent Rules API', description: 'Composable domain rules with clear business language', icon: '📝' },
        { title: 'Async Validation', description: 'Database checks and external API validation in rules', icon: '🔄' },
        { title: 'Shared Package', description: 'Single source of truth distributed as an internal package across services', icon: '📦' },
        { title: 'Error Localization', description: 'Multi-language error messages with business context', icon: '🌍' },
      ],
    },
  },
  {
    id: 'scoreceO',
    title: 'ScoreCEO - Credit Repair Business Platform',
    description: 'Contributed to ScoreCEO, a multi-portal CRM credit repair businesses use to manage leads, disputes, and compliance.',
    technologies: ['C#', 'ASP.NET', 'Angular', 'SQL Server'],
    category: 'Business Management Software',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://scoreceo.com',
    startDate: '2019-12-01',
    endDate: '2021-02-01',
    images: {
      thumbnail: scoreCeoImg,
      hero: scoreCeoImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'Credit repair businesses manage leads, client intake, credit-bureau dispute letters, and state-by-state compliance paperwork. Doing this across spreadsheets and email makes it easy to miss a compliance deadline or lose track of where a client\'s dispute stands.',
        impact: 'Manual lead tracking, dispute processing, and compliance paperwork',
      },
      solution: {
        description: 'Built features for ScoreCEO\'s multi-portal architecture (separate client, affiliate, and admin portals): dispute letter generation and tracking, and client-facing dashboards for credit repair businesses to manage customers end to end.',
        approach: 'Multi-portal CRM with automated dispute and compliance workflows',
      },
      impact: {
        metrics: [
          { label: 'Customers', value: '8000', display: '8,000+ businesses', icon: '👥' },
          { label: 'Portals', value: '3', display: 'Multi-portal', icon: '🔀' },
          { label: 'Founded', value: '2010', display: 'Est. 2010', icon: '📅' },
        ],
      },
      keyFeatures: [
        { title: 'Lead & Client CRM', description: 'Tracks leads through onboarding to active credit repair clients', icon: '📋' },
        { title: 'Dispute Automation', description: 'Generates and tracks credit-bureau dispute letters per client', icon: '📨' },
        { title: 'Compliance Workflows', description: 'State-specific contracts and disclosures sent automatically', icon: '🔒' },
        { title: 'Multi-Portal Access', description: 'Separate portals for clients, affiliates, and business admins', icon: '🔀' },
      ],
    },
  },
  {
    id: 'dokmee-forms',
    title: 'Dokmee Forms - Form Automation Module',
    description: 'Built the form-automation module of the Dokmee suite, later integrated into the main ECM platform.',
    technologies: ['C#', 'ASP.NET', 'SQL Server', 'Angular', '.NET Framework'],
    category: 'Forms Management',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://www.dokmee.com',
    startDate: '2019-09-01',
    endDate: '2020-06-01',
    images: {
      thumbnail: dokmeeImg,
      hero: dokmeeImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'Before this module existed, form-based data (intake forms, requests, approvals) still had to be captured on paper or in disconnected spreadsheets, then manually keyed into other systems with no validation or routing.',
        impact: 'Manual form intake with no routing or validation',
      },
      solution: {
        description: 'Built a drag-drop form builder with conditional logic and field validation, plus automated routing so submitted forms move through an approval chain instead of being forwarded by hand. This module was later folded into the broader Dokmee ECM suite.',
        approach: 'Drag-drop form builder with automated approval routing',
      },
      impact: {
        metrics: [
          { label: 'Type', value: 'Module', display: 'ECM module', icon: '🧩' },
          { label: 'Stack', value: '.NET', display: '.NET + Angular', icon: '⚙️' },
          { label: 'Outcome', value: 'Merged', display: 'Merged into Dokmee ECM', icon: '🔗' },
        ],
      },
      keyFeatures: [
        { title: 'Drag-Drop Builder', description: 'No-code form designer for business users', icon: '🎨' },
        { title: 'Conditional Logic', description: 'Fields and sections that adapt based on prior answers', icon: '🔄' },
        { title: 'Approval Routing', description: 'Submitted forms move through a configurable approval chain', icon: '🔌' },
        { title: 'Field Validation', description: 'Required fields, format checks, and calculations at submission time', icon: '✅' },
      ],
    },
  },
  {
    id: 'ai-chat-support',
    title: 'AI Support Assistant - PropertyScout.io',
    description: 'Built an AI support assistant for PropertyScout.io, a property/owner records platform used by real estate and insurance professionals.',
    technologies: ['Angular', '.NET', 'LLM Integration', 'RAG (Retrieval-Augmented Generation)', 'SQL Server'],
    category: 'AI/Chatbot',
    categoryColor: 'bg-gradient-blue-teal',
    demoLink: 'https://propertyscout.io',
    startDate: '2023-06-01',
    endDate: '2024-09-01',
    images: {
      thumbnail: propertyScoutImg,
      hero: propertyScoutImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'PropertyScout.io gives real estate professionals, insurers, and title companies access to property/owner records, title reports, and deed data. New users had questions about credits, report types, and how to read specific records, and the support team fielded the same questions repeatedly with no after-hours coverage.',
        impact: 'Repetitive support questions with no after-hours coverage',
      },
      solution: {
        description: 'Built an AI support assistant using an LLM with RAG (Retrieval-Augmented Generation) grounded in PropertyScout\'s help docs and FAQ content, so it answers product questions (credits, report types, data sources) instantly instead of waiting on a support ticket. Added a like/dislike feedback loop and an admin dashboard for reviewing chat transcripts and satisfaction trends.',
        approach: 'LLM + RAG grounded in product documentation, with a feedback loop',
      },
      impact: {
        metrics: [
          { label: 'Coverage', value: '24/7', display: '24/7 availability', icon: '⚡' },
          { label: 'Grounding', value: 'RAG', display: 'RAG-grounded answers', icon: '📚' },
          { label: 'Feedback Loop', value: 'Yes', display: 'Like/dislike feedback', icon: '👍' },
        ],
      },
      keyFeatures: [
        { title: 'Instant Answers', description: 'Answers product questions from help docs, no wait for a ticket', icon: '🤖' },
        { title: 'Suggested Questions', description: 'Shows users next likely questions based on context', icon: '💡' },
        { title: 'Feedback System', description: 'Users can like/dislike responses for continuous improvement', icon: '👍' },
        { title: 'Admin Dashboard', description: 'Reviews chat transcripts, satisfaction trends, and engagement', icon: '📊' },
      ],
    },
  },
];
