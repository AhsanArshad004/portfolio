import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          AA
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="/#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
          <a href="/#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
          <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            GitHub
          </a>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <a href="/#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
