export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-600 mb-12">
          Have a project in mind? Let's discuss how I can help.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:ahsanarshad326@gmail.com" className="text-blue-500 hover:text-blue-700">
              ahsanarshad326@gmail.com
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+923061862764" className="text-blue-500 hover:text-blue-700">
              +92 306 1862 764
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/ahsan-arshad-b96b47112/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
