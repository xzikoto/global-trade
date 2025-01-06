import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export function Footer() {
  const { t, i18n } = useTranslation();

  // Create links after getting current language
  const getNavigationLinks = () => [
    { name: t('footer.navigation.home'), path: "/" },
    { name: t('footer.navigation.about'), path: "/about" },
    { name: t('footer.navigation.services'), path: "/services" },
    { name: t('footer.navigation.contact'), path: "/contact" },
  ];

  // Create contact info after getting current language
  const getContactInfo = () => [
    { icon: PhoneIcon, text: t('footer.contact.phone') },
    { icon: EnvelopeIcon, text: t('footer.contact.email') },
    { icon: MapPinIcon, text: t('footer.contact.address') },
  ];

  // Get fresh data whenever language changes
  const navigationLinks = getNavigationLinks();
  const contactInfo = getContactInfo();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-sunflower-50/30">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grain opacity-5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunflower-100/30 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunflower-50/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Link to="/home" className="relative group flex items-center space-x-2">
                <div
                  className="w-10 h-10 bg-gradient-to-br from-sunflower-400 to-sunflower-500 rounded-lg flex items-center justify-center
                            transform group-hover:rotate-12 transition-all duration-300
                            shadow-lg shadow-sunflower-500/30 hover:shadow-sunflower-500/50"
                >
                  <span className="text-white text-xl font-bold">GTI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-sunflower-600 group-hover:to-sunflower-400 transition-all duration-300">
                    {t('footer.company.name')}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-sunflower-400 transition-colors duration-300">
                    {t('footer.company.subtitle')}
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-gray-600">{t('footer.company.description')}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-gray-900 font-bold mb-4">{t('footer.navigation.title')}</h4>
            <div className="grid gap-2">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-600 hover:text-sunflower-500 transition-colors duration-300"
                >
                  {item.name}
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
            <h4 className="text-gray-900 font-bold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-600 hover:text-sunflower-500 transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5 mr-3 text-sunflower-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-sunflower-100/50 py-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} {t('footer.company.name')}.
            <br /> {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
