import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Experience() {
  const sectionRef = useAnimateOnScroll();

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Contour Software Inc.',
      period: '04/2022 - Present',
      level: 100,
      description: 'Building and maintaining enterprise transit management solutions (Trapeze FX). Full-stack development of resource planning and timetable systems.',
    },
    {
      title: 'Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '02/2021 - 03/2022',
      level: 80,
      description: 'Developed multiple SaaS products including Dokmee ECM, Forms, and ValidCheck. Led full-stack implementation.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '12/2019 - 02/2021',
      level: 60,
      description: 'Worked on ScoreCEO platform. Learned ASP.NET MVC, database design, and client interaction.',
    },
    {
      title: 'Trainee Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '09/2019 - 12/2019',
      level: 40,
      description: 'Started career learning enterprise development fundamentals and team workflows.',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-12">Experience</h2>

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
              <div className={`progress-bar-${idx} bg-gradient-blue-teal h-2 rounded-full`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}