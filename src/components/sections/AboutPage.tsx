"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const AboutPage = () => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`AboutPage.${key}`);

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-blue-500 shadow-blue-500/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">{t("title") as string}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t("description") as string}</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/aboutHotel.jpg"
                alt="Tenkhleg Owner"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl w-full max-w-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">{t("gallery_title") as string}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "/images/memories/1.jpg",
              "/images/memories/2.jpg",
              "/images/memories/3.jpg",
              "/images/memories/4.jpg",
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src={src} alt={`Gallery image ${index + 1}`} width={500} height={500} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
