export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Hi, I'm Ahsan Arshad. I'm a full-stack developer with 6+ years of experience building enterprise web applications. I specialize in .NET, Angular, and React, with a track record of delivering scalable, secure solutions to clients worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              After graduating from the University of Gujrat in 2019, I started at Nextbridge, where I worked across multiple domains and interacted with clients from the USA, Dubai, and Canada. I've since joined Contour Software Inc., a subsidiary of Constellation Software, where I continue to build high-impact products.
            </p>
            <p className="text-lg text-gray-600">
              I'm passionate about writing clean, maintainable code and collaborating with cross-functional teams. I stay current with the latest technologies and industry trends to continuously improve my skills and deliver high-quality products.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Location:</strong> Lahore, Pakistan</li>
              <li><strong>Experience:</strong> 6+ years</li>
              <li><strong>Current Role:</strong> Software Developer, Contour Software Inc.</li>
              <li><strong>Education:</strong> BSc Software Engineering, University of Gujrat (2019)</li>
              <li><strong>Focus:</strong> Full-stack web applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}