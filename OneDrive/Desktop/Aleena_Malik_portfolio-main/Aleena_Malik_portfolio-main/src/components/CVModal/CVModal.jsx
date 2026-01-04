import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';
import cvImage from '../../../public/cv pic.png';

const CVModal = ({ isOpen, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/aleena%20CV.pdf';
        link.download = 'Aleena_Malik_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-900/50 to-purple-800/50 border-b border-purple-500/30">
                            <h2 className="text-2xl font-bold text-white">My CV</h2>
                            <div className="flex gap-3">
                                {/* Download Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8245ec" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleDownload}
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:from-purple-700 hover:to-purple-800"
                                    title="Download CV"
                                >
                                    <FaDownload />
                                    <span className="hidden sm:inline">Download</span>
                                </motion.button>
                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-2 text-white hover:text-purple-400 transition-colors duration-300"
                                    title="Close"
                                >
                                    <FaTimes size={24} />
                                </motion.button>
                            </div>
                        </div>

                        {/* CV Image Container */}
                        <div className="overflow-auto max-h-[calc(90vh-80px)] p-4 bg-gray-900">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <img
                                    src={cvImage}
                                    alt="Aleena Malik CV"
                                    className="w-full max-w-3xl rounded-lg shadow-2xl border border-purple-500/20"
                                    style={{ imageRendering: 'crisp-edges' }}
                                />
                            </motion.div>
                        </div>

                        {/* Footer with Download Hint */}
                        <div className="p-3 bg-gradient-to-r from-purple-900/30 to-purple-800/30 border-t border-purple-500/30 text-center">
                            <p className="text-sm text-gray-400">
                                Click the download button to save the CV as PDF
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CVModal;
