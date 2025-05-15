"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Lane Detection Model using LLDNet",
    description:
      "Built a robust deep learning model using LLDNet for detecting road lanes in different weather conditions, enhancing road safety and reducing accident risks.",
    github: "https://github.com/niazi12/lanedetection",
  },
  {
    title: "Property Lifts Ltd Website",
    description:
      "Crafted a sleek, high-performing company website using Next.js for a UK-based lift company. Ensured responsiveness and optimal user experience.",
    live: "https://propertylifts.co.uk/",
    github: "https://github.com/niazi12/PropertyLifts",
  },
  {
    title: "Automated Odoo Attendance Check-Out",
    description:
      "Developed a custom attendance automation for Odoo that enforces check-in time limits and triggers auto check-out after a set duration. Tailored for a UK client.",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-900 p-6 pl-8 border-l-4 border-purple-600 rounded-xl shadow-md hover:shadow-purple-700/40 transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
                  >
                    Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300"
                  >
                    GitHub Repo <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
