export default function ProjectDetailHero({ project }) {
  const heroUrl = typeof project.images === 'object' ? project.images.hero : project.images[0];

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {/* Hero Image */}
      <img
        src={heroUrl}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/80"></div>

      {/* Title & Badge Overlay (bottom-left) */}
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <div className="bg-cyan-500 text-dark-bg px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">
          {project.category}
        </div>
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-cyan-300 hover:text-cyan-200 font-semibold underline"
          >
            Visit live site →
          </a>
        )}
      </div>
    </div>
  )
}
