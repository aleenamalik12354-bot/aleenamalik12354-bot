import React, { useState } from "react";
import { certificates } from "../../constants";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const { t } = useLanguage();

    const handleOpenModal = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const handleCloseModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <section
            id="certificates"
            className="py-24 pb-24 px-0 font-sans relative overflow-hidden"
        >
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-center mb-16 px-[7vw]"
            >
                <h2 className="text-4xl font-bold text-[var(--text-primary)]">{t('certificates.title')}</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-[var(--text-secondary)] mt-4 text-lg font-semibold">
                    My professional certifications and achievements
                </p>
            </motion.div>

            {/* Certificates Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative w-full max-w-7xl mx-auto px-4"
            >
                <div className="flex flex-wrap justify-center gap-8">
                    {certificates.map((certificate) => (
                        <motion.div
                            key={certificate.id}
                            onClick={() => handleOpenModal(certificate)}
                            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 30px -10px rgba(130, 69, 236, 0.5)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="w-full max-w-[400px] border-2 border-[#8245ec]/50 hover:border-[#8245ec] transition-colors duration-300 bg-[var(--card-bg)] backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="p-4">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-48 object-cover rounded-xl"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 truncate">
                                    {certificate.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] mb-2 pt-2 line-clamp-2 text-sm">
                                    Professional Certification
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                                        Verified
                                    </span>
                                    <span className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                                        Achievement
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal Container */}
            {selectedCertificate && (
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
                                <div className="w-full flex justify-center bg-black px-4 pb-6 pt-12">
                                    <img
                                        src={selectedCertificate.image}
                                        alt={selectedCertificate.title}
                                        className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
                                    />
                                </div>

                                <div className="lg:p-8 p-6 text-center">
                                    <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                                        {selectedCertificate.title}
                                    </h3>
                                    {/* No buttons for certificates unless we have a link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
