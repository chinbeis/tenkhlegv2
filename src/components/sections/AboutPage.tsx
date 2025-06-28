"use client";
import mn from "@/i18n/mn.json";

const AboutPage = () => {
  const t = mn.AboutPage;

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-blue-500 shadow-blue-500/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">{t.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{t.description}</p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.tenkhleghotel.mn/assets/1.09f8381f.jpg"
                alt="Tenkhleg Owner"
                className="rounded-lg shadow-2xl w-full max-w-sm"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.gallery_title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "https://www.tenkhleghotel.mn/assets/1.26d9359a.jpg",
              "https://www.tenkhleghotel.mn/assets/2.3a948eed.jpg",
              "https://www.tenkhleghotel.mn/assets/3.9603aa0f.jpg",
              "https://www.tenkhleghotel.mn/assets/4.ed0bd43b.jpg",
              "https://www.tenkhleghotel.mn/assets/1.09f8381f.jpg",
              "https://www.tenkhleghotel.mn/assets/2.6392ac1a.jpg",
              "https://www.tenkhleghotel.mn/assets/3.741450dc.jpg",
              "https://www.tenkhleghotel.mn/assets/4.8e4a600e.jpg",
              "https://www.tenkhleghotel.mn/assets/5.eb0477e4.jpg",
              "https://www.tenkhleghotel.mn/assets/6.ee758826.jpg",
              "https://www.tenkhleghotel.mn/assets/7.067c1681.jpg",
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
