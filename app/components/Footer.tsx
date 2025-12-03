"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black py-10 relative overflow-hidden text-white">
      
      {/* Decorative neon glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 opacity-10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Footer Text */}
        <p className="text-center md:text-left text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} GamerStop. All Rights Reserved.
        </p>

        {/* Social Icons / Placeholders */}
        <div className="flex gap-6 justify-center md:justify-end">
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Image src="/logo/discord.png" alt="Discord" width={28} height={28} />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Image src="/logo/twitch.png" alt="Twitch" width={28} height={28} />
          </a>
          <a href="#" className="hover:scale-110 transition-transform duration-300">
            <Image src="/logo/twitter.png" alt="Twitter" width={28} height={28} />
          </a>
        </div>
      </div>

      {/* Slanted top border (optional gamer edge) */}
      <div className="absolute top-0 left-0 w-full h-6 bg-black skew-y-[-3deg] origin-top-left" />
    </footer>
  );
}
