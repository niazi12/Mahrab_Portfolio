"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Import social icons

export function Navbar({ user }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Glowing accent bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-[51]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-800" 
            : "bg-gray-900/90 backdrop-blur-md"
        )}
      >
        <div className="container relative">
          <nav className="flex items-center justify-between h-16 px-4 sm:px-6">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              onMouseEnter={() => setHoveredLogo(true)}
              onMouseLeave={() => setHoveredLogo(false)}
            >
              {/* <motion.span 
                className="text-2xl font-bold tracking-tight text-white"
                animate={{
                  scale: hoveredLogo ? 1.05 : 1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  YourBrand
                </span>
              </motion.span> */}
            </Link>

            {/* Navigation Section */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <MainNav />
                
                {/* Social Icons - Updated to Your Links */}
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <a
                      href="https://www.facebook.com/niazi.mahrab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-500 transition-all duration-200"
                    >
                      <FaFacebook size={22} />
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                    <a
                      href="https://www.linkedin.com/in/niazi-mahrab-b16a96203/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition-all duration-200"
                    >
                      <FaLinkedin size={22} />
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <div className="md:hidden">
                <MobileNav user={user} />
              </div>
            </div>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
