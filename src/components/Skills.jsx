import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Skills() {
  const sectionRef = useAnimateOnScroll();

  const skillCategories = {
    'Backend (.NET Specialist)': [
      '.NET 8', '.NET Core', 'C#', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'LINQ',
      'Dependency Injection', 'ASP.NET Web Forms', 'NHibernate', 'Web Services'
    ],
    'Frontend (Angular + .NET)': [
      'Angular 16', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'AJAX',
      'Tailwind CSS', 'Bootstrap', 'Material Design', 'Responsive Design'
    ],
    'Databases (SQL & Oracle)': [
      'SQL Server', 'Oracle Database', 'LINQ to SQL', 'Stored Procedures',
      'Database Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning'
    ],
    'Architecture & Design': [
      'SOLID Principles', 'Design Patterns', 'Clean Code', 'Domain-Driven Design',
      'Multi-tenant Architecture', 'Constraint Solving', 'Service-Oriented Architecture'
    ],
    'Cloud & DevOps': [
      'Azure', 'Azure DevOps', 'Docker', 'GitHub', 'Git', 'CI/CD Pipelines',
      'GitHub Actions', 'Deployment Automation'
    ],
    'Desktop Applications': [
      'WPF', 'WebForms', 'Windows Services', 'System Integration',
      'File Management Systems', 'Console Applications'
    ],
    'Testing & Quality': [
      'Unit Testing', 'Integration Testing', 'xUnit', 'NUnit', 'Mocha', 'Jasmine',
      'Test-Driven Development', 'Playwright', 'Performance Testing'
    ],
    'AI & LLM': [
      'LLM Integration', 'RAG (Retrieval-Augmented Generation)', 'OpenAI API',
      'AI Chatbot Development', 'Prompt Engineering', 'Vector Embeddings'
    ],
    'Tools & Platforms': [
      'Visual Studio', 'VS Code', 'Git', 'GitHub', 'Postman', 'Docker',
      'Vite', 'Webpack', 'SQL Server Management Studio'
    ],
    'Enterprise Solutions': [
      'ECM Systems', 'Document Management', 'Workflow Orchestration', 'Compliance & Audit Logging',
      'Multi-region Deployments', 'Real-time Analytics', 'Global Compliance (SOX, HIPAA, GDPR)'
    ],
  };

  const skillIcons = {
    'C#': '🔷', '.NET Core': '🔶', '.NET 8': '🔶', 'ASP.NET MVC': '🔶', 'ASP.NET Web API': '🔶',
    'Angular 16': '🅰️', 'TypeScript': '📘', 'JavaScript (ES6+)': '📙',
    'SQL Server': '💾', 'Oracle Database': '🦁', 'LINQ to SQL': '🔗',
    'Docker': '🐳', 'Azure': '☁️', 'Git': '🔀', 'GitHub': '🐙',
    'Visual Studio': '⚙️', 'VS Code': '💻', 'WPF': '🪟', 'WebForms': '📋',
    'Testing': '✅', 'xUnit': '✅', 'Design Patterns': '🎨', 'SOLID Principles': '🏛️',
    'CI/CD Pipelines': '⚡', 'Postman': '📮', 'LLM Integration': '🤖', 'RAG': '📚',
    'OpenAI API': '🧠', 'Domain-Driven Design': '🧭', 'Entity Framework': '💪',
    'ECM Systems': '📑', 'Compliance & Audit Logging': '✍️'
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