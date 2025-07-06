"use client";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";

export const projects = [
  {
    title: "Commercial Gym Setup",
    desc: "Complete fabrication and installation of commercial gym equipment including weight machines, cardio equipment, and custom fitness solutions for fitness centers and health clubs.",
    img: "/GymImage.jpg",
  },
  {
    title: "Industrial Godown",
    desc: "Design and construction of large-scale industrial godowns and warehouses with steel structures, proper ventilation, and storage optimization for logistics companies.",
    img: "/gallary2.jpeg",
  },
  {
    title: "Custom Iron Doors",
    desc: "Fabrication of decorative and secure iron doors with intricate designs, security features, and custom finishes for residential and commercial properties.",
    img: "/gallary6.jpeg",
  },
  {
    title: "Custom Iron Doors",
    desc: "Premium iron door fabrication with artistic patterns, anti-theft features, and weather-resistant coatings for enhanced security and aesthetics.",
    img: "/gallary7.jpeg",
  },
  {
    title: "Custom Iron Doors",
    desc: "Luxury iron door designs with ornamental work, premium materials, and custom sizing to match architectural requirements and client preferences.",
    img: "/gallary8.jpeg",
  },
  {
    title: "Custom Iron Gallary",
    desc: "Fabrication of decorative iron galleries and balconies with artistic railings, structural integrity, and architectural beauty for residential buildings.",
    img: "/gallary9.jpeg",
  },
  {
    title: "Custom Iron Doors",
    desc: "Modern iron door solutions with contemporary designs, smart locking systems, and energy-efficient features for modern homes and offices.",
    img: "/gallary10.jpeg",
  },
  {
    title: "Godown Constructions",
    desc: "Complete godown construction services including steel framework, roofing systems, loading docks, and storage optimization for industrial and commercial use.",
    img: "/gallary4.jpeg",
  },
  {
    title: "Custom Iron Staircase",
    desc: "Design and fabrication of custom iron staircases with artistic railings, structural safety, and architectural elegance for residential and commercial spaces.",
    img: "/gallary5.jpeg",
  },
  {
    title: "Industrial Construction",
    desc: "Large-scale industrial construction projects including factory buildings, manufacturing facilities, and industrial infrastructure with steel fabrication expertise.",
    img: "/gallary1.jpeg",
  },
];

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectClick = (index: number) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentProjectIndex(index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center"
      >
        Our Projects
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, ease: "easeOut" }}
            className="cursor-pointer group"
            onClick={() => handleProjectClick(idx)}
          >
            <Card className="flex flex-col items-center group-hover:shadow-lg transition-shadow">
              <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden bg-gray-200 dark:bg-neutral-800">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h2 className="text-lg font-semibold mb-1 text-center">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-center">{project.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projects={projects}
        currentIndex={currentProjectIndex}
        onNavigate={handleNavigate}
      />
    </motion.section>
  );
} 