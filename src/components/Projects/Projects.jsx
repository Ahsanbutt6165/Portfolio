"use client";
import React from "react";
import Image from "next/image";
import Proj from "../../assets/buytaste.png";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";
import Proj2 from "../../assets/movie.png";
import Proj3 from "../../assets/pinterest.png";
const Projects = () => {
  const ProjectData = [
    {
      id: 1,
      img: Proj,
      title: "BuyTaste",
      Desc: "loren shfl slfhl slfh lslfhl sfls klfjlsdk fljskd f",
      link: "https://amazing-zabaione-60b302.netlify.app/",
      code: "https://github.com/Ahsanbutt6165/Food-React-Project",
    },
    {
      id: 2,
      img: Proj2,
      title: "Movie Land",
      Desc: "loren shfl slfhl slfh lslfhl sfls klfjlsdk fljskd f",
      link: "https://zippy-tartufo-35a18d.netlify.app/",
      code: "https://github.com/Ahsanbutt6165/Movie-App",
    },
    {
      id: 3,
      img: Proj3,
      title: "Pinterest Clone",
      link: "https://github.com/Ahsanbutt6165/MERN-Pinterest ",
      code: "https://github.com/Ahsanbutt6165/MERN-Pinterest",
    },
  ];
  return (
    <section className="bg-gradient-to-b from-orange-500 to-black text-white ">
      <div className="container py-5 mb-9 pb-16  ">
        <div>
          <p className="text-3xl lg:text-4xl mb-10 font-bold tracking-widest text-center text-black/75 uppercase relative z-20">
            Projects
          </p>
        </div>
        {/* project card */}
        <div className="flex flex-wrap justify-center items-center gap-5 ">
          {ProjectData.map((project) => {
            return (
              <motion.div
                variants={slideUp(0.5)}
                initial="initial"
                whileInView="animate"
                key={project.id}
                className="bg-black/25 p-4 rounded-lg hover:shadow-xl hover:shadow-orange-500 duration-300 hover:-translate-y-3 relative group "
              >
                <motion.div
                  variants={slideUp(0.7)}
                  initial="initial"
                  whileInView="animate"
                  className="flex justify-center"
                >
                  <Image
                    src={project.img}
                    className="w-[320px] h-[380px] rounded-xl"
                  />
                </motion.div>
                <div className="space-y-2 p-4">
                  {" "}
                  <h1 className="text-2xl">{project.title}</h1>
                  <p className="text-white/70">{project.Desc}</p>
                </div>
                {/* hidden buttons */}
                <div className="flex justify-around items-center group-hover:duration-300  duration-500">
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn active:scale-95"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="border-4 border-orange-900 px-2 py-1  rounded-md hover:scale-105 duration-300"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
