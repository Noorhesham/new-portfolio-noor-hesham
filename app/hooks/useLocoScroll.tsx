import React, { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";

const useLocoScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [locoScroll, setLocoScroll] = useState(null);
  const pathname = usePathname();
  console.log(pathname);
  useLayoutEffect(() => {
    if (typeof window === "undefined" || typeof global.document === "undefined") return;
    const LocomotiveScroll = require("locomotive-scroll").default;
    const scrollEl = global?.window?.document?.querySelector(".main-container");

    const locoScrollInstance = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1.5,
      mobile: {
        smooth: true,
      },
      smartPhone: {
        smooth: true,
      },
      smoothMobile: true,
      tablet: {
        breakpoint: 0, // <---- Fixes The Issue 🎉
      },
    });

    locoScrollInstance.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? locoScrollInstance.scrollTo(value, 0, 0)
          : locoScrollInstance.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length
          ? locoScrollInstance.scrollTo(value, 0, 0)
          : locoScrollInstance.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    setLocoScroll(locoScrollInstance);

    const lsUpdate = () => locoScrollInstance.update();
    if (window.innerWidth < 768) ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();
    // Cleanup on component unmount
    return () => {
      if (locoScrollInstance) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScrollInstance.destroy(); // Destroy Locomotive Scroll instance
      }
    };
  }, [pathname]);

  return { locoScroll };
};

export default useLocoScroll;
