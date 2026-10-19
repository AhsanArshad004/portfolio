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

      {/* Title & Badge Overlay (bottom-left). A solid backdrop panel is used
          instead of a photo-wide gradient, since some source screenshots
          have their own bright marketing text baked in that a gradient
          alone can't reliably darken enough for our title to stay legible. */}
      <div className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-xl bg-dark-bg/90 backdrop-blur-sm rounded-lg p-6 text-white">
        <div className="bg-cyan-500 text-dark-bg px-3 py-1 rounded-full inline-block mb-4 text-sm font-bold">
          {project.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
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
