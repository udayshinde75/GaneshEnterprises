"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/gallary1.jpeg",
  "/gallary2.jpeg",
  "/gallary3.jpeg",
  "/gallary4.jpeg",
  "/gallary5.jpeg",
  "/gallary6.jpeg",
  "/gallary7.jpeg",
  "/gallary8.jpeg",
  "/gallary9.jpeg",
  "/gallary10.jpeg",
];

export default function GalleryPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Our Work Gallery
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Explore our portfolio of fabrication work, from gym equipment to industrial projects
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, idx) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={image}
                alt={`Ganesh Enterprises Work ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 