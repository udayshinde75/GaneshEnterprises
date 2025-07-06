import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Our Work Gallery - Ganesh Enterprises Fabrication Portfolio",
  description: "Explore our fabrication work gallery showcasing gym equipment, godown construction, welding projects, custom iron doors & windows, and industrial fabrication work in Pune.",
  keywords: [
    "fabrication gallery pune",
    "gym equipment gallery",
    "godown construction gallery",
    "welding work gallery",
    "iron doors gallery",
    "fabrication portfolio",
    "industrial fabrication gallery",
    "custom iron work gallery",
    "fabrication projects gallery",
    "pune fabrication work"
  ],
  openGraph: {
    title: "Our Work Gallery - Ganesh Enterprises Fabrication Portfolio",
    description: "Explore our fabrication work gallery showcasing gym equipment, godown construction, welding, and custom iron work projects in Pune.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprises.in/gallery",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/gallary1.jpeg",
        width: 800,
        height: 600,
        alt: "Ganesh Enterprises Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work Gallery - Ganesh Enterprises",
    description: "Explore our fabrication work gallery showcasing gym equipment, godown construction, welding, and custom iron work projects.",
    images: ["/gallary1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ganeshenterprises.in/gallery",
  },
};

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