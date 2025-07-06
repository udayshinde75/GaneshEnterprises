"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface GalleryProps {
  images: string[];
  title?: string;
  description?: string;
  showAll?: boolean;
  maxImages?: number;
  className?: string;
}

export default function Gallery({ 
  images, 
  title, 
  description, 
  showAll = false, 
  maxImages = 8,
  className = "" 
}: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayImages = showAll ? images : images.slice(0, maxImages);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className={`max-w-6xl mx-auto px-4 py-12 ${className}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center"
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {displayImages.map((image, idx) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 * idx, duration: 0.7, ease: "easeOut" }}
            className="group cursor-pointer"
            onClick={() => handleImageClick(idx)}
          >
            <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 w-40 sm:w-44 md:w-48 lg:w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={image}
                alt={`Ganesh Enterprises Work ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
      {!showAll && images.length > maxImages && (
        <div className="flex justify-center mt-8">
          <a href="/gallery" className="btn-outline">View Full Gallery</a>
        </div>
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={displayImages}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigate}
      />
    </section>
  );
} 