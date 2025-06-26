"use client";

import Card from "@/components/Card";
import { FaDumbbell, FaWarehouse, FaWrench, FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaDumbbell className="text-3xl text-primary mb-2" />,
    title: "Gym Equipment Fabrication",
    desc: "Custom gym machines, benches, racks, and accessories built to last for commercial and home gyms.",
  },
  {
    icon: <FaWarehouse className="text-3xl text-primary mb-2" />,
    title: "Godown Construction",
    desc: "Design and fabrication of robust godowns and industrial sheds tailored to your storage needs.",
  },
  {
    icon: <FaWrench className="text-3xl text-primary mb-2" />,
    title: "Welding Services",
    desc: "Expert welding for repairs, reinforcements, and custom metalwork with precision and safety.",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary mb-2" />,
    title: "Iron Doors & Windows",
    desc: "Fabrication and installation of secure, stylish iron doors and windows for homes and businesses.",
  },
];

export default function ServicesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, ease: "easeOut" }}
          >
            <Card className="flex flex-col items-center text-center">
              {service.icon}
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 