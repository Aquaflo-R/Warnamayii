import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Contactus from "../pages/Contactus";
import About from "../pages/About";
import Products from "../pages/Products";




function Mainroute() {
  return (
    <>


      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/product" element={<Products />} />
      </Routes>

  
      </>
  );
}

export default Mainroute;