import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <AnimatedFeatures />
    </main>
  );
}

