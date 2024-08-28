"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "../Sidemenu/ResponsiveMenu";
import { motion } from "framer-motion";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
];
const Navbar = () => {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-black text-white sticky top-0 z-[999] "
    >
      <div className="container flex items-center justify-between py-5 px-5 relative z-[999] ">
        {/* logo section */}
        <div>
          <Link href={"/"}>
            <div className="flex items-center">
              <div className="h-[50px] w-[50px] flex justify-center items-center bg-orange-600 text-white rounded-full text-4xl font-bold">
                P
              </div>
              <h1 className="text-2xl font-bold">ortfolio</h1>
            </div>
          </Link>
        </div>
        {/* links sections */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((link) => {
              const isActive = pathName === link.link;
              return (
                <li key={link.id}>
                  <Link
                    className={`${
                      isActive
                        ? "text-orange-500 text-xl font-bold hover:text-white"
                        : ""
                    } inline-block text-lg py-1 px-4   hover:orange-shadow transition-all duration-300 hover:scale-110  `}
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn active:scale-95">
              <a href="/AhsanAliMERN.pdf" download={"My_Resume"}>
                Get Resume
              </a>
            </button>
          </ul>
        </div>
        {/* mobile menu section */}
        <div className="md:hidden">
          <MdMenu onClick={toggleMenu} className="text-4xl" />
        </div>
      </div>
      {/* mobile sidebar menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </motion.nav>
  );
};

export default Navbar;
