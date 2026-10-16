import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const thumbUrl = typeof project.images === 'object' ? project.images.thumbnail : project.images[0];

  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 hover:scale-105 cursor-pointer">
        {/* Image with brightness on hover */}
        <div className="aspect-video bg-gray-200 overflow-hidden relative">
          <img
            src={thumbUrl}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover hover:brightness-105 transition-all duration-200"
          />
          {/* Category badge */}
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {project.category}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>

          {/* Impact statement on hover (reveal) */}
          <div className="text-sm text-blue-600 opacity-0 hover:opacity-100 transition-opacity mb-3">
            Impact: {project.details.impact.metrics[0].value}% {project.details.impact.metrics[0].label}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-600">+{project.technologies.length - 3} more</span>
            )}
          </div>
          <span className="inline-block text-blue-500 hover:text-blue-700 font-semibold">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  )
}
