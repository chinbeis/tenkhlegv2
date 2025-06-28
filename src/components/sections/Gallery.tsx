"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Gallery = () => {
  const { t } = useLanguage();
  const images = [
    "/images/memories/1.jpg",
    "/images/memories/2.jpg",
    "/images/memories/3.jpg",
    "/images/memories/4.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("Gallery.title") as string}</h2>
          <p className="text-gray-600 mt-2">{t("Gallery.description") as string}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
