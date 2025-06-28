"use client";
import mn from "@/i18n/mn.json";
import Link from "next/link";
import { EmblaCarousel } from "../ui/EmblaCarousel";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import Contact from "./Contact";
import FloatingNav from "../layout/FloatingNav";

const HotelPage = () => {
  const t = mn.HotelPage;
  const sections = ["hero", "rooms", "testimonials", "gallery", "contact"];

  return (
    <main className="bg-gray-50">
      <FloatingNav sections={sections} />
      <section id="hero" className="relative h-screen flex items-center justify-center text-white">
        <img
          src="https://www.tenkhleghotel.mn/assets/hero.9fe11209.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-lg md:text-xl mb-2">{t.Hero.greeting}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{t.Hero.title}</h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg mb-8">{t.Hero.description}</p>
        </div>
      </section>

      <section id="rooms" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              {t.Rooms.title.split(" ")[0]}{" "}
              <span className="text-blue-600">{t.Rooms.title.split(" ")[1]}</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t.Rooms.description}</p>
          </div>
          <EmblaCarousel
            slides={Object.values(mn.Rooms.room_types).map((room, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={`/assets/rooms/room-${index + 1}.jpg`} alt={room.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                </div>
              </div>
            ))}
          />
          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.Rooms.all_rooms_button}
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HotelPage;
