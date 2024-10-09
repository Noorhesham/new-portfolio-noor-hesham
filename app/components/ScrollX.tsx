"use client";
import gsap from "gsap";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { splitStringUsingRegex } from "@/lib/utils";
import RightMind from "./RightMind";
import FlexContainer from "./FlexContainer";
import AnimatedImage from "./AnimatedImage";
import ImageTrial from "./ImageTrial";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

const ScrollX = () => {
  const [activeSectionIndex, setActiveSectionIndex] = React.useState(0);
  const { locoScroll } = useSmoothScroll();
  useEffect(() => {
    if (locoScroll) {
      const sections = gsap.utils.toArray(".xsection section");
      const ctx = gsap.context(() => {
        const cs50 = gsap.timeline({
          scrollTrigger: {
            trigger: ".cs50",
            start: "top top",
            end: () => (window.innerWidth < 768 ? "+=200" : "+=1000"),
            scrub: 1,
            scroller: ".main-container",
            pinSpacing: true,
          },
        });
        cs50
          .fromTo(
            ".cs50 h1",
            { opacity: 0, rotate: -90, duration: 0.5, x: 100 },
            { opacity: 1, duration: 0.5, rotate: 0, x: 0 }
          )
          .fromTo(
            ".csimg2",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
          )
          .fromTo(".cs50 p", { opacity: 0, rotateX: -90, y: -50 }, { opacity: 1, rotateX: 0, y: 0, stagger: 0.1 })
          .fromTo(
            ".csimg",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", scale: 1 },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", scale: 1.5 },
            "<-"
          );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".xsection",
            pin: ".xsection",
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + window.innerWidth * sections.length,
            scroller: ".main-container",
            pinSpacing: true,
            start: "top top",
            onUpdate: (self) => {
              setActiveSectionIndex(Math.round(self.progress * (sections.length - 1) + 2));
            },
          },
        });
        const stops = [];
        sections.forEach((section, index) => {
          if (section.dataset.pin) stops.push(index);
        });
        stops.forEach((stop, index) => {
          const q = gsap.utils.selector(sections[stop]);
          tl.to(sections, {
            xPercent: -(100 * stop),
            duration: stop,
          })

            .fromTo(
              q(`.sectionimg`),
              { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", x: 400, ease: "none" },
              {
                x: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power1.inOut",
              }
            )
            .from(
              q(".sectiontypo"),
              {
                opacity: 0,
                duration: 0.5,
                rotateX: -90,
                y: -50,
              },
              "<"
            )
            .to(
              ".line",

              {
                width: "150px",

                duration: 0.5,
              }
            )
            .to(q(".fade-out-text"), {
              opacity: 0,
              y: 25,
              ease: "power2.out",
              duration: 1,
            })
            .from(
              q(".title-fade-in"),
              {
                opacity: 0,
                y: -25,
                ease: "power2.out",
                duration: 1,
              },
              "<"
            );

          if (index === stops.length - 1) {
            tl.to(sections, {
              xPercent: -(100 * (sections.length - 1)),
              duration: sections.length - stop,
            });
          }
        });
      });
      return () => ctx.revert();
    }
  }, [locoScroll]);
  return (
    <section className="">
      <main className=" w-[510vw] relative h-screen flex  justify-center xsection">
        <section data-pin="true" className="h-screen relative mx-auto z-20 text-left cs50   w-full">
          <MaxWidthWrapper className="flex    translate-y-24 m-auto md:flex-row flex-col  justify-center items-center">
            <div className=" absolute lg:mt-20 csimg  z-20  flex-1  top-[130%]  lg:top-1/2   rotate-6  right-[30%] lg:right-40 w-64 h-64 md:w-96 md:h-96">
              <Image src="/cs50.png" className=" object-contain" alt="CS50 Journey" fill />
            </div>
            <div className=" absolute csimg2  lg:-right-2 lg:top-0  top-[95%] flex-1 w-64 h-64 md:w-96 md:h-96">
              <Image src="/david.jpg" className=" object-contain" alt="CS50 Journey" fill />
            </div>

            <div className=" flex max-w-2xl mr-auto text-left flex-col flex-1 ">
              <div className=" flex flex-col  gap-2">
                <div className={`duration-150 relative flex items-center flex-row  gap-1  text-base `}>
                  01
                  <span className={`line  my-auto mx-2  bg-black   h-[2px] `}></span>
                  MY START
                </div>
                <h1 className="text-5xl  font-extrabold">The Great CS50 Quest 🎓</h1>
              </div>
              <div className="mt-4 flex gap-1 flex-wrap flex-row text-left   w-full font-semibold text-lg">
                {splitStringUsingRegex(
                  `My journey began with Harvard's renowned CS50___course, where I immersed myself in the fundamentals of computer science. Tackling challenging problem sets and earning a certificate, I transformed from a curious novice into a passionate coder, ready to explore the vast world of technology. 🏰💻`
                ).map((word) => (
                  <p className="inline-block">{word}</p>
                ))}
              </div>
            </div>
          </MaxWidthWrapper>
        </section>
        <section data-pin="true" className={`  h-full flex items-start   min-h-[100vh] w-full `}>
          {/* <RightMind /> */}
          <FlexContainer className=" w-full  h-full relative  bg-white">
            <div className=" h-full   clippy    absolute w-[100vw]  left-0  top-0">
              <Image className=" object-cover" fill src="/winter2.svg" alt="Snow" />
            </div>
            <div className=" flex-col sectiontypo gap-4 flex items-start text-left mt-4">
              <div className=" flex flex-col  gap-2">
                <div className={`duration-150 relative flex items-center flex-row gap-1  text-base `}>
                  <span className=" circle w-fit rounded-full "> 02</span>
                  <span className={` line bg-black  my-auto mx-2   h-[2px] `}></span>
                  FRONTEND
                </div>{" "}
                <h1 className="text-5xl  font-bold">Frontend Alchemy with JavaScript & React 🚀</h1>
              </div>
              <p className="text-lg max-w-2xl">
                Diving into frontend development, I mastered <b>JavaScript</b> and <b>React</b>. Building dynamic and
                responsive user interfaces felt like crafting digital masterpieces. Each component and state management
                technique I learned empowered me to create seamless and interactive web experiences. 🌟✨
              </p>
            </div>
            <div className="relative w-full h-fit sectionimg  -mt-10 ml-auto   ">
              <AnimatedImage className=" w-full  h-full" data="animate5.json" />
            </div>
          </FlexContainer>
          <div className=" w-full h-full absolute">
            <ImageTrial
              images={[
                "/gaming.png",
                "/Screenshot (212).png",
                "/Screenshot (195).png",
                "/shady.png",
                "/QuizBoi.png",
                "/Screenshot (49).png",
                "/Screenshot (206).png",
                "/Screenshot (243).png",
                "/Screenshot 2024-08-23 070813.png",
                "/Screenshot 2024-09-24 142729.png",
              ]}
            />
          </div>
        </section>
        <section data-pin="true" className={`  h-full flex items-start  min-h-[100vh]  w-full `}>
          <FlexContainer className=" w-full  h-full relative  bg-white">
            <div className=" flex-col sectiontypo gap-4 flex items-start text-left mt-4">
              <div className=" flex flex-col  gap-2">
                <div className={`duration-150 relative flex items-center flex-row gap-1  text-base `}>
                  <span className=" circle w-fit rounded-full "> 3</span>
                  <span className={` line bg-black  my-auto mx-2   h-[2px] `}></span>
                  BACKEND
                </div>
                <h1 className="text-5xl  font-bold">Backend Brilliance with Node.js & Full-Stack Mastery 🌐</h1>
              </div>
              <p className="text-lg max-w-2xl">
                Venturing into backend development with <b>Node.js</b>, I unlocked the power to build robust APIs and
                manage databases. Transitioning to a full-stack developer, I seamlessly integrated frontend and backend
                technologies, creating comprehensive web applications that are both functional and aesthetically
                pleasing. 🧙‍♂️✨
              </p>
            </div>
            <div className="relative w-full h-fit sectionimg  mt-10 ml-auto   ">
              <AnimatedImage className=" w-full  h-full" data="animate3.json" />
            </div>
          </FlexContainer>
        </section>
        <section data-pin="true" className={`  h-full flex items-start  min-h-[100vh]  w-full `}>
          <FlexContainer className=" w-full  h-full relative  bg-white">
            <div className=" flex-col sectiontypo gap-4 flex items-start text-left mt-4">
              <div className=" flex flex-col  gap-2">
                <div className={`duration-150 relative flex items-center flex-row gap-1  text-base `}>
                  <span className=" circle w-fit rounded-full "> 4</span>
                  <span className={` line bg-black  my-auto mx-2   h-[2px] `}></span>
                  FREELANCING AT WEEKENDS
                </div>
                <h1 className="text-4xl  font-bold">Weekend Freelancing Hustle 💼</h1>
              </div>
              <p className="text-lg max-w-2xl">
                With skills sharpened, I dove into freelancing on the weekends. Each project brought new challenges and
                triumphs, and nothing felt better than delivering powerful, polished websites to happy clients. 🏆
              </p>
            </div>
            <div className="relative w-full h-fit sectionimg  lg:-mt-40 ml-auto   ">
              <AnimatedImage className=" w-full  h-full" data="animate8.json" />
            </div>
          </FlexContainer>
        </section>
        <section data-pin="true" className={`  h-full flex items-start  min-h-[100vh]  w-full `}>
          <FlexContainer className=" w-full  h-full relative  bg-white">
            <div className=" flex-col gap-2 sectiontypo gap-4 flex items-start text-left mt-4">
              <div className=" flex flex-col  gap-2">
                <div className={`duration-150 relative flex items-center flex-row gap-1  text-base `}>
                  <span className=" circle w-fit rounded-full "> 5</span>
                  <span className={` line bg-black  my-auto mx-2   h-[2px] `}></span>
                  ANIMING TO BE THE BEST
                </div>
                <h1 className="text-5xl  font-bold">Diving Deeper: Next.js, 3D, and GSAP 🛠️</h1>
              </div>
              <p className="text-lg max-w-2xl">
                Now, I'm pushing boundaries with Next.js, diving into 3D animations with Three.js, and bringing my web
                creations to life using GSAP. It's a constant learning adventure, and I'm loving every moment of
                mastering new tools. 🚀
              </p>
            </div>
            <div className="relative w-full h-fit sectionimg lg:mt-0 mt-20  ml-auto   ">
              <AnimatedImage className=" w-full  h-full" data="coffe.json" />
            </div>
          </FlexContainer>
        </section>
      </main>
    </section>
  );
};

export default ScrollX;
