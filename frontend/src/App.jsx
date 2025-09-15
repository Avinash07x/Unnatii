import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Govindam from "./pages/project/Govindam";
import UnnatiiEnclave from "./pages/project/UnnatiiEnclave";
import UnnatiiResidency from "./pages/project/UnnatiiResidency";
import UnnatiiShivVilas from "./pages/project/UnnatiiShivVilas";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Unnatii-govindam" element={<Govindam />} />
          <Route path="/Unnatii-enclave" element={<UnnatiiEnclave />} />
          <Route path="/Unnatii-residency" element={<UnnatiiResidency />} />
          <Route path="/Unnatii-shiv-vilas" element={<UnnatiiShivVilas />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;