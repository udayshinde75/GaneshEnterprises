import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/services',
          '/projects',
          '/gallery',
          '/contact',
          '/quote',
          '/pune-fabrication-services',
          '/gym-equipment-pune',
          '/godown-construction-pune',
          '/welding-services-pune',
          '/iron-doors-windows-pune',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/temp/',
          '/draft/',
          '*.json',
          '*.xml',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
    ],
      sitemap: 'https://ganeshenterprise.in/sitemap.xml',
  host: 'https://ganeshenterprise.in',
  }
} 