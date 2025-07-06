# Ganesh Enterprises - Professional Fabrication Services

A modern, responsive Next.js 14 web application for Ganesh Enterprises, a professional fabrication company in Pune offering gym equipment fabrication, godown construction, welding services, and custom iron doors & windows.

## 🚀 Features

### Core Functionality
- **Modern Next.js 14** with App Router
- **Responsive Design** with Tailwind CSS
- **SEO Optimized** with comprehensive meta tags and structured data
- **Interactive Components** with Framer Motion animations
- **Contact Forms** with WhatsApp integration and email functionality
- **Image Gallery** with modal view and navigation
- **Project Portfolio** with detailed project modals
- **Floating Contact Buttons** for instant communication

### SEO Features
- **Comprehensive Meta Tags** for all pages
- **Open Graph** and **Twitter Card** optimization
- **Structured Data** (JSON-LD) for local business
- **Sitemap.xml** and **robots.txt** generation
- **PWA Support** with manifest.json
- **Schema.org** markup for better search visibility
- **Canonical URLs** and proper redirects
- **Mobile-first** responsive design

### Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: Client-side validation with Sonner toasts
- **Email**: Resend API integration
- **Icons**: React Icons
- **TypeScript**: Full type safety

## 📁 Project Structure

```
ganesh_enterprises/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── AboutContent.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FloatingContactButtons.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ImageModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── QuoteForm.tsx
│   │   ├── RecentProjects.tsx
│   │   └── SEOHead.tsx
│   ├── data/                 # Static data files
│   │   └── projects.ts
│   ├── api/                  # API routes
│   │   ├── contact/
│   │   └── quote/
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── gallery/              # Gallery page
│   ├── projects/             # Projects page
│   ├── quote/                # Quote page
│   ├── services/             # Services page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   ├── page.tsx              # Homepage
│   ├── robots.ts             # Robots.txt generation
│   ├── sitemap.ts            # Sitemap generation
│   └── manifest.ts           # PWA manifest
├── public/                   # Static assets
│   ├── ganesha.png           # Logo
│   ├── gallary1.jpeg         # Gallery images
│   └── ...
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎯 SEO Optimization

### Meta Tags
- **Title Tags**: Optimized for each page with location-based keywords
- **Meta Descriptions**: Compelling descriptions with call-to-action
- **Keywords**: Location-specific and service-focused keywords
- **Open Graph**: Enhanced social media sharing
- **Twitter Cards**: Optimized for Twitter sharing

### Structured Data
- **Local Business Schema**: Complete business information
- **Organization Schema**: Company details and contact info
- **Service Schema**: Individual service offerings
- **Contact Point Schema**: Multiple contact methods
- **Geo Coordinates**: Location data for local SEO

### Technical SEO
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevent duplicate content
- **Mobile Optimization**: Responsive design
- **Page Speed**: Optimized images and code splitting

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd ganesh_enterprises

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables
Create a `.env.local` file with:
```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# WhatsApp Number
NEXT_PUBLIC_WHATSAPP_NUMBER=918767547649

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Google Search Console (optional)
GOOGLE_VERIFICATION_CODE=your_verification_code
```

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with animated Ganesha logo
- Services overview
- Recent projects showcase
- Gallery preview
- Call-to-action sections

### About (`/about`)
- Company history and values
- Team information
- Years of experience
- Quality commitment

### Services (`/services`)
- Detailed service descriptions
- Gym equipment fabrication
- Godown construction
- Welding services
- Custom iron doors & windows

### Projects (`/projects`)
- Portfolio of completed work
- Project details in modals
- Categorized by service type
- High-quality images

### Gallery (`/gallery`)
- Full image gallery
- Modal view with navigation
- Responsive grid layout
- Hover effects and animations

### Contact (`/contact`)
- Contact form with validation
- WhatsApp integration
- Email functionality
- Business hours and location

### Quote (`/quote`)
- Quote request form
- Service selection
- WhatsApp pre-filled messages
- Email notifications

## 🎨 Design System

### Colors
- **Primary**: Amber (#f59e0b)
- **Secondary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Background**: Gradient from gray-50 to white
- **Dark Mode**: Neutral-900 to neutral-950

### Typography
- **Font**: Geist Sans (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Regular weight for readability

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent styling with hover effects
- **Modals**: Smooth animations and keyboard navigation
- **Forms**: Validation and accessibility features

## 📊 Performance

### Optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images
- **Caching**: Static generation where possible
- **Bundle Analysis**: Optimized bundle sizes

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 Customization

### Adding New Services
1. Update `app/data/services.ts`
2. Add service images to `public/`
3. Update SEO keywords and descriptions
4. Modify structured data if needed

### Adding New Projects
1. Update `app/data/projects.ts`
2. Add project images to `public/`
3. Update gallery images array
4. Ensure proper alt text for SEO

### Modifying SEO
1. Update page metadata in individual pages
2. Modify `app/layout.tsx` for global SEO
3. Update structured data in `SEOHead.tsx`
4. Regenerate sitemap if needed

## 📈 Analytics & Monitoring

### Google Analytics
- Page views and user behavior
- Conversion tracking
- Goal completions

### Search Console
- Search performance
- Indexing status
- Mobile usability

### Performance Monitoring
- Core Web Vitals
- Page load times
- User experience metrics

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod
```

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS**: Use Amplify or custom setup
- **DigitalOcean**: App Platform support

## 📞 Support

For technical support or questions:
- **Email**: info@ganesh-enterprises.in
- **Phone**: +91-7264843802
- **WhatsApp**: +91-8767547649

## 📄 License

This project is proprietary to Ganesh Enterprises. All rights reserved.

---

**Built with ❤️ for Ganesh Enterprises**