"use client";
import Experience from "@/components/Experience";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center mb-16 pt-16 sm:pt-24">
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Professional Journey
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A timeline of my career milestones, projects, and achievements
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <Experience />
        </motion.div>
      </div>
    </main>
  );
}
