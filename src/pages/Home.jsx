import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Phone, User } from "lucide-react";

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full h-[65vh] md:h-[85vh] lg:h-[90vh] overflow-hidden flex items-center justify-center">
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
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-[var(--dark-green)]/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center text-center w-full">
          {/* Glow Background */}
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[var(--light-green)] opacity-30 blur-[160px] rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" flex flex-col items-center text-white max-w-3xl px-6  sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-6">
              WARNAMAYI
            </h1>

            <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-xl">
              Empowering Healthy Living Through Nature and Innovation
            </p>

            <button className="text-sm md:text-base group flex items-center gap-2 backdrop-blur-lg bg-[var(--dark-green)] border border-white/20 hover:bg-[var(--light-green)] px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold transition mx-auto shadow-lg">
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
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white px-1 py-0 md:p-3 rounded-full backdrop-blur-sm"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white px-1 py-0 md:p-3 rounded-full backdrop-blur-sm"
        >
          ❯
        </button>

        {/* Slider Indicators */}

        <div className="absolute bottom-6 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 w-1 md:h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-white w-6" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </section>
      {/* ================= ABOUT US SECTION ================= */}

      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
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
              className="text-sm md:text-base text-[var(--light-green)] font-semibold mb-2 md:mb-3"
            >
              🌿 About Our Company
            </motion.p>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="text-2xl md:text-5xl font-bold text-[var(--dark-green)] leading-tight mb-2 md:mb-6"
            >
              Supporting Agriculture, Wellness & Sustainable Living
            </motion.h2>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-sm md:text-[16px] md:leading-7 text-gray-600 mb-8"
            >
              Warnamayi is committed to delivering high-quality organic,
              wellness and sanitisation solutions. Our goal is to promote
              healthier lifestyles while maintaining sustainable and responsible
              practices that benefit people and the environment.
            </motion.p>

            {/* FEATURES */}

            <div className="text-sm md:text-[16px] grid grid-cols-[1fr_1fr] max-w-md gap-y-3 gap-x-2 md:gap-y-4 md:gap-x-2 text-gray-700 mb-8">
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
              className="text-sm md:text-base flex items-center gap-2 bg-[var(--dark-green)] hover:bg-[var(--light-green)] text-white px-3 py-2 md:px-5 lg:px-8 md:py-3 rounded-full font-semibold"
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
              className="absolute gap-2 md:gap-4 top-0 md:top-1 left-10 bg-[var(--dark-green)] p-4 md:p-8 rounded-2xl md:w-full max-w-[420px] z-20 shadow-[0_-6px_12px_rgba(102,187,106,0.3),-6px_0_12px_rgba(102,187,106,0.2),6px_0_12px_rgba(102,187,106,0.2)]"
            >
              <p className="text-[13px] md:text-sm text-green-200 mb-2 md:mb-3">
                Trusted By Our Clients
              </p>

              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4 leading-7 md:leading-[46px]">
                Excellence in Every Step
              </h3>

              <div className="border-t border-[var(--background-color)]/50 my-2 md:my-4"></div>

              <p className="text-white text-sm md:leading-relaxed">
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
              className="rounded-2xl w-60 md:w-[750px] h-[140px] md:h-[240px] object-cover mt-52 md:mt-[240px] md:-ml-[23%] shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      {/* ================= PRODUCTS SECTION ================= */}

      <section className="relative py-10 md:py-24 bg-[var(--accent-beige)] overflow-hidden">
        {/* Floating Background SVGs */}

        <motion.img
          src="./images/leaf-1.svg"
          className="absolute top-5 md:top-10 left-6 md:left-26 w-10 md:w-24 opacity-10 pointer-events-none"
          animate={{ x: [0, -18, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="./images/leaf-2.svg"
          className="absolute top-38 md:top-40 right-5 md:right-16 w-10 md:w-24 opacity-10 pointer-events-none"
          animate={{ y: [0, 18, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src="./images/leaf-2.svg"
          className="absolute top-[62%] md:top-[45%] left-0 w-10 md:w-20 opacity-10 -rotate-12 pointer-events-none"
          animate={{ y: [0, 14, 0], rotate: [-12, -6, -12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="./images/leaf-1.svg"
          className="absolute bottom-4 md:bottom-10 right-5 md:right-16 w-10 md:w-20 opacity-10 -rotate-12 pointer-events-none"
          animate={{ x: [0, -18, 0], rotate: [-12, -8, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[var(--light-green)] md:text-xl mb-2">
              🌿 Our Products
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[var(--dark-green)] mb-2 md:mb-4">
              Products We Offer
            </h2>

            <p className="text-sm md:text-[16px] text-gray-600 max-w-xl mx-auto md:leading-[26px]">
              Discover our range of agriculture, wellness, health and FMCG
              products designed for sustainable and healthy living.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center relative -mt-10 md:mt-0 z-10 mb-[-20px] ">
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 md:px-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 md:px-8 py-2 bg-[var(--accent-beige)] rounded-full text-sm font-medium transition
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
          <div className="px-3 md:px-10 rounded-3xl p-6 md:p-10 pt-10 md:pt-20 border border-[var(--dark-green)]/40">
            {/* Products Grid */}
            <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4  md:gap-8">
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
                  <div className="relative h-28 md:h-44 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[var(--dark-green)]/0 group-hover:bg-[var(--dark-green)]/40 transition flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 px-2 py-1 md:px-4 md:py-2 bg-white text-[var(--dark-green)] text-sm font-medium rounded-full transition">
                        View Product
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-5 text-center">
                    <h3 className="text-[14px] md:text-lg font-semibold text-[var(--dark-green)]">
                      {product.name}
                    </h3>

                    <div className="w-10 h-[2px] bg-[var(--light-green)] mx-auto mt-1.5 md:mt-3"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US SECTION ================= */}

      <section className="w-full py-10 px-4 md:py-24 bg-white flex justify-center">
        <div className="relative w-[92%] max-w-6xl min-h-[580px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-xl">
          {/* Background Image */}
          <motion.img
            src="./images/hero-slide-1.jpg"
            className="absolute w-full h-full object-cover z-0"
            animate={{ scale: 1.05 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[var(--dark-green)]/90 to-[var(--dark-green)]/50 z-1"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 md:h-full">
            {/* Left Text */}
            <div className="flex flex-col justify-center px-5 sm:px-6 lg:px-8 md:px-12 py-10 md:py-0 text-white">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-2 md:mb-3 text-[var(--accent-beige)] font-semibold"
              >
                🌿 Get In Touch
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold mb-3 md:mb-6"
              >
                Contact Warnamayi
              </motion.h2>

              <p className="text-sm md:text-[17px] text-white/90 mb-3 md:mb-6">
                We would love to hear from you. Send us your details and we will
                get back to you soon.
              </p>

              <div className="text-sm md:text-[17px] space-y-2 md:space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={18} /> +91 98765 43210
                </div>

                <div className="text-sm md:text-[17px] flex items-center gap-2">
                  <Mail size={18} /> info@warnamayii.com
                </div>
              </div>
            </div>

            {/* Glass Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center  p-4 md:p-10 backdrop-blur-xl bg-white/20 border border-white/30 m-4 md:m-6 rounded-2xl space-y-4 md:space-y-5 -mt-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center text-white text-lg font-semibold"
                >
                  ✅ Message Sent Successfully!
                </motion.div>
              ) : (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="peer w-full pl-12 py-1.5 md:py-3 rounded-full border border-white/40 bg-white/70  focus:outline-none focus:ring-2 focus:ring-[var(--light-green)] transition-all hover:scale-[1.02]"
                    />

                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--light-green)] peer-hover:text-[var(--dark-green)] peer-focus:text-[var(--dark-green)] transition-colors duration-300 pointer-events-none"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="peer w-full pl-12 py-1.5 md:py-3 rounded-full border border-white/40 bg-white/70  focus:outline-none focus:ring-2 focus:ring-[var(--light-green)] transition-all hover:scale-[1.02]"
                    />

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--light-green)] peer-hover:text-[var(--dark-green)] peer-focus:text-[var(--dark-green)] transition-colors duration-300 pointer-events-none"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="peer w-full pl-12 py-1.5 md:py-3 rounded-full border border-white/40 bg-white/70  focus:outline-none focus:ring-2 focus:ring-[var(--light-green)] transition-all hover:scale-[1.02]"
                    />

                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--light-green)] peer-hover:text-[var(--dark-green)] peer-focus:text-[var(--dark-green)] transition-colors duration-300 pointer-events-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[var(--dark-green)] hover:bg-[var(--light-green)] text-white py-2 md:py-3 rounded-full font-semibold shadow-lg transition"
                  >
                    Send Message
                  </motion.button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
