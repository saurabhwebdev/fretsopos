import { Metadata } from 'next';
import { seoConfig, pagesSEO } from '@/config/seo';

export const metadata: Metadata = {
  title: pagesSEO.about.title,
  description: pagesSEO.about.description,
  keywords: pagesSEO.about.keywords,
  
  openGraph: {
    title: pagesSEO.about.title,
    description: pagesSEO.about.description,
    url: `${seoConfig.siteUrl}/about`,
    siteName: seoConfig.siteName,
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: pagesSEO.about.title,
    description: pagesSEO.about.description,
  },
  
  alternates: {
    canonical: `${seoConfig.siteUrl}/about`,
  },
};
