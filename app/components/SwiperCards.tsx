"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type SwiperType from "swiper";

import { Autoplay } from "swiper/modules"; // Correct import for Autoplay

const SwiperCards = ({
  items,

  spaceBetween,

  autoplay,
}: {
  items: any;
  spaceBetween?: number;

  autoplay?: boolean;
}) => {
  const [swiper, setSwiper] = React.useState<null | SwiperType>(null);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col">
      <Swiper
        modules={[Autoplay]}
        autoplay={autoplay ? { delay: 2000 } : false}
        loop={autoplay}
        centeredSlides={false}
        initialSlide={0}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={spaceBetween || 10}
        slidesPerView={1}
        className={`w-full  h-full `}
      >
        {items?.map((src: any, i: any) => (
          <SwiperSlide className="w-full h-full" key={i}>
            <img className=" h-auto rounded-xl" src={src} alt={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
