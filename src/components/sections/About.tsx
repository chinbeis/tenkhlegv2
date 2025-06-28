"use client";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const About = () => {
  const t = mn.About;

  return (
    <section className="py-20 bg-gray-50 border-4 border-blue-500 shadow-lg shadow-blue-500/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://www.tenkhleghotel.mn/assets/about.5fb92658.jpg"
            alt="About us"
            className="rounded-lg h-96 w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 mb-4">{t.description1}</p>
          <p className="text-gray-600 mb-4">{t.description2}</p>
          <p className="text-gray-600 mb-8">{t.description3}</p>
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {t.learn_more_button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
