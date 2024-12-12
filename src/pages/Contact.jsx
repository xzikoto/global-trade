import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Адрес",
      content: ["ул. Примерна 123", "София 1000, България"],
      color: "text-sunflower-600",
      bgColor: "bg-sunflower-100",
    },
    {
      icon: PhoneIcon,
      title: "Телефон",
      content: ["+359 888 123 456", "+359 2 123 4567"],
      color: "text-leaf-600",
      bgColor: "bg-leaf-100",
    },
    {
      icon: EnvelopeIcon,
      title: "Имейл",
      content: ["info@globaltrade.com", "sales@globaltrade.com"],
      color: "text-earth-600",
      bgColor: "bg-earth-100",
    },
    {
      icon: ClockIcon,
      title: "Работно време",
      content: ["Понеделник - Петък", "09:00 - 18:00"],
      color: "text-sunflower-600",
      bgColor: "bg-sunflower-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunflower-50/50 via-white to-leaf-50/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Свържете се с нас
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Как можем да помогнем?
            </h1>
            <p className="text-gray-600 text-lg">
              Нашият екип е на ваше разположение за въпроси и съдействие
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 h-full relative overflow-hidden">
                  <div className={`${info.bgColor} absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${info.bgColor} ${info.color} rounded-xl p-3 mb-4`}>
                      <info.icon className="w-full h-full" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Изпратете съобщение</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Име</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Имейл</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Съобщение</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300 h-32"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-sunflower-500 hover:bg-sunflower-400 
                           text-black font-semibold rounded-lg transform hover:scale-105 
                           transition-all duration-300 shadow-lg hover:shadow-sunflower-500/25"
                >
                  Изпрати съобщение
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Къде да ни намерите</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.9528912750456!2d23.321796!3d42.697297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUwLjMiTiAyM8KwMTknMTguNSJF!5e0!3m2!1sen!2sbg!4v1647427842774!5m2!1sen!2sbg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
