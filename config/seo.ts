export const seoConfig = {
  // Basic Site Info
  siteName: "Fretso",
  siteUrl: "https://fretso.in",
  defaultTitle: "Fretso - Pet Business Management Software for India",
  titleTemplate: "%s | Fretso",
  
  // Default Meta Description
  description: "Pet business management for India: GST billing, inventory, appointments & CRM for pet shops, spas & clinics. Custom pricing for your needs.",
  
  // Keywords
  keywords: [
    "pet shop management software",
    "pet spa software India",
    "pet clinic management",
    "GST billing for pet shops",
    "pet grooming appointments",
    "pet business software",
    "veterinary management India",
    "pet store POS system",
    "pet inventory management",
    "pet care business software",
    "Indian pet shop software",
    "pet appointment booking",
    "pet salon management",
    "pet health records",
    "custom pet software pricing",
    "affordable pet business software",
    "flexible pet management pricing",
    "Bharat pet business",
    "multi-location pet store software"
  ],
  
  // Author & Creator
  author: "Fretso Team",
  creator: "Fretso",
  publisher: "Fretso",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocales: ["hi_IN"],
    siteName: "Fretso",
    title: "Fretso - Pet Business Management for India",
    description: "Complete solution for pet shops, spas & clinics in India. GST billing, inventory, appointments & more. Custom pricing for every business.",
    images: [
      {
        url: "https://fretso.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fretso - Pet Business Management Software",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@fretso", // Update with actual Twitter handle
    creator: "@fretso",
    title: "Fretso - Pet Business Management for India",
    description: "Complete solution for pet shops, spas & clinics in India. Custom pricing tailored to your business needs.",
    images: ["https://fretso.in/og-image.png"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  
  // Verification
  verification: {
    google: "", // Add Google Search Console verification code
    yandex: "",
    bing: "",
  },
  
  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  // Manifest
  manifest: "/site.webmanifest",
  
  // Theme Color
  themeColor: "#E50914",
  
  // Additional Metadata
  category: "Business Software",
  classification: "Pet Business Management Software",
  
  // Alternate Languages
  alternates: {
    canonical: "https://fretso.in",
    languages: {
      "en-IN": "https://fretso.in",
      "hi-IN": "https://fretso.in/hi",
    },
  },
  
  // App Links (if you have mobile apps)
  appLinks: {
    ios: {
      url: "",
      app_store_id: "",
    },
    android: {
      package: "",
      url: "",
    },
  },
  
  // Business/Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://fretso.in/#organization",
    name: "Fretso",
    legalName: "Fretso",
    url: "https://fretso.in",
    logo: "https://fretso.in/logo.png",
    description: "Pet business management software for India - Built for pet shops, spas, and clinics",
    email: "hello@fretso.in",
    telephone: "+91-8282867803",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    sameAs: [
      "https://www.instagram.com/fretsoindia",
      "https://www.linkedin.com/company/fretsoindia/",
      "https://www.facebook.com/fretsoindia",
      "https://www.youtube.com/@FretsoIndia",
      "https://www.snapchat.com/add/fretsoindia",
    ],
    foundingDate: "2024",
    slogan: "Pet Business Management Made for India",
  },
  
  // Software Application Schema
  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://fretso.in/#software",
    name: "Fretso",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Custom pricing based on business needs",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    description: "Complete pet business management solution with GST billing, inventory, appointments, and CRM",
    featureList: [
      "GST Billing & Invoicing",
      "Inventory Management",
      "Appointment Scheduling",
      "Customer & Pet CRM",
      "Vaccination Tracking",
      "Multi-Currency Support",
    ],
  },
};

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title: "Pet Business Management Software for India",
    description: "Complete solution for pet shops, spas & clinics. GST billing, inventory, appointments & CRM. Custom pricing. Made for India.",
    keywords: ["pet shop software", "pet business India", "GST billing pets"],
  },
  features: {
    title: "Features - Complete Pet Business Tools",
    description: "Explore POS, Inventory Management, Appointments, Customer Records, Reports and more features designed for pet businesses.",
    keywords: ["pet POS system", "pet inventory", "appointment booking"],
  },
  pricing: {
    title: "Custom Pricing - Flexible Plans for Your Pet Business",
    description: "Get custom pricing tailored to your pet business needs. No two businesses are the same - our pricing adapts to your size, features, and requirements.",
    keywords: ["pet software pricing", "custom pet business pricing", "affordable pet management", "flexible pricing plans"],
  },
  contact: {
    title: "Contact Us - Get Started with Fretso",
    description: "Ready to transform your pet business? Contact us to get started with Fretso today.",
    keywords: ["contact Fretso", "pet software demo", "get started"],
  },
  about: {
    title: "About Us - Our Vision, Mission & Values",
    description: "Learn about Fretso's mission to empower India's pet care industry. Discover our story, vision, and commitment to helping pet businesses thrive with purpose-built management software.",
    keywords: ["about Fretso", "pet software company India", "Fretso vision", "pet business solutions", "pet care technology"],
  },
  support: {
    title: "Support & Help Center - Get Help with Fretso",
    description: "Access guides, video tutorials, documentation, and contact our support team. Get help with setup, features, troubleshooting, and more. Multiple support channels available.",
    keywords: ["Fretso support", "pet software help", "Fretso tutorials", "customer support", "help center", "user guides"],
  },
};
