import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Beers from "./pages/Beers";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* felső navigációs sáv */}
      <Navbar />

      {/* oldalak */}
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* lábléc */}
      <Footer />
    </Router>
  );
};

export default App;
