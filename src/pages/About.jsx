import { motion } from "framer-motion";
import {
  BeakerIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

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
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://snapstackstorageaccount.blob.core.windows.net/templates/about-hero.jpg?sp=r&st=2024-12-12T13:43:14Z&se=2024-12-12T21:43:14Z&sv=2022-11-02&sr=b&sig=Jk%2BOAswxb1m%2F0flHO4ijGNqa5kQCvdbFwrvj6ky%2F%2Ba8%3D"
            alt="Company headquarters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        <div className="container relative z-10">
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
                GlobalTrade �� основана през 2008 година с мисията да предоставя
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
                src="https://snapstackstorageaccount.blob.core.windows.net/templates/facility.jpg?sp=r&st=2024-12-12T13:39:35Z&se=2024-12-12T21:39:35Z&sv=2022-11-02&sr=b&sig=qm14pY9TilTjh8b9fAZph6hoijR09EXzlDlYVWXWKC8%3D"
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

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Нашият път</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-8 mb-12"
              >
                <div className="text-2xl font-bold text-sunflower-500 w-24 shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
