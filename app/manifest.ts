import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ganesh Enterprises - Professional Fabrication Services',
    short_name: 'Ganesh Enterprises',
    description: 'Professional fabrication services including gym equipment, godown construction, welding, and custom iron doors & windows in Pune.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/ganesha.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
} 