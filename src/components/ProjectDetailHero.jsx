export default function ProjectDetailHero({ project }) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
              {tech}
            </span>
          ))}
        </div>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live Project →
          </a>
        )}
      </div>
    </div>
  )
}
