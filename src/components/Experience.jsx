export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer / Software Engineer',
      company: 'Contour Software Inc.',
      duration: '04/2022 – Present',
      description: 'Building and maintaining enterprise transit management solutions (Trapeze FX). Responsible for full-stack development of resource planning and timetable systems.',
    },
    {
      role: 'Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      duration: '02/2021 – 03/2022',
      description: 'Developed multiple SaaS products including Dokmee ECM, Forms, and ValidCheck. Led full-stack implementation from database design to Angular frontend.',
    },
    {
      role: 'Associate Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      duration: '12/2019 – 02/2021',
      description: 'Worked on ScoreCEO credit repair platform with multi-portal architecture. Learned ASP.NET MVC, database design, and client interaction.',
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      duration: '09/2019 – 12/2019',
      description: 'Started career learning enterprise development fundamentals, code standards, and team workflows.',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-500 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-600 whitespace-nowrap">{exp.duration}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}