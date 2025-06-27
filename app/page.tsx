"use client";

import Image from "next/image";
import Card from "@/components/Card";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-[70vh] px-4  text-center bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-2xl mx-auto mx:my-0 my-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/ganesha.png"
            alt="Ganesh Enterprises Logo"
            width={120}
            height={120}
            className="mx-auto mb-6 shadow-lg drop-shadow-[0_0_30px_rgba(255,200,0,0.7)] my-5 animate-none"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mt-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent"
        >
          Ganesh Enterprises
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl md:text-4xl font-extrabold my-5 tracking-tight text-gray-900 dark:text-white mb-4"
        >
          Strong Fabrication. Reliable Work.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
        >
          Ganesh Enterprises provides professional fabrication services for gym equipment, godown construction, welding, and custom iron doors & windows. Trusted by businesses and individuals for quality and reliability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/services" className="btn">Our Services</a>
          <a href="/quote" className="btn-outline">Request a Quote</a>
        </motion.div>
      </div>
      {/* Recent Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
            >
              <Card className="flex flex-col items-center">
                <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-800">
                  <Image src={project.img} alt={project.title} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-center">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">{project.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="/projects" className="btn-outline">View All Projects</a>
        </div>
      </section>
      {/* CTA Banner - Only on Landing Page */}
      <div className="w-full bg-transparent border-t-1 border-orange-400 py-6 flex flex-col items-center justify-center text-center shadow-lg">
        <h2 className="text-2xl font-bold text-gray-100 mb-2 drop-shadow">Ready to start your project?</h2>
        <a href="/quote" className="btn bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white hover:opacity-90 font-bold text-lg mt-2">Request a Quote Today!</a>
      </div>
    </motion.section>
  );
}
