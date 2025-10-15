import { portfolioData } from "../data/portfolioData";

import type { SkillType } from "../types/ProjectType";

const skills: SkillType[] = portfolioData.skills;

const Skills = () => {
  return (
    <section id="" className="py-16 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-300 mb-10 text-center">
          ⚙️ Programming Skills
        </h2>

        <div id="skill" className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-5 py-2 text-sm font-medium bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 hover:bg-blue-50 hover:border-blue-300 transition"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
