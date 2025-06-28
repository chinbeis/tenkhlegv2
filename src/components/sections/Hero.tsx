"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = ({ page }: { page: "hotel" | "resort" }) => {
  const { t: translate } = useLanguage();
  const t = (key: string) => {
    if (page === "hotel") {
      return translate(`Hero.${key}`);
    }
    return translate(`ResortPage.${key}`);
  };

  return (
    <section className="relative py-20">
      <div className="absolute top-0 left-0 w-full h-full bg-white" />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative">
        <div className="animate__animated animate__pulse animate__infinite infinite">
          <div className="blob" />
          <div className="blob1" />
          <p className="text-blue-500 font-semibold">{t("greeting") as string}</p>
          <h1 className="text-4xl md:text-5xl font-bold my-4">{t("title") as string}</h1>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/reel/724276103894933"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
            >
              {t("video_button") as string}
            </a>
            <Link
              href={page === "hotel" ? "/resort" : "/"}
              className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-full hover:bg-gray-100"
            >
              {t("hotel_button") as string}
            </Link>
          </div>
        </div>
        <div className="relative w-full h-96">
          <Image
            src={page === 'hotel' ? '/images/hotelResort.jpg' : '/images/hero.jpg'}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
