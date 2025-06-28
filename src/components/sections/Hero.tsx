"use client";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const Hero = () => {
  const t = mn.Hero;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-green-500 font-semibold">{t.greeting}</p>
          <h1 className="text-4xl md:text-5xl font-bold my-4">{t.title}</h1>
          <p className="text-gray-600 mb-8">{t.description}</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/reel/724276103894933"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600"
            >
              {t.video_button}
            </a>
            <Link
              href="/hotel"
              className="bg-white text-green-500 border border-green-500 px-6 py-3 rounded-full hover:bg-gray-100"
            >
              {t.hotel_button}
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://www.tenkhleghotel.mn/assets/hero.9fe11209.jpg"
            alt="Hero"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
