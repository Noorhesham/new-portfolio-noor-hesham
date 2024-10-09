"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SnowBullets from "./SnowBullets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import AnimatedImage from "./AnimatedImage";
import Link from "next/link";
import ModalCustom from "./ModalCustom";
import { BackgroundLines } from "@/components/ui/background-lines";
import CopyEmail from "./CopyEmail";

gsap.registerPlugin(ScrollTrigger);

const Snow = () => {
  const container = useRef<null | any>(null);
  const { locoScroll } = useSmoothScroll();

  useEffect(() => {
    if (locoScroll) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".snowbg",
            start: "top top",
            end: "+=" + window.innerHeight * 2,
            scrub: true,
            scroller: ".main-container",
            pin: ".snowbg",
          },
        });
        const trees = global?.document?.querySelectorAll(".tree");
        tl.fromTo(".home", { opacity: 0, xPercent: -100, duration: 1 }, { opacity: 1, xPercent: 0, duration: 1 })
          .fromTo(".snowytext", { opacity: 0, filter: "blur(4px)" }, { opacity: 1, filter: "blur(0px)" }, "<")
          .fromTo(
            ".noor",
            {
              opacity: 0,
              xPercent: -1500,
              duration: 1,
              rotate: 360,
              animationDuration: 1,
              yPercent: -500,
            },
            {
              opacity: 1,
              xPercent: 0,
              duration: 1,
              rotate: -360,
              animationDuration: 1,
              yPercent: 0,
            }
          )
          .fromTo(
            trees,
            { opacity: 0, y: 200, stagger: 0.5 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.5,
            }
          );
      });

      return () => ctx.revert();
    }
  }, [locoScroll]);
  return (
    <section>
      <section
        ref={container}
        style={{
          overflow: "hidden",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/snowbg.svg')",
        }}
        className="section  h-full   min-h-screen  relative snowbg z-0    w-full"
      >
        <BackgroundLines className="flex absolute snowytext -top-52 items-center justify-center w-full flex-col px-4">
          <blockquote className="bg-clip-text uppercase text-transparent text-center bg-gradient-to-b from-blue-400 to-white dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            With great power <br /> comes great responsibility.
          </blockquote>
          <p className="max-w-xl mx-auto text-sm md:text-lg  text-neutral-100 text-center">
            My vast variety of skills is continuously expanding.
          </p>
        </BackgroundLines>
        <SnowBullets />
        <ModalCustom
          small
          btn={
            <div className="home opacity-0 bottom-36   cursor-pointer  -left-20 ground absolute z-10">
              <Link href="/">Home</Link>
              <AnimatedImage className=" w-full h-full" data="animate2.json" />
            </div>
          }
          content={<CopyEmail />}
        />

        <div className="noor opacity-0 bottom-20 right-20  absolute aspect-square rounded-full overflow-hidden h-96 w-96  z-10">
          <Image src="/noor.jpg" className=" object-cover w-full h-full" alt="ground" fill />
        </div>
        <div className="tree opacity-0 -bottom-4 right-16  absolute aspect-square rounded-full overflow-hidden h-96 w-96  z-10">
          <Image src="/tree2.png" className=" object-cover w-full h-full" alt="ground" fill />
        </div>
        <div className="tree opacity-0 bottom-20 left-[40%]  absolute aspect-square rounded-full overflow-hidden h-96 w-96  z-10">
          <AnimatedImage className=" w-full h-full" data="animate6.json" />
        </div>
      </section>
    </section>
  );
};

export default Snow;
// const handleMouseOver = () => {
//   // Animate the link text with a snowy glowing effect
//   gsap.to(".ex", {
//     duration: 1, // Longer duration for a smoother animation
//     ease: "power2.inOut", // Smooth easing
//     textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00f, 0 0 70px #00f, 0 0 100px #00f", // Snowy glow
//   });
//   // Animate the home image to move slightly upwards
//   gsap.to(".home", {
//     duration: 1, // Longer duration for smoother transition
//     y: -15, // Move slightly upwards
//     ease: "power2.inOut",
//   });
// };

// const handleMouseOut = () => {
//   // Revert the text animation
//   gsap.to(".ex", {
//     duration: 0.6, // Slightly faster return
//     ease: "power2.inOut", // Smooth easing
//     textShadow: "0", // Remove glow
//   });
//   // Revert the home image to its original position
//   gsap.to(".home", {
//     duration: 0.6, // Slightly faster return
//     y: 0, // Reset position
//     ease: "power2.inOut",
//   });
// };
