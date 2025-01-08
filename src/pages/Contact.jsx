import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_ry3hgx9",
        "template_4jms8jk",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "GZ42QS7grRkQVsCPj"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: t("contact.info.headquarters.title"),
      content: [
        {
          main: t("contact.info.headquarters.country.main"),
          sub: t("contact.info.headquarters.country.sub"),
        },
        {
          main: t("contact.info.headquarters.city.main"),
          sub: t("contact.info.headquarters.city.sub"),
        },
        {
          main: t("contact.info.headquarters.address.main"),
          sub: t("contact.info.headquarters.address.sub"),
        },
      ],
      color: "text-sunflower-600",
      bgColor: "bg-sunflower-100",
      footer: {
        icon: "📍",
        text: t("contact.info.headquarters.floor"),
      },
    },
    {
      icon: PhoneIcon,
      title: t("contact.info.phone.title"),
      content: [
        {
          main: t("contact.info.phone.main"),
          sub: t("contact.info.phone.sub"),
        },
      ],
      color: "text-leaf-600",
      bgColor: "bg-leaf-100",
    },
    {
      icon: EnvelopeIcon,
      title: t("contact.info.email.title"),
      content: [
        {
          main: t("contact.info.email.main"),
          sub: t("contact.info.email.sub"),
        },
      ],
      color: "text-earth-600",
      bgColor: "bg-earth-100",
    },
    {
      icon: ClockIcon,
      title: t("contact.info.hours.title"),
      content: [
        {
          main: t("contact.info.hours.weekdays.main"),
          sub: t("contact.info.hours.weekdays.sub"),
        },
        {
          main: t("contact.info.hours.weekend.main"),
          sub: t("contact.info.hours.weekend.sub"),
        },
      ],
      color: "text-sunflower-600",
      bgColor: "bg-sunflower-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sunflower-50/50 via-white to-leaf-50/30">
      <section className="relative pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              {t("contact.hero.subtitle")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t("contact.hero.title")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("contact.hero.description")}
            </p>
          </motion.div>

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
                  <div
                    className={`${info.bgColor} absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 ${info.bgColor} ${info.color} rounded-xl p-3 mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="w-full h-full" />
                    </div>
                    <h3 className="font-semibold mb-4">{info.title}</h3>

                    {Array.isArray(info.content[0]) ? (
                      info.content.map((line, i) => (
                        <p key={i} className="text-gray-600">
                          {line}
                        </p>
                      ))
                    ) : (
                      <div className="space-y-3">
                        {info.content.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1"
                          >
                            <span className="w-2 h-2 rounded-full bg-sunflower-400 group-hover/item:scale-150 transition-transform duration-300" />
                            <p className="text-gray-700">
                              <span className="font-medium">{item.main}</span>
                              <span className="block text-sm text-gray-500">
                                {item.sub}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {info.footer && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center text-sm text-sunflower-600 font-medium">
                          <span className="mr-2">{info.footer.icon}</span>
                          {info.footer.text}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                {t("contact.form.title")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sunflower-400 focus:ring-2 focus:ring-sunflower-200 transition-colors duration-300 h-32"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 bg-sunflower-500 hover:bg-sunflower-400 
                              text-black font-semibold rounded-lg transform hover:scale-105 
                              transition-all duration-300 shadow-lg hover:shadow-sunflower-500/25
                              ${
                                isSubmitting
                                  ? "opacity-70 cursor-not-allowed"
                                  : ""
                              }`}
                  >
                    {isSubmitting ? "Sending..." : t("contact.form.submit")}
                  </button>

                  {submitStatus === "success" && (
                    <p className="mt-4 text-green-600 text-center">
                      Message sent successfully!
                    </p>
                  )}

                  {submitStatus === "error" && (
                    <p className="mt-4 text-red-600 text-center">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                {t("contact.map.title")}
              </h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.8737698584546!2d23.36476467578994!3d42.678599614918106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85c330646339%3A0x7234b3c61303de34!2z0LYu0LouINCl0YDQuNGB0YLQviDQodC80LjRgNC90LXQvdGB0LrQuCwg0LHRg9C7LiDigJ7QqNC40L_Rh9C10L3RgdC60Lgg0L_RgNC-0YXQvtC04oCcIDYzLCAxNTc0INCh0L7RhNC40Y8!5e1!3m2!1sbg!2sbg!4v1736156101662!5m2!1sbg!2sbg"
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
