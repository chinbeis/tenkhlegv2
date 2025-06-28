"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const HotelRooms = () => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`RoomsPage.hotel_rooms.${key}`);
  const roomKeys = ["public", "family", "half_lux", "lux_1", "lux_2", "standard"];
  const roomImages: { [key: string]: string } = {
    "public": "/images/menus/hotel/big1.jpg",
    "family": "/images/menus/hotel/family.jpg",
    "half_lux": "/images/menus/hotel/halflux.jpg",
    "lux_1": "/images/menus/hotel/lux1.jpg",
    "lux_2": "/images/menus/hotel/lux2.jpg",
    "standard": "/images/menus/hotel/standart.jpg",
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{translate("Rooms.title") as string}</h2>
          <p className="text-gray-600 mt-2">{translate("Rooms.description") as string}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomKeys.map((key) => (
            <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="overflow-hidden">
                <Image
                  src={roomImages[key]}
                  alt={t(`${key}.name`) as string}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{t(`${key}.name`) as string}</h3>
                <p className="text-gray-700">{t(`${key}.description`) as string}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/rooms" className="mt-4 inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
            {translate("Rooms.all_rooms_button") as string}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotelRooms;
