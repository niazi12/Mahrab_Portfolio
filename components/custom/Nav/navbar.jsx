// components/navbar/navbar.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar({ user }) {
  const [scrolled, setScrolled] = useState(false);

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
      {/* Fixed gradient at the very top of the page */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-[51]" />
      
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-background/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent backdrop-blur-sm bg-gradient-to-b from-white/10 to-transparent"
        )}
      >
        <div className="container relative">
          <nav className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 transition-opacity hover:opacity-80"
            >
              <motion.span 
                className="text-xl font-bold tracking-tight text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                TechoCode
              </motion.span>
            </Link>

            {/* Navigation Section */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <MainNav />
                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </Link>
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