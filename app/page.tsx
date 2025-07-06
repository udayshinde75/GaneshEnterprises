import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import Gallery from "@/components/Gallery";
import { projects } from "./data/projects";

export const metadata: Metadata = {
  title: "Ganesh Enterprises - Professional Fabrication Services in Pune",
  description: "Ganesh Enterprises provides professional fabrication services including gym equipment, godown construction, welding, and custom iron doors & windows in Pune. Quality workmanship and reliable service.",
  keywords: [
    "fabrication services pune",
    "gym equipment fabrication",
    "godown construction",
    "welding services",
    "iron doors windows",
    "steel fabrication",
    "industrial construction",
    "custom iron work",
    "fabrication company pune",
    "metal fabrication"
  ],
  openGraph: {
    title: "Ganesh Enterprises - Professional Fabrication Services in Pune",
    description: "Quality fabrication services for gym equipment, godown construction, welding, and custom iron doors & windows. Trusted by businesses in Pune.",
    type: "website",
    locale: "en_US",
    url: "https://ganeshenterprises.in",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Enterprises - Professional Fabrication Services",
    description: "Quality fabrication services for gym equipment, godown construction, welding, and custom iron doors & windows in Pune.",
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
    canonical: "https://ganeshenterprises.in",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <RecentProjects projects={projects} />
      <Gallery
        images={[
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
        ]}
        title="Our Work Gallery"
        description="Explore our portfolio of fabrication work, from gym equipment to industrial projects"
        maxImages={10}
      />
      {/* CTA Banner - Only on Landing Page */}
      <div className="w-full bg-transparent border-t-1 border-orange-400 py-6 flex flex-col items-center justify-center text-center shadow-lg">
        <h2 className="text-2xl font-bold text-gray-100 mb-2 drop-shadow">Ready to start your project?</h2>
        <a href="/quote" className="btn bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white hover:opacity-90 font-bold text-lg mt-2">Request a Quote Today!</a>
      </div>
    </>
  );
}
