"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

export default function PartnersCarousel() {
  const partners = [
    { name: "Oasis of Love Homes Inc", logo: "/oasis.jpg" },
    { name: "Social Planning Council of Ottawa", logo: "/plan.jpg" },
    { name: "Myers Barrhaven HYUNDAI", logo: "/hyundai.jpg" },
    { name: "TD Bank", logo: "/TD.png" },
    { name: "Youth Action now", logo: "/youth.jpg" },
    
    // { name: "Social Planning Council", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400" },
    // { name: "Social Planning Council", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400" },
    // { name: "Social Planning Council", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400" },
    // { name: "Social Planning Council", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400" },
    // { name: "Social Planning Council", logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ];
  
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2 }, // 2 logos on small screens
        1024: { slidesPerView: 3 }, // 3 logos on medium+
      }}
      className="w-full"
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={600}
                  height={650}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{partner.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
