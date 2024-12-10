import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and grain */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-900 to-earth-900" />
        <div className="absolute inset-0 bg-grain opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sunflower-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">GT</span>
              </div>
              <span className="text-xl font-bold text-white">GlobalTrade</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Качествени едрови масла за световните пазари с гарантиран произход и сертифицирано качество.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-lg font-bold mb-6">Бързи връзки</h4>
            <div className="grid gap-3">
              {["Начало", "За нас", "Услуги", "Контакти"].map((item, index) => (
                <Link
                  key={index}
                  to={item === "Начало" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-sunflower-400 transition-colors duration-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sunflower-500 mr-2" />
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-lg font-bold mb-6">Контакти</h4>
            <div className="space-y-4">
              {[
                { icon: PhoneIcon, text: "+359 888 123 456" },
                { icon: EnvelopeIcon, text: "info@globaltrade.com" },
                { icon: MapPinIcon, text: "София, България" },
              ].map((item, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <item.icon className="w-5 h-5 mr-3 text-sunflower-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-white text-lg font-bold">Бюлетин</h4>
            <p className="text-gray-400">
              Абонирайте се за нашия бюлетин, за да получавате новини и оферти
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Вашият имейл"
                className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sunflower-500"
              />
              <button className="px-4 py-2 bg-sunflower-500 hover:bg-sunflower-400 text-black rounded-lg transition-colors duration-300">
                →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GlobalTrade. Всички права запазени.</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-sunflower-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-leaf-500/10 to-transparent rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
