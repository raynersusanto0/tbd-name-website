"use client"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, {useEffect, useState} from 'react';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carousel = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
    }
  );


  const slides = [
    {
      id: 1,
      content: (
        <div className="flex items-center justify-center h-64 bg-blue-500 text-white text-2xl">
          Slide 1
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex items-center justify-center h-64 bg-green-500 text-white text-2xl">
          Slide 2
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex items-center justify-center h-64 bg-red-500 text-white text-2xl">
          Slide 3
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto p-4">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide) => (
            <div key={slide.id} className="keen-slider__slide">
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
