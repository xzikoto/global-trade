import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  BeakerIcon,
  TruckIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      title: t('services.tradingServices.title'),
      description: t('services.tradingServices.description'),
      icon: BuildingStorefrontIcon,
      color: "from-amber-400 to-amber-600",
      services: [
        {
          name: t('services.tradingServices.services.oilCrops.name'),
          description: t('services.tradingServices.services.oilCrops.description'),
          features: t('services.tradingServices.services.oilCrops.features', { returnObjects: true })
        },
        {
          name: t('services.tradingServices.services.grains.name'),
          description: t('services.tradingServices.services.grains.description'),
          features: t('services.tradingServices.services.grains.features', { returnObjects: true })
        },
        {
          name: t('services.tradingServices.services.oilSeeds.name'),
          description: t('services.tradingServices.services.oilSeeds.description'),
          features: t('services.tradingServices.services.oilSeeds.features', { returnObjects: true })
        }
      ]
    },
    {
      title: t('services.logisticsServices.title'),
      description: t('services.logisticsServices.description'),
      icon: TruckIcon,
      color: "from-blue-400 to-blue-600",
      services: [
        {
          name: t('services.logisticsServices.services.landTransport.name'),
          description: t('services.logisticsServices.services.landTransport.description'),
          features: t('services.logisticsServices.services.landTransport.features', { returnObjects: true })
        },
        {
          name: t('services.logisticsServices.services.seaFreight.name'),
          description: t('services.logisticsServices.services.seaFreight.description'),
          features: t('services.logisticsServices.services.seaFreight.features', { returnObjects: true })
        },
        {
          name: t('services.logisticsServices.services.warehousing.name'),
          description: t('services.logisticsServices.services.warehousing.description'),
          features: t('services.logisticsServices.services.warehousing.features', { returnObjects: true })
        }
      ]
    },
    {
      title: t('services.qualityServices.title'),
      description: t('services.qualityServices.description'),
      icon: BeakerIcon,
      color: "from-green-400 to-green-600",
      services: [
        {
          name: t('services.qualityServices.services.labTesting.name'),
          description: t('services.qualityServices.services.labTesting.description'),
          features: t('services.qualityServices.services.labTesting.features', { returnObjects: true })
        },
        {
          name: t('services.qualityServices.services.monitoring.name'),
          description: t('services.qualityServices.services.monitoring.description'),
          features: t('services.qualityServices.services.monitoring.features', { returnObjects: true })
        },
        {
          name: t('services.qualityServices.services.certification.name'),
          description: t('services.qualityServices.services.certification.description'),
          features: t('services.qualityServices.services.certification.features', { returnObjects: true })
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sunflower-50/30">
      <section className="relative py-24 overflow-hidden">
        {/* Hero Section */}
        <div className="container relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sunflower-100 text-sunflower-600 font-medium mb-4">
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              {t('services.hero.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('services.hero.title')}
            </h1>
            <p className="text-gray-600 text-lg">
              {t('services.hero.description')}
            </p>
          </motion.div>
        </div>

        {/* Service Categories */}
        <div className="container relative z-10">
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${category.color} 
                                 flex items-center justify-center text-white transform hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                    >
                      <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <ClipboardDocumentCheckIcon className="w-5 h-5 mr-2 text-sunflower-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20 bg-gradient-to-r from-sunflower-50 to-sunflower-100 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('services.cta.description')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-sunflower-500 text-white hover:bg-sunflower-600 transition-colors"
            >
              {t('services.cta.button')}
            </Link>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunflower-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-leaf-100/20 rounded-full blur-3xl" />
      </section>
    </div>
  );
}
