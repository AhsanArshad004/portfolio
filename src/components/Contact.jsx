export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-300 mb-12">
          Have a project in mind? Let's discuss how I can help.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-dark-card border border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <a href="mailto:ahsanarshad326@gmail.com" className="text-cyan-400 hover:text-cyan-300">
              ahsanarshad326@gmail.com
            </a>
          </div>
          <div className="bg-dark-card border border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Phone</h3>
            <a href="tel:+923061862764" className="text-cyan-400 hover:text-cyan-300">
              +92 306 1862 764
            </a>
          </div>
          <div className="bg-dark-card border border-gray-700 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/ahsan-arshad-b96b47112/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
