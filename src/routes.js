// src/routes.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Navbar from "./components/Navbar";
import Catalogo from "./pages/Catalogo";
import Footer from "./components/Footer";

function AppRoutes({ theme, setTheme }) {
  return (
    <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
