import { useRef, useEffect } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('animate-fade-in-up');
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-dark-bg flex items-center justify-center text-center px-4 py-20 md:py-32 relative"
    >
      <div className="max-w-4xl mx-auto z-10">
        <div className="inline-block mb-6 px-4 py-2 border border-cyan-400 rounded-full">
          <span className="text-cyan-400 text-sm font-mono uppercase tracking-wider">Full Stack Engineer | Enterprise Solutions</span>
        </div>
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          Ahsan Arshad
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          I'm a .NET and Angular developer with 6+ years building enterprise software: transit scheduling systems, document management platforms, and AI-powered support tools used by real businesses.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-dark-bg rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
          >
            Get in touch →
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-3 border border-gray-500 text-white rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 font-semibold"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
