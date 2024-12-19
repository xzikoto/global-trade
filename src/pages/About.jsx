import { motion } from "framer-motion";
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
  const timeline = [
    {
      year: "2008",
      title: "Основаване",
      description: "Компанията е основана с фокус върху търговия с масла",
    },
    {
      year: "2012",
      title: "Международно разрастване",
      description: "Започване на операции в повече от 20 държави",
    },
    {
      year: "2015",
      title: "ISO Сертификация",
      description: "Получаване на ISO 9001:2015 сертификация",
    },
    {
      year: "2020",
      title: "Дигитална трансформация",
      description: "Въвеждане на модерни технологии в процесите",
    },
  ];

  const values = [
    {
      icon: BeakerIcon,
      title: "Качество",
      description: "Най-високи стандарти във всеки аспект",
    },
    {
      icon: GlobeAltIcon,
      title: "Глобален обхват",
      description: "Присъствие на международните пазари",
    },
    {
      icon: UserGroupIcon,
      title: "Партньорство",
      description: "Изграждане на дълготрайни отношения",
    },
    {
      icon: SparklesIcon,
      title: "Иновации",
      description: "Постоянно развитие и подобрение",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated to accommodate navbar */}
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
            <h1 className="text-5xl font-bold mb-6">За GlobalTrade</h1>
            <p className="text-xl text-white/90">
              Повече от 15 години доставяме качествени масла на световните
              пазари, изграждайки доверие и партньорства.
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
              <h2 className="text-3xl font-bold mb-6">Нашата история</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                GlobalTrade основана през 2008 година с мисията да предоставя
                висококачествени хранителни масла на международните пазари. Днес
                сме горди да бъдем един от водещите доставчици в индустрията,
                обслужващ клиенти в над 50 държави.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <BuildingOfficeIcon className="w-12 h-12 text-sunflower-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Централен офис</h3>
                  <p className="text-gray-600">София, България</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <TrophyIcon className="w-12 h-12 text-sunflower-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Признания</h3>
                  <p className="text-gray-600">ISO 9001:2015</p>
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
                <p className="text-4xl font-bold text-sunflower-500">15+</p>
                <p className="text-gray-600">години опит</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Timeline Content */}
            <div>
              <h2 className="text-3xl font-bold mb-16">Нашият път</h2>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-sunflower-200"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-sunflower-500 shadow-lg shadow-sunflower-500/30">
                      <div className="absolute inset-1 rounded-full bg-white" />
                    </div>
                    <div className="text-xl font-bold text-sunflower-500 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Timeline Companion */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sunflower-100/30 rounded-full blur-3xl -z-10" />

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "15+", label: "Години опит" },
                    { number: "50+", label: "Държави" },
                    { number: "1000+", label: "Клиенти" },
                    { number: "100K+", label: "Тона внос/износ" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-sunflower-500">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Journey Visualization */}
                <div className="relative h-60 mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-sunflower-50 via-white to-sunflower-100/30 rounded-xl overflow-hidden">
                    {/* Animated background patterns */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern animate-float-slow" />
                    </div>
                    
                    {/* Decorative circles */}
                    <motion.div 
                      className="absolute -right-16 -top-16 w-64 h-64 bg-sunflower-200/30 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div 
                      className="absolute -left-16 -bottom-16 w-64 h-64 bg-sunflower-300/20 rounded-full blur-3xl"
                      animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Sunflower icons */}
                    <div className="absolute top-4 right-4 w-8 h-8 text-sunflower-400 opacity-20">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        🌻
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 text-sunflower-400 opacity-20">
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        🌻
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center z-10 px-8 py-6 bg-white/50 rounded-2xl backdrop-blur-md 
                                    border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-sunflower-600 to-sunflower-400 
                                        bg-clip-text text-transparent mb-3">
                            GlobalTrade
                          </h3>
                          <div className="text-gray-600 relative">
                            <span className="relative">
                              Световен лидер в търговията с масла
                              <motion.div
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-sunflower-400/50"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                              />
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            Нашите ценности
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
