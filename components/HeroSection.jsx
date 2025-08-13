"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#121212] text-white">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-7 text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-[#d6f49a]">Hello, I&apos;m</span>
            <br />
            <TypeAnimation
              sequence={[
                "Niazi Mahrab",
                1000,
                "Software Engineer",
                1000,
                "Python Developer",
                1000,
                "Odoo ERP Specialist",
                1000,
                "AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#eaf0ef]"
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl mb-6">
            Transforming ideas into intelligent solutions with Python, Odoo ERP, automation, and AI-driven applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            {/* Primary Button */}
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6A5ACD] to-[#50E3C2] text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Hire Me
            </Link>
            {/* Secondary Button with CV Link */}
            <a
              href="https://drive.google.com/file/d/1pC49D6ynhIX8Ssq8mMOZKzYimizsutOU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 py-1 rounded-full bg-gradient-to-r from-[#444] to-[#777] text-white font-semibold"
            >
              <span className="block bg-[#121212] hover:bg-[#222222] rounded-full px-5 py-2 transition">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-5 flex justify-center sm:justify-end"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-xl border-4 border-[#333333]">
            <Image
              src="/images/11.png"
              alt="hero image"
              className="object-cover w-full h-full rounded-full"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
