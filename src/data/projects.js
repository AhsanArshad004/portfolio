import trapezeImg from '../assets/projects/trapeze-scheduling.jpg'
import dokmeeImg from '../assets/projects/dokmee-capture.jpg'
import scoreCeoImg from '../assets/projects/scoreceo-platform.jpg'
import propertyScoutImg from '../assets/projects/propertyscout-platform.jpg'
import validCheckImg from '../assets/projects/validcheck-platform.jpg'

export const projects = [
  {
    id: 'trapeze-resource-planner',
    title: 'Trapeze FX (now Nexfeld) - Transit Resource & Crew Scheduling',
    description: 'Contributed to Trapeze FX, Trapeze Group\'s fixed-route scheduling and crew/vehicle planning suite. The European business rebranded to Nexfeld in February 2026; the underlying product is the same.',
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
        description: 'Worked on Trapeze FX, the resource/crew scheduling module within Trapeze Group\'s transit suite: a Gantt-style scheduling interface backed by SQL Server/Oracle that lets planners build routes, assign crews and vehicles, and check assignments against regulatory and union constraints before publishing a schedule. In February 2026, Trapeze Group rebranded this European planning & scheduling business as Nexfeld; it\'s the same product and team under a new name.',
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
    description: 'After delivering Dokmee Forms, moved onto the full Dokmee product team, contributing across the ECM suite: OCR capture, workflows, and e-signature.',
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
        description: 'After independently delivering Dokmee Forms, I moved onto the broader Dokmee team, where I work across the ECM suite: OCR-based capture that indexes scanned documents automatically, a workflow engine for routing documents through approval chains, and e-signature integration. Documents are stored with full version history and an audit log for compliance reporting.',
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
    title: 'ValidCheck - Business eCheck Payment Platform',
    description: 'Contributed to ValidCheck, a platform that lets businesses send and receive checks online with built-in fraud prevention.',
    technologies: ['C#', '.NET Core', 'SQL Server', 'Payment Processing'],
    category: 'FinTech / Payments',
    categoryColor: 'bg-gradient-blue-purple',
    demoLink: 'https://validcheckdev.com/',
    startDate: '2021-03-01',
    endDate: '2022-02-01',
    images: {
      thumbnail: validCheckImg,
      hero: validCheckImg,
      gallery: [],
    },
    details: {
      problem: {
        description: 'Businesses that pay by paper check deal with mailing delays, manual data entry into accounting software, and check fraud. There was no way to send a check electronically to someone who isn\'t enrolled in a banking app, while still keeping the payment auditable and fraud-checked.',
        impact: 'Slow, manual check payments with no built-in fraud protection',
      },
      solution: {
        description: 'Worked on ValidCheck, which lets a business send an eCheck to any payee by email (no app or enrollment required on their end), syncs contacts and payment records with QuickBooks to avoid double data entry, and posts check details to the bank through a Positive Pay integration so the check is validated and funds are available instantly instead of after days of clearing.',
        approach: 'eCheck issuance with QuickBooks sync and Positive Pay fraud validation',
      },
      impact: {
        metrics: [
          { label: 'Integration', value: 'QuickBooks', display: 'QuickBooks sync', icon: '🔗' },
          { label: 'Fraud Check', value: 'Positive Pay', display: 'Positive Pay validation', icon: '🔒' },
          { label: 'Enrollment', value: 'None', display: 'No payee signup required', icon: '✉️' },
        ],
      },
      keyFeatures: [
        { title: 'Email-Based eChecks', description: 'Payees receive and deposit a check with just a name and email, no app required', icon: '✉️' },
        { title: 'QuickBooks Sync', description: 'Contacts and payment records stay in sync automatically', icon: '🔗' },
        { title: 'Positive Pay Validation', description: 'Check details are posted to the bank for instant fraud validation', icon: '🔒' },
        { title: 'Single-Entry Data', description: 'Check data is entered once and shared across banking and accounting systems', icon: '📝' },
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
    description: 'Implemented and delivered Dokmee Forms independently; that delivery led to joining the broader Dokmee product team afterward.',
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
        description: 'Built a drag-drop form builder with conditional logic and field validation, plus automated routing so submitted forms move through an approval chain instead of being forwarded by hand. Implementing and delivering this module independently led to being moved onto the broader Dokmee product team afterward, working across their full product line.',
        approach: 'Drag-drop form builder with automated approval routing',
      },
      impact: {
        metrics: [
          { label: 'Type', value: 'Module', display: 'ECM module', icon: '🧩' },
          { label: 'Stack', value: '.NET', display: '.NET + Angular', icon: '⚙️' },
          { label: 'Outcome', value: 'Promoted', display: 'Led to joining full Dokmee team', icon: '🔗' },
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
