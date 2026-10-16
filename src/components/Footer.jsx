export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-gray-700 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {currentYear} Ahsan Arshad. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahsan-arshad-b96b47112/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              LinkedIn
            </a>
            <a href="mailto:ahsanarshad326@gmail.com" className="hover:text-cyan-400 transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
