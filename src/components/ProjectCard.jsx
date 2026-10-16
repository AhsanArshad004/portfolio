import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-video bg-gray-200 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
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
