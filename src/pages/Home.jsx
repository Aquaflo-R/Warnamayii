import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import hero1 from "../assets/hero-slide-1.jpg";
import hero2 from "../assets/hero-slide-2.jpg";
import hero3 from "../assets/hero-slide-3.jpg";
import hero4 from "../assets/hero-slide-4.jpg";

export default function Home() {
  const slides = [hero1, hero2, hero3, hero4];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide;
    });

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Image Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt="hero"
            loading="auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--dark-green)]/50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex items-center justify-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-white max-w-3xl px-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6">WARNAMAYI</h1>

            <p className="text-lg md:text-xl mb-8">
              Empowering Healthy Living Through Nature and Innovation
            </p>

            <button className="group flex items-center gap-2 bg-[var(--light-green)] hover:bg-[var(--dark-green)] px-8 py-3 rounded-full font-semibold transition mx-auto">
              View Our Products
              <ArrowUpRight
                size={20}
                className="transform rotate-45 group-hover:rotate-0 transition-transform duration-300"
              />
            </button>
          </motion.div>
        </div>

        {/* Arrow Navigation */}

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
        >
          ❯
        </button>

        {/* Slider Indicators */}

        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition ${
                i === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= ABOUT US SECTION ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* LEFT CONTENT */}

          <div>
            <p className="text-[var(--light-green)] font-semibold mb-3">
              🌿 About Our Company
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--dark-green)] leading-tight mb-6">
              Supporting Agriculture, Wellness & Sustainable Living
            </h2>

            <p className="text-gray-600 mb-8">
              Warnamayi is committed to delivering high-quality organic,
              wellness and sanitisation solutions. Our goal is to promote
              healthier lifestyles while maintaining sustainable and responsible
              practices that benefit people and the environment.
            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-4 text-gray-700 mb-8">
              <div>✔ Organic Agriculture</div>
              <div>✔ Wellness Products</div>
              <div>✔ Sanitisation Solutions</div>
              <div>✔ Sustainable Practices</div>
            </div>

            <button className="flex items-center gap-2 bg-[var(--dark-green)] hover:bg-[var(--light-green)] text-white px-6 py-3 rounded-full font-semibold transition">
              More About Us
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* RIGHT SIDE */}

          <div className="relative">
            {/* FLOATING CARD */}

            <div className="absolute -top-10 right-8 bg-yellow-300 p-6 rounded-xl shadow-xl w-64 z-10">
              <h4 className="font-semibold text-gray-800 mb-3">
                Our Focus Areas
              </h4>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>🌱 Organic & Natural Products</li>
                <li>💚 Health & Wellness</li>
                <li>🧴 Hygiene & Sanitisation</li>
                <li>📦 Responsible Distribution</li>
              </ul>
            </div>

            {/* IMAGE */}

            <img
              src={hero4}
              alt="about"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
