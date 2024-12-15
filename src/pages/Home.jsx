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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: BeakerIcon,
      title: "Лабораторен контрол",
      description: "Стриктен качествен контрол на всяка партида",
      bgColor: "bg-sunflower-50",
      iconColor: "text-sunflower-600",
      borderColor: "border-sunflower-200",
    },
    {
      icon: GlobeAltIcon,
      title: "Международен обхват",
      description: "Доставки в над 50 държави по света",
      bgColor: "bg-leaf-50",
      iconColor: "text-leaf-600",
      borderColor: "border-leaf-200",
    },
    {
      icon: ShieldCheckIcon,
      title: "Гарантирано качество",
      description: "Сертифицирани по ISO и HACCP стандарти",
      bgColor: "bg-earth-50",
      iconColor: "text-earth-600",
      borderColor: "border-earth-200",
    },
    {
      icon: TruckIcon,
      title: "Бърза доставка",
      description: "Експресни доставки до всяка точка",
      bgColor: "bg-sunflower-50",
      iconColor: "text-sunflower-600",
      borderColor: "border-sunflower-200",
    },
    {
      icon: CubeTransparentIcon,
      title: "Прозрачност",
      description: "Пълна проследимост на продукцията",
      bgColor: "bg-leaf-50",
      iconColor: "text-leaf-600",
      borderColor: "border-leaf-200",
    },
    {
      icon: SparklesIcon,
      title: "Иновации",
      description: "Модерни технологии за производство",
      bgColor: "bg-earth-50",
      iconColor: "text-earth-600",
      borderColor: "border-earth-200",
    },
  ];

  const testimonials = [
    {
      text: "Отлично качество и професионално обслужване!",
      author: "Вальо Стоянов",
      position: "Управител, Food Industries Ltd.",
      image:
        "https://scontent.fsof11-1.fna.fbcdn.net/v/t1.6435-1/146007501_4972410256133586_158430127861237987_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=4yDWgqurDm0Q7kNvgEcElEH&_nc_zt=24&_nc_ht=scontent.fsof11-1.fna&_nc_gid=A74pug01apVcqgb9HIonXmw&oh=00_AYDoQjFmgra6kOJEHxRNwicWTk4T0nyX3abq9_gpUxr31w&oe=677FD387",
    },
    {
      text: "Надежден партньор с коректно отношение!",
      author: "Ивайло Граматиков",
      position: "Директор, Global Foods Ltd.",
      image:
        "https://scontent.fsof8-1.fna.fbcdn.net/v/t39.30808-1/398650430_1263975971227011_6771802522397728138_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=27ciaeP_3fAQ7kNvgFHCDK2&_nc_zt=24&_nc_ht=scontent.fsof8-1.fna&_nc_gid=ACs9fUYCw2mkG0yz8Hkl2gq&oh=00_AYDnwfMAByKpewopgPTMix8n8jBQSh0jNR7dmwHrGsH3iA&oe=675E458D",
    },
    {
      text: "Винаги навременни доставки и отлично качество!",
      author: "Данил Желязков",
      position: "Собственик, Euro Trading Ltd.",
      image:
        "https://scontent.fsof11-1.fna.fbcdn.net/v/t1.6435-1/174099052_4083884771732851_3742402510728688073_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=84E3F2DK5TYQ7kNvgEWv9QF&_nc_zt=24&_nc_ht=scontent.fsof11-1.fna&_nc_gid=ArzrM_kARm8tbwFk05oD9_0&oh=00_AYBuUjnOWCJ-s4in1nnIl926IJAoiwkAr3LT9VAgs_XhAA&oe=677FD8C6",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://snapstackstorageaccount.blob.core.windows.net/templates/hero-bg.jpg?sp=r&st=2024-12-15T17:22:19Z&se=2024-12-16T01:22:19Z&sv=2022-11-02&sr=b&sig=RAvMzq0Wj%2F8HYYWHiGeBbgGGTGFGhLL4qy5CIvNp5oI%3D"
            alt="Sunflower field"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="container relative z-10 mx-auto px-4">
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
                Качествени едрови масла
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-sunflower-400"
              >
                за световните пазари
              </motion.span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-xl"
            >
              Вашият надежден партньор в търговията със слънчогледово и соево
              масло
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
                Свържете се с нас
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white 
                         font-semibold rounded-lg backdrop-blur-sm border-2 
                         border-white/30 transform hover:scale-105 
                         transition-all duration-300"
              >
                Научете повече
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
                { number: "15+", label: "години опит" },
                { number: "50+", label: "държави" },
                { number: "1000+", label: "клиента" },
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
              Нашите постижения
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient">В цифри</h2>
            <p className="text-gray-600 text-lg">
              Години на усърдна работа, доверие и постоянно развитие
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ClockIcon,
                number: "15+",
                label: "Години опит",
                color: "sunflower",
                suffix: "години",
              },
              {
                icon: UserGroupIcon,
                number: "1000+",
                label: "Доволни клиенти",
                color: "leaf",
                suffix: "клиента",
              },
              {
                icon: GlobeAltIcon,
                number: "50+",
                label: "Държави",
                color: "earth",
                suffix: "страни",
              },
              {
                icon: ScaleIcon,
                number: "100K+",
                label: "Тона внос/износ",
                color: "sunflower",
                suffix: "тона",
              },
            ].map((stat, index) => (
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
              Нашите предимства
            </span>
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Защо да изберете нас?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              С дългогодишен опит и иновативен подход, ние сме вашият надежден
              партньор в търговията с качествени масла
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
              Нашите продукти
              <div className="absolute -top-8 -right-8 w-16 h-16 animate-spin-slow opacity-20">
                <img
                  src="https://snapstackstorageaccount.blob.core.windows.net/templates/sunflower-oil.png?sp=r&st=2024-12-15T17:23:52Z&se=2024-12-16T01:23:52Z&sv=2022-11-02&sr=b&sig=Ag9MUboj6TXpdi3XXKu2vnkcRwwlQwEkjI%2BluVE7gYs%3D"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 relative">
            {[
              {
                title: "Слънчогледово масло",
                description: "Рафинирано и нерафинирано",
                features: ["Висока чистота", "Златист цвят", "Приятен аромат"],
                icon: "https://snapstackstorageaccount.blob.core.windows.net/templates/sunflower-oil.png?sp=r&st=2024-12-15T17:23:52Z&se=2024-12-16T01:23:52Z&sv=2022-11-02&sr=b&sig=Ag9MUboj6TXpdi3XXKu2vnkcRwwlQwEkjI%2BluVE7gYs%3D",
                gradient: "from-sunflower-light to-sunflower-dark",
              },
              {
                title: "Соево масло",
                description: "Първокласно качество",
                features: [
                  "Богато на протеини",
                  "Светъл цвят",
                  "Неутрален вкус",
                ],
                icon: "https://snapstackstorageaccount.blob.core.windows.net/templates/soy-oil.png?sp=r&st=2024-12-15T17:23:40Z&se=2024-12-16T01:23:40Z&sv=2022-11-02&sr=b&sig=O3RqI96VUjl3ozxzdUW81oRE5SVssYCdsoPYeOOAcTk%3D",
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
                      src={product.icon}
                      alt=""
                      className="w-full h-full object-contain animate-float-smooth"
                    />
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 shrink-0 rounded-full bg-white shadow-lg p-4">
                      <img
                        src={product.icon}
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
          src="https://snapstackstorageaccount.blob.core.windows.net/templates/oil-drop.png?sp=r&st=2024-12-15T17:22:34Z&se=2024-12-16T01:22:34Z&sv=2022-11-02&sr=b&sig=X9XFvah2ps5dB42WDkzLgKPRlB5lBbULxF226QncR%2BY%3D"
          alt="Oil drop"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="absolute -left-10 bottom-10 w-48 h-48 animate-float-smooth opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <img
          src="https://snapstackstorageaccount.blob.core.windows.net/templates/sunflower.png?sp=r&st=2024-12-15T17:24:49Z&se=2024-12-16T01:24:49Z&sv=2022-11-02&sr=b&sig=oBELE5JwqeMP9nXelIpzj0x8ZSpy11VfjCU1H%2FR%2F9Zk%3D"
          alt="Sunflower"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Testimonials Section - Enhanced with background image and gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://snapstackstorageaccount.blob.core.windows.net/templates/cta-bg.jpg?sp=r&st=2024-12-15T17:20:13Z&se=2024-12-16T01:20:13Z&sv=2022-11-02&sr=b&sig=vladGfG30kApc8b1HbM6CfXoSTOlK0LIpjZcQ8FCd6o%3D"
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
            Какво казват нашите клиенти
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
