"use client";
import React, { useEffect } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedImage from "./AnimatedImage";
gsap.registerPlugin(ScrollTrigger);
const DeepOcean = () => {
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    if (locoScroll) {
      ScrollTrigger.create({
        trigger: ".deepocean",
        start: "top top",
        end: "+=" + window.innerHeight * 7,
        scroller: ".main-container",
        scrub: true,
        pin: true,
      });
    }
  });
  return (
    <section className="deepocean h-screen  relative w-full">
      <div className="absolute h-full inset-0 w-full">
        <AnimatedImage className=" w-full h-full" data="bgocean.json" />
      </div>
    </section>
  );
};

export default DeepOcean;
