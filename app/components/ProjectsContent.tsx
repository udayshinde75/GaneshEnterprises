"use client"
import { motion } from "framer-motion";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "../data/projects";

export default function ProjectsContent() {
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
      <ProjectsGrid projects={projects} />
    </motion.section>
  );
} 