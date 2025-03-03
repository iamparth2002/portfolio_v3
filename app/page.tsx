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

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

    animate();

  }, [mousePosition]);

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
      {/* Career Section */}
      <CareerSection />
      <hr />

      <div className="bg-grid-pattern">
        {/* Skills Section */}
        <SkillsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Image */}
      <div
        className="absolute pointer-events-none opacity-[15%] md:opacity-100"
        style={{
          top: imagePosition.y + window.scrollY - 80,  // Include scroll offset for top position
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
    </div>
  );
}
