export default function ProjectProblemSolution({ project }) {
  const { problem, solution } = project.details;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
        {/* Problem text (left) */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-gray-700 mb-4">{problem.description}</p>
          <div className="text-red-600 font-bold text-lg">
            Impact: {problem.impact}
          </div>
        </div>

        {/* Solution visual (right) */}
        <div className={`${project.categoryColor} rounded-lg p-8 text-white h-64 flex items-center justify-center animate-fade-in-up`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">The Solution</h3>
            <p className="text-sm">{solution.approach}</p>
          </div>
        </div>
      </div>

      {/* Full solution description (full width below) */}
      <div className="mt-8 animate-fade-in-up">
        <h3 className="text-xl font-bold mb-2">How It Works</h3>
        <p className="text-gray-700">{solution.description}</p>
      </div>
    </section>
  );
}
