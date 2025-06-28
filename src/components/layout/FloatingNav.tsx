"use client";
import { useEffect, useState } from "react";

const FloatingNav = ({ sections }: { sections: string[] }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollUp = () => {
    const currentSectionIndex = sections.indexOf(activeSection);
    if (currentSectionIndex > 0) {
      scrollToSection(sections[currentSectionIndex - 1]);
    }
  };

  const scrollDown = () => {
    const currentSectionIndex = sections.indexOf(activeSection);
    if (currentSectionIndex < sections.length - 1) {
      scrollToSection(sections[currentSectionIndex + 1]);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      <button
        onClick={scrollUp}
        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </button>
      <div className="flex flex-col gap-3">
        {sections.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === sectionId
                ? "bg-blue-500 scale-125"
                : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={scrollDown}
        className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default FloatingNav;
