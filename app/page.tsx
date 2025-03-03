'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { CareerSection } from "@/components/career-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false); // State to check if we're on the client side

  useEffect(() => {
    // This will ensure window is available only on the client side
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isClient) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (isClient) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isClient]);

  useEffect(() => {
    const animate = () => {
      setImagePosition(prev => {
        const deltaX = mousePosition.x - prev.x;
        const deltaY = mousePosition.y - prev.y;

        const smoothMoveX = prev.x + deltaX * 0.2;
        const smoothMoveY = prev.y + deltaY * 0.2;

        return { x: smoothMoveX, y: smoothMoveY };
      });

      requestAnimationFrame(animate);
    };

    if (isClient) {
      animate();
    }
  }, [mousePosition, isClient]);

  return (
    <div className="min-h-screen bg-[#18181B] text-white">
      <div className="bg-grid-pattern">
        {/* Header */}
        <header className="flex justify-between max-w-7xl mx-auto items-center py-4 max-md:px-6">
          <h1 className="font-semibold">Parth Gandhi</h1>
          <ThemeToggle />
        </header>

        {/* Hero Section */}
        <HeroSection />
      </div>

      <hr />
      <CareerSection />
      <hr />

      <div className="bg-grid-pattern">
        <SkillsSection />
        <TestimonialsSection />
      </div>

      <Footer />

      {/* Floating Image */}
      {isClient && (
        <div
          className="absolute pointer-events-none opacity-[15%] md:opacity-100"
          style={{
            top: imagePosition.y + (isClient ? window.scrollY : 0) - 80,  // Include scroll offset for top position
            left: imagePosition.x - 80,  // Offset the image from the mouse cursor
            transition: "transform 0.1s ease-out", // Smooth transition for movement
          }}
        >
          <Image
            src="/amoung-us.gif"
            width={50}
            height={50}
            alt="Among Us"
            className="w-[80px] aspect-square "
          />
        </div>
      )}
    </div>
  );
}
