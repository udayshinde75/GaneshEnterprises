import { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services - Ganesh Enterprises Fabrication Services in Pune",
  description: "Professional fabrication services including gym equipment fabrication, godown construction, welding services, custom iron doors & windows, and industrial construction in Pune. Quality workmanship guaranteed.",
  keywords: [
    "fabrication services pune",
    "gym equipment fabrication",
    "godown construction services",
    "welding services pune",
    "custom iron doors",
    "iron windows fabrication",
    "steel fabrication services",
    "industrial construction",
    "metal fabrication pune",
    "construction services"
  ],
  openGraph: {
    title: "Our Services - Ganesh Enterprises Fabrication Services",
    description: "Professional fabrication services for gym equipment, godown construction, welding, and custom iron work in Pune.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprises.in/services",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Ganesh Enterprises",
    description: "Professional fabrication services including gym equipment, godown construction, welding, and custom iron work.",
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
    canonical: "https://ganeshenterprises.in/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
} 