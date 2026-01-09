// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";
=======
>>>>>>> aa12ded16b8f921e537f02996261c31526b98b20

const CircularProgress = ({ percentage, title }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#1a1a2e] rounded-xl border border-[#8245ec]/30 hover:border-[#8245ec] transition-all duration-300 w-full sm:w-[200px] hover:shadow-[0_0_15px_rgba(130,69,236,0.3)] group">
      <div className="relative w-24 h-24 mb-4">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#2d2d42"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#8245ec"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          {percentage}%
        </div>
      </div>
      <h3 className="text-gray-300 text-center text-sm font-medium group-hover:text-white transition-colors">
        {title}
      </h3>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = SkillsInfo.find(cat => cat.title === 'Technical Skills')?.skills || [];
  const professionalSkills = SkillsInfo.find(cat => cat.title === 'Professional Skills')?.skills || [];

<<<<<<< HEAD
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to x-axis movement
  // Move from 0% to -20% (for technical) and -20% to 0% (for professional) or similar small ranges
  // Adjust the range [-10%, 10%] to control speed and distance. 
  // We want it to be "LIMITED" and "SMALL CONTROLLED AMOUNT".
  const techX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const profX = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden bg-[#050414]">
=======
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#050414]">
>>>>>>> aa12ded16b8f921e537f02996261c31526b98b20
      {/* Technical Skills Section */}
      <div className="mb-20">
        <div className="text-center mb-10 relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="text-[#8245ec]">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies I use to build robust applications
          </p>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        </div>

<<<<<<< HEAD
        {/* Scroll-Linked Technical Skills */}
        <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm">
          <motion.div
            style={{ x: techX }}
            className="flex w-max"
          >
            {/* Render skills twice ensures we have enough content to scroll a bit, essentially creating a long strip */}
            {[...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, index) => (
              <div key={`tech-${index}`} className="flex flex-col items-center justify-center gap-4 mx-8 sm:mx-12 min-w-[100px] cursor-pointer group/item">
=======
        {/* Marquee for Technical Skills */}
        <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#050414] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#050414] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {/* Set 1 */}
            {technicalSkills.map((skill, index) => (
              <div key={`tech-1-${index}`} className="flex flex-col items-center justify-center gap-4 mx-8 sm:mx-12 min-w-[100px] cursor-pointer group/item">
>>>>>>> aa12ded16b8f921e537f02996261c31526b98b20
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1a1a2e] rounded-xl flex items-center justify-center border border-[#8245ec]/30 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.5)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8245ec]/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                  <img src={skill.logo} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 transform group-hover/item:scale-110" />
                </div>
                <span className="text-gray-400 font-medium text-sm sm:text-base group-hover/item:text-[#8245ec] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
<<<<<<< HEAD
          </motion.div>
=======
            {/* Set 2 */}
            {technicalSkills.map((skill, index) => (
              <div key={`tech-2-${index}`} className="flex flex-col items-center justify-center gap-4 mx-8 sm:mx-12 min-w-[100px] cursor-pointer group/item">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1a1a2e] rounded-xl flex items-center justify-center border border-[#8245ec]/30 hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.5)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8245ec]/10 to-transparent opacity-100 transition-opacity duration-300"></div>
                  <img src={skill.logo} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300 transform group-hover/item:scale-110" />
                </div>
                <span className="text-gray-400 font-medium text-sm sm:text-base group-hover/item:text-[#8245ec] transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
>>>>>>> aa12ded16b8f921e537f02996261c31526b98b20
        </div>
      </div>

      {/* Professional Skills Section */}
      <div className="mb-20">
        <div className="text-center mb-10 relative z-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-[#8245ec]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>
        </div>

<<<<<<< HEAD
        {/* Scroll-Linked Professional Skills */}
        <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm">
          <motion.div
            style={{ x: profX }}
            className="flex w-max"
          >
            {/* Render skills twice ensures we have enough content */}
            {[...professionalSkills, ...professionalSkills, ...professionalSkills].map((skill, index) => (
              <div key={`prof-${index}`} className="mx-8 sm:mx-12">
                <CircularProgress percentage={skill.percentage} title={skill.name} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
=======
        {/* Marquee for Professional Skills */}
        <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#050414] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#050414] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {/* Set 1 */}
            {professionalSkills.map((skill, index) => (
              <div key={`prof-1-${index}`} className="mx-8 sm:mx-12">
                <CircularProgress percentage={skill.percentage} title={skill.name} />
              </div>
            ))}
            {/* Set 2 */}
            {professionalSkills.map((skill, index) => (
              <div key={`prof-2-${index}`} className="mx-8 sm:mx-12">
                <CircularProgress percentage={skill.percentage} title={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
>>>>>>> aa12ded16b8f921e537f02996261c31526b98b20
    </section>
  );
};

export default Skills;
