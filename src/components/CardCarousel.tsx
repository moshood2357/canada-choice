"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

export default function CardCarousel() {
  const images = [
    "/legacy2.jpg",
    "/hangout.jpg",
    "/legacy2.jpg",
    "/legacy2.jpg",
    "/hangout.jpg",
    "/legacy2.jpg",
    "/hangout.jpg",
    "/hangout.jpg",
    "/hangout.jpg",
    "/hangout.jpg",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      grabCursor={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center bg-gray-100 rounded-xl p-4 h-72 sm:h-80 md:h-96 overflow-hidden">
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
