"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-black to-teal-500/10 blur-3xl opacity-20" />

      {/* Hero Content */}
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-wide"
        >
          Hello, I'm{" "}
          <span className="text-teal-400 glow">Niazi Mahrab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-400 mt-4"
        >
          Python & Odoo Developer | Machine Learning Enthusiast
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-6"
        >
          <Button className="px-6 py-3 text-lg font-semibold bg-teal-500 hover:bg-teal-400 transition-all">
            Hire Me
          </Button>
        </motion.div>
      </div>

      {/* Profile Image with Animated Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 md:top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Animated Glowing Border */}
          <div className="absolute inset-0 rounded-full border-4 border-teal-500 animate-pulse opacity-50" />

          <Image
            src="/images/11.jpg" // Replace with your actual image
            alt="Niazi Mahrab"
            width={200}
            height={200}
            className="rounded-full border-4 border-gray-800 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};
