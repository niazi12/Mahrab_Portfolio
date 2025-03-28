// components/navbar/main-nav.jsx
import Link from "next/link";
// import { ModeToggle } from "..Nav/mode-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#contact" },
  { label: "About", href: "#about" },
];

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-foreground hover:text-primary transition-colors duration-200 relative group"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
      {/* <ModeToggle /> */}
      <Button
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}
        className="relative overflow-hidden group bg-dark border border-accent-neon-blue text-light hover:shadow-neon transition-all duration-300"
      >
        <span className="relative z-10">Get Started</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent-neon-blue via-accent-neon-purple to-accent-neon-pink"></div>
      </Button>
    </nav>
  );
}