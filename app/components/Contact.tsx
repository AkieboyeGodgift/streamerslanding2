"use client";

import { useState } from "react";

export default function StreamerForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add your API logic here
    alert("Message sent! 🎮");
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-black text-white overflow-hidden">
      
      {/* Scattered Emojis */}
      <div className="absolute top-10 left-5 text-3xl md:text-5xl rotate-12 opacity-30 pointer-events-none">
        🎮
      </div>
      <div className="absolute bottom-10 right-10 text-4xl md:text-6xl -rotate-12 opacity-30 pointer-events-none">
        ⚡
      </div>
      <div className="absolute top-1/3 right-20 text-3xl md:text-5xl rotate-45 opacity-25 pointer-events-none">
        🕹️
      </div>
      <div className="absolute bottom-1/4 left-24 text-3xl md:text-5xl -rotate-45 opacity-25 pointer-events-none">
        👾
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest mb-12 text-center neon-glow">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
            required
          />

          <button
            type="submit"
            className="py-4 bg-purple-500 hover:bg-purple-600 rounded-xl font-bold text-white text-lg transition-all duration-300 neon-glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
