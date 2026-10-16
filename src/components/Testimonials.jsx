export default function Testimonials() {
  const testimonials = [
    {
      name: 'Coming Soon',
      title: 'Client Testimonial',
      quote: 'Add client feedback here once projects are complete.',
    },
    {
      name: 'Your Client',
      title: 'Project Manager',
      quote: 'Testimonials will showcase the impact and quality of your work.',
    },
    {
      name: 'Another Client',
      title: 'CTO',
      quote: 'These help build trust and credibility with potential clients.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}