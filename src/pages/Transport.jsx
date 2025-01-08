import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  TruckIcon,
  ShieldCheckIcon,
  GlobeEuropeAfricaIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Transport() {
  const { t } = useTranslation();

  const transportTypes = [
    {
      id: "bulk",
      icon: TruckIcon,
      color: "from-amber-400 to-amber-600",
    },
    {
      id: "covered",
      icon: ShieldCheckIcon,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: "agricultural",
      icon: GlobeEuropeAfricaIcon,
      color: "from-green-400 to-green-600",
    },
    {
      id: "sea",
      icon: ClockIcon,
      color: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative pt-32 pb-20 px-4">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('transport.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('transport.hero.description')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {transportTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${type.color} flex items-center justify-center text-white`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {t(`transport.services.types.${type.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(`transport.services.types.${type.id}.description`)}
                </p>
                <ul className="space-y-2">
                  {t(`transport.services.types.${type.id}.features`, { returnObjects: true }).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('transport.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('transport.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {t('transport.cta.button')}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
