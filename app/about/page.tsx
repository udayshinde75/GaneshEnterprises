import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Ganesh Enterprises</h1>
      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-700 dark:text-gray-300">Founded in 2005, Ganesh Enterprises has grown from a small workshop into a trusted name in fabrication across Pune and Maharashtra. We specialize in gym equipment, godown construction, welding, and custom iron works, serving both businesses and individuals.</p>
      </Card>
      <Card className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300">To deliver strong, reliable, and innovative fabrication solutions that empower our clients and strengthen our community.</p>
      </Card>
      <Card>
        <h2 className="text-xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          <li>Quality Craftsmanship</li>
          <li>Reliability & Integrity</li>
          <li>Customer Satisfaction</li>
          <li>Continuous Improvement</li>
        </ul>
      </Card>
    </section>
  );
} 