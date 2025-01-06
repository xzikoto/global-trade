import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../shared/LanguageSwitcher";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/home", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Subtle gradient background */}
      <div className="fixed top-0 left-0 w-full h-24 bg-gradient-to-b from-white/80 to-transparent z-40 pointer-events-none" />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 transition-all duration-300"
      >
        {/* Modern glass effect background */}
        <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-white/70 via-white/60 to-white/30">
          <div className="absolute inset-0 bg-gradient-to-r from-sunflower-100/30 via-transparent to-sunflower-50/20" />
        </div>

        {/* Enhanced grain texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grain mix-blend-overlay" />
        </div>

        {/* Shimmering border effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sunflower-400/50 to-transparent animate-pulse" />

        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo section */}
            <Link
              to="/home"
              className="relative group flex items-center space-x-2"
            >
              <div
                className="w-10 h-10 bg-gradient-to-br from-sunflower-400 to-sunflower-500 rounded-lg flex items-center justify-center
                            transform group-hover:rotate-12 transition-all duration-300
                            shadow-lg shadow-sunflower-500/30 hover:shadow-sunflower-500/50"
              >
                <span className="text-white text-xl font-bold">GTI</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent
                               group-hover:from-sunflower-600 group-hover:to-sunflower-400 transition-all duration-300"
                >
                  Global Trade International
                </span>
                <span className="text-sm text-gray-500 group-hover:text-sunflower-400 transition-colors duration-300">
                  2002 Ltd
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg text-gray-700 hover:text-sunflower-500 
                           transition-all duration-300 group"
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-sunflower-100 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative">
                    {item.label}
                    <span
                      className="absolute inset-x-0 bottom-0 h-px bg-sunflower-400 transform origin-left scale-x-0 
                                   group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </span>
                </Link>
              ))}

              <div className="px-3 py-1 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-sunflower-500 
                         transition-all duration-300 relative group hover:bg-sunflower-50"
            >
              <div
                className="absolute inset-0 bg-sunflower-100/0 rounded-lg opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"
              />
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -20,
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden absolute w-full backdrop-blur-md bg-white/90 
                     shadow-lg border-t border-sunflower-100/20 ${
                       isMobileMenuOpen ? "block" : "hidden"
                     }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-sunflower-50 text-sunflower-600"
                    : "text-gray-600 hover:bg-sunflower-50/50 hover:text-sunflower-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
