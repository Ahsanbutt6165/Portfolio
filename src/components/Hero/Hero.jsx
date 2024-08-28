"use client";
import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/heroimg.jpg";
import { animate, delay, motion } from "framer-motion";
import { slideHori } from "../banner/Banner";

export const slideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="bg-gradient-to-b from-orange-500 to-black">
        <div className="container min-h-[550px] grid grid-cols-1 md:grid-cols-2 gap-7 ">
          {/* info */}
          <div className="flex flex-col justify-center items-center ">
            <div className="text-center md:text-left space-y-6">
              <motion.p
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="text-5xl lg:text-7xl font-bold text-outline "
              >
                AHSAN ALI
              </motion.p>
              <motion.p
                variants={slideUp(0.7)}
                initial="initial"
                whileInView="animate"
                className="text-white/70 font-semibold "
              >
                I'm a MERN-Stack Developer based in Rawalpindi, Pakistan. I
                enjoy working on every aspect of web development, from the user
                interface to the server logic.
              </motion.p>
              <motion.button
                variants={slideUp(0.9)}
                initial="initial"
                whileInView="animate"
                className="btn"
              >
                Know More
              </motion.button>
            </div>
          </div>
          {/* hero img */}
          <motion.div
            variants={slideHori(1)}
            initial="initial"
            whileInView="animate"
            className="hidden md:flex justify-center  items-center relative bg-black rounded-full overflow-hidden m-8  "
          >
            <div className="box  ">
              <div className="absolute inset-12 z-10 rounded-full  ">
                <Image
                  className="h-[100%] w-[100%] rounded-full 
                "
                  src={HeroImg}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
