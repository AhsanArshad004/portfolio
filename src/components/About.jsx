import { useState, useEffect, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numValue = parseInt(value);
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / 2000, 1);
          setCount(Math.floor(progress * numValue));
          if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const sectionRef = useAnimateOnScroll();

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Hi, I'm Ahsan Arshad, a full-stack developer specializing in .NET and Angular, with 6+ years building enterprise software: transit scheduling systems, document management platforms, and credit-repair business tools.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              After graduating from the University of Gujrat in 2019, I joined Nextbridge, where I worked on client projects for companies in the USA, Dubai, and Canada. I now work at Contour Software Inc., a Constellation Software subsidiary, contributing to Trapeze FX and the Dokmee ECM suite.
            </p>
            <p className="text-lg text-gray-300">
              I care about writing code that the next person (often me, six months later) can actually maintain, and I enjoy working closely with the teams that depend on what I build.
            </p>
          </div>
          <div className="bg-dark-card border border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-1">
                  <Counter value="6" />+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-1">
                  <Counter value="6" />
                </div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-400">Users Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}