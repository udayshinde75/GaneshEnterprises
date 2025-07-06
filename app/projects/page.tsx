import { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Our Projects - Ganesh Enterprises Fabrication Portfolio",
  description: "Explore our fabrication projects including gym equipment, godown construction, custom iron doors, welding services, and industrial construction. View our portfolio of quality work in Pune.",
  keywords: [
    "fabrication projects pune",
    "gym equipment projects",
    "godown construction projects",
    "iron doors projects",
    "welding projects",
    "industrial construction portfolio",
    "fabrication work examples",
    "steel fabrication projects",
    "custom iron work portfolio",
    "construction projects pune"
  ],
  openGraph: {
    title: "Our Projects - Ganesh Enterprises Fabrication Portfolio",
    description: "View our portfolio of fabrication projects including gym equipment, godown construction, custom iron doors, and industrial construction in Pune.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprise.in/projects",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/gallary1.jpeg",
        width: 800,
        height: 600,
        alt: "Ganesh Enterprises Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects - Ganesh Enterprises",
    description: "Explore our fabrication projects portfolio including gym equipment, godown construction, and custom iron work.",
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
    canonical: "https://ganeshenterprise.in/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
} 