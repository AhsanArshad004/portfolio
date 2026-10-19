import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectDetailHero from '../components/ProjectDetailHero'
import ProjectProblemSolution from '../components/ProjectProblemSolution'
import ProjectImpactMetrics from '../components/ProjectImpactMetrics'
import ProjectFeatureCards from '../components/ProjectFeatureCards'
import ProjectGallery from '../components/ProjectGallery'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-dark-bg">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <a href="/#projects" className="text-cyan-400 hover:text-cyan-300">
              ← Back to Projects
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      <Header />

      {/* Sticky Back Link */}
      <div className="sticky top-20 bg-dark-bg/95 backdrop-blur border-b border-gray-700 z-40 px-4 py-3">
        <a href="/#projects" className="text-cyan-400 hover:text-cyan-300 font-semibold">
          ← Back to Projects
        </a>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-8 max-w-5xl mx-auto">
          <ProjectDetailHero project={project} />
        </section>

        {/* Problem/Solution */}
        <ProjectProblemSolution project={project} />

        {/* Impact Metrics */}
        <ProjectImpactMetrics project={project} />

        {/* Key Features */}
        <ProjectFeatureCards project={project} />

        {/* Gallery */}
        <ProjectGallery project={project} />

        {/* Tech Stack Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto bg-dark-card border-t border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-dark-card border border-gray-600 text-gray-300 px-4 py-2 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
