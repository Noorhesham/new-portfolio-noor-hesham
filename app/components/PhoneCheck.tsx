"use client";
import dynamic from "next/dynamic";
import useIsMobile from "@/app/hooks/IsPhone";
import React from "react";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: true });
import CodeHighlighter from "./CodeHighlighter";
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
import { TracingBeam } from "./ui/Beam";

const PhoneCheck = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <>
          <TracingBeam>
            <CodeHighlighter />
            <Grid />
            <Projects />
          </TracingBeam>
        </>
      ) : (
        <>
          <CodeHighlighter />
          <Grid />
          <Projects />
        </>
      )}
    </>
  );
};

export default PhoneCheck;
