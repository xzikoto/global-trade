import { motion } from "framer-motion";
import {
  BeakerIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      title: "Слънчогледово масло",
      description:
        "Внос и износ на рафинирано и нерафинирано слънчогледово масло с най-високо качество.",
      features: [
        "Рафинирано и нерафинирано",
        "Bulk опаковки",
        "Сертифицирано качество",
        "Конкурентни цени",
      ],
      icon: BeakerIcon,
      image:
        "https://snapstackstorageaccount.blob.core.windows.net/templates/sunflower-oil.png?sp=r&st=2024-12-15T17:23:52Z&se=2024-12-16T01:23:52Z&sv=2022-11-02&sr=b&sig=Ag9MUboj6TXpdi3XXKu2vnkcRwwlQwEkjI%2BluVE7gYs%3D",
    },
    {
      title: "Соево масло",
      description:
        "Търговия с висококачествено соево масло за хранителната индустрия.",
      features: [
        "Индустриални доставки",
        "Гарантиран произход",
        "Лабораторно тествано",
        "Бързи доставки",
      ],
      icon: ShieldCheckIcon,
      image: "/images/soybean-oil-bg.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sunflower-50/50 via-white to-leaf-50/30" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <TruckIcon className="w-5 h-5 mr-2" />
              Нашите услуги
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Качествени решения за вашия бизнес
            </h1>
            <p className="text-gray-600 text-lg">
              Предлагаме широка гама от услуги в търговията с масла
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div
                  className="glass-card p-8 border-2 border-gray-100 hover:border-sunflower-200 
                               transition-all duration-300 h-full relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-sunflower-50 to-white 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 bg-sunflower-100 text-sunflower-600 
                                  rounded-2xl p-4 mb-6 transform group-hover:scale-110 
                                  group-hover:rotate-3 transition-all duration-300"
                    >
                      <service.icon className="w-full h-full" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-sunflower-400" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="absolute -right-8 -bottom-8 w-32 h-32 
                                bg-sunflower-100 rounded-full opacity-20 
                                group-hover:scale-150 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sunflower-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-leaf-100/20 rounded-full blur-3xl" />
      </section>
    </div>
  );
}
