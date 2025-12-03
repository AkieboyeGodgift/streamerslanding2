"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  logo: string;
}

interface HeroSectionProps {
  slides: Slide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white rounded-b-[40px]">

      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, i) => (
          <Image
            key={i}
            src={slide.image}
            alt=""
            fill
            className={
              "object-cover transition-opacity duration-700 " +
              (i === index ? "opacity-100" : "opacity-0")
            }
          />
        ))}
      </div>

      {/* Darken from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full flex items-center justify-between px-10 max-md:flex-col max-md:justify-end max-md:pb-10">

        {/* LEFT TEXT AREA */}
        <div className="w-1/2 max-md:w-full max-md:text-center">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 max-md:text-4xl">
            Gamers <span className="text-purple-500">Stop.</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md max-md:mx-auto">
            Dive into immersive worlds, epic battles, and raw gaming energy.
            Join the community — Watch live, interact, and experience gaming
            without limits.
          </p>

          {/* Indicators */}
          <div className="flex gap-2 mt-8 max-md:justify-center">
            {slides.map((_, i) => (
              <div
                key={i}
                className={
                  "h-2 w-6 rounded-full transition-all " +
                  (i === index ? "bg-purple-500 w-10" : "bg-gray-600 opacity-50")
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT — SUPER LARGE LOGO (4× bigger) */}
        <div className="relative w-[280px] h-[280px] max-md:w-[180px] max-md:h-[180px]">
          <Image
            src={slides[index].logo}
            alt="Slide Logo"
            fill
            className="object-contain rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}
