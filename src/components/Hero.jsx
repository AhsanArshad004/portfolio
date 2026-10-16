export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Full-Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Enterprise Solutions • .NET • Angular • React
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I build scalable, secure web and desktop applications that solve real business problems. With 6+ years of experience, I've delivered solutions to clients worldwide.
        </p>
        <a
          href="#projects"
          className="inline-block btn-primary"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}
