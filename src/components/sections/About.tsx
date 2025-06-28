"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface AboutProps {
  page: "hotel" | "resort";
}

const About: React.FC<AboutProps> = ({ page }) => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`${page}.About.${key}`);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={page === 'hotel' ? '/images/hotelAbout.jpg' : '/images/about.jpg'}
            alt="About us"
            width={500}
            height={500}
            className="rounded-lg h-96 w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">{t("title") as string}</h2>
          <p className="text-gray-600 mb-4">{t("description1") as string}</p>
          <p className="text-gray-600 mb-4">{t("description2") as string}</p>
          <p className="text-gray-600 mb-8">{t("description3") as string}</p>
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            {t("learn_more_button") as string}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
