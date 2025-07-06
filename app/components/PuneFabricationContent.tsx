"use client"
import { motion } from "framer-motion";
import Card from "@/components/Card";

const services = [
  {
    title: "Gym Equipment Fabrication in Pune",
    desc: "Custom fabrication of gym equipment including weight machines, cardio equipment, and specialized fitness solutions. Serving Pune and surrounding areas since 2005.",
    icon: "🏋️",
    features: ["Weight Machines", "Cardio Equipment", "Fitness Solutions", "Custom Design"]
  },
  {
    title: "Godown Construction in Pune",
    desc: "Complete godown and warehouse construction with steel structures, proper ventilation, and storage optimization. Professional construction services in Pune.",
    icon: "🏭",
    features: ["Steel Structures", "Ventilation Systems", "Storage Optimization", "Professional Construction"]
  },
  {
    title: "Welding Services in Pune",
    desc: "Professional welding services for industrial, commercial, and residential projects with quality materials. Expert welders serving Pune region.",
    icon: "🔧",
    features: ["Industrial Welding", "Commercial Projects", "Residential Work", "Quality Materials"]
  },
  {
    title: "Iron Doors & Windows in Pune",
    desc: "Custom iron doors and windows with artistic designs, security features, and weather-resistant coatings. Premium iron work in Pune.",
    icon: "🚪",
    features: ["Artistic Designs", "Security Features", "Weather Resistant", "Custom Sizing"]
  },
];

export default function PuneFabricationContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
      >
        Pune Fabrication Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12"
      >
        Pune&apos;s #1 Fabrication Company Since 2005 - Expert Services, Quality Workmanship, Free Quotes
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
          >
            <Card className="flex flex-col items-center text-center p-6 h-full">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{service.desc}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature, featureIdx) => (
                  <span
                    key={featureIdx}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 text-white text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Why Choose Ganesh Enterprises for Fabrication in Pune?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">19+ Years Experience</h3>
            <p className="text-orange-100">Serving Pune since 2005 with proven expertise</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-orange-100">Premium materials and workmanship standards</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Free Quotes</h3>
            <p className="text-orange-100">Get instant quotes for all fabrication projects</p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="/quote"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote Now
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
} 