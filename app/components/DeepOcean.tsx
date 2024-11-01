"use client";
import React, { useEffect, useState } from "react";
import { useSmoothScroll } from "../context/SmoothScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedImage from "./AnimatedImage";
import PaginatedProjects from "./PaginatedProjects";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Diver from "./Diver";
import Contact from "./Contact";
import { projects } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const DeepOcean = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(projects.length / 3));

  const { locoScroll } = useSmoothScroll();
  const [isClicked, setIsClicked] = useState(false);
  function contactAnimation() {
    setIsClicked(true);
    gsap.fromTo(".contact", { y: 100, opacity: 0 }, { y: 0, opacity: 1 });
  }
  useEffect(() => {
    const updatePages = () => {
      const itemsPerPage = window.innerWidth <= 768 ? 2 : 3; // 2 projects on phones, 3 on larger screens
      setTotalPages(Math.ceil(projects.length / itemsPerPage));
    };
    const totalPages = Math.ceil(projects.length / 3);

    if (locoScroll) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          paused: currentPage !== totalPages ? true : false,
          scrollTrigger: {
            scrub: true,
            trigger: ".deepocean",
            start: "+=" + window.innerHeight * 6,
            end: "+=" + window.innerHeight * 9.6,
            scroller: ".main-container",
          },
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".deepocean",
            start: "top top",
            end: "+=" + window.innerHeight * (totalPages - 2),
            scroller: ".main-container",
            scrub: true,
            onUpdate: (self) => {
              const progress = Math.round(self.progress * totalPages) + 1;
              setCurrentPage(progress);
            },
          },
        });
        ScrollTrigger.create({
          trigger: ".deepocean",
          start: "top top",
          end: "+=" + window.innerHeight * (totalPages + 2),
          scroller: ".main-container",
          scrub: true,
          pin: true,
        });
        tl.fromTo(
          ".paginations",
          {
            opacity: 1,
            duration: 1.5,
          },
          { opacity: 0 }
        )
          .fromTo(
            ".diver-container",
            {
              opacity: 0,
              x: 1400,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1.5,
              ease: "power4.out",
            },
            "<-"
          )
          .fromTo(
            ".treasure",
            { opacity: 0, x: -200 },
            {
              opacity: 1,
              x: 0,
            },
            "<-"
          );
      });
      return () => ctx.revert();
    }
  }, [locoScroll, totalPages]);

  return (
    <section className="deepocean  relative w-full">
      <div className="absolute h-full inset-0 w-full">
        <AnimatedImage className=" w-full h-screen" data="bgocean.json" />
      </div>
      <MaxWidthWrapper className=" z-50 relative paginations">
        <PaginatedProjects currentPage={currentPage} setCurrentPage={setCurrentPage} projects={projects} />
      </MaxWidthWrapper>{" "}
      <div className=" absolute w-full h-full bottom-20">
        <Diver />
      </div>
    </section>
  );
};

export default DeepOcean;
