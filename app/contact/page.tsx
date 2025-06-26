"use client";

import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto w-full py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1  gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <Card>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <div className="mb-2 text-gray-700 dark:text-gray-300 w-full">
              <div>Ganesh Enterprises</div>
              <div>123 Industrial Area, Pune, Maharashtra</div>
              <div>Phone: +91 98765 43210</div>
              <div>Email: info@ganeshenterprises.com</div>
            </div>
            <div className="max-w-3xl mx-auto h-40 rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123456789ab%3A0xabcdefabcdef1234!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          <Card>
            <h2 className="text-xl font-semibold mb-2">Inquiry Form</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
              <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
              <input type="tel" placeholder="Phone Number" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" />
              <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required></textarea>
              <button type="submit" className="btn">Send Inquiry</button>
            </form>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
} 