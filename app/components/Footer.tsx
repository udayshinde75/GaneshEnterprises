import Link from "next/link";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "917264843802";
  const message = encodeURIComponent("Hi! I need quotation for fabrication work. Please provide details about your services and pricing.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <footer className="w-full bg-gray-100 dark:bg-neutral-900 py-8 mt-8 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-1">Ganesh Enterprises</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Strong Fabrication. Reliable Work.</p>
          <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400 text-sm">
            <FaMapMarkerAlt className="inline-block mr-1" />
            Pisoli, Pune, Maharashtra
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400 text-sm">
            <FaPhone className="inline-block mr-1" />
            +91 7264843802
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp" 
            className="text-gray-600 dark:text-gray-300 hover:text-green-500 text-2xl transition-colors"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">&copy; {new Date().getFullYear()} Ganesh Enterprises. All rights reserved.</div>
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-2">
        Developed by{" "}
        <Link 
          href="https://udayshinde.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Uday
        </Link>
        {" "}•{" "}
        <Link 
          href="https://udayshinde.in" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          udayshinde.in
        </Link>
      </div>
    </footer>
  );
} 