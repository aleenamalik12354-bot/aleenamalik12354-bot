import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'Urdu', flag: '🇵🇰' },
    { code: 'sv', name: 'Swedish', flag: '🇸🇪' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' },
];

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-gray-300 hover:text-[#8245ec] transition duration-300 p-2 rounded-md"
                aria-label="Select Language"
            >
                <FiGlobe size={20} />
                <span className="uppercase text-sm font-semibold">{language}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#050414] border border-[#8245ec] rounded-lg shadow-xl z-50 overflow-hidden max-h-80 overflow-y-auto custom-scrollbar backdrop-blur-md bg-opacity-95">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 transition-colors duration-200
                                    ${language === lang.code
                                        ? 'bg-[#8245ec] text-white'
                                        : 'text-gray-300 hover:bg-[#8245ec] hover:text-white hover:bg-opacity-20'}`}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span>{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
