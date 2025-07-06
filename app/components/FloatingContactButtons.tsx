"use client"
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingContactButtons() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918767547649";
  const phoneNumber = "+91-7264843802";
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your fabrication services. Could you please provide more information about your gym equipment, godown construction, welding, or custom iron work services?"
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePhone = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="fixed bottom-20 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
        aria-label="Contact us on WhatsApp for fabrication services"
        title="WhatsApp us for quick quote"
      >
        <FaWhatsapp className="text-xl" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          WhatsApp us
        </span>
      </motion.button>

      {/* Phone Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePhone}
        className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
        aria-label="Call us for fabrication services"
        title="Call us directly"
      >
        <FaPhone className="text-xl" />
        <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Call us
        </span>
      </motion.button>
    </>
  );
} 