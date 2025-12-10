"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-black overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-widest neon-glow animate-fade-in-up text-center">
          ABOUT
        </h2>

        {/* Text Block */}
        <div className="mt-12 md:mt-16 space-y-10 animate-fade-in-up animation-delay-300">
          
          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            🎮 <span className="font-semibold text-white">GamerStop</span> is all about insane gameplay, raw energy, and that late-night grind.
          </p>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            ⚡ Every stream is packed with clutch moments, chaotic battles, and nonstop entertainment.
          </p>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            💬 I’m building a community where gamers can vibe, learn, laugh, rage, and level up together.
          </p>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed">
            🏆 Join the squad, lock in, and let’s climb the leaderboard — one game at a time.
          </p>

        </div>
      </div>
    </section>
  );
}
