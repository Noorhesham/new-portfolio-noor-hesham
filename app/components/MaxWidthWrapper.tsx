import React from "react";

const MaxWidthWrapper = ({
  className,
  children,
  noPadding = false,
  noPaddingX = false,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  noPaddingX?: boolean;
  id?: string;
}) => {
  return (
    <div
      dir="ltr"
      id={id || ""}
      className={`${className || ""} max-w-[1350px] w-full mx-auto ${noPadding ? " py-0" : "py-5 lg:py-10"}   ${
        noPaddingX ? "px-0" : "px-2 md:px-10"
      } `}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
