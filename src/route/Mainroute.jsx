import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Contactus from "../pages/Contactus";
import About from "../pages/About";




function Mainroute() {
  return (
    <>


      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>

  
      </>
  );
}

export default Mainroute;