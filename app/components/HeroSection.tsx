"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-2xl mx-auto mx:my-0 my-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/ganesha.png"
            alt="Ganesh Enterprises Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 shadow-lg drop-shadow-[0_0_30px_rgba(255,200,0,0.7)] my-5 animate-none"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mt-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent"
        >
          Ganesh Enterprises
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl md:text-4xl font-extrabold my-5 tracking-tight text-gray-900 dark:text-white mb-4"
        >
          Strong Fabrication. Reliable Work.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
        >
          Ganesh Enterprises provides professional fabrication services for gym equipment, godown construction, welding, and custom iron doors & windows. Trusted by businesses and individuals for quality and reliability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/services" className="btn">Our Services</a>
          <a href="/quote" className="btn-outline">Request a Quote</a>
        </motion.div>
      </div>
    </motion.section>
  );
} 