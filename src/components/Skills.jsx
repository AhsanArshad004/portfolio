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
    <section ref={sectionRef} id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="animate-fade-in-up">
              <h3 className="font-bold text-lg mb-4 text-gray-800">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
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
  )
}