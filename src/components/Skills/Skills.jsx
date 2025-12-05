// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  // Flatten all skills from different categories into a single array
  const allSkills = SkillsInfo.flatMap((category) => category.skills);

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16 relative z-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          My <span className="text-[#8245ec]">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Technologies and tools I work with to build immersive web experiences.
        </p>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm group">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#050414] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#050414] to-transparent z-10 pointer-events-none"></div>

        {/* Single Marquee Track with Duplicated Content */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* Original Set */}
          {allSkills.map((skill, index) => (
            <div
              key={`s1-${index}`}
              className="flex flex-col items-center justify-center gap-4 mx-8 sm:mx-12 min-w-[100px] cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1a1a2e] rounded-xl flex items-center justify-center border border-[#8245ec]/30 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.5)] transition-all duration-300 relative overflow-hidden group/item">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8245ec]/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 transform group-hover/item:scale-110"
                />
              </div>
              <span className="text-gray-400 font-medium text-sm sm:text-base group-hover:text-[#8245ec] transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
          {/* Duplicated Set for Seamless Loop */}
          {allSkills.map((skill, index) => (
            <div
              key={`s2-${index}`}
              className="flex flex-col items-center justify-center gap-4 mx-8 sm:mx-12 min-w-[100px] cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1a1a2e] rounded-xl flex items-center justify-center border border-[#8245ec]/30 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.5)] transition-all duration-300 relative overflow-hidden group/item">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8245ec]/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 transform group-hover/item:scale-110"
                />
              </div>
              <span className="text-gray-400 font-medium text-sm sm:text-base group-hover:text-[#8245ec] transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
