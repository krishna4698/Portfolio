import { portfolioData } from "../data/portfolioData";
import type { ProjectType } from "../types/ProjectType";
// const { projects } = portfolioData;
const projects : ProjectType[]=portfolioData.projects;

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-300 mb-10 text-center bg-black">
          🚀 My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-black">
          {projects.map((a) => (
            <div
              key={a.id}
              className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {a.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {a.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {a.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <a
                  href={a.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-sm font-medium transition"
                >
                  🔗 GitHub
                </a>
                <a
                  href={a.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1.5 rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
