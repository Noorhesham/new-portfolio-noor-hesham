"use client";
import React, { useEffect } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { splitStringUsingRegex } from "@/lib/utils";
import SwiperCards from "./SwiperCards";
import { JOBS } from "@/constants";
import CardMeteors from "@/components/CardMeteors";
import Link from "next/link";
import Image from "next/image";

const RightMind = () => {
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    if (locoScroll) {
      const ctx = gsap.context(() => {
        const rightmind = gsap.timeline({
          scrollTrigger: {
            trigger: ".rightmind",
            start: "top-100px  top",
            end: "+=1000",
            scrub: true,
            scroller: ".main-container",
            pin: ".rightmind",
          },
        });
        rightmind.fromTo(
          ".headline1",
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          },
          "<-" // Start
        );
        rightmind.fromTo(
          ".headline",
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.2,
          },
          "-=1"
        );
        rightmind
          .fromTo(
            ".logoright",
            {
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", // Closed door
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Fully open
              ease: "power2.inOut",
              duration: 2,
            }
          )
          .to(".rightmindsection", { x: -1200, opacity: 0 })
          .fromTo(
            ".meteors",
            {
              opacity: 0,
              y: 50,
              scale: 0.8,
              x: -120,
            },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out", x: 0 },
            "<-"
          )
          .fromTo(
            ".headline5",
            {
              opacity: 0,
              y: 50,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.5,
              ease: "power4.out",
              stagger: 0.2,
            },
            "<-"
          );
      });

      return () => ctx.revert();
    }
  }, [locoScroll]);
  return (
    <section
      className="relative h-[120vh]  flex flex-col  justify-center rightmind"
      style={{
        backgroundImage: "url('/space/2107 (1).svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

        width: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <MaxWidthWrapper className="rightmindsection flex  flex-col  mt-20   items-center  gap-10 justify-center">
        <h1 className="  w-full flex-1 text-center headline1 m-auto text-6xl text-white font-extrabold ">
          {splitStringUsingRegex("CURRENTLY WORKING AS").map((char, index) => (
            <p className="char inline-block" key={index}>
              {char === " " ? "\u00A0" : char}
            </p>
          ))}
        </h1>
        <div className=" flex lg:flex-row flex-col items-center gap-5">
          <Link href={"https://rightminddev.com/"} className="logoright min-w-96 w-full h-40  z-50    relative ">
            <Image alt="rightmind" className=" object-contain" fill src={"/logo.png"} />
          </Link>
          <div className="  w-full flex-1 text-center headline m-auto text-6xl text-white font-extrabold ">
            FRONTEND DEVELOPER AT RIGHT<span className=" text-pink-500"> MIND</span>
          </div>
        </div>
      </MaxWidthWrapper>{" "}
      <div className="  w-full flex-1 top-10 absolute text-center headline5 m-auto text-6xl text-white font-extrabold ">
        SOME OF MY<span className=" text-pink-500"> FREELANCING PROJECTS</span>
      </div>
      <MaxWidthWrapper className=" left-[60%] h-full lg:left-1/2 -translate-x-1/2 absolute top-[30%]   lg:top-24 z-40  meteors">
        <SwiperCards className=" h-full w-full"
          autoplay={true}
          items={JOBS.map((job, i) => {
            return { card: <CardMeteors key={i} job={job} /> };
          })}
        />
      </MaxWidthWrapper>
      <div className=" w-full   divide    h-[35rem]">
        <Image alt="space" className=" object-cover" fill src={"/space/divider1.png"} />
      </div>
    </section>
  );
};

export default RightMind;
