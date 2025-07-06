"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Project {
  title: string;
  desc: string;
  img: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  projects, 
  currentIndex, 
  onNavigate 
}: ProjectModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const currentProject = projects[currentIndex];

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case "Escape":
        onClose();
        break;
      case "ArrowLeft":
        handlePrevious();
        break;
      case "ArrowRight":
        handleNext();
        break;
    }
  }, [isOpen, onClose, currentIndex, projects.length, onNavigate]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Project Content */}
        <div
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-800 rounded-lg shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Project Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={currentProject.img}
                alt={currentProject.title}
                fill
                className="object-cover rounded-t-lg"
                onLoad={() => setIsLoading(false)}
                priority
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-t-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentProject.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {currentProject.desc}
              </p>
              
              {/* Project Features */}
              <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Project Highlights:</h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Professional fabrication and installation</li>
                  <li>• Quality materials and workmanship</li>
                  <li>• On-time project completion</li>
                  <li>• Customer satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
          {currentIndex + 1} / {projects.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 