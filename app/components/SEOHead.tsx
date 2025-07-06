import Script from "next/script";

interface SEOHeadProps {
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  pageUrl?: string;
  pageType?: "website" | "article" | "product";
  imageUrl?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  pageTitle = "Ganesh Enterprises - Professional Fabrication Services in Pune",
  pageDescription = "Professional fabrication services including gym equipment, godown construction, welding, and custom iron doors & windows in Pune. Quality workmanship since 2005.",
  pageKeywords = ["fabrication services pune", "gym equipment fabrication", "godown construction", "welding services"],
  pageUrl = "https://ganesh-enterprises.in",
  pageType = "website",
  imageUrl = "/ganesha.png",
  imageAlt = "Ganesh Enterprises",
  publishedTime,
  modifiedTime,
  author = "Ganesh Enterprises",
  section,
  tags = []
}: SEOHeadProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageType === "article" ? "Article" : "WebPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": pageUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "Ganesh Enterprises",
              "url": "https://ganesh-enterprises.in",
        "logo": "https://ganesh-enterprises.in/ganesha.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7264843802",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pisoli",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://ganesh-enterprises.in"
      ]
    },
    ...(pageType === "article" && {
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ganesh Enterprises",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ganesh-enterprises.in/ganesha.png"
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "articleSection": section,
      "keywords": [...pageKeywords, ...tags].join(", ")
    })
  };

  return (
    <>
      {/* Additional Meta Tags */}
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Open Graph Enhanced */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={pageType} />
              <meta property="og:image" content={`https://ganesh-enterprises.in${imageUrl}`} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Ganesh Enterprises" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
              <meta name="twitter:image" content={`https://ganesh-enterprises.in${imageUrl}`} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#f59e0b" />
      <meta name="msapplication-TileColor" content="#f59e0b" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ganesh Enterprises" />
      
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Additional Schema for Local Business */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ganesh Enterprises",
            "description": "Professional fabrication services in Pune",
            "url": "https://ganesh-enterprises.in",
            "telephone": "+91-7264843802",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pisoli",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "18.5204",
              "longitude": "73.8567"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "₹₹",
            "serviceType": [
              "Gym Equipment Fabrication",
              "Godown Construction", 
              "Welding Services",
              "Custom Iron Doors & Windows"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Pune"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fabrication Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gym Equipment Fabrication"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Godown Construction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Welding Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Iron Doors & Windows"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  );
} 