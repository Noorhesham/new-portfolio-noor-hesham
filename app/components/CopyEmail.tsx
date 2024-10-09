"use client";
import React, { useEffect, useRef, useState } from "react";
import MagicButton from "./MagicButton";
import { CopyIcon } from "@radix-ui/react-icons";
import animationData from "../data/conffite.json";
import Lottie from "react-lottie";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const lottieRef = useRef<any>(null);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Trigger confetti animation on state change
  useEffect(() => {
    if (copied || copied2) {
      const animationInstance = lottieRef.current?.getLottie?.();
      if (animationInstance) {
        animationInstance.goToAndPlay(0, true);
      }
    }
  }, [copied, copied2]);

  // Handle email copy
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  // Handle phone number copy
  const handleCopy2 = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied2(true);
    setTimeout(() => {
      setCopied2(false);
    }, 1000);
  };

  return (
    <div className=" flex flex-col items-center">
        <h3 className=" text-center text-white font-bold lg:text-3xl text-xl">WELCOME TO MY HOME ! YOU CAN TAKE MY EMAIL OR PHONE NUMBER TO CONTACT ME </h3>
      {" "}
      <div className="mt-5 flex items-center gap-2 relative">
        <div className={`absolute -bottom-5 right-0`}>
          <Lottie ref={lottieRef} options={defaultOptions} height={200} width={400} />
        </div>

        {/* Copy Email Button */}
        <MagicButton
          text={copied ? "Email is Copied!" : "Copy my email address"}
          icon={!copied && <CopyIcon />}
          position="left"
          handleClick={() => handleCopy("noordragon2004@gmail.com")}
          className="!bg-[#161A31]"
        />

        {/* Copy Phone Button */}
        <MagicButton
          text={copied2 ? "Phone Number is Copied!" : "Copy my Phone Number"}
          icon={!copied2 && <CopyIcon />}
          position="left"
          handleClick={() => handleCopy2("+201145838187")}
          className="!bg-[#161A31] md:w-full text-nowrap"
        />
      </div>
    </div>
  );
};

export default CopyEmail;
