"use client";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import mn from "@/i18n/mn.json";

const Testimonials = () => {
  const t = mn.Testimonials;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="hidden md:block relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full p-4">
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mb-4"
                    />
                    <h4 className="font-bold text-xl">{testimonial.name}</h4>
                    <div className="flex mt-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic flex-grow">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -ml-4"
            onClick={scrollPrev}
          >
            {'<'}
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md -mr-4"
            onClick={scrollNext}
          >
            {'>'}
          </button>
        </div>
        <div className="md:hidden grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <div className="flex justify-center mt-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
