"use client";
import mn from "@/i18n/mn.json";

const Gallery = () => {
  const t = mn.Gallery;
  const images = [
    "https://www.tenkhleghotel.mn/assets/1.26d9359a.jpg",
    "https://www.tenkhleghotel.mn/assets/2.3a948eed.jpg",
    "https://www.tenkhleghotel.mn/assets/3.9603aa0f.jpg",
    "https://www.tenkhleghotel.mn/assets/4.ed0bd43b.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
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
