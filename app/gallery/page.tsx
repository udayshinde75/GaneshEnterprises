"use client";
import Gallery from "@/components/Gallery";

const galleryImages = [
  "/gallary1.jpeg",
  "/gallary2.jpeg",
  "/gallary3.jpeg",
  "/gallary4.jpeg",
  "/gallary5.jpeg",
  "/gallary6.jpeg",
  "/gallary7.jpeg",
  "/gallary8.jpeg",
  "/gallary9.jpeg",
  "/gallary10.jpeg",
];

export default function GalleryPage() {
  return (
    <Gallery
      images={galleryImages}
      title="Our Work Gallery"
      description="Explore our portfolio of fabrication work, from gym equipment to industrial projects"
      showAll={true}
    />
  );
} 