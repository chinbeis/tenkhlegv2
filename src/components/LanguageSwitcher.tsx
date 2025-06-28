"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mn" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
        {language === "en" ? "Mn" : "En"}
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
        {language === "en" ? "En" : "Mn"}
      </span>
      <span className="relative invisible">
        {language === "en" ? "En" : "Mn"}
      </span>
    </button>
  );
}
