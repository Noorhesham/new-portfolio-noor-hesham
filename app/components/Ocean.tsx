"use client";
import React, { useEffect } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import AnimatedImage from "./AnimatedImage";
import Image from "next/image";
import { projects } from "@/constants";
import Project from "./Project";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { splitStringUsingRegex } from "@/lib/utils";
import ProjectDescription from "./ProjectDescription";
import ModalCustom from "./ModalCustom";

// { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
// {
//   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
const Ocean = () => {
  const { locoScroll } = useSmoothScroll();
  const [selectedProject, setSelectedProject] = React.useState({});

  useEffect(() => {
    if (locoScroll) {
      const ctx = gsap.context(() => {
        gsap.set(".ocean", { scale: 1.4 });
        ScrollTrigger.create({
          trigger: ".bg1",
          start: "top top",
          end: "+=" + window.innerHeight * 9,
          scroller: ".main-container",
          scrub: true,
          pin: ".bg1",
        });
        gsap.set(".bg2", { scale: 1.4 });
        const tl = gsap.timeline();

        //enterance for 1st project
        // Entrance for Project 1
        tl.fromTo(
          ".ocean",
          { scale: 1.4 },
          {
            scale: 1.02,
            scrollTrigger: {
              trigger: ".bg1",
              start: "top top",
              end: "+=" + window.innerHeight * 0.5,
              scrub: true,
              scroller: ".main-container",
            },
          }
        )
          .to(".heading1", {
            x: 300,
            scale: 0.8,
            scrollTrigger: {
              trigger: ".heading1 ",
              start: "top top",
              end: "+=" + window.innerHeight * 0.5,
              scrub: true,
              scroller: ".main-container",
            },
          })
          .fromTo(
            ".heading1 span",
            { filter: "blur(5px)" },
            {
              filter: "blur(0px)",
              stagger: 0.3,
              scrollTrigger: {
                trigger: ".heading ",
                start: "top top",
                end: "+=" + window.innerHeight * 1,
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          .fromTo(
            ".project-1",
            { x: -400, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: ".project-1",
                start: "+=" + window.innerHeight * 1,
                end: "+=" + window.innerHeight * 2,
                scrub: true,
                scroller: ".main-container",
              },
            }
          )

          // Entrance for Project 2
          .fromTo(
            ".project-2",
            { x: 400, opacity: 0 },
            {
              x: 0,
              opacity: 1,

              scrollTrigger: {
                trigger: ".project-2",
                start: "+=" + window.innerHeight * 2.3, // Matches timing with Project 1 exit
                end: "+=" + window.innerHeight * 2, // Adjusted to match Project 1 timing
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          .to(".heading1", {
            opacity: 0,
            y: -200,
            scrollTrigger: {
              trigger: ".project-2",
              start: "+=" + window.innerHeight * 2.3, // Matches timing with Project 1 exit
              end: "+=" + window.innerHeight * 2, // Adjusted to match Project 1 timing
              scrub: true,
              scroller: ".main-container",
            },
          })
          // Exit for Project 1 (as Project 2 enters)
          .fromTo(
            ".project-1",
            { y: 0 },
            {
              y: -400,
              opacity: 0,
              scrollTrigger: {
                trigger: ".project-2",
                start: "+=" + window.innerHeight * 2.3,
                end: "+=" + window.innerHeight * 2, // Same end value to align with Project 2
                scrub: true,
                scroller: ".main-container",
              },
            },
            "<-"
          )
          // Entrance for Project 3
          .fromTo(
            ".project-3",
            { x: -400, opacity: 0 },
            {
              x: 0,
              opacity: 1,

              scrollTrigger: {
                trigger: ".project-3",
                start: "+=" + window.innerHeight * 3.7, // Synchronized with Project 2 exit
                end: "+=" + window.innerHeight * 2.3, // Adjusted to match the same scroll distance
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          // Exit for Project 2 (as Project 3 enters)
          .fromTo(
            ".project-2",
            { y: 0 },
            {
              y: -400,
              opacity: 0,
              scrollTrigger: {
                trigger: ".project-3",
                start: "+=" + window.innerHeight * 3.7,
                end: "+=" + window.innerHeight * 2, // Aligned to match Project 3 entrance
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          // Entrance for Project 4
          .fromTo(
            ".project-4",
            { x: 400, opacity: 0 },
            {
              x: 0,
              opacity: 1,

              scrollTrigger: {
                trigger: ".project-4",
                start: "+=" + window.innerHeight * 4.8, // Adjusted to match with Project 3 exit
                end: "+=" + window.innerHeight * 2, // Keep consistent timing
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          .fromTo(
            ".project-3",
            { y: 0 },
            {
              opacity: 0,
              y: -600,
              scrollTrigger: {
                trigger: ".project-4",
                start: "+=" + window.innerHeight * 5.4,
                end: "+=" + window.innerHeight * 2,
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          .fromTo(
            ".project-4",
            { y: 0 },
            {
              opacity: 0,
              y: -600,
              scrollTrigger: {
                trigger: ".project-4",
                start: "+=" + window.innerHeight * 6.4,
                end: "+=" + window.innerHeight * 2,
                scrub: true,
                scroller: ".main-container",
              },
            }
          )

          .fromTo(
            ".bg2",
            { x: 1400, display: "none" },
            {
              x: 0,
              display: "block",
              scrollTrigger: {
                trigger: ".bg2",
                start: "+=" + window.innerHeight * 6.4,
                end: "+=" + window.innerHeight * 3,
                scrub: true,
                scroller: ".main-container",
              },
            }
          )
          .fromTo(
            ".heading2",
            { x: -1400, filter: "blur(4px)", opacity: 0 },
            {
              x: 600,
              filter: "blur(0px)",
              opacity: 1,
              scrollTrigger: {
                trigger: ".bg2",
                start: "+=" + window.innerHeight * 6.4,
                end: "+=" + window.innerHeight * 3,
                scrub: true,
                scroller: ".main-container",
              },
            },
            "<-"
          );
      });

      return () => {
        ctx.revert();
      };
    }
  }, [locoScroll]);
  console.log(selectedProject);
  return (
    <div id="space" className="bg1  relative">
      <h1 className=" text-7xl flex gap-1 z-20 absolute top-20  font-extrabold text-white heading1">
        {splitStringUsingRegex("BEST OF MY SOLO PROJECTS !").map((w) => (
          <span className="inline-block">{w}</span>
        ))}
      </h1>
      <div className=" ocean absolute inset-0 w-full h-[100vh]">
        <Image src="/ocean.svg" className=" object-cover" alt="ocean" fill />
      </div>
      <>
        {" "}
        <div className="bg2 absolute bottom-[-15rem] h-full w-[30rem]   ">
          <AnimatedImage className="w-full" data="diver.json" />
        </div>
        <h1 className=" text-7xl flex gap-1 z-20 absolute bottom-[-15rem]  font-extrabold text-white heading2">
          THIS WAS JUST THE BEGINING
        </h1>
      </>

      <MaxWidthWrapper className="projects">
        {projects.slice(0, 4).map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <ModalCustom
              btn={
                <div
                  key={project.id}
                  className={`${!isEven ? "right-[20%]" : "left-[20%]"} z-30 absolute top-40 project project-${i + 1}`}
                >
                  <Project project={project} onClick={() => setSelectedProject(project)} />
                </div>
              }
              key={project.id}
              content={<ProjectDescription  moveback={() => {}} project={selectedProject} />}
            />
          );
        })}
      </MaxWidthWrapper>
    </div>
  );
};

export default Ocean;
