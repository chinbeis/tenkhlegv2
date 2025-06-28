"use client";
import { EmblaCarousel } from "../ui/EmblaCarousel";
import mn from "@/i18n/mn.json";

const Gallery = () => {
  const t = mn.Gallery;
  const images = [
    "https://www.tenkhleghotel.mn/assets/1.26d9359a.jpg",
    "https://www.tenkhleghotel.mn/assets/2.3a948eed.jpg",
    "https://www.tenkhleghotel.mn/assets/3.9603aa0f.jpg",
    "https://www.tenkhleghotel.mn/assets/4.ed0bd43b.jpg",
  ];

  const slides = images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Gallery image ${index + 1}`}
      className="rounded-lg"
    />
  ));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>
        <EmblaCarousel slides={slides} />
      </div>
    </section>
  );
};

export default Gallery;
