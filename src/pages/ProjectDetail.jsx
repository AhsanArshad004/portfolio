import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectDetailHero from '../components/ProjectDetailHero'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <Link to="/" className="text-blue-500 hover:text-blue-700 max-w-4xl mx-auto px-4 pt-8">
        ← Back to Projects
      </Link>

      <ProjectDetailHero project={project} />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.details.problem}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.details.solution}
            </p>
          </div>
        </div>

        {project.details.keyFeatures && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {project.details.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.images.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="space-y-4">
              {project.images.map((img, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Impact</h2>
          <p className="text-gray-600 text-lg">{project.details.impact}</p>
        </div>
      </main>

      <div className="max-w-4xl mx-auto px-4 py-12 w-full">
        <Link to="/" className="text-blue-500 hover:text-blue-700 font-semibold">
          ← See More Projects
        </Link>
      </div>

      <Footer />
    </div>
  )
}
