"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { EmblaCarousel } from "../ui/EmblaCarousel";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import HotelContact from "./HotelContact";
import FloatingNav from "../layout/FloatingNav";

const HotelPage = () => {
  const { t } = useLanguage();
  const sections = ["hero", "rooms", "testimonials", "gallery", "contact"];

  return (
    <main className="bg-gray-50">
      <FloatingNav sections={sections} />
      <section id="hero" className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <p className="text-lg md:text-xl mb-2">{t("HotelPage.Hero.greeting") as string}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{t("HotelPage.Hero.title") as string}</h1>
          <div className="flex gap-4 justify-center">
            <Link
              href="https://www.facebook.com/reel/724276103894933"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {t("HotelPage.Hero.video_button") as string}
            </Link>
            <Link
              href="/resort"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              {t("HotelPage.Hero.resort_button") as string}
            </Link>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              {(t("HotelPage.Rooms.title") as string).split(" ")[0]}{" "}
              <span className="text-blue-600">{(t("HotelPage.Rooms.title") as string).split(" ")[1]}</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t("HotelPage.Rooms.description") as string}</p>
          </div>
          <EmblaCarousel
            slides={Object.values(t("Rooms.room_types") as Record<string, { title: string; description: string }>).map((room: { title: string; description: string }, index: number) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={`/images/menus/hotel/lux${index + 1}.jpg`}
                    alt={room.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
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
              {t("HotelPage.Rooms.all_rooms_button") as string}
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
        <HotelContact />
      </section>
    </main>
  );
};

export default HotelPage;
