import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Skills() {
  const sectionRef = useAnimateOnScroll();

  const skillCategories = {
    'Backend (.NET)': [
      '.NET Core', 'C#', 'ASP.NET MVC', 'ASP.NET Web API', 'ASP.NET Web Forms',
      'Entity Framework', 'LINQ', 'WPF', 'Domain-Driven Design', 'Microservices',
    ],
    'Frontend': [
      'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
    ],
    'Databases': [
      'SQL Server', 'Oracle Database', 'Stored Procedures', 'Database Design', 'Query Optimization',
    ],
    'AI & LLM': [
      'LLM Integration', 'RAG (Retrieval-Augmented Generation)', 'OpenAI API', 'Prompt Engineering',
    ],
    'Tools & DevOps': [
      'Azure', 'Azure DevOps', 'Docker', 'Git', 'GitHub Actions', 'xUnit', 'NUnit', 'Visual Studio',
    ],
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
                    className="border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
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