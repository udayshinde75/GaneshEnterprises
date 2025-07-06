import { Metadata } from "next";
import QuoteContent from "@/components/QuoteContent";

export const metadata: Metadata = {
  title: "Request a Quote - Ganesh Enterprises Fabrication Services in Pune",
  description: "Get a free quote for fabrication services including gym equipment, godown construction, welding, and custom iron doors & windows. Professional fabrication services in Pune. Contact us for estimates.",
  keywords: [
    "fabrication quote pune",
    "gym equipment quote",
    "godown construction quote",
    "welding services quote",
    "iron doors quote",
    "fabrication estimate",
    "construction quote pune",
    "metal fabrication quote",
    "custom iron work quote",
    "industrial fabrication quote",
    "free quote fabrication",
    "pune fabrication services"
  ],
  openGraph: {
    title: "Request a Quote - Ganesh Enterprises Fabrication Services",
    description: "Get a free quote for professional fabrication services in Pune. Gym equipment, godown construction, welding, and custom iron work. Contact us for estimates.",
    type: "website",
    locale: "en_US",
    url: "https://ganesh-enterprises.in/quote",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises Quote Request",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote - Ganesh Enterprises",
    description: "Get a free quote for fabrication services including gym equipment, godown construction, welding, and custom iron work in Pune.",
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
    canonical: "https://ganesh-enterprises.in/quote",
  },
};

export default function QuotePage() {
  return <QuoteContent />;
} 