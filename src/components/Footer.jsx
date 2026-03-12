import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="relative bg-[#005c3c] text-white pt-20 pb-10 overflow-hidden">

      {/* Grass Image Bottom Left */}
      <img
        src="images/grass.png"
        alt="grass"
        className="absolute bottom-0 left-0 w-40 md:w-48 opacity-90 pointer-events-none"
      />

      {/* Farmer Illustration Bottom Right */}
      <img
        src="images/tractor.png"
        alt="farmer"
        className="absolute bottom-0 right-0 w-64 md:w-120 opacity-40 pointer-events-none"
      />

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-10">

        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              🌿
            </div>
            <h2 className="text-2xl font-bold">WARNAMAYII</h2>
          </div>

          <p className="text-white/80 mb-6 leading-relaxed">
            Happen active county. Winding morning ambition shyness evident to
            poor. Because elderly new to the point to main success.
          </p>

          {/* Newsletter */}
          <div className="flex bg-white rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 text-gray-700 outline-none"
            />
            <button className="bg-[#c3f1ab] text-black font-semibold px-3">
              GO
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="border-l border-white/36 pl-6">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-white/80">
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-1 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="flex items-center gap-1 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-1 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Explore</h3>
          <ul className="space-y-3 text-white/80">
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-white">
                Organic Agriculture
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-white">
                Wellness Products
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-white">
                Sanitisation Solutions
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-1 hover:text-white">
                Sustainable Practices
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Info</h3>

          <div className="flex gap-4 mb-6">
            <div className="bg-white/10 p-3 md:w-14 w-12 h-12 flex items-center justify-center rounded-full 
              border border-dashed border-white/60 ">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold">ADDRESS:</p>
              <p className="text-white/80 text-sm">
                5919 Trussville Crossings Pkwy, Birmingham
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="bg-white/10 p-3 w-12 h-12 flex items-center justify-center rounded-full 
              border border-dashed border-white/60 ">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold">EMAIL:</p>
              <p className="text-white/80 text-sm">
                info@validtheme.com
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-white/10 p-3 w-12 h-12 flex items-center justify-center rounded-full 
              border border-dashed border-white/60 ">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-semibold">PHONE:</p>
              <p className="text-white/80 text-sm">
                +91 3459876823
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="relative mt-16 text-center text-white/80 text-sm">
        © Copyright 2026. All Right Reserved | Designed & Developed by DarkEliteCreations
      </div>

    </div>
  )
};

export default Footer;
