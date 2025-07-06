"use client"
import Card from "@/components/Card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Gym Equipment Fabrication",
    desc: "Custom fabrication of gym equipment including weight machines, cardio equipment, and specialized fitness solutions.",
    icon: "🏋️",
  },
  {
    title: "Godown Construction",
    desc: "Complete godown and warehouse construction with steel structures, proper ventilation, and storage optimization.",
    icon: "🏭",
  },
  {
    title: "Welding Services",
    desc: "Professional welding services for industrial, commercial, and residential projects with quality materials.",
    icon: "🔧",
  },
  {
    title: "Iron Doors & Windows",
    desc: "Custom iron doors and windows with artistic designs, security features, and weather-resistant coatings.",
    icon: "🚪",
  },
];

export default function ServicesContent() {
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
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
          >
            <Card className="flex flex-col items-center text-center p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 