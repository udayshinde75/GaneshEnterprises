import { Metadata } from "next";
import PuneFabricationContent from "@/components/PuneFabricationContent";

export const metadata: Metadata = {
  title: "Pune Fabrication Services - #1 Fabrication Company in Pune | Ganesh Enterprises",
  description: "Ganesh Enterprises is Pune's #1 fabrication company since 2005. Expert gym equipment fabrication, godown construction, welding services, custom iron doors & windows in Pune. Free quotes, Call +91-7264843802",
  keywords: [
    "pune fabrication services",
    "fabrication company pune",
    "best fabrication services pune",
    "top fabrication company pune",
    "gym equipment fabrication pune",
    "godown construction pune",
    "welding services pune",
    "iron doors windows pune",
    "steel fabrication pune",
    "industrial fabrication pune",
    "commercial fabrication pune",
    "residential fabrication pune",
    "fabrication contractor pune",
    "metal fabrication pune",
    "ganesh enterprises pune"
  ],
  openGraph: {
    title: "Pune Fabrication Services - #1 Fabrication Company in Pune",
    description: "Pune's leading fabrication company since 2005. Expert gym equipment, godown construction, welding, custom iron work. Free quotes.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprise.in/pune-fabrication-services",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/gallary1.jpeg",
        width: 800,
        height: 600,
        alt: "Pune Fabrication Services - Ganesh Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune Fabrication Services - #1 Fabrication Company",
    description: "Pune's leading fabrication company. Expert gym equipment, godown construction, welding, custom iron work.",
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
    canonical: "https://ganeshenterprise.in/pune-fabrication-services",
  },
};

export default function PuneFabricationServicesPage() {
  return <PuneFabricationContent />;
} 