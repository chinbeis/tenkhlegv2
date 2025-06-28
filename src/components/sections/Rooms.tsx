"use client";
import Link from "next/link";
import mn from "@/i18n/mn.json";

const Rooms = () => {
  const t = mn.Rooms;
  const roomKeys = ["1-bed", "2-bed", "big-1", "big-2", "lux-1", "lux-2", "standard"];
  const roomImages: { [key: string]: string } = {
    "1-bed": "https://www.tenkhleghotel.mn/assets/1bed.dda57cb7.jpg",
    "2-bed": "https://www.tenkhleghotel.mn/assets/2bed.669751a8.jpg",
    "big-1": "https://www.tenkhleghotel.mn/assets/big1.14ad23ab.jpg",
    "big-2": "https://www.tenkhleghotel.mn/assets/6.ee758826.jpg",
    "lux-1": "https://www.tenkhleghotel.mn/assets/lux1.3c87471e.jpg",
    "lux-2": "https://www.tenkhleghotel.mn/assets/lux2.468474c5.jpg",
    "standard": "https://www.tenkhleghotel.mn/assets/1.09f8381f.jpg",
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomKeys.slice(0, 3).map((key) => (
            <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={roomImages[key]}
                  alt={t.room_types[key as keyof typeof t.room_types].title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t.room_types[key as keyof typeof t.room_types].title}</h3>
                <p className="text-gray-700">{t.room_types[key as keyof typeof t.room_types].description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/hotel" className="mt-4 inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
            {t.all_rooms_button}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
