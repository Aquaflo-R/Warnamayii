import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["Agriculture", "Wellness", "Health", "FMCG", "Others"];

const products = {
  Agriculture: [
    { name: "Organic Fertilizer", img: "./images/Agri.jpg" },
    { name: "Natural Seeds", img: "./images/Agri.jpg" },
    { name: "Crop Nutrition Mix", img: "./images/Agri.jpg" },
    { name: "Plant Growth Booster", img: "./images/Agri.jpg" },
  ],
  Wellness: [
    { name: "Herbal Tea", img: "./images/Wellness.jpg" },
    { name: "Aromatherapy Oil", img: "./images/Wellness.jpg" },
    { name: "Relaxation Spray", img: "./images/Wellness.jpg" },
    { name: "Wellness Kit", img: "./images/Wellness.jpg" },
  ],
  Health: [
    { name: "Immunity Booster", img: "./images/Health.jpg" },
    { name: "Herbal Supplements", img: "./images/Health.jpg" },
    { name: "Organic Honey", img: "./images/Health.jpg" },
    { name: "Health Mix Powder", img: "./images/Health.jpg" },
  ],
  FMCG: [
    { name: "Natural Soap", img: "./images/FMCG.jpg" },
    { name: "Eco Detergent", img: "./images/FMCG.jpg" },
    { name: "Organic Shampoo", img: "./images/FMCG.jpg" },
    { name: "Household Cleaner", img: "./images/FMCG.jpg" },
  ],
  Others: [
    { name: "Eco Packaging", img: "./images/Others.jpg" },
    { name: "Reusable Bags", img: "./images/Others.jpg" },
    { name: "Green Products Kit", img: "./images/Others.jpg" },
    { name: "Sustainable Tools", img: "./images/Others.jpg" },
  ],
};

export default function Home() {
  const slides = [
    "./images/hero-slide-1.jpg",
    "./images/hero-slide-2.jpg",
    "./images/hero-slide-3.jpg",
    "./images/hero-slide-4.jpg",
  ];
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

  const [activeTab, setActiveTab] = useState("Agriculture");

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
        {/* Image Slider */}
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index]}
            alt="hero"
            loading="auto"
            initial={{ x: "100%", scale: 1.1 }}
            animate={{ x: 0, scale: 1.05 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.7 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[var(--dark-green)]/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center text-center w-full">
          {/* Glow Background */}
          <div className="absolute w-[500px] h-[500px] bg-[var(--light-green)] opacity-30 blur-[160px] rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-white max-w-3xl px-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6">WARNAMAYI</h1>

            <p className="text-lg md:text-lg mb-8">
              Empowering Healthy Living Through Nature and Innovation
            </p>

            <button className="group flex items-center gap-2 backdrop-blur-lg bg-[var(--dark-green)] border border-white/20 hover:bg-[var(--light-green)] px-8 py-3 rounded-full font-semibold transition mx-auto shadow-lg">
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
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
        >
          ❯
        </button>

        {/* Slider Indicators */}

        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-white w-6" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </section>
      {/* ================= ABOUT US SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[var(--light-green)] font-semibold mb-3"
            >
              🌿 About Our Company
            </motion.p>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="text-4xl lg:text-5xl font-bold text-[var(--dark-green)] leading-tight mb-6"
            >
              Supporting Agriculture, Wellness & Sustainable Living
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-gray-600 mb-8"
            >
              Warnamayi is committed to delivering high-quality organic,
              wellness and sanitisation solutions. Our goal is to promote
              healthier lifestyles while maintaining sustainable and responsible
              practices that benefit people and the environment.
            </motion.p>

            {/* FEATURES */}

            <div className="grid grid-cols-[1fr_1fr] max-w-md gap-y-4 gap-x-2 text-gray-700 mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                ✔ Organic Agriculture
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                ✔ Wellness Products
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                ✔ Sanitisation Solutions
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                ✔ Sustainable Practices
              </motion.div>
            </div>

            {/* BUTTON */}

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { delay: 1.2, duration: 1.2, ease: "easeOut" },
                y: { delay: 1.2, duration: 1.2, ease: "easeOut" },
                scale: { duration: 0.05 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-[var(--dark-green)] hover:bg-[var(--light-green)] text-white px-6 py-3 rounded-full font-semibold"
            >
              More About Us
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-start items-end overflow-visible"
          >
            {/* FLOATING CARD */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute top-0 left-10 bg-[var(--dark-green)] p-8 rounded-2xl w-[420px] z-20
        shadow-[0_-6px_12px_rgba(102,187,106,0.3),-6px_0_12px_rgba(102,187,106,0.2),6px_0_12px_rgba(102,187,106,0.2)]"
            >
              <p className="text-sm text-green-200 mb-3">
                Trusted By Our Clients
              </p>

              <h3 className="text-4xl font-bold text-white mb-4">
                Excellence in Every Step
              </h3>

              <div className="border-t border-[var(--background-color)]/50 my-4"></div>

              <p className="text-white text-sm leading-relaxed">
                We are committed to delivering high-quality solutions and
                services that make a real difference. Our clients rely on us for
                reliable, professional, and impactful results.
              </p>
            </motion.div>

            {/* IMAGE */}

            <motion.img
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              src="./images/hero-slide-4.jpg"
              alt="about"
              className="rounded-2xl w-[750px] h-[200px] object-cover mt-[228px] -ml-[25%] shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      {/* ================= PRODUCTS SECTION ================= */}

      <section className="relative py-24 bg-[var(--accent-beige)] overflow-hidden">
        {/* Floating Background SVGs */}

        <motion.img
          src="./images/leaf-1.svg"
          className="absolute top-10 left-26 w-24 opacity-10 pointer-events-none"
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="./images/leaf-2.svg"
          className="absolute top-40 right-16 w-24 opacity-10 pointer-events-none"
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="./images/leaf-1.svg"
          className="absolute bottom-10 right-16 w-20 opacity-10 -rotate-12 pointer-events-none"
          animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="./images/leaf-2.svg"
          className="absolute top-[45%] left-0 w-20 opacity-10 -rotate-12 pointer-events-none"
          animate={{ y: [0, 10, 0], rotate: [-12, -6, -12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--light-green)] text-xl mb-2">
              🌿 Our Products
            </p>

            <h2 className="text-5xl font-bold text-[var(--dark-green)] mb-4">
              Products We Offer
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto">
              Discover our range of agriculture, wellness, health and FMCG
              products designed for sustainable and healthy living.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center relative z-10 mb-[-20px]">
            <div className="flex flex-wrap gap-5 px-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 bg-[var(--accent-beige)] rounded-full text-sm font-medium transition
            ${
              activeTab === cat
                ? "bg-[var(--dark-green)] text-white"
                : "text-[var(--dark-green)] border border-[var(--light-green)]"
            }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Border Container */}
          <div className="rounded-3xl p-10 pt-20 border border-[var(--dark-green)]/40">
            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products[activeTab].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--light-green)]/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--dark-green)]/0 group-hover:bg-[var(--dark-green)]/40 transition flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white text-[var(--dark-green)] text-sm font-medium rounded-full transition">
                        View Product
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-[var(--dark-green)]">
                      {product.name}
                    </h3>

                    <div className="w-10 h-[2px] bg-[var(--light-green)] mx-auto mt-3"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
