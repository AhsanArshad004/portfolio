export default function Skills() {
  const skills = {
    'Backend': ['.NET 8', 'C#', 'ASP.NET MVC', '.NET Core', 'Web API', 'Entity Framework', 'Dapper ORM', 'SQL Server', 'Oracle'],
    'Frontend': ['React', 'Angular 16', 'Angular 8', 'JavaScript ES6', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
    'Desktop': ['WPF', 'WebForms'],
    'Tools & Platforms': ['Visual Studio', 'Git', 'GitHub', 'GitLab', 'Postman', 'JsReport'],
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
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