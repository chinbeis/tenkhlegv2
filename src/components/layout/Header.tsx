"use client";
import { useState } from "react";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = mn.Header;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Tenkhleg</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-green-500">
            {t.home}
          </Link>
          <Link href="/about" className="hover:text-green-500">
            {t.about}
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            {t.contact}
          </Link>
          <Link href="/hotel" className="hover:text-green-500">
            {t.hotel}
          </Link>
          <Link
            href="/contact"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
          >
            {t.contact_button}
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="hover:text-green-500">
              {t.home}
            </Link>
            <Link href="/about" className="hover:text-green-500">
              {t.about}
            </Link>
            <Link href="/contact" className="hover:text-green-500">
              {t.contact}
            </Link>
            <Link href="/hotel" className="hover:text-green-500">
              {t.hotel}
            </Link>
            <Link
              href="/contact"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              {t.contact_button}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
