import { useState, useEffect } from "react";
import Navbar from "./cafe/Navbar";
import HeroSection from "./cafe/HeroSection";
import WhisperStrip from "./cafe/WhisperStrip";
import AboutSection from "./cafe/AboutSection";
import MenuSection from "./cafe/MenuSection";
import GallerySection from "./cafe/GallerySection";
import VisitSection from "./cafe/VisitSection";
import Footer from "./cafe/Footer";

type Theme = "light" | "dark";

function Home() {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("hero");

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ["hero", "about", "menu", "gallery", "visit"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar theme={theme} onThemeToggle={toggleTheme} activeSection={activeSection} />
      <HeroSection />
      <WhisperStrip />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <VisitSection />
      <Footer />
    </div>
  );
}

export default Home;
