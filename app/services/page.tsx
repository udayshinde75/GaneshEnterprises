import Card from "@/components/Card";
import { FaDumbbell, FaWarehouse, FaWrench, FaDoorOpen } from "react-icons/fa";

const services = [
  {
    icon: <FaDumbbell className="text-3xl text-primary mb-2" />,
    title: "Gym Equipment Fabrication",
    desc: "Custom gym machines, benches, racks, and accessories built to last for commercial and home gyms.",
  },
  {
    icon: <FaWarehouse className="text-3xl text-primary mb-2" />,
    title: "Godown Construction",
    desc: "Design and fabrication of robust godowns and industrial sheds tailored to your storage needs.",
  },
  {
    icon: <FaWrench className="text-3xl text-primary mb-2" />,
    title: "Welding Services",
    desc: "Expert welding for repairs, reinforcements, and custom metalwork with precision and safety.",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary mb-2" />,
    title: "Iron Doors & Windows",
    desc: "Fabrication and installation of secure, stylish iron doors and windows for homes and businesses.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center">
            {service.icon}
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
} 