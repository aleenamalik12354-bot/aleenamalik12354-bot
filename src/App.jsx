import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Certificates from "./components/Certificates/Certificates";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import Lenis from 'lenis';
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // Snappier scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1, // Standard responsiveness
      smoothTouch: false, // Default native feels better on mobile usually, keeping false is good
      touchMultiplier: 2, // Standard touch multiplier
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative transition-colors duration-500 text-[var(--text-primary)]">
      <ScrollProgress />
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
