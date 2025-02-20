import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BeakerIcon,
  TruckIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  SparklesIcon,
  ClockIcon,
  ScaleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { SunflowerIcon } from "../components/shared/SunflowerIcon";
import {
  OilDropIcon,
  WheatIcon,
  RefinedOilIcon,
  QualityIcon,
} from "../components/shared/icons/AgricultureIcons";
import { getAssetPath } from "../utils/assetHelper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: BeakerIcon,
      title: t('home.features.items.lab.title'),
      description: t('home.features.items.lab.description'),
      bgColor: "bg-sunflower-50",
      iconColor: "text-sunflower-600",
      borderColor: "border-sunflower-200",
    },
    {
      icon: GlobeAltIcon,
      title: t('home.features.items.global.title'),
      description: t('home.features.items.global.description'),
      bgColor: "bg-leaf-50",
      iconColor: "text-leaf-600",
      borderColor: "border-leaf-200",
    },
    {
      icon: ShieldCheckIcon,
      title: t('home.features.items.quality.title'),
      description: t('home.features.items.quality.description'),
      bgColor: "bg-earth-50",
      iconColor: "text-earth-600",
      borderColor: "border-earth-200",
    },
    {
      icon: TruckIcon,
      title: t('home.features.items.delivery.title'),
      description: t('home.features.items.delivery.description'),
      bgColor: "bg-sunflower-50",
      iconColor: "text-sunflower-600",
      borderColor: "border-sunflower-200",
    },
    {
      icon: CubeTransparentIcon,
      title: t('home.features.items.transparency.title'),
      description: t('home.features.items.transparency.description'),
      bgColor: "bg-leaf-50",
      iconColor: "text-leaf-600",
      borderColor: "border-leaf-200",
    },
    {
      icon: SparklesIcon,
      title: t('home.features.items.innovation.title'),
      description: t('home.features.items.innovation.description'),
      bgColor: "bg-earth-50",
      iconColor: "text-earth-600",
      borderColor: "border-earth-200",
    },
  ];

  const testimonials = t('home.testimonials.items', { returnObjects: true });

  const stats = [
    {
      icon: ClockIcon,
      number: t('home.stats.metrics.numbers.tons'),
      label: t('home.stats.metrics.tons'),
      color: "sunflower",
    },
    {
      icon: UserGroupIcon,
      number: t('home.stats.metrics.numbers.clients'),
      label: t('home.stats.metrics.clients'),
      color: "leaf",
    },
    {
      icon: GlobeAltIcon,
      number: t('home.stats.metrics.numbers.countries'),
      label: t('home.stats.metrics.countries'),
      color: "earth",
    },
    {
      icon: ScaleIcon,
      number: t('home.stats.metrics.numbers.quality'),
      label: t('home.stats.metrics.quality'),
      color: "sunflower",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated to accommodate navbar */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={getAssetPath("/images/hero-bg.jpg")}
            alt="Sunflower field"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent" />
        </div>

        {/* Content Container - Adjusted padding */}
        <div className="container relative z-10 mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-8"
          >
            {/* Decorative element */}
            <div className="w-20 h-1 bg-sunflower-400 rounded-full mb-8" />

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="block mb-2 relative"
              >
                {t('home.hero.title')}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sunflower-400"
              >
                {t('home.hero.subtitle')}
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-xl"
            >
              {t('home.hero.description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-sunflower-500 hover:bg-sunflower-400 
                         text-black font-semibold rounded-lg transform hover:scale-105 
                         transition-all duration-300 shadow-lg hover:shadow-sunflower-500/25"
              >
                {t('home.hero.cta.contact')}
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white 
                         font-semibold rounded-lg backdrop-blur-sm border-2 
                         border-white/30 transform hover:scale-105 
                         transition-all duration-300"
              >
                {t('home.hero.cta.learnMore')}
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center space-x-6 pt-8"
            >
              {[
                { number: "10 000+", label: t('home.hero.stats.tons') },
                { number: "25+", label: t('home.hero.stats.countries') },
                { number: "100+", label: t('home.hero.stats.clients') },
              ].map((stat, index) => (
                <div key={index} className="text-white/90">
                  <div className="text-2xl font-bold text-sunflower-400">
                    {stat.number}
                  </div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <div
          className="absolute right-0 bottom-0 w-1/3 h-full 
                      bg-gradient-to-l from-sunflower-500/10 to-transparent"
        />
      </section>

      {/* Stats Section - Enhanced */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sunflower-50 to-white">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sunflower-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-leaf-100/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <ChartBarIcon className="w-5 h-5 mr-2" />
              {t('home.stats.subtitle')}
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient">{t('home.stats.title')}</h2>
            <p className="text-gray-600 text-lg">
              {t('home.stats.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`glass-card p-8 border-2 border-${stat.color}-100 hover:border-${stat.color}-200 
                              transition-all duration-300 h-full text-center`}
                >
                  <div
                    className={`absolute inset-0 bg-${stat.color}-50 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 mx-auto bg-${stat.color}-100 text-${stat.color}-600 
                                  rounded-2xl p-4 mb-6 transform group-hover:scale-110 
                                  group-hover:rotate-3 transition-all duration-300`}
                    >
                      <stat.icon className="w-full h-full" />
                    </div>

                    <div
                      className={`text-4xl font-bold mb-2 text-${stat.color}-600`}
                    >
                      {stat.number}
                    </div>

                    <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  <div
                    className={`absolute -right-8 -bottom-8 w-32 h-32 bg-${stat.color}-100 
                                rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-24 h-24 text-sunflower-200 opacity-20 transform -translate-y-1/2">
            <TrophyIcon className="w-full h-full" />
          </div>
          <div className="absolute top-1/2 right-0 w-24 h-24 text-sunflower-200 opacity-20 transform -translate-y-1/2 rotate-12">
            <ChartBarIcon className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="section relative py-24 overflow-hidden bg-gradient-to-br from-white via-sunflower-50/50 to-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-accent-100/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-sunflower-light/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-grain opacity-5" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <SparklesIcon className="w-5 h-5 mr-2" />
              {t('home.features.subtitle')}
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              {t('home.features.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('home.features.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`glass-card p-8 border-2 ${feature.borderColor} hover:border-opacity-100 border-opacity-50 
                                transition-all duration-300 h-full relative overflow-hidden`}
                >
                  <div
                    className={`${feature.bgColor} absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 ${feature.bgColor} ${feature.iconColor} rounded-xl p-3 mb-6
                                  transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <feature.icon className="w-full h-full" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  <div
                    className={`absolute -right-8 -bottom-8 w-24 h-24 ${feature.bgColor} rounded-full opacity-20
                                group-hover:scale-150 transition-transform duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Enhanced */}
      <section className="section bg-gradient-to-br from-leaf-50 via-white to-sunflower-50 relative">
        <div className="container py-20">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            <span className="relative inline-block">
              {t('home.products.title')}
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-spin-slow opacity-20">
                <img
                  src={getAssetPath("/images/sunflower-oil.png")}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {[
              {
                title: t('home.products.sunflower.title'),
                description: t('home.products.sunflower.description'),
                features: t('home.products.sunflower.features', { returnObjects: true }),
                icon: "/images/sunflower-oil.png", // simplified path
                gradient: "from-sunflower-light to-sunflower-dark",
              },
              {
                title: t('home.products.soy.title'),
                description: t('home.products.soy.description'),
                features: t('home.products.soy.features', { returnObjects: true }),
                icon: "/images/soy-oil.png", // simplified path
                gradient: "from-leaf-100 to-leaf-300",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300"
                  className={product.gradient}
                />
                <div className="glass-card p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute -right-16 -top-16 w-48 h-48 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <img
                      src={getAssetPath(product.icon)}
                      alt=""
                      className="w-full h-full object-contain animate-float-smooth"
                    />
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 shrink-0 rounded-full bg-white shadow-lg p-4">
                      <img
                        src={getAssetPath(product.icon)}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add floating images */}
      <div className="absolute -right-20 top-20 w-64 h-64 animate-float-smooth opacity-20">
        <img
          src={getAssetPath("/images/oil-drop.png")}
          alt="Oil drop"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="absolute -left-10 bottom-10 w-48 h-48 animate-float-smooth opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <img
          src={getAssetPath("/images/sunflower.png")}
          alt="Sunflower"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Testimonials Section - Enhanced with background image and gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getAssetPath("/images/cta-bg.jpg")}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sunflower-600/95 to-leaf-600/95" />
          <div className="absolute inset-0 bg-grain opacity-10" />
        </div>
        <div className="container py-24 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            {t('home.testimonials.title')}
          </motion.h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
