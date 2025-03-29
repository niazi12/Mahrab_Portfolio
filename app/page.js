// import { AnimatedFeatures } from "@/components/AnimatedFeatures";
// import { HeroSection } from "@/components/HeroSection";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Skills from "@/components/Skills";
import AchievementsSection from "../components/Achievement"; 
import Experience from "../components/Experience";



export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <About />
      <AchievementsSection />
      <Skills />
      {/* <Experience /> */}
      {/* Add more sections as needed */}
    </main>
  );
}

