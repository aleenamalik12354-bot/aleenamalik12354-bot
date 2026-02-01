import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-[var(--text-primary)] py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Aleena Malik</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: t('nav.about'), id: "about" },
            { name: t('nav.skills'), id: "skills" },
            { name: t('nav.experience'), id: "experience" },
            { name: t('nav.projects'), id: "work" },
            { name: t('nav.education'), id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aleena-malik" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/aleenamalik" },
            { icon: <FaGithub />, link: "https://github.com/aleenamalik12354-bot" },
            { icon: <FaWhatsapp />, link: "https://wa.me/923120577910" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-[var(--text-secondary)] mt-6">
          © 2025 Aleena Malik. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
