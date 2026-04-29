import React from "react";
import { useState } from "react";

const Contactus = () => {
  const [activeTab, setActiveTab] = useState("All");


const products = [
  // Bio Fertilizers
  {
    title: "Nitro Grow",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
    desc: "Nitrogen boosting fertilizer.",
    bg: "from-green-50 to-emerald-50",
    btn: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
  },
  {
    title: "Root Power",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
    desc: "Improves root growth.",
    bg: "from-green-50 to-emerald-50",
    btn: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
  },

  // Oral Care
  {
    title: "Herbal Toothpaste",
    category: "Oral Care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
    desc: "Fresh breath protection.",
    bg: "from-blue-50 to-cyan-50",
    btn: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
  },
  {
    title: "Mint Wash",
    category: "Oral Care",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
    desc: "Natural mouthwash.",
    bg: "from-blue-50 to-cyan-50",
    btn: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
  },

  // Housekeeping
  {
    title: "Floor Cleaner",
    category: "Housekeeping",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
    desc: "Bio enzyme floor cleaner.",
    bg: "from-purple-50 to-indigo-50",
    btn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
  },
  {
    title: "Dish Wash",
    category: "Housekeeping",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
    desc: "Gentle utensil cleaner.",
    bg: "from-purple-50 to-indigo-50",
    btn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
  },

  // Wellness
  {
    title: "Immunity Booster",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    desc: "Supports immunity.",
    bg: "from-pink-50 to-rose-50",
    btn: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
  },
  {
    title: "Stress Relief Oil",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    desc: "Relaxing wellness oil.",
    bg: "from-pink-50 to-rose-50",
    btn: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
  },

  // Animal Feeds
  {
    title: "Cattle Feed",
    category: "Animal Feeds",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    desc: "Nutritious cattle feed.",
    bg: "from-orange-50 to-yellow-50",
    btn: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
  },
  {
    title: "Poultry Mix",
    category: "Animal Feeds",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    desc: "Healthy poultry nutrition.",
    bg: "from-orange-50 to-yellow-50",
    btn: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
  },

  // FMCG
  {
    title: "Organic Soap",
    category: "FMCG",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    desc: "Daily care soap.",
    bg: "from-teal-50 to-green-50",
    btn: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
  },
  {
    title: "Hand Wash",
    category: "FMCG",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
    desc: "Gentle hand wash.",
    bg: "from-teal-50 to-green-50",
    btn: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
  },

  // Cosmetics
  {
    title: "Herbal Face Wash",
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
    desc: "Clean glowing skin.",
    bg: "from-lime-50 to-green-50",
    btn: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
  },
  {
    title: "Aloe Cream",
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
    desc: "Soft skin moisturizer.",
    bg: "from-lime-50 to-green-50",
    btn: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
  },

  // Nutraceuticals
  {
    title: "Protein Plus",
    category: "Nutraceuticals",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
    desc: "Daily protein support.",
    bg: "from-indigo-50 to-purple-50",
    btn: "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
  },
  {
    title: "Vitamin Care",
    category: "Nutraceuticals",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
    desc: "Complete vitamin formula.",
    bg: "from-indigo-50 to-purple-50",
    btn: "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
  },
];

  const tabs = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <section className="py-16 bg-gradient-to-br from-green-100 to-green-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium bio-based products designed for sustainable
            living and exceptional quality.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br ${item.bg} 
                shadow-lg transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>

                <button
                  className={`mt-4 w-full rounded-lg bg-gradient-to-r ${item.btn} py-2 text-sm font-medium text-white transition`}
                >
                  Explore Category
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-8 py-3 text-base font-semibold text-white transition hover:shadow-lg hover:shadow-lime-500/30">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contactus;