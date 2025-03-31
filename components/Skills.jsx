"use client";
import React from "react";
import { SiPython, SiDjango, SiJavascript, SiPostgresql, SiNextdotjs } from "react-icons/si";
import { FaDocker, FaGit, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
    { name: "Python", icon: <SiPython size={48} color="#306998" /> },
    { name: "Odoo", icon: <img src="/images/odoo.png" alt="Odoo logo" className="w-12 h-12" /> },
    { name: "Django", icon: <SiDjango size={48} color="#092e20" /> },
    { name: "Next.js", icon: <SiNextdotjs size={48} color="white" /> }, // Added Next.js
    { name: "PostgreSQL", icon: <SiPostgresql size={48} color="#336791" /> },
    { name: "Docker", icon: <FaDocker size={48} color="#2496ed" /> },
    { name: "Git", icon: <FaGit size={48} color="#f1502f" /> },
    { name: "AWS", icon: <FaAws size={48} color="#FF9900" /> },
  ];
  

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#121212] via-[#1f1f1f] to-[#121212] text-white">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 5, // Subtle rotation on hover
                filter: "blur(2px)", // Adding blur effect on hover
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow on hover
                transition: { duration: 0.3 }, // Faster transition for blur and shadow
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex flex-col items-center justify-center p-6 bg-[#1f1f1f] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <motion.div
                whileHover={{
                  rotate: 360, // Rotate the icon when hovering
                  transition: { duration: 1, ease: "easeInOut" }, // Smooth rotation
                }}
                className="mb-4"
              >
                {skill.icon}
              </motion.div>
              <p className="text-lg font-semibold text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
