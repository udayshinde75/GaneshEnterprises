"use client";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        About Ganesh Enterprises
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300">Founded in 2005, Ganesh Enterprises has grown from a small workshop into a trusted name in fabrication across Pune. We specialize in gym equipment, godown construction, welding, and custom iron works, serving both businesses and individuals.</p>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">To deliver strong, reliable, and innovative fabrication solutions that empower our clients and strengthen our community.</p>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Card>
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            <li>Quality Craftsmanship</li>
            <li>Reliability & Integrity</li>
            <li>Customer Satisfaction</li>
            <li>Continuous Improvement</li>
          </ul>
        </Card>
      </motion.div>
    </motion.section>
  );
} 