"use client";
import { EmblaCarousel } from "../ui/EmblaCarousel";
import mn from "@/i18n/mn.json";

const Testimonials = () => {
  const t = mn.Testimonials;
  const testimonials = [
    {
      name: "Margad",
      rating: 5,
      image: "https://www.tenkhleghotel.mn/assets/gaire.20e7ca05.jpg",
      text: "Tenkhleg Resort exceeded all expectations! The pristine beauty of Khuvsgul Lake and authentic Mongolian hospitality made our stay unforgettable.",
    },
    {
      name: "Tsolmon",
      rating: 5,
      image: "https://www.tenkhleghotel.mn/assets/riwaj.b5b1472e.jpg",
      text: "An incredible experience at Mongolia's Blue Pearl. The traditional ger accommodations and stunning lake views were absolutely magical.",
    },
    {
      name: "Torsten Logsch",
      rating: 4,
      image: "https://www.tenkhleghotel.mn/assets/laxman.7c94f468.jpg",
      text: "Tenkhleg Resort is a hidden gem! The combination of modern comfort and traditional Mongolian culture creates a perfect retreat.",
    },
    {
      name: "chantsalbayar behbat",
      rating: 5,
      image: "https://www.tenkhleghotel.mn/assets/Sudeep.092f6681.jpg",
      text: "The serenity of Khuvsgul Lake and the warm hospitality at Tenkhleg made this the trip of a lifetime. Highly recommended!",
    },
  ];

  const slides = testimonials.map((testimonial, index) => (
    <div key={index} className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.text}</p>
    </div>
  ));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <EmblaCarousel slides={slides} />
      </div>
    </section>
  );
};

export default Testimonials;
