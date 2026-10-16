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
      className="min-h-screen bg-white flex items-center justify-center text-center px-4 py-20 md:py-32 relative"
    >
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-gray-900 text-5xl md:text-6xl font-bold mb-6">
          Full-Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Enterprise Solutions & Modern Web Architecture
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          I build scalable, secure web and desktop applications that solve real business problems. With 10+ years of experience, I've delivered solutions to clients worldwide.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 active:scale-95 font-semibold"
        >
          View My Work →
        </a>
      </div>
    </section>
  )
}
