import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-dark-bg border-b border-gray-700 z-50 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">
          Ahsan Arshad
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="/#about" className="text-gray-300 hover:text-cyan-400 transition">About</a>
          <a href="/#skills" className="text-gray-300 hover:text-cyan-400 transition">Skills</a>
          <a href="/#projects" className="text-gray-300 hover:text-cyan-400 transition">Projects</a>
          <a href="/#experience" className="text-gray-300 hover:text-cyan-400 transition">Experience</a>
          <a href="/#contact" className="text-gray-300 hover:text-cyan-400 transition">Contact</a>
          <a href="https://github.com/AhsanArshad004" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400">
            GitHub
          </a>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-dark-card shadow-lg md:hidden border-b border-gray-700">
            <div className="flex flex-col gap-4 p-4">
              <a href="/#about" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/#skills" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="/#projects" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="/#experience" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="/#contact" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="https://github.com/AhsanArshad004" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400" onClick={() => setMenuOpen(false)}>
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
