import Card from "@/components/Card";
import Button from "@/components/Button";

const services = [
  "Gym Equipment Fabrication",
  "Godown Construction",
  "Welding Services",
  "Iron Doors & Windows",
];

export default function QuotePage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Request a Quote</h1>
      <Card>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
          <input type="tel" placeholder="Contact Number" className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required />
          <select className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required>
            <option value="">Select Service Type</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
          <textarea placeholder="Describe your requirements" rows={4} className="px-4 py-2 rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white" required></textarea>
          <Button type="submit">Request Quote</Button>
        </form>
      </Card>
    </section>
  );
} 