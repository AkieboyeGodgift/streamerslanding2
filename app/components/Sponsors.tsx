"use client";

import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <section id="sponsors" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-12 text-center neon-glow">
          SPONSORS
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="w-32 h-16 md:w-36 md:h-20 relative hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
