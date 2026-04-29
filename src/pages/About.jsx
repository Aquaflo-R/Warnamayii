
import {
  Sprout,
  Smile,
  Sparkles,
  Heart,
  Bone,
  Package,
  Flower,
  Pill,
} from "lucide-react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    {
      title: "Bio Fertilizers",
      category: "Bio Fertilizers",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      desc: "Natural plant nutrients for sustainable agriculture and enhanced crop yield.",
      bg: "from-green-50 to-emerald-50",
      btn: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    },
    {
      title: "Oral Care",
      category: "Oral Care",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      desc: "Natural oral hygiene products for healthy smiles and fresh breath.",
      bg: "from-blue-50 to-cyan-50",
      btn: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },
    {
      title: "Bio Enzyme Housekeeping",
      category: "Housekeeping",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
      desc: "Eco-friendly cleaning solutions for a spotless and healthy home.",
      bg: "from-purple-50 to-indigo-50",
      btn: "from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
    },
    {
      title: "Wellness Products",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      desc: "Holistic health solutions for body, mind, and overall well-being.",
      bg: "from-pink-50 to-rose-50",
      btn: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    },
    {
      title: "Animal Feeds",
      category: "Animal Feeds",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
      desc: "Nutritious feed for healthy livestock and companion animals.",
      bg: "from-orange-50 to-yellow-50",
      btn: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    },
    {
      title: "FMCG Products",
      category: "FMCG",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      desc: "Essential consumer goods for everyday convenience and quality.",
      bg: "from-teal-50 to-green-50",
      btn: "from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600",
    },
    {
      title: "Herbal Cosmetics",
      category: "Cosmetics",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&crop=center",
      desc: "Natural beauty products for radiant and healthy skin care.",
      bg: "from-lime-50 to-green-50",
      btn: "from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600",
    },
    {
      title: "Nutraceuticals",
      category: "Nutraceuticals",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
      desc: "Science-backed nutritional supplements for optimal health.",
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
    <section className="py-16 bg-gradient-to-br from-gray-100 to-green-200">
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

export default About;
