import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  // Detect scroll and change navbar background
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: t('nav.about') },
    { id: "skills", label: t('nav.skills') },
    { id: "experience", label: t('nav.experience') },
    { id: "work", label: t('nav.projects') },
    { id: "certificates", label: t('nav.certificates') },
    { id: "education", label: t('nav.education') },
    { id: "contact", label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition duration-300 px-6 md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer" onClick={() => handleMenuItemClick("about")}>
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Aleena</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Malik</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme/Language Toggles */}
        <div className="hidden md:flex space-x-4 items-center">
          <LanguageSelector />
          <ThemeToggle />
          <a
            href="https://github.com/aleenamalik12354-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aleena-malik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 max-h-[85vh] overflow-y-auto bg-[#050414] bg-opacity-80 backdrop-filter backdrop-blur-xl z-50 rounded-lg shadow-lg md:hidden border border-gray-800 scrollbar-thin scrollbar-thumb-[#8245ec] scrollbar-track-transparent">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white text-lg ${activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)} className="w-full text-center py-1 px-4">
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-700 w-full">
              <div className="flex space-x-4 items-center justify-center">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
            <div className="flex space-x-6 pb-2">
              <a
                href="https://github.com/aleenamalik12354-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/aleena-malik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
