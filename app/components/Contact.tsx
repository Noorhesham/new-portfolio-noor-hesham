"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./ButtonColorful";
import Image from "next/image";
import MagicButton from "./MagicButton";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Contact() {
  const ref = useRef<any>();
  const formRef = useRef<any>();
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: { y: 500, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };
  function sendEmail(e: any) {
    setPending(true);
    e.preventDefault();
    emailjs.sendForm("service_kxdhvdb", "template_3i15jgb", formRef?.current, "t8wKaNDqOW71fnrMx").then(
      (result) => {
        setSuccess(true);
        console.log(result.text);
        setPending(false);
      },
      (error) => {
        setErr(true);
        setPending(false);
        console.log(error.text);
      }
    );
  }

  return (
    <MaxWidthWrapper
      id="contact"
      className=" bg-[#0f1b33] z-[9998]  relative flex justify-center mt-10  py-40 px-20 overflow-hidden"
    >
      <motion.div
        className=" flex items-center lg:items-start gap-20 lg:flex-row flex-col "
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className=" flex-col  text-gray-200 z-40  dark:text-gray-200 gap-4 flex  capitalize ">
          <motion.h1
            className=" text-violet-500 text-xl lg:text-4xl xl:text-7xl font-semibold mb-5 "
            variants={variants}
          >
            contact me now !
          </motion.h1>
          <motion.div variants={variants}>
            <h2 className="text-sm  lg:text-3xl capitalize font-semibold">mail</h2>
            <span>noordragon2004@gmail.com</span>
          </motion.div>
          <motion.div variants={variants}>
            <h2 className="text-sm lg:text-3xl capitalize font-semibold">address</h2>
            <span>from egypt,mansoura </span>
          </motion.div>
          <motion.div variants={variants}>
            <h2 className=" text-sm lg:text-3xl capitalize font-semibold">phone</h2>
            <span>+20 1145838187</span>
          </motion.div>
        </motion.div>
        <div className=" z-[9998]   relative" ref={ref}>
          <motion.div
            className=" z-50 relative"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.svg
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className=" z-50 absolute m-auto stroke-violet-600 w-[20rem] h-[20rem] lg:w-[450px] lg:h-[450px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <motion.path
                strokeWidth={3}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                className="st0"
                d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334
		l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736
		c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79
		c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689
		s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263
		c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138
		c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406
		c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966
		c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256
		c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364
		c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812
		c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139
		C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z"
              />
            </motion.svg>
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            ref={formRef}
            className="flex flex-col items-start lg:items-stretch gap-10 flex-1 w-auto lg:w-[50rem] relative z-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <input
              className=" p-4 px-8 text-gray-100   bg-[rgb(4,7,29)] rounded-lg border-violet-400 border-2 outline-none"
              type="text"
              required
              placeholder="name"
              name="name"
            />
            <input
              className=" p-4 px-8 text-gray-100  bg-[rgb(4,7,29)] rounded-lg border-violet-400 border-2 outline-none"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              className=" p-4 px-8 text-gray-100  bg-[rgb(4,7,29)] rounded-lg border-violet-400 border-2 outline-none"
              placeholder="Message"
              rows={8}
              name="message"
            ></textarea>
            <MagicButton text="Submit" disabled={pending} />

            <span className=" text-violet-600 ">
              {err && "Error"}
              {success && "Email sent successfully"}
            </span>
          </motion.form>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
}
export default Contact;
