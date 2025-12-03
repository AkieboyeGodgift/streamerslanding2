"use client";

import Image from "next/image";

interface Platform {
  name: string;
  logo: string; // transparent logo
  bgColor: string; // platform background color
}

export default function StreamsSection() {
  const platforms: Platform[] = [
    { name: "Discord", logo: "/logo/discord.png", bgColor: "#5865F2" },
    { name: "Kick", logo: "/logo/kick.png", bgColor: "#000000ff" },
    { name: "Twitch", logo: "/logo/twitch.png", bgColor: "#9146FF" },
    { name: "TikTok", logo: "/logo/tiktok.png", bgColor: "#000000ff" },
  ];

  return (
    <section id="streams" className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-12 text-center neon-glow">
          STREAMS
        </h2>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer`}
              style={{ backgroundColor: platform.bgColor }}
            >
              <Image
                src={platform.logo}
                alt={platform.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
