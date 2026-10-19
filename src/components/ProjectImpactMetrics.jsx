import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const numericValue = parseInt(value);
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setDisplayValue(Math.floor(progress * numericValue));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function ProjectImpactMetrics({ project }) {
  const { metrics } = project.details.impact;

  return (
    <section className="py-16 px-4 bg-dark-card border-y border-gray-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Impact & Results</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-dark-bg border border-gray-600 text-white rounded-lg p-6 text-center animate-fade-in-up hover:border-cyan-500 transition"
            >
              <div className="text-4xl mb-2">{metric.icon}</div>
              <div className="text-4xl font-bold mb-2 text-cyan-400">
                {metric.display || metric.value}
              </div>
              <div className="text-sm font-semibold text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
