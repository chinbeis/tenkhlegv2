"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const RoomsPage = () => {
  const { t: translate } = useLanguage();
  const t = (key: string) => translate(`RoomsPage.${key}`);

  const resortRooms = [
    {
      name: t("resort_rooms.one_bed.name") as string,
      description: t("resort_rooms.one_bed.description") as string,
      image: "/images/menus/resort/1bed.jpg",
    },
    {
      name: t("resort_rooms.two_bed.name") as string,
      description: t("resort_rooms.two_bed.description") as string,
      image: "/images/menus/resort/2bed.jpg",
    },
    {
      name: t("resort_rooms.public.name") as string,
      description: t("resort_rooms.public.description") as string,
      image: "/images/menus/resort/big1.jpg",
    },
    {
      name: t("resort_rooms.public_large.name") as string,
      description: t("resort_rooms.public_large.description") as string,
      image: "/images/menus/resort/big2.jpg",
    },
    {
      name: t("resort_rooms.lux_1.name") as string,
      description: t("resort_rooms.lux_1.description") as string,
      image: "/images/menus/resort/lux1.jpg",
    },
    {
      name: t("resort_rooms.lux_2.name") as string,
      description: t("resort_rooms.lux_2.description") as string,
      image: "/images/menus/resort/lux2.jpg",
    },
    {
      name: t("resort_rooms.standard.name") as string,
      description: t("resort_rooms.standard.description") as string,
      image: "/images/menus/resort/standart.jpg",
    },
  ];

  const hotelRooms = [
    {
      name: t("hotel_rooms.public.name") as string,
      description: t("hotel_rooms.public.description") as string,
      image: "/images/menus/hotel/big1.jpg",
    },
    {
      name: t("hotel_rooms.family.name") as string,
      description: t("hotel_rooms.family.description") as string,
      image: "/images/menus/hotel/family.jpg",
    },
    {
      name: t("hotel_rooms.half_lux.name") as string,
      description: t("hotel_rooms.half_lux.description") as string,
      image: "/images/menus/hotel/halflux.jpg",
    },
    {
      name: t("hotel_rooms.lux_1.name") as string,
      description: t("hotel_rooms.lux_1.description") as string,
      image: "/images/menus/hotel/lux1.jpg",
    },
    {
      name: t("hotel_rooms.lux_2.name") as string,
      description: t("hotel_rooms.lux_2.description") as string,
      image: "/images/menus/hotel/lux2.jpg",
    },
    {
      name: t("hotel_rooms.standard.name") as string,
      description: t("hotel_rooms.standard.description") as string,
      image: "/images/menus/hotel/standart.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {(t("title") as string).split(" ")[0]}{" "}
            <span className="text-blue-600">{(t("title") as string).split(" ")[1]}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description") as string}
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t("resort_title") as string}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortRooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={room.image}
                  alt={room.name as string}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                    {t("resort_title") as string}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t("hotel_title") as string}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelRooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={room.image}
                  alt={room.name as string}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                    {t("hotel_title") as string}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 mt-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RoomsPage;
