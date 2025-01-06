import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  BeakerIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { getAssetPath } from "../utils/assetHelper";

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: BeakerIcon,
      title: t('about.values.items.0.title'),
      description: t('about.values.items.0.description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('about.values.items.1.title'),
      description: t('about.values.items.1.description'),
    },
    {
      icon: UserGroupIcon,
      title: t('about.values.items.2.title'),
      description: t('about.values.items.2.description'),
    },
    {
      icon: SparklesIcon,
      title: t('about.values.items.3.title'),
      description: t('about.values.items.3.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={getAssetPath("/images/about-hero.jpg")}
            alt="Company headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent" />
        </div>

        {/* Content Container - Adjusted padding */}
        <div className="container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-white/90">
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gradient-to-b from-white via-sunflower-50/30 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('about.overview.title')}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {t('about.overview.description')}
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                  <BuildingOfficeIcon className="w-12 h-12 text-sunflower-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-4">{t('about.overview.headquarters.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.headquarters.country')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.headquarters.countryDesc')}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.headquarters.city')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.headquarters.cityDesc')}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.headquarters.address')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.headquarters.addressDesc')}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm text-sunflower-600 font-medium">
                      <span className="mr-2">📍</span>
                      {t('about.overview.headquarters.floor')}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                  <TrophyIcon className="w-12 h-12 text-sunflower-500 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-4">{t('about.overview.advantages.title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.advantages.quality.title')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.advantages.quality.desc')}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.advantages.delivery.title')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.advantages.delivery.desc')}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1">
                      <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                      <p className="text-gray-700">
                        <span className="font-medium">{t('about.overview.advantages.consultation.title')}</span>
                        <span className="block text-sm text-gray-500">
                          {t('about.overview.advantages.consultation.desc')}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm text-sunflower-600 font-medium">
                      <span className="mr-2">✓</span>
                      {t('about.overview.advantages.guarantee')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={getAssetPath("/images/facility.jpg")}
                alt="Our facility"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <p className="text-4xl font-bold text-sunflower-500">2+</p>
                <p className="text-gray-600">{t('about.overview.experience')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-sunflower-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
