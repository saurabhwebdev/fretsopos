import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import { seoConfig } from "@/config/seo";
import ClarityAnalytics from "@/components/clarity";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.creator,
  publisher: seoConfig.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: seoConfig.category,
  classification: seoConfig.classification,
  
  // Icons
  icons: {
    icon: [
      { url: seoConfig.icons.icon, sizes: "any" },
      { url: seoConfig.icons.shortcut, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: seoConfig.icons.apple, sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23E50914'/><text x='50' y='70' font-size='70' font-weight='bold' text-anchor='middle' fill='white' font-family='Arial'>F</text></svg>",
      },
    ],
  },
  
  // Manifest
  manifest: seoConfig.manifest,
  
  // Open Graph
  openGraph: {
    type: seoConfig.openGraph.type as any,
    locale: seoConfig.openGraph.locale,
    alternateLocale: seoConfig.openGraph.alternateLocales,
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    url: seoConfig.siteUrl,
    images: seoConfig.openGraph.images,
  },
  
  // Twitter
  twitter: {
    card: seoConfig.twitter.card as any,
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.creator,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  
  // Robots
  robots: seoConfig.robots,
  
  // Verification
  verification: seoConfig.verification,
  
  // Alternates
  alternates: {
    canonical: seoConfig.alternates.canonical,
    languages: seoConfig.alternates.languages,
  },
  
  // App Links
  ...(seoConfig.appLinks.ios.url && {
    appLinks: {
      ios: seoConfig.appLinks.ios,
      android: seoConfig.appLinks.android,
    },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: seoConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <ClarityAnalytics />
        {children}
      </body>
    </html>
  );
}
