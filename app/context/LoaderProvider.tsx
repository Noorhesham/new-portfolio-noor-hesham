"use client";
import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import Logo from "../components/Logo";

export const SmoothScrollContext = createContext({
  locoScroll: null,
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => {
      setLoaded(false);
    }, 1500);

    return () => clearTimeout(t);
  }, []);
  if (loaded) return <Logo />;
  else return children;
};
