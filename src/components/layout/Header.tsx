"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg border-b-4 border-blue-500`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={64} height={64} className="h-16" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t("Header.home") as string}
          </Link>
          <Link
            href="/resort"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t("Header.resort") as string}
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t("Header.about") as string}
          </Link>
          <Link
            href="/rooms"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t("Header.rooms") as string}
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
          >
            {t("Header.contact") as string}
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {t("Header.contact_button") as string}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link href="/" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300">
              {t("Header.home") as string}
            </Link>
            <Link href="/about" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300">
              {t("Header.about") as string}
            </Link>
            <Link href="/rooms" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300">
              {t("Header.rooms") as string}
            </Link>
            <Link href="/contact" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300">
              {t("Header.contact") as string}
            </Link>
            <Link href="/resort" className="text-gray-800 text-lg font-medium hover:text-blue-600 transition-colors duration-300">
              {t("Header.resort") as string}
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {t("Header.contact_button") as string}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
