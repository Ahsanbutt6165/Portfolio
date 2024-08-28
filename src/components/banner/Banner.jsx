"use client";
import React from "react";
import Image from "next/image";
import BannerImg from "../../assets/banner.jpg";
import { motion } from "framer-motion";
import { MdFileDownload } from "react-icons/md";
import ReactImg from "../../assets/react.png";
import FramerImg from "../../assets/framer.png";
import JavaImg from "../../assets/java.png";
import TailWind from "../../assets/tainwindd.png";
import MonImg from "../../assets/mongo.png";
import NodeImg from "../../assets/node.png";
import Next from "../../assets/next.png";
import { slideUp } from "../Hero/Hero";

export const slideHori = (delay) => {
  return {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
const Banner = () => {
  const SkillData = [
    {
      id: 1,
      img: JavaImg,
      title: "JavaScript",
    },
    {
      id: 2,
      img: ReactImg,
      title: "React js",
    },
    {
      id: 3,
      img: FramerImg,
      title: "Framer Motion",
    },
    {
      id: 4,
      img: TailWind,
      title: "Tailwind CSS",
    },
    {
      id: 5,
      img: NodeImg,
      title: "Express/Node js",
    },
    {
      id: 6,
      img: MonImg,
      title: "MongoDb",
    },
    {
      id: 7,
      img: Next,
      title: "Next js",
    },
  ];
  return (
    <section className="bg-black text-white p-8">
      <div className="container pb-8  ">
        <div className="bg-gray-900 py-14 px-3 rounded-3xl grid grid-cols-1 md:grid-cols-2 soace-y-2 md:space-y-0  ">
          {/* banner img */}
          <motion.div
            variants={slideHori(0.5)}
            initial="initial"
            whileInView="animate"
            className="flex items-center justify-center "
          >
            <Image
              src={BannerImg}
              className="w-[300px] lg:w-[500px] rounded-3xl"
            />
          </motion.div>
          {/* banner info */}

          <div className="space-y-10   ">
            <motion.h1
              variants={slideUp(0.7)}
              initial="initial"
              whileInView="animate"
              className="text-3xl lg:text-4xl font-bold text-"
            >
              I am a MERN Stack Web Developer
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              whileInView="animate"
              className="text-white/80 font-medium"
            >
              I am a self-taught MERN Stack Developer residing Rawalpindi,
              Pakistan. My primary goal is to enhance my skills and expand my
              knowledge to gain valuable experience in complex project
              development. I am looking for a role of MERN Stack developer in a
              growing organization. I am dedicated to continuously improving and
              staying updated with the latest advancements in industry.
            </motion.p>
            <button className=" flex justify-center text-white/70 items-center border px-4  gap-2 rounded-md md:py-2 active:scale-95">
              <MdFileDownload />
              <a href="/AhsanAliMERN.pdf" download={"My_Resume"}>
                {" "}
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="pt-16 flex flex-wrap justify-around gap-6 ">
          {SkillData.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex flex-col justify-center items-center"
              >
                <motion.div
                  variants={slideUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                >
                  <Image
                    key={item.id}
                    src={item.img}
                    className="rounded-full w-20 shadow-lg  hover:shadow-orange-500 duration-300 hover:-translate-y-2"
                  />
                </motion.div>

                <motion.p
                  variants={slideHori(0.5)}
                  initial="initial"
                  whileInView="animate"
                  className="text-white/70 font-semibold"
                >
                  {item.title}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner;
