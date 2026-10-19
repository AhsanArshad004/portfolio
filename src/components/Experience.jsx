import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function Experience() {
  const sectionRef = useAnimateOnScroll();

  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Contour Software Inc.',
      period: '04/2022 - Present',
      description: 'Contributing to Trapeze FX (rebranded Nexfeld in 2026), a transit fixed-route and crew scheduling suite, and the Dokmee ECM document management platform.',
    },
    {
      title: 'Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '02/2021 - 03/2022',
      description: 'Contributed to ValidCheck, a business eCheck payment platform, and continued working across the Dokmee ECM product suite.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '12/2019 - 02/2021',
      description: 'Built features for ScoreCEO, a multi-portal CRM credit-repair businesses use to manage leads, disputes, and compliance. Separately, delivered Dokmee Forms, which led to joining the broader Dokmee product team.',
    },
    {
      title: 'Junior Software Engineer',
      company: 'Nextbridge (PVT) Ltd',
      period: '09/2019 - 12/2019',
      description: 'Started my career building enterprise web applications with ASP.NET, learning database design and client collaboration.',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((role, idx) => (
            <div key={idx} className="bg-dark-card border border-gray-700 rounded-lg p-6 animate-fade-in-up">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-white">{role.title}</h3>
                  <p className="text-cyan-400 font-semibold">{role.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{role.period}</span>
              </div>

              <p className="text-gray-300">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}