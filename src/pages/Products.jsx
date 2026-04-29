import { main } from "framer-motion/client";
import React, { useState } from "react";

function Products() {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    // Bio Fertilizers
    {
      title: "Nitro Grow",
      category: "Bio Fertilizers",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      desc: "Nitrogen boosting fertilizer.",
      bg: "from-green-50 to-emerald-50",
      btn: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    },
    {
      title: "Root Power",
      category: "Bio Fertilizers",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      desc: "Improves root growth.",
      bg: "from-green-50 to-emerald-50",
      btn: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    },

    // Oral Care
    {
      title: "Herbal Toothpaste",
      category: "Oral Care",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      desc: "Fresh breath protection.",
      bg: "from-blue-50 to-cyan-50",
      btn: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },
    {
      title: "Mint Wash",
      category: "Oral Care",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      desc: "Natural mouthwash.",
      bg: "from-blue-50 to-cyan-50",
      btn: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },

    // Housekeeping
    {
      title: "Floor Cleaner",
      category: "Housekeeping",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
      desc: "Bio enzyme floor cleaner.",
      bg: "from-purple-50 to-indigo-50",
      btn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    },
    {
      title: "Dish Wash",
      category: "Housekeeping",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
      desc: "Gentle utensil cleaner.",
      bg: "from-purple-50 to-indigo-50",
      btn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    },

    // Wellness
    {
      title: "Immunity Booster",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      desc: "Supports immunity.",
      bg: "from-pink-50 to-rose-50",
      btn: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },
    {
      title: "Stress Relief Oil",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      desc: "Relaxing wellness oil.",
      bg: "from-pink-50 to-rose-50",
      btn: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },

    // Animal Feeds
    {
      title: "Cattle Feed",
      category: "Animal Feeds",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      desc: "Nutritious cattle feed.",
      bg: "from-orange-50 to-yellow-50",
      btn: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    },
    {
      title: "Poultry Mix",
      category: "Animal Feeds",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      desc: "Healthy poultry nutrition.",
      bg: "from-orange-50 to-yellow-50",
      btn: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    },

    // FMCG
    {
      title: "Organic Soap",
      category: "FMCG",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      desc: "Daily care soap.",
      bg: "from-teal-50 to-green-50",
      btn: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
    },
    {
      title: "Hand Wash",
      category: "FMCG",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      desc: "Gentle hand wash.",
      bg: "from-teal-50 to-green-50",
      btn: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
    },

    // Cosmetics
    {
      title: "Herbal Face Wash",
      category: "Cosmetics",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
      desc: "Clean glowing skin.",
      bg: "from-lime-50 to-green-50",
      btn: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
    },
    {
      title: "Aloe Cream",
      category: "Cosmetics",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
      desc: "Soft skin moisturizer.",
      bg: "from-lime-50 to-green-50",
      btn: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
    },

    // Nutraceuticals
    {
      title: "Protein Plus",
      category: "Nutraceuticals",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
      desc: "Daily protein support.",
      bg: "from-indigo-50 to-purple-50",
      btn: "from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600",
    },
    {
      title: "Vitamin Care",
      category: "Nutraceuticals",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
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
    <main>
    <section className="w-full overflow-hidden bg-gradient-to-br from-gray-50 to-green-50 py-14 sm:py-20">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        Our Products
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-700 sm:text-lg">
        Browse product categories from the sidebar and explore premium solutions.
      </p>
    </div>

    {/* Layout */}
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
      
      {/* Sidebar */}
      <div className="w-full rounded-2xl bg-gradient-to-br from-green-200 to-green-400 p-4 shadow-lg lg:sticky lg:top-24 h-fit">
        <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
          Categories
        </h3>

        {/* Mobile horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide lg:block lg:space-y-3 lg:overflow-visible">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 lg:w-full lg:text-left ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="min-w-0">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br ${item.bg} shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>

                <button
                  className={`mt-4 w-full rounded-lg bg-gradient-to-r ${item.btn} py-2 text-sm font-medium text-white transition`}
                >
                  Explore Category
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 text-center">
          <button className="rounded-full bg-gradient-to-r from-lime-500 to-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-lime-500/30 sm:px-8 sm:text-base">
            View All Products
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
  );
}

export default Products;