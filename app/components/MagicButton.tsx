import React, { ReactNode } from "react";

const MagicButton = ({
  text,
  icon,
  handleClick,
  className,
  position = "right",
}: {
  text: string;
  icon?: ReactNode;
  handleClick?: () => void;
  className?: String;
  position?: String;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative w-full rounded-lg inline-flex h-12 overflow-hidden  p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${className}`}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
