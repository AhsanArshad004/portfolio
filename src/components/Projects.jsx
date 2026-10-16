import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 text-sm font-mono uppercase tracking-wider">FEATURED WORK</span>
          </div>
          <h2 className="text-white text-4xl font-bold">Enterprise solutions that deliver measurable outcomes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}