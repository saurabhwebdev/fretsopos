'use client';
// Force rebuild: 2025-10-25T10:16:08Z
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { seoConfig } from '@/config/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FretsoLogo from '@/components/fretso-logo';
import { CheckCircle2, BarChart3, Package, Calendar, Users, Instagram, Facebook, Linkedin, ArrowUp, Receipt, Wrench, Settings } from 'lucide-react';

export default function Home() {
  // Rotating text for "Made for India" in different Indian languages
  const madeForTexts = [
    "India",
    "Bharat", // Sanskrit/Hindi
    "भारत", // Hindi (Devanagari)
    "ભારત", // Gujarati
    "ভারত", // Bengali
    "భారతదేశం", // Telugu
    "பாரதம்", // Tamil
    "ಭಾರತ", // Kannada
    "ഭാരതം", // Malayalam
    "ਭਾਰਤ", // Punjabi
    "भारत", // Marathi
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [logoColor, setLogoColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % madeForTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [madeForTexts.length]);

  // Handle scroll effect for navbar and scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      // Simple logo color logic: white on hero section (top), red on rest
      if (scrollY < 500) {
        setLogoColor('white');
      } else {
        setLogoColor('red');
      }
    };

    // Run on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: BarChart3,
      title: "Point of Sale",
      description: "Billing made easy for pet products & services with GST support"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track pet food, accessories, medicines & grooming supplies"
    },
    {
      icon: Calendar,
      title: "Grooming & Appointments",
      description: "Schedule spa, grooming sessions & vet consultations"
    },
    {
      icon: Users,
      title: "Pet Parent Records",
      description: "Manage customer & pet details, vaccination history"
    }
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.organization),
        }}
      />
      
    <div className="min-h-screen bg-background">
      {/* Transparent Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
        <div className={`container mx-auto px-4 sm:px-6 py-4 sm:py-6 transition-all duration-500 ${
          isScrolled ? 'mt-2 sm:mt-4 bg-white/30 backdrop-blur-xl shadow-2xl rounded-full max-w-4xl border border-white/20' : ''
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <FretsoLogo size="sm" className={`transition-colors duration-300 ${logoColor === 'white' ? 'text-white' : 'text-[#E50914]'}`} />
            
            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <button onClick={() => scrollToSection('features')} className="text-xs lg:text-sm font-medium text-[#E50914] bg-white/90 px-3 lg:px-4 py-2 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                Features
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-xs lg:text-sm font-medium text-[#E50914] bg-white/90 px-3 lg:px-4 py-2 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                Benefits
              </button>
              <Button 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-white hover:shadow-lg hover:scale-105 text-[#E50914] font-semibold transition-all duration-300 text-xs lg:text-sm"
              >
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${isScrolled ? 'text-[#E50914]' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl">
              <div className="flex flex-col space-y-3 px-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-sm font-medium text-[#E50914] bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all text-left"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-sm font-medium text-[#E50914] bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all text-left"
                >
                  Benefits
                </button>
                <Button 
                  size="sm" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row lg:min-h-screen">
        {/* Left Side - Image */}
        <div 
          className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:min-h-screen order-1 lg:order-none"
          style={{
            backgroundImage: 'url(/herobg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-6 sm:p-8 lg:p-16 order-2 lg:order-none">
          <div className="max-w-lg space-y-6 sm:space-y-8 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-2">
              <FretsoLogo size="lg" />
            </div>
            
            {/* Main heading */}
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                Pet Business Management
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E50914] leading-snug">
                Made for <span className="transition-all duration-500">{madeForTexts[currentTextIndex]}</span>
              </h2>
            </div>
            
            {/* Simple description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed pt-2">
              For Pet Shops, Spas & Clinics
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6">
              <Button 
                size="lg" 
                className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Everything you need to run your pet business</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-3">Complete suite of tools for seamless pet care business operations</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: BarChart3, title: 'Point of Sale', description: 'Fast billing with GST support and receipts.' },
            { icon: Package, title: 'Inventory', description: 'Track stock for food, accessories and medicines.' },
            { icon: Calendar, title: 'Appointments', description: 'Manage grooming and vet schedules.' },
            { icon: Users, title: 'Customers', description: 'Pet parent profiles and pet history.' },
            { icon: Receipt, title: 'Transactions', description: 'Sales history and invoices.' },
            { icon: Wrench, title: 'Services', description: 'Grooming and spa services management.' },
            { icon: BarChart3, title: 'Reports', description: 'Analytics and business insights.' },
            { icon: Settings, title: 'Settings', description: 'Customize to your workflow.' },
          ].map((feature, index) => {
            const Icon = feature.icon as any;
            return (
              <Card key={index} className="border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="p-5">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Why choose Fretso for your pet business?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-3">Built specifically for the Indian pet care industry</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'GST Compliant', description: 'Automatic GST calculation and invoicing' },
              { title: 'Multi-Location', description: 'Manage multiple stores from one dashboard' },
              { title: 'Pet Health Records', description: 'Track vaccination and medical history' },
              { title: 'Bilingual Support', description: 'Available in Hindi & English' },
              { title: 'WhatsApp Integration', description: 'Automated appointment reminders' },
              { title: 'Affordable Pricing', description: 'Made for Indian small businesses' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#E50914] hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="bg-[#E50914] rounded-3xl p-12 sm:p-16 md:p-20 lg:p-24 text-center space-y-8 sm:space-y-10 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to Transform Your Pet Business?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Join pet shops, spas & clinics across India using Fretso
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-[#E50914] font-semibold px-10 sm:px-12 py-6 sm:py-7 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#E50914] hover:bg-[#C40812] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <FretsoLogo size="sm" />
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
            
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © 2025 Fretso. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
