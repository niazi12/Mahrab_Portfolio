"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "#contact" },
];

export function MainNav() {
  const pathname = usePathname();

  const handleHashClick = (href) => {
    if (pathname === "/") {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item, index) => {
        const href =
          item.href.startsWith("#") && pathname !== "/"
            ? `/${item.href}`
            : item.href;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            whileHover={{ y: -3 }}
          >
            <Link
              href={href}
              onClick={(e) => {
                if (item.href.startsWith("#") && pathname === "/") {
                  e.preventDefault();
                  handleHashClick(item.href);
                }
              }}
              className="text-gray-200 hover:text-white transition-colors duration-200 relative group text-sm font-medium uppercase tracking-wider"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </Link>
          </motion.div>
        );
      })}

      {/* 🚀 Get Started Button - Enhanced */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: navItems.length * 0.1, type: "spring", stiffness: 300, damping: 10 }}
        whileHover={{ y: -2, scale: 1.08, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => {
            if (pathname === "/") {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/#contact";
            }
          }}
          className="relative px-6 py-3 rounded-full border border-purple-500 text-white font-semibold shadow-lg transition-all duration-300 group overflow-hidden"
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
  );
}
