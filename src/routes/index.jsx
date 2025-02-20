import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Transport from "../pages/Transport";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/transport" element={<Transport />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
