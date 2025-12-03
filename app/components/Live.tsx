"use client";

export default function LiveSection() {
  return (
    <section id="live" className="w-full py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Animated neon background */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-cyan-400 blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-wider mb-6 neon-glow animate-fade-in-up">
          LIVE
        </h2>

        {/* Time */}
        <h1 className="
          font-black text-white neon-glow animate-fade-in-up animation-delay-300
          text-5xl sm:text-7xl md:text-[120px] lg:text-[150px]
        ">
          10PM – 1AM
        </h1>

        {/* Weekdays */}
        <p className="mt-4 text-lg sm:text-xl md:text-3xl text-gray-300 tracking-widest animate-fade-in-up animation-delay-600">
          WEEKDAYS
        </p>
      </div>
    </section>
  );
}
