import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Skills() {
  const sectionRef = useAnimateOnScroll();

  const skillCategories = {
    'Backend & Languages': [
      '.NET 8', 'C#', 'ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'LINQ',
      'Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'Web Services'
    ],
    'Frontend & UI': [
      'React 18', 'Angular 16', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Bootstrap', 'Material Design', 'Redux', 'State Management'
    ],
    'Databases & Data': [
      'SQL Server', 'PostgreSQL', 'MongoDB', 'Oracle', 'Redis', 'LINQ to SQL',
      'Database Design', 'Query Optimization', 'Stored Procedures', 'Data Modeling'
    ],
    'Architecture & Design': [
      'Microservices', 'Domain-Driven Design', 'Event-Driven Architecture',
      'SOLID Principles', 'Design Patterns', 'Constraint Solving', 'Message Queues',
      'Service-Oriented Architecture', 'Clean Architecture'
    ],
    'Cloud & DevOps': [
      'Azure', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD Pipelines',
      'Container Orchestration', 'Infrastructure as Code', 'Azure DevOps'
    ],
    'Desktop & Mobile': [
      'WPF', 'WebForms', 'React Native', 'Windows Services', 'Desktop Applications',
      'System Integration', 'File Management Systems'
    ],
    'Testing & Quality': [
      'Unit Testing', 'Integration Testing', 'Jest', 'Mocha', 'Jasmine', 'xUnit',
      'Test-Driven Development', 'Playwright', 'Performance Testing'
    ],
    'Tools & Platforms': [
      'Visual Studio', 'VS Code', 'Git', 'GitHub', 'Postman', 'Docker',
      'Slack API', 'OpenAI API', 'Vite', 'Webpack', 'RabbitMQ'
    ],
    'Enterprise & Advanced': [
      'Multi-tenant Architecture', 'Concurrent Processing', 'Real-time Analytics',
      'Compliance & Audit Logging', 'Data Validation Frameworks', 'Workflow Orchestration',
      'Document Management', 'ECM Systems', 'Process Optimization'
    ],
  };

  const skillIcons = {
    'C#': '🔷', '.NET Core': '🔶', '.NET 8': '🔶', 'ASP.NET Core': '🔶',
    'React': '⚛️', 'React 18': '⚛️', 'Angular 16': '🅰️', 'Vue.js': '💚',
    'TypeScript': '📘', 'JavaScript (ES6+)': '📙', 'Node.js': '🟢',
    'SQL Server': '💾', 'PostgreSQL': '🐘', 'MongoDB': '🍃', 'Redis': '🔴',
    'Docker': '🐳', 'Kubernetes': '☸️', 'Azure': '☁️', 'AWS': '☁️',
    'Git': '🔀', 'GitHub': '🐙', 'Visual Studio': '⚙️', 'VS Code': '💻',
    'Testing': '✅', 'Jest': '✅', 'Microservices': '🏗️', 'GraphQL': '📊',
    'Design Patterns': '🎨', 'SOLID Principles': '🏛️', 'CI/CD Pipelines': '⚡',
    'Postman': '📮', 'WPF': '🪟', 'WebForms': '📋', 'REST APIs': '🔌',
    'Domain-Driven Design': '🧭', 'Event-Driven Architecture': '📡',
    'Message Queues': '📬', 'RabbitMQ': '🐰',
  };

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-wider">CAPABILITIES</span>
          </div>
          <h2 className="text-white text-4xl font-bold">A full stack toolkit, sharpened on production</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="animate-fade-in-up bg-dark-card border border-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-cyan-400 text-sm uppercase mb-4 tracking-wider">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span
                    key={skill}
                    className="border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-help group relative"
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
  )
}