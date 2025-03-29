"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceList = [
  {
    company: "Property Lifts Ltd, UK",
    position: "IT Specialist",
    duration: "July 19, 2024 - Current",
    responsibilities: [
      "Developed and maintained the website using Next.js, enhancing user interaction.",
      "Designed and planned the development of an ERP system with Odoo, Python, incorporating modules for Sales, Invoicing, Contracts, and Project Management.",
      "Expanded the network, increasing annual sales growth from £200K to £260K.",
      "Managed supplier cooperation and handled customer invoices and estimates efficiently."
    ]
  },
  {
    company: "Neuron Educare, UK",
    position: "IT Officer",
    duration: "Jan 31, 2024 - May 31, 2024",
    responsibilities: [
      "Configured CRM system, including access rights, menu management, and user setup.",
      "Gathered requirements for CRM creation, and provided debugging and issue resolution.",
      "Supported staff with CRM-related issues, ensuring smooth system operation."
    ]
  },
  {
    company: "BJIT Limited, Bangladesh",
    position: "Software Engineer",
    duration: "Aug 2, 2021 - Dec 5, 2023",
    responsibilities: [
      "Designed, implemented, and customized Odoo ERP modules and reports using Python, XML, JavaScript, HTML, and CSS.",
      "Integrated third-party APIs to enhance system capabilities and business processes.",
      "Collaborated with teams to gather requirements and implement new features in Odoo ERP.",
      "Optimized existing code, resolved technical issues, and ensured smooth operation.",
      "Provided end-user support, training, and documentation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Work Experience</h2>

        <div className="space-y-12">
          {experienceList.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-blue-400">{experience.company}</h3>
              <p className="text-lg text-gray-300">{experience.position}</p>
              <p className="text-sm text-gray-400 mb-4">{experience.duration}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {experience.responsibilities.map((item, i) => (
                  <motion.li key={i} className="hover:text-blue-400 transition">
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
