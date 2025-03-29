"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/niazi12",
      tooltip: "GitHub Profile"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/niazi-mahrab-b16a96203/",
      tooltip: "LinkedIn Profile"
    },
    
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"/></svg>,
        url: "https://www.facebook.com/niazi.mahrab/",
        tooltip: "Facebook Profile"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-950 text-gray-300 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Branding with blue gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <motion.h2 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
            whileHover={{ scale: 1.05 }}
          >
            Niazi Mahrab
          </motion.h2>
          <p className="text-sm text-gray-500 mt-2">
            © {currentYear} Crafted with <span className="text-cyan-400"></span> by Mahrab
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="flex items-center text-sm text-gray-400 space-x-2 group">
            <MapPin className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
            <span className="group-hover:text-white transition-colors">
              London, United Kingdom
            </span>
          </div>
          <a 
            href="mailto:mahrab570@gmail.com" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            mahrab570@gmail.com
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                {link.icon}
              </span>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.tooltip}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          style={{ opacity }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all text-white p-3 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}