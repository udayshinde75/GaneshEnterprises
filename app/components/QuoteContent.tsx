"use client"
import { motion } from "framer-motion";
import QuoteForm from "@/components/QuoteForm";

export default function QuoteContent() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-xl mx-auto w-full px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Request a Quote
      </motion.h1>
      <QuoteForm />
    </motion.section>
  );
} 