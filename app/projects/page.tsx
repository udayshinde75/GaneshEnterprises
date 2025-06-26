import Card from "@/components/Card";
import Image from "next/image";

const projects = [
  {
    title: "Commercial Gym Setup",
    desc: "Complete fabrication and installation of gym equipment for a fitness center in Pune.",
    img: "/project1.jpg",
  },
  {
    title: "Industrial Godown",
    desc: "Design and build of a 5000 sq.ft. godown for a logistics company.",
    img: "/project2.jpg",
  },
  {
    title: "Custom Iron Doors",
    desc: "Fabrication of decorative and secure iron doors for a residential complex.",
    img: "/project3.jpg",
  },
  {
    title: "Welding Repairs",
    desc: "On-site welding and reinforcement for a manufacturing plant.",
    img: "/project4.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col items-center">
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-800">
              <Image src={project.img} alt={project.title} fill className="object-cover" />
            </div>
            <h2 className="text-lg font-semibold mb-1 text-center">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-center">{project.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
} 