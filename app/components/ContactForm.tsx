"use client";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() || "";
    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message before sending via WhatsApp.");
      return;
    }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918767547649";
    const text = encodeURIComponent(
      `Inquiry for Ganesh Enterprises Website:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim() || "";
    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message before submitting.");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        toast.success("Inquiry sent successfully! We will get back to you soon.");
        form.reset();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send inquiry. Please try again later.");
      }
    } catch (err) {
      toast.error("Failed to send inquiry. Please try again later.");
      console.log(err)
    }
  };

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
      <div className="grid grid-cols-1 gap-8">
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
              <div>Pisoli, Pune, Maharashtra</div>
              <div>Phone: +91 7264843802</div>
              <div>Email: info@ganesh-enterprises.in</div>
            </div>
            <div className="max-w-3xl hidden mx-auto h-40 rounded-lg overflow-hidden">
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
            <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
              <input name="email" type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
              <input name="phone" type="tel" placeholder="Phone Number" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" />
              <textarea name="message" placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required></textarea>
              <div className="flex gap-2 items-center">
                <button type="submit" className="btn w-full">Send Inquiry</button>
                <button type="button" onClick={handleWhatsApp} className="btn-outline w-full flex items-center justify-center gap-2" aria-label="Send via WhatsApp">
                  <FaWhatsapp className="text-green-500" />Send Via WhatsApp
                </button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
} 