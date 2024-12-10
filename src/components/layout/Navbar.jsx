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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            className="relative group flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-sunflower-500 rounded-lg flex items-center justify-center
                          transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-xl font-bold">GT</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              GlobalTrade
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-sunflower-300'
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute inset-0 rounded-lg -z-10 ${
                      isScrolled ? 'bg-sunflower-100' : 'bg-white/10'
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span>{item.label}</span>
              </Link>
            ))}
            
            <div className={`px-3 py-1 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/10'
            }`}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
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
          y: isMobileMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.2 }}
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-lg shadow-lg ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'bg-sunflower-100 text-primary'
                  : 'text-gray-700 hover:bg-gray-100'
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
  );
}
