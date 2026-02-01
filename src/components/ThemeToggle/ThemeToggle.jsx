import React from 'react';
import { FaSun, FaMoon, FaGem, FaPalette, FaBolt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, cycleTheme } = useTheme();

    const getThemeIcon = () => {
        switch (theme) {
            case 'elegant-light': return <FaSun className="text-yellow-500" />;
            case 'deep-dark': return <FaMoon className="text-blue-300" />;
            case 'glass-morphism': return <FaGem className="text-sky-400" />;
            case 'pastel-pro': return <FaPalette className="text-pink-400" />;
            case 'cyber-midnight': return <FaBolt className="text-green-400" />;
            default: return <FaMoon className="text-blue-300" />;
        }
    };

    const getThemeLabel = () => {
        switch (theme) {
            case 'elegant-light': return 'Elegant Light';
            case 'deep-dark': return 'Deep Dark';
            case 'glass-morphism': return 'Glassmorphism';
            case 'pastel-pro': return 'Pastel Pro';
            case 'cyber-midnight': return 'Cyber Midnight';
            default: return 'Theme';
        }
    };

    return (
        <button
            onClick={cycleTheme}
            className="theme-toggle-btn p-3 rounded-full transition-all duration-300 hover:scale-110 relative group"
            aria-label="Cycle theme"
            title={`Switch Theme (Current: ${getThemeLabel()})`}
        >
            <div className="text-xl animate-in fade-in zoom-in duration-300" key={theme}>
                {getThemeIcon()}
            </div>
            {/* Simple tooltip for desktop */}
            <span className="hidden md:block absolute top-full right-0 mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                {getThemeLabel()}
            </span>
        </button>
    );
};

export default ThemeToggle;
