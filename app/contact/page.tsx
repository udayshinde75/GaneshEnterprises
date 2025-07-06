import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Ganesh Enterprises Fabrication Services in Pune",
  description: "Contact Ganesh Enterprises for fabrication services in Pune. Get in touch for gym equipment, godown construction, welding, and custom iron doors & windows. Located in Pisoli, Pune.",
  keywords: [
    "contact ganesh enterprises",
    "fabrication services contact pune",
    "ganesh enterprises pune contact",
    "fabrication company contact",
    "pune fabrication contact",
    "iron work contact pune",
    "welding services contact",
    "gym equipment contact",
    "godown construction contact",
    "fabrication inquiry pune"
  ],
  openGraph: {
    title: "Contact Us - Ganesh Enterprises Fabrication Services",
    description: "Contact Ganesh Enterprises for professional fabrication services in Pune. Gym equipment, godown construction, welding, and custom iron work.",
    type: "website",
    locale: "en_US",
    url: "https://ganesh-enterprises.in/contact",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Ganesh Enterprises",
    description: "Contact Ganesh Enterprises for fabrication services in Pune. Professional gym equipment, godown construction, welding, and custom iron work.",
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
    canonical: "https://ganesh-enterprises.in/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
} 