import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import {  testimonials } from "@/public";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading mb-5">
        My Education and
        <span className="text-[#4BC9C0]"> Certificates </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className=" h-full rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" pauseOnHover={false} />
        </div>
{/* 
        <div className="flex z-20 flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex items-center flex-wrap md:max-w-60 max-w-32 gap-2">
                <div className="relative rounded-lg md:w-10 md:h-10 h-5 w-5">
                  <Image
                    fill
                    src={company.img}
                    alt={company.name}
                    loading="lazy"
                    className=" absolute w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h1 className=" text-sm lg:text-base">{company.name}</h1>
              </div>
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Clients;
