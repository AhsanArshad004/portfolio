import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Experience() {
  const sectionRef = useAnimateOnScroll();

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Contour Software Inc.',
      period: '04/2022 - Present',
      level: 100,
      description: 'Led full-stack development of Trapeze FX (resource planner & timetable system). Delivered enterprise solutions for 500+ transit agencies managing 10K+ resources with 85% reduction in scheduling conflicts.',
    },
    {
      title: 'Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '02/2021 - 03/2022',
      level: 80,
      description: 'Architected & built 3 SaaS platforms (Dokmee ECM, Forms, ValidCheck) serving 1000+ organizations. Reduced document processing time from 30 days to 3 days; achieved 99% compliance audit score.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '12/2019 - 02/2021',
      level: 60,
      description: 'Developed ScoreCEO credit platform (multi-portal architecture). Built real-time dashboards increasing client decision velocity by 3x and identifying $1M+ in cost savings.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '09/2019 - 12/2019',
      level: 40,
      description: 'Started career building enterprise web applications. Learned ASP.NET, database design, and client collaboration—foundation for 6+ years of delivering production systems.',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-900 text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((role, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md animate-fade-in-up">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">{role.title}</h3>
                  <p className="text-blue-600 font-semibold">{role.company}</p>
                </div>
                <span className="text-gray-600 text-sm">{role.period}</span>
              </div>

              <p className="text-gray-700 mb-4">{role.description}</p>

              {/* Animated Progress Bar */}
              <style>{`
                .progress-bar-${idx} {
                  animation: expandWidth 2s ease-out forwards;
                  width: 0;
                }
                @keyframes expandWidth {
                  to { width: ${role.level}%; }
                }
              `}</style>
              <div className={`progress-bar-${idx} bg-blue-600 h-2 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}