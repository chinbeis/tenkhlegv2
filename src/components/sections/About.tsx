"use client";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const About = () => {
  const t = mn.About;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://www.tenkhleghotel.mn/assets/about.5fb92658.jpg"
            alt="About us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-gray-600 mb-4">{t.description1}</p>
          <p className="text-gray-600 mb-4">{t.description2}</p>
          <p className="text-gray-600 mb-8">{t.description3}</p>
          <Link
            href="/about"
            className="text-green-500 font-semibold hover:underline"
          >
            {t.learn_more_button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
