"use client"
import { useKeenSlider, TrackDetails } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const animation = { duration: 50000, easing: (t: number) => t }

const Carousel = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      mode: 'snap',
      drag: true,
      detailsChanged(s) {
        setDetails(s.track.details)
      },
      initial: 2
    },
    // Uncomment this later when we are ready for animation
    // [
    //   (slider) => {
    //     let timeout: ReturnType<typeof setTimeout>
    //     let mouseOver = false
    //     function clearNextTimeout() {
    //       clearTimeout(timeout)
    //     }
    //     function nextTimeout() {
    //       clearTimeout(timeout)
    //       if (mouseOver) return
    //       timeout = setTimeout(() => {
    //         slider.next()
    //       }, 5000)
    //     }
    //     slider.on("created", () => {
    //       slider.container.addEventListener("mouseover", () => {
    //         mouseOver = true
    //         clearNextTimeout()
    //       })
    //       slider.container.addEventListener("mouseout", () => {
    //         mouseOver = false
    //         nextTimeout()
    //       })
    //       nextTimeout()
    //     })
    //     slider.on("dragStarted", clearNextTimeout)
    //     slider.on("animationEnded", nextTimeout)
    //     slider.on("updated", nextTimeout)
    //   },
    // ]
  );


  const slides = [
    {
      id: 1,
      image: "/card_1_image.jpg",
      text: "Static Website Development",
    },
    {
      id: 2,
      image: "/card_2_image.jpg",
      text: "Full Stack Web Apps",
    },
    {
      id: 3,
      image: "/card_3_image.jpg",
      text: "Custom Software Solutions",
    }
  ];

  const [details, setDetails] = React.useState<TrackDetails | null>(null)

  function scaleStyle(idx: number) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

  return (
      <div className="w-full overflow-hidden mx-auto">
        <div ref={sliderRef} className="keen-slider zoom-out">
          {slides.map((slide, idx) => (
            <div key={idx} className="keen-slider__slide zoom-out_slide">
              <div style={scaleStyle(idx)} className="h-96">
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.text}
                  fill
                  className="object-cover h-96"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 text-white text-5xl">
                  {slide.text}
                </div>
                {/* {slide.content} */}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Carousel;
