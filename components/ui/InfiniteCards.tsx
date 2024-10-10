"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller h-full relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex items-stretch min-w-full  gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item: any, idx) => (
          <li
            className=" cursor-pointer hover:translate-y-3 duration-200 mb-2 w-[40rem] relative rounded-2xl flex flex-col border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16"
            key={idx}
          >
            <div className="relative w-full h-96 rounded-3xl">
              <Image fill src={item.img} alt="" className="  absolute mb-3 rounded-3xl object-contain " />
            </div>
            <div className="flex flex-col self-end mt-auto">
              <span className="text-xl font-bold leading-[1.6] text-white">{item.name}</span>
              <span className=" text-sm leading-[1.6] text-white-200 font-normal">{item.title}</span>
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className=" flex items-center justify-center">
                <a
                  href={item.link}
                  target="_blank"
                  className=" mt-2 ml-auto flex lg:text-xl md:text-xs text-sm text-purple"
                >
                  Check certificate
                  <FaLocationArrow className=" ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
{
  /* <li
            //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
            className="w-[70vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20  flex flex-row items-center">
                <span className="flex flex-col gap-1">
                <div className=" relative w-[20%]  z-10 mx-auto">
                  <img src={item.img} className=" rounded-xl object-cover" alt="" />
                </div>
                  <span className="text-xl font-bold leading-[1.6] text-white">{item.name}</span>
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">{item.title}</span>
                  <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {item.quote}
                  </span>
                </span>
              </div>
            </blockquote>
          </li> */
}
