"use client";
import mn from "@/i18n/mn.json";

const RoomsPage = () => {
  const t = mn.RoomsPage;

  const resortRooms = [
    {
      name: t.resort_rooms.one_bed.name,
      description: t.resort_rooms.one_bed.description,
      image: "https://www.tenkhleghotel.mn/assets/1bed.dda57cb7.jpg",
    },
    {
      name: t.resort_rooms.two_bed.name,
      description: t.resort_rooms.two_bed.description,
      image: "https://www.tenkhleghotel.mn/assets/2bed.669751a8.jpg",
    },
    {
      name: t.resort_rooms.public.name,
      description: t.resort_rooms.public.description,
      image: "https://www.tenkhleghotel.mn/assets/big1.14ad23ab.jpg",
    },
    {
      name: t.resort_rooms.public_large.name,
      description: t.resort_rooms.public_large.description,
      image: "https://www.tenkhleghotel.mn/assets/6.ee758826.jpg",
    },
    {
      name: t.resort_rooms.lux_1.name,
      description: t.resort_rooms.lux_1.description,
      image: "https://www.tenkhleghotel.mn/assets/lux1.3c87471e.jpg",
    },
    {
      name: t.resort_rooms.lux_2.name,
      description: t.resort_rooms.lux_2.description,
      image: "https://www.tenkhleghotel.mn/assets/lux2.468474c5.jpg",
    },
    {
      name: t.resort_rooms.standard.name,
      description: t.resort_rooms.standard.description,
      image: "https://www.tenkhleghotel.mn/assets/1.09f8381f.jpg",
    },
  ];

  const hotelRooms = [
    {
      name: t.hotel_rooms.public.name,
      description: t.hotel_rooms.public.description,
      image: "https://www.tenkhleghotel.mn/assets/big1.2ef35bcf.jpg",
    },
    {
      name: t.hotel_rooms.family.name,
      description: t.hotel_rooms.family.description,
      image: "https://www.tenkhleghotel.mn/assets/family.ea4b0ce9.jpg",
    },
    {
      name: t.hotel_rooms.half_lux.name,
      description: t.hotel_rooms.half_lux.description,
      image: "https://www.tenkhleghotel.mn/assets/5.eb0477e4.jpg",
    },
    {
      name: t.hotel_rooms.lux_1.name,
      description: t.hotel_rooms.lux_1.description,
      image: "https://www.tenkhleghotel.mn/assets/lux1.8d12468a.jpg",
    },
    {
      name: t.hotel_rooms.lux_2.name,
      description: t.hotel_rooms.lux_2.description,
      image: "https://www.tenkhleghotel.mn/assets/lux2.8787a701.jpg",
    },
    {
      name: t.hotel_rooms.standard.name,
      description: t.hotel_rooms.standard.description,
      image: "https://www.tenkhleghotel.mn/assets/standart.e3ad44fd.jpg",
    },
  ];

  return (
    <main className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            {t.title.split(" ")[0]}{" "}
            <span className="text-blue-600">{t.title.split(" ")[1]}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t.resort_title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortRooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                    {t.resort_title}
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
            {t.hotel_title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelRooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                    {t.hotel_title}
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
