import Banner from "@/components/banner/Banner";
import Contact from "@/components/Contact/Contact";

import Hero from "@/components/Hero/Hero";

import Projects from "@/components/Projects/Projects";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Projects />
      <Contact />
    </main>
  );
};

export default page;
