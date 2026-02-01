import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const themes = ['deep-dark', 'elegant-light', 'glass-morphism', 'pastel-pro', 'cyber-midnight'];

    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'deep-dark'
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'light') return 'elegant-light';
        if (savedTheme === 'dark') return 'deep-dark';
        if (themes.includes(savedTheme)) return savedTheme;
        return 'deep-dark';
    });

    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('portfolio-theme', theme);

        // Remove all possible theme classes
        document.documentElement.classList.remove('light-theme', 'dark-theme', 'deep-dark', 'elegant-light', 'glass-morphism', 'pastel-pro', 'cyber-midnight');

        // Apply new theme class
        document.documentElement.classList.add(theme);
    }, [theme]);

    const cycleTheme = () => {
        setTheme(prevTheme => {
            const currentIndex = themes.indexOf(prevTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            return themes[nextIndex];
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
