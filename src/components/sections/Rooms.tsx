"use client";
import { EmblaCarousel } from "../ui/EmblaCarousel";
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

  const slides = roomKeys.map((key) => (
    <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={roomImages[key]} alt={t.room_types[key as keyof typeof t.room_types].title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{t.room_types[key as keyof typeof t.room_types].title}</h3>
        <p className="text-gray-600 mt-2">{t.room_types[key as keyof typeof t.room_types].description}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-600 mt-2">{t.description}</p>
          <Link href="/hotel" className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
            {t.all_rooms_button}
          </Link>
        </div>
        <EmblaCarousel slides={slides} />
      </div>
    </section>
  );
};

export default Rooms;
