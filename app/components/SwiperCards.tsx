"use client";
import React, { ReactNode, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type SwiperType from "swiper";
import Image from "next/image";

import { Autoplay } from "swiper/modules"; // Correct import for Autoplay
const SwiperCards = ({
  items,
  className,
  slidesPerView,
  spaceBetween,

  rounded = false,
  logo,
  samePhone,
  contain = false,
  autoplay,
  mobile,
  md,
  zoom,
}: {
  items: any;
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  btns?: boolean;
  paginationImage?: boolean;
  rounded?: boolean;
  logo?: boolean;
  samePhone?: boolean;
  contain?: boolean;
  autoplay?: boolean;
  mobile?: number;
  md?: number;
  zoom?: boolean;
}) => {
  const [swiper, setSwiper] = React.useState<null | SwiperType>(null);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: mobile ? mobile : logo ? 2 : samePhone ? slidesPerView : 1,
            centeredSlides: logo ? false : true,
          },
          580: { slidesPerView: 2 },
          768: { slidesPerView: md || 2 },
          900: { slidesPerView: slidesPerView || 3 },
          1280: { slidesPerView: slidesPerView || 3.4 },
        }}
        modules={[Autoplay]}
        autoplay={autoplay ? { delay: 2000 } : false}
        loop={autoplay}
        centeredSlides={false}
        initialSlide={0}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={spaceBetween || 10}
        slidesPerView={slidesPerView || 3.4}
        className={`w-full   ${className || "h-96"}`}
      >
        {items.map(({ src, text, card }: { src: string; text: string; card: ReactNode }, i: number) => {
          console.log(src);
          return (
            <SwiperSlide className={`w-full h-full  min-h-96`} key={i}>
              {card ? (
                <div className="  w-full"> {card}</div>
              ) : (
                <img className="w-full h-full object-cover rounded-xl" src={src} alt={src} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
