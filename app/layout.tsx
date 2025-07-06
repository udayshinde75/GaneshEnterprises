import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ganesh Enterprises - #1 Fabrication Services in Pune | Gym Equipment, Godown Construction",
    template: "%s | Ganesh Enterprises - Best Fabrication Company Pune"
  },
  description: "Ganesh Enterprises is Pune's #1 fabrication company since 2005. Expert gym equipment fabrication, godown construction, welding services, custom iron doors & windows. Free quotes, Call +91-7264843802",
  keywords: [
    "fabrication services pune",
    "gym equipment fabrication pune",
    "godown construction pune",
    "welding services pune",
    "iron doors windows pune",
    "steel fabrication pune",
    "industrial construction pune",
    "custom iron work pune",
    "fabrication company pune",
    "metal fabrication pune",
    "ganesh enterprises pune",
    "pune fabrication services",
    "best fabrication company pune",
    "top fabrication services pune",
    "fabrication contractor pune",
    "industrial fabrication pune",
    "commercial fabrication pune",
    "residential fabrication pune"
  ],
  authors: [{ name: "Ganesh Enterprises", url: "https://ganesh-enterprises.in" }],
  creator: "Ganesh Enterprises",
  publisher: "Ganesh Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ganesh-enterprises.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ganesh-enterprises.in",
    title: "Ganesh Enterprises - #1 Fabrication Services in Pune | Gym Equipment, Godown Construction",
    description: "Pune's leading fabrication company since 2005. Expert gym equipment, godown construction, welding, custom iron doors & windows. Free quotes, Call +91-7264843802",
    siteName: "Ganesh Enterprises",
    images: [
      {
        url: "/ganesha.png",
        width: 120,
        height: 120,
        alt: "Ganesh Enterprises - Best Fabrication Company Pune",
      },
      {
        url: "/gallary1.jpeg",
        width: 800,
        height: 600,
        alt: "Ganesh Enterprises Fabrication Work - Gym Equipment and Industrial Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Enterprises - #1 Fabrication Services in Pune",
    description: "Pune's leading fabrication company. Expert gym equipment, godown construction, welding, custom iron work. Free quotes.",
    images: ["/ganesha.png"],
    creator: "@ganeshenterprises",
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
      "noimageindex": false,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Business",
  classification: "Fabrication Services",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
    "DC.title": "Ganesh Enterprises - Best Fabrication Services Pune",
    "DC.creator": "Ganesh Enterprises",
    "DC.subject": "Fabrication Services, Gym Equipment, Godown Construction, Welding, Iron Doors",
    "DC.description": "Pune's leading fabrication company since 2005",
    "DC.publisher": "Ganesh Enterprises",
    "DC.contributor": "Ganesh Enterprises",
    "DC.date": "2005",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://ganesh-enterprises.in",
    "DC.language": "en",
    "DC.coverage": "Pune, Maharashtra, India",
    "DC.rights": "Copyright 2024 Ganesh Enterprises",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Favicon Configuration */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/ganesha.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/ganesha.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/ganesha.png" sizes="57x57" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* App Configuration */}
        <meta name="application-name" content="Ganesh Enterprises" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ganesh Enterprises" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileImage" content="/ganesha.png" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ganesh Enterprises",
              "description": "Pune's leading fabrication company since 2005. Expert gym equipment fabrication, godown construction, welding services, and custom iron doors & windows.",
              "url": "https://ganesh-enterprises.in",
              "telephone": "+91-7264843802",
              "email": "info@ganesh-enterprises.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pisoli",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN",
                "postalCode": "411048"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5204",
                "longitude": "73.8567"
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
              "priceRange": "₹₹",
              "paymentAccepted": "Cash, Bank Transfer, Cheque",
              "currenciesAccepted": "INR",
              "serviceType": [
                "Gym Equipment Fabrication",
                "Godown Construction",
                "Welding Services",
                "Custom Iron Doors & Windows",
                "Industrial Fabrication",
                "Steel Fabrication"
              ],
              "foundingDate": "2005",
              "image": "https://ganesh-enterprises.in/ganesha.png",
              "logo": "https://ganesh-enterprises.in/ganesha.png",
              "sameAs": [
                "https://ganesh-enterprises.in"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Fabrication Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gym Equipment Fabrication",
                      "description": "Custom fabrication of gym equipment including weight machines, and specialized fitness solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Godown Construction",
                      "description": "Complete godown and warehouse construction with steel structures, proper ventilation, and storage optimization."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Welding Services",
                      "description": "Professional welding services for industrial, commercial, and residential projects with quality materials."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Iron Doors & Windows",
                      "description": "Custom iron doors and windows with artistic designs, security features, and weather-resistant coatings."
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pune"
                },
                {
                  "@type": "State",
                  "name": "Maharashtra"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7264843802",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": "English, Hindi, Marathi",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7264843802",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": "English, Hindi, Marathi"
                }
              ],
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ganesh Enterprises",
              "url": "https://ganesh-enterprises.in",
              "logo": "https://ganesh-enterprises.in/ganesha.png",
              "description": "Pune's leading fabrication company since 2005",
              "foundingDate": "2005",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pisoli",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7264843802",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://ganesh-enterprises.in"
              ]
            })
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ganesh Enterprises",
              "url": "https://ganesh-enterprises.in",
              "description": "Pune's leading fabrication company since 2005",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ganesh-enterprises.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col h-full text-white`}
      >
        <Navbar />
        <Toaster richColors position="top-center" />
        <main className="flex-1 flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
