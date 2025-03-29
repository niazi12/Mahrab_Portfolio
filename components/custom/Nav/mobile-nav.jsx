"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "#contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = (href) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/${href}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white transition-colors duration-200"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 z-50"
          >
            <nav className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={pathname === "/" && item.href.startsWith("#") ? item.href : item.href.startsWith("#") ? `/${item.href}` : item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleScroll(item.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-medium uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* 🚀 Animated "Get Started" Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 10 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleScroll("#contact")}
                  className="w-full relative px-6 py-3 rounded-full border border-purple-500 text-white font-semibold shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  {/* Animated Gradient Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Inner Button Content */}
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span className="tracking-wide">Get Started</span>

                    {/* Arrow Animation */}
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </div>

                  {/* Glowing Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-purple-500 opacity-0 rounded-full group-hover:opacity-20 transition-all duration-500"
                  />
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
