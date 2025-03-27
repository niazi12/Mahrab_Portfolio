"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 text-white font-bold text-xl">
          {/* <Image src="/images/logo.jpeg" alt="Logo" width={40} height={40} className="rounded-lg" /> */}
          {/* <span>Niazi Mahrab</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <motion.div whileHover={{ scale: 1.1 }} key={item.title}>
              <Link href={item.href} className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-indigo-700 text-white p-4"
        >
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href} className="block py-2 text-center text-lg font-medium hover:text-yellow-300">
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
