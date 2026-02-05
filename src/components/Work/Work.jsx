import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-0 font-sans relative overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16 px-6 md:px-[7vw]"
      >
        <h2 className="text-4xl font-bold text-[var(--text-primary)]">{t('projects.title')}</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[var(--text-secondary)] mt-4 text-lg font-semibold">
          Here are some of my projects
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative w-full max-w-7xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 30px -10px rgba(130, 69, 236, 0.5)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-[400px] border-2 border-[#8245ec]/50 hover:border-[#8245ec] transition-colors duration-300 bg-[var(--card-bg)] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 truncate">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-2 pt-2 line-clamp-2 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto block bg-black bg-opacity-90 backdrop-blur-sm"
          data-lenis-prevent
          onClick={handleCloseModal}
        >
          <div className="min-h-screen py-10 px-4 flex items-center justify-center">
            <div
              className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[95%] max-w-4xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent close on click inside
            >
              <div className="flex justify-end p-4 absolute top-0 right-0 z-10 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-purple-500 transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                {/* Video Player at the Top */}
                {selectedProject.video && (
                  <div className="w-full flex justify-center bg-black px-4 pb-6 pt-12 sm:pt-6">
                    <video
                      key={selectedProject.video}
                      controls
                      className="lg:w-full w-[95%] rounded-xl shadow-2xl"
                      style={{ maxHeight: '600px' }} // Increased max height
                    >
                      <source src={`${import.meta.env.BASE_URL}${selectedProject.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div className="lg:p-8 p-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Action Buttons - View Code and View Live */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                      >
                        View Code
                      </a>
                    )}
                    {selectedProject.webapp && (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 text-center"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
