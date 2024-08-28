import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="bg-orange-500 text-white bg-opacity-40 py-6   px-4 flex flex-col lg:flex-row  justify-around items-center w-full">
        <div className="text-white/50 space-y-2">
          <p>
            <MdMarkEmailRead className="inline-block text-xl" />{" "}
            ahsanbutt6165@gmail.com
          </p>
          <p>copyright © 2024 Ahsan Ali</p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ahsan-ali-98587426b"
            target="_blank"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a href="#">
            <FaInstagram className="text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
