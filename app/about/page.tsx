import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us - Ganesh Enterprises Fabrication Company in Pune",
  description: "Learn about Ganesh Enterprises, a trusted fabrication company in Pune since 2005. We specialize in gym equipment, godown construction, welding, and custom iron works with quality craftsmanship.",
  keywords: [
    "ganesh enterprises pune",
    "fabrication company pune",
    "about ganesh enterprises",
    "fabrication company since 2005",
    "pune fabrication services",
    "trusted fabrication company",
    "quality fabrication pune",
    "fabrication company maharashtra",
    "industrial fabrication pune",
    "metal fabrication company"
  ],
  openGraph: {
    title: "About Us - Ganesh Enterprises Fabrication Company",
    description: "Trusted fabrication company in Pune since 2005. Specializing in gym equipment, godown construction, welding, and custom iron works with quality craftsmanship.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprises.in/about",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Ganesh Enterprises",
    description: "Trusted fabrication company in Pune since 2005. Quality craftsmanship in gym equipment, godown construction, welding, and custom iron works.",
    images: ["/ganesha.png"],
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
    canonical: "https://ganeshenterprises.in/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
} 