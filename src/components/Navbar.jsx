import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white py-2 z-10 "
      // className="fixed top-0 left-0 w-full bg-white py-2 z-50"
    >
      {/* Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
            <span className="font-bold">🌿</span>
          </div>

          <Link to="/" className="flex items-center">
            <img
              src=""
              alt="Warnamayii"
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About Us</Link>
          <Link to="/product" className="hover:text-green-600">Products</Link>
          <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 ">

          {/* Login & Register Button (hidden on small) */}
          <Link to="/login"
            className="hidden md:block border border-[#2E7D32] text-gray-800 px-6 py-2 rounded-full
                hover:bg-[#2E7D32] hover:text-white transition"
          > Login
          </Link>
          <Link to="/register"
            className="hidden md:block border border-[#2E7D32] text-gray-800 px-6 py-2 rounded-full 
                hover:bg-[#2E7D32] hover:text-white transition"
          > Register
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 pb-6"
          >
            <div className="flex flex-col gap-4 font-medium text-gray-700">

              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/product" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

              <Link to="/login"
                className="border border-[#2E7D32] px-6 py-2 rounded-full w-fit mt-1 inline-block"
              >
                Login
              </Link>
              <Link to="/register"
                className="border border-[#2E7D32] px-6 py-2 rounded-full w-fit  inline-block"
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* bottom wave */}
      <div className="absolute -bottom-7 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-8 block rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 
              C120,120 240,10 360,40 
              C480,80 600,120 720,90 
              C840,60 960,10 1080,40 
              C1200,80 1320,120 1440,80 
              L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Navbar;
