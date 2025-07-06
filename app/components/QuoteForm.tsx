"use client"
import Card from "@/components/Card";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const services = [
  "Gym Equipment Fabrication",
  "Godown Construction",
  "Welding Services",
  "Iron Doors & Windows",
  "Others"
];

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value || "";
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement)?.value.trim() || "";
    if (!name || !phone || !service || !description) {
      toast.error("Please fill in all fields before sending via WhatsApp.");
      return;
    }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918767547649";
    const text = encodeURIComponent(
      `Quote Request for Ganesh Enterprises Website:\n Name: ${name}\nPhone: ${phone}\nService: ${service}\nDescription: ${description}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim() || "";
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim() || "";
    const service = (form.elements.namedItem("service") as HTMLSelectElement)?.value || "";
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement)?.value.trim() || "";
    if (!name || !phone || !service || !description) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, description }),
      });
      if (res.ok) {
        toast.success("Quote request sent successfully! We will get back to you soon.");
        form.reset();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send quote request. Please try again later.");
      }
    } catch (err) {
      console.log(err)
      toast.error("Failed to send quote request. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
    >
      <Card>
        <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
            name="name" 
            type="text" 
            placeholder="Your Name" 
            className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" 
            required 
          />
          <input 
            name="phone" 
            type="tel" 
            placeholder="Contact Number" 
            className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" 
            required 
          />
          <select 
            name="service" 
            className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" 
            required
          >
            <option value="">Select Service Type</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <textarea 
            name="description" 
            placeholder="Describe your requirements" 
            rows={4} 
            className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" 
            required
          ></textarea>
          <div className="flex gap-2 items-center">
            <Button type="submit" className="w-full">Request Quote</Button>
            <button 
              type="button" 
              onClick={handleWhatsApp} 
              className="btn-outline w-full flex items-center justify-center gap-2" 
              aria-label="Send via WhatsApp"
            >
              <FaWhatsapp className="text-green-500" />Send Via WhatsApp
            </button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
} 