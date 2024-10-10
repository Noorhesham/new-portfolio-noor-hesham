"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Journey = () => {
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    if (locoScroll) {
      ScrollTrigger.create({
        trigger: ".journy",
        start: "top top",
        end: "+=" + window.innerHeight * 2,
        scroller: ".main-container",
        scrub: true,
        pin: ".journy",
      });
      const tl = gsap.timeline();
      tl.fromTo(
        ".rocks",
        { x: -800 },
        {
          x: 0,
          duration: 1,
        }
      )
        .fromTo(".dive-title", { y: -100, opacity: 0 }, { opacity: 1, duration: 1, y: 0 })
        .fromTo(".rocks2", { x: 800 }, { x: 0, duration: 1 }, "<-")
        .fromTo(
          ".car",
          { scale: 1, x: 0, y: 0 },
          {
            scale: 0.6,

            duration: 1,
            scrollTrigger: {
              trigger: ".car",
              start: "-400px top",
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
            },
          }
        )
        .to(".car", {
          duration: 1,
          x: 150,
          scrollTrigger: {
            trigger: ".car",
            start: "top top",
            end: "+=" + window.innerHeight * 2.2,
            scrub: true,
            scroller: ".main-container",
          },
        })
        .fromTo(
          ".dive-title",
          { x: 0 },
          {
            x: -1200,
            duration: 1,
            scrollTrigger: {
              trigger: ".dive-title",
              start: "top top",
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
            },
          }
        )
        .fromTo(
          ".moon",
          { y: 0 },
          {
            y: 200,
            duration: 1,
            scrollTrigger: {
              trigger: ".moon",
              start: "top top",
              end: "+=" + window.innerHeight * 3,
              scrub: true,
              scroller: ".main-container",
            },
          }
        )
        .fromTo(
          ".car",
          { y: 0 },
          {
            y: -100,
            duration: 1,
            scrollTrigger: {
              trigger: ".car",
              start: window.innerHeight,
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
            },
          }
        );
    }
  }, [locoScroll]);
  return (
    <section
      style={{
        backgroundImage: "url(/parallex1.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className=" relative journy min-h-screen"
    >
      <h1 className=" text-5xl lg:text-7xl lg:w-full w-fit dive-title absolute left-[28%]  top-32 font-extrabold text-white text-nowrap">
        LETS DIVE INTO A JOURNEY OF MY MY SOLO PROJECTS !
      </h1>
      <div className="moon top-0 right-72 w-96 h-96 absolute">
        <Image src={"/moon.svg"} alt="moon" fill />
      </div>{" "}
      <div className=" rocks2  bottom-0 -right-[28%] w-full h-[40rem] absolute">
        <Image src={"/rocks1.svg"} className=" object-contain" alt="moon" fill />
      </div>{" "}
      <div className="  rocks  top-0 left-0 w-[45rem] lg:block hidden h-[85vh] absolute">
        <Image src={"/rocks2.svg"} className=" object-cover" alt="moon" fill />
      </div>
      <div className=" w-full  car h-[28rem] -right-10 -bottom-20 absolute">
        <Image src={"/car.svg"} alt="moon" fill />
      </div>
    </section>
  );
};

export default Journey;
