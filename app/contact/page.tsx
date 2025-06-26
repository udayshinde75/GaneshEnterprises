import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <div className="mb-2 text-gray-700 dark:text-gray-300">
            <div>Ganesh Enterprises</div>
            <div>123 Industrial Area, Pune, Maharashtra</div>
            <div>Phone: +91 98765 43210</div>
            <div>Email: info@ganeshenterprises.com</div>
          </div>
          <div className="w-full h-40 rounded-lg overflow-hidden">
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
      </div>
    </section>
  );
} 