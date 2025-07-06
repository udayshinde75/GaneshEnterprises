"use client";
import Card from "@/components/Card";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "@/components/ProjectModal";
import { useState } from "react";
import { Project } from "../data/projects";

interface RecentProjectsProps {
  projects: Project[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
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

  const recentProjects = projects.slice(0, 3);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recentProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * idx, duration: 0.6, ease: "easeOut" }}
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

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        projects={recentProjects}
        currentIndex={currentProjectIndex}
        onNavigate={handleNavigate}
      />
    </>
  );
} 