"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";

import Image from "next/image"

export default function CardCarousel() {
  return (
    <Swiper
      modules={[ Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000, // auto-slide every 3s
        disableOnInteraction: false,
      }}
      grabCursor={true} 
      loop={true} // infinite loop
      breakpoints={{
        768: { slidesPerView: 2 }, // 2 cards on md screens
        1024: { slidesPerView: 3 }, // 3 cards on lg screens
      }}
      className="w-full"
    >
      {/* --- Slide 1 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>

      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
      
      {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>
     
     {/* --- Slide 2 --- */}
      <SwiperSlide>
        <Image src="/business.jpg" alt="Logo" width={400} height={400} />
      </SwiperSlide>

    </Swiper>
  );
}
