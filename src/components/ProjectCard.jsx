import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const thumbUrl = typeof project.images === 'object' ? project.images.thumbnail : project.images[0];

  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-dark-card border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition-all duration-200 cursor-pointer">
        {/* Image with brightness on hover */}
        <div className="aspect-video bg-gray-700 overflow-hidden relative">
          <img
            src={thumbUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover hover:brightness-110 transition-all duration-200"
          />
          {/* Category badge */}
          <div className="absolute top-3 right-3 bg-cyan-500 text-dark-bg text-xs font-bold px-3 py-1 rounded-full">
            {project.category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          {/* Impact statement */}
          <div className="text-sm text-cyan-400 mb-3 font-semibold">
            Outcome: {project.details.impact.metrics[0].value}% {project.details.impact.metrics[0].label}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs border border-gray-600 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-400">+{project.technologies.length - 3} more</span>
            )}
          </div>
          <span className="inline-block text-cyan-400 hover:text-cyan-300 font-semibold">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  )
}
