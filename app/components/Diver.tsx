import React from "react";
import "../dive.scss";
const Diver = () => {
  return (
    <div className="diver-container  w-full h-full relative overflow-hidden">
      <div id="bubbles" className="absolute inset-0 flex justify-center items-center">
        {/* Bubble Elements */}
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className={`bubble x${index + 1}`}></div>
        ))}
      </div>
      <div className="content w-full lg:w-[44rem] relative z-10 flex justify-center">
        {/* Submarine SVG */}
        <svg
          id="submarine"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 677.21 358.19"
          aria-labelledby="submarineTitle"
          role="img"
        >
          <title id="submarineTitle">Submarine</title>
          <defs>
            <style>
              {`
                .cls-1{fill:#d8bc8b;}
                .cls-1,.cls-2,.cls-3,.cls-4{stroke:#e79a7f;stroke-miterlimit:10;stroke-width:5px;}
                .cls-2{fill:#e9d196;}
                .cls-3{fill:#d4d8da;}
                .cls-4{fill:none;}
              `}
            </style>
          </defs>
          <path
            className="cls-1"
            d="M978.64,467.44l-36,.1a50,50,0,0,1-50-49.74l-.25-85.53a50,50,0,0,1,49.67-50l36-.1a10.13,10.13,0,0,1,10.12,10.08S964,353.3,964.08,374.82s24.63,82.47,24.63,82.47A10.13,10.13,0,0,1,978.64,467.44Z"
            transform="translate(-314 -139)"
          />
          <path
            className="cls-2"
            d="M484.5,154.5h-53a10,10,0,0,0-10,10v6a10,10,0,0,0,10,10h35v90a12,12,0,0,0,12,12h4a12,12,0,0,0,12-12v-106A10,10,0,0,0,484.5,154.5Z"
            transform="translate(-314 -139)"
          />
          <circle className="cls-1" cx="165.5" cy="157.5" r="51" />
          <path
            className="cls-1"
            d="M414,494.5H743.26c17.83,2.6,63.66-21.74,103.49-50l-513.4,1.59C350.93,475.26,380.59,494.5,414,494.5Z"
            transform="translate(-314 -139)"
          />
          <path
            className="cls-2"
            d="M743.26,274.5H414c-53.64,0-97.53,49.5-97.53,110h0a119.2,119.2,0,0,0,16.85,61.6l513.4-1.59c12.71-9,24.81-18.43,35.19-27.49L882.4,339C838.09,308.17,762.18,274.5,743.26,274.5Z"
            transform="translate(-314 -139)"
          />
          <path
            className="cls-1"
            d="M915,374.5c0-9.29-13.31-22.14-32.6-35.54L881.94,417C901.51,399.93,915,384.09,915,374.5Z"
            transform="translate(-314 -139)"
          />
          <ellipse className="cls-3" cx="154.48" cy="218.24" rx="41.98" ry="41.76" />
          <ellipse className="cls-3" cx="284.27" cy="218.24" rx="41.98" ry="41.76" />
          <ellipse className="cls-3" cx="414.02" cy="217.26" rx="41.98" ry="41.76" />
          <path className="cls-4" d="M331.5,374.5" transform="translate(-314 -139)" />
          <path
            className="cls-4"
            d="M387.75,297.78s-16.07,6.83-26.18,16.72-21.37,34.77-21.37,34.77"
            transform="translate(-314 -139)"
          />
          <line className="cls-4" x1="20.61" y1="220.6" x2="18.39" y2="232.4" />
          <rect className="cls-2" x="92.5" y="2.5" width="24" height="50" rx="12" ry="12" />
          <line className="cls-4" x1="567.5" y1="199.5" x2="567.5" y2="278.5" />
          <line className="cls-4" x1="660.5" y1="162.5" x2="643.5" y2="210.5" />
          <line className="cls-4" x1="661.96" y1="157.72" x2="663.04" y2="154.28" />
          <line className="cls-4" x1="19.5" y1="307.5" x2="532.5" y2="305.5" />
        </svg>
      </div>
    </div>
  );
};

export default Diver;
