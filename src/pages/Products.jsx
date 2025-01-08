import { motion } from "framer-motion";
import { GiWheat, GiCorn } from "react-icons/gi";
import { SunflowerCakeIcon } from "../components/shared/icons/SunflowerCakeIcon";
import { SunflowerMealIcon } from "../components/shared/icons/SunflowerMealIcon";
import { SoybeanMealIcon } from "../components/shared/icons/SoybeanMealIcon";
import { BarleyIcon } from "../components/shared/icons/BarleyIcon";
import { LinenIcon } from "../components/shared/icons/LinenIcon";
import { MustardSeedIcon } from "../components/shared/icons/MustardSeedIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "products.items.sunflowerCake",
    category: "products.categories.oilCrops",
    icon: SunflowerCakeIcon,
    color: "from-amber-400 to-yellow-500",
  },
  {
    id: 2,
    name: "products.items.sunflowerMeal",
    category: "products.categories.oilCrops",
    icon: SunflowerMealIcon,
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 3,
    name: "products.items.soybeanMeal",
    category: "products.categories.oilCrops",
    icon: SoybeanMealIcon,
    color: "from-green-400 to-green-500",
  },
  {
    id: 4,
    name: "products.items.wheat",
    category: "products.categories.grains",
    icon: GiWheat,
    color: "from-yellow-600 to-yellow-700",
  },
  {
    id: 5,
    name: "products.items.corn",
    category: "products.categories.grains",
    icon: GiCorn,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    id: 6,
    name: "products.items.barley",
    category: "products.categories.grains",
    icon: BarleyIcon,
    color: "from-amber-600 to-amber-700",
  },
  {
    id: 7,
    name: "products.items.brownLinen",
    category: "products.categories.oilSeeds",
    icon: LinenIcon,
    color: "from-amber-700 to-amber-800",
  },
  {
    id: 8,
    name: "products.items.yellowLinen",
    category: "products.categories.oilSeeds",
    icon: LinenIcon,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    id: 9,
    name: "products.items.mustardSeed",
    category: "products.categories.oilSeeds",
    icon: MustardSeedIcon,
    color: "from-yellow-300 to-yellow-400",
  },
];

export default function Products() {
  const { t } = useTranslation();

  // Update products array to use translations
  const translatedProducts = products.map((product) => ({
    ...product,
    name: t(product.name),
    category: t(product.category),
  }));

  const categories = [
    ...new Set(translatedProducts.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative pt-32 pb-20 px-4">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-sunflower-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sunflower-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("products.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </motion.div>

          {/* Categories */}
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {translatedProducts
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl transform -rotate-1 transition-transform group-hover:rotate-1" />
                      <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div
                          className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <product.icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <div className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                          {product.category}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}

          {/* CTA Section - Updated */}
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("transport.cta.title")}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t("transport.cta.description")}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {t("transport.cta.button")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
