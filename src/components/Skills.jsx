import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Skills() {
  const sectionRef = useAnimateOnScroll();

  const skillCategories = {
    'Backend': ['.NET 8', 'C#', 'ASP.NET MVC', '.NET Core', 'Web API', 'Entity Framework', 'SQL Server', 'Oracle'],
    'Frontend': ['React', 'Angular 16', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Desktop': ['WPF', 'WebForms'],
    'Tools & Platforms': ['Git', 'GitHub', 'Visual Studio', 'Postman', 'Docker'],
  };

  const skillIcons = {
    'C#': '🔷', '.NET Core': '🔶', '.NET 8': '🔶', 'React': '⚛️', 'Angular 16': '🅰️',
    'TypeScript': '📘', 'SQL Server': '💾', 'Git': '🔀', 'Docker': '🐳', 'Visual Studio': '⚙️',
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