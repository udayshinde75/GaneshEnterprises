import Image from "next/image";
import Card from "@/components/Card";

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

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4  text-center bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-2xl mx-auto mx:my-0 my-30">
        <Image
          src="/ganesha.png"
          alt="Ganesh Enterprises Logo"
          width={120}
          height={120}
          className="mx-auto mb-6 rounded-full  shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Ganesh Enterprises
        </h1>
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Strong Fabrication. Reliable Work.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Ganesh Enterprises provides professional fabrication services for gym equipment, godown construction, welding, and custom iron doors & windows. Trusted by businesses and individuals for quality and reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/services" className="btn">Our Services</a>
          <a href="/quote" className="btn-outline">Request a Quote</a>
        </div>
      </div>
      {/* Recent Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.title} className="flex flex-col items-center">
              <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-800">
                <Image src={project.img} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-center">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{project.desc}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="/projects" className="btn-outline">View All Projects</a>
        </div>
      </section>
    </section>
  );
}
