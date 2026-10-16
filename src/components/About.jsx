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
    <section ref={sectionRef} id="about" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gradient-blue-purple text-4xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Hi, I'm Ahsan Arshad. I'm a full-stack developer with 10+ years of experience building enterprise web applications. I specialize in .NET, Angular, and React, with a track record of delivering scalable, secure solutions to clients worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              After graduating from the University of Gujrat in 2019, I started at Nextbridge, where I worked across multiple domains and interacted with clients from the USA, Dubai, and Canada. I've since joined Contour Software Inc., a subsidiary of Constellation Software, where I continue to build high-impact products.
            </p>
            <p className="text-lg text-gray-600">
              I'm passionate about writing clean, maintainable code and collaborating with cross-functional teams. I stay current with the latest technologies and industry trends to continuously improve my skills and deliver high-quality products.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  <Counter value="10" />+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  <Counter value="6" />
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}