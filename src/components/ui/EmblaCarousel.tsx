"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export const EmblaCarousel = ({ slides }: { slides: React.ReactNode[] }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
