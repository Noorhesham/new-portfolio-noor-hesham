"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import AnimatedImage from "./AnimatedImage";
import Image from "next/image";
import { projects } from "@/constants";
import Project from "./Project";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Curtains } from "curtainsjs";
import SimplePlane from "./Plane";
import { splitStringUsingRegex } from "@/lib/utils";
import { useRouter } from "next/navigation";
import ProjectDescription from "./ProjectDescription";

// { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
// {
//   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
const Ocean = () => {
  const { locoScroll } = useSmoothScroll();
  const router = useRouter();
  const handleProjectClick = (clickedProject: any) => {
    setSelectedProject(clickedProject);
    const projectId = clickedProject;
    router.push(`/?projectBig=${projectId}`, { scroll: false });
  };
  const handleBackClick = () => {
    gsap.to(".project-details", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setSelectedProject("");
        router.push("/", { scroll: false });

        // Use locoScroll to reset scroll position
        if (locoScroll) {
          locoScroll.scrollTo(0, { duration: 0, disableLerp: true }); // Instant scroll to the top
        }

        gsap.set(".project", { clearProps: "all" });
      },
    });
  };
  const [selectedProject, setSelectedProject] = useState("");
  useEffect(() => {
    if (locoScroll) {
      gsap.set(".bg1", { scale: 1.4 });
      ScrollTrigger.create({
        trigger: ".bg1",
        start: "top top",
        end: "+=" + window.innerHeight * 9,
        scroller: ".main-container",
        scrub: true,
        pin: true,
      });

      const tl = gsap.timeline();
      tl.fromTo(
        ".bg1",
        { scale: 1.4 },
        {
          scale: 1.1,

          scrollTrigger: {
            trigger: ".bg1",
            start: "top top",
            end: "+=" + window.innerHeight * 2,
            scrub: true,
            scroller: ".main-container",

            markers: true,
          },
        }
      );
      //enterance for 1st project
      // Entrance for Project 1
      tl.to(".heading", {
        x: 300,
        scale: 0.8,
        scrollTrigger: {
          trigger: ".heading ",
          start: "top top",
          end: "+=" + window.innerHeight * 0.5,
          scrub: true,
          scroller: ".main-container",
          markers: true,
        },
      })
        .fromTo(
          ".heading span",
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
              markers: true,
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
              start: window.innerHeight * 1,
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 2.3, // Matches timing with Project 1 exit
              end: "+=" + window.innerHeight * 2, // Adjusted to match Project 1 timing
              scrub: true,
              scroller: ".main-container",
              markers: true,
            },
          }
        )
        .to(".heading", {
          opacity: 0,
          y: -200,
          scrollTrigger: {
            trigger: ".project-2",
            start: window.innerHeight * 2.3, // Matches timing with Project 1 exit
            end: "+=" + window.innerHeight * 2, // Adjusted to match Project 1 timing
            scrub: true,
            scroller: ".main-container",
            markers: true,
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
              start: window.innerHeight * 2.3,
              end: "+=" + window.innerHeight * 2, // Same end value to align with Project 2
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 3.7, // Synchronized with Project 2 exit
              end: "+=" + window.innerHeight * 2.3, // Adjusted to match the same scroll distance
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 3.7,
              end: "+=" + window.innerHeight * 2, // Aligned to match Project 3 entrance
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 4.8, // Adjusted to match with Project 3 exit
              end: "+=" + window.innerHeight * 2, // Keep consistent timing
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 5.4,
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 6.4,
              end: "+=" + window.innerHeight * 2,
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 6.4,
              end: "+=" + window.innerHeight * 3,
              scrub: true,
              scroller: ".main-container",
              markers: true,
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
              start: window.innerHeight * 6.4,
              end: "+=" + window.innerHeight * 3,
              scrub: true,
              scroller: ".main-container",
              markers: true,
            },
          },
          "<-"
        );
    }
  }, [locoScroll]);

  return (
    <div className="bg1  relative">
      <h1 className=" text-7xl flex gap-1 z-20 absolute top-20  font-extrabold text-white heading">
        {splitStringUsingRegex("BEST OF MY SOLO PROJECTS !").map((w) => (
          <span className="inline-block">{w}</span>
        ))}
      </h1>
      <div className="  absolute inset-0 w-full h-screen">
        <Image src="/ocean.svg" className=" object-cover" alt="ocean" fill />
      </div>
      {!selectedProject && (
        <>
          {" "}
          <div className="bg2 absolute bottom-[-15rem] h-full w-[30rem]   ">
            <AnimatedImage className="w-full" data="diver.json" />
          </div>
          <h1 className=" text-7xl flex gap-1 z-20 absolute bottom-[-15rem]  font-extrabold text-white heading2">
            THIS WAS JUST THE BEGINING
          </h1>
        </>
      )}
      <MaxWidthWrapper className="projects">
        {selectedProject ? (
          <div className="project-details absolute top-0 z-40">
            <ProjectDescription moveback={handleBackClick} project={selectedProject} />
          </div>
        ) : (
          projects.slice(0, 4).map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.id}
                className={`${!isEven ? "right-[20%]" : "left-[20%]"} z-30 absolute top-40 project project-${i + 1}`}
              >
                <Project project={project} onClick={() => handleProjectClick(project)} />
              </div>
            );
          })
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default Ocean;
