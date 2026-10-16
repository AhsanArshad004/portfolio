import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

export default function ProjectFeatureCards({ project }) {
  const { keyFeatures } = project.details;
  const sectionRef = useAnimateOnScroll();

  return (
    <section ref={sectionRef} className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keyFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
