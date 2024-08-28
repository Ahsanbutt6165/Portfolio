"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.section
      variants={slideUp(0.5)}
      initial="initial"
      whileInView="animate"
      className="bg-black py-24 text-white"
    >
      {/* form section */}
      <div className="flex justify-center items-center">
        <form
          className="w-1/2 bg-gradient-to-r from-orange-500 to-balck  p-8 rounded-2xl hover:orange-shadow "
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-semibold">Get in touch</h2>
          <div className="mt-4 ">
            <label className="text-white/50 ">Name</label>
            <input
              className="text-white w-full rounded-md px-3 py-2 border
                 bg-black focus:outline-none focus:ring-2 focus:ring-opacity-50 ring-orange-500 "
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="mt-4">
            <label className="text-white/50">Email</label>
            <input
              className="text-white w-full rounded-md px-3 py-2 border
                 bg-black focus:outline-none focus:ring-2 focus:ring-opacity-50 ring-orange-500 "
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mt-4">
            <label className="text-white/50">Message</label>
            <textarea
              className="text-white w-full rounded-md px-3 py-2 border
                 bg-black focus:outline-none focus:ring-2 focus:ring-opacity-50 ring-orange-500 "
              type="text"
              name="messege"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button className="btn mt-4 px-8 active:scale-95">Submit</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
