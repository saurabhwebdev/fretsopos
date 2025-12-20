'use client';
// Force rebuild: 2025-10-25T10:16:08Z
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { seoConfig } from '@/config/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FretsoLogo from '@/components/fretso-logo';
import { CheckCircle2, BarChart3, Package, Calendar, Users, Instagram, Facebook, Linkedin, ArrowUp, Receipt, Wrench, Settings, Mail, Star, Quote, ChevronDown } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % madeForTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [madeForTexts.length]);

  // Handle scroll effect for scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Run on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle contact button click - open Tally form
  const handleContactClick = () => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('31ZpZQ', {
        layout: 'modal',
        width: 500,
        autoClose: 3000,
      });
    }
  };

  // Handle demo button click - open Tally demo form with redirect
  const handleDemoClick = () => {
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('3xkvVo', {
        layout: 'modal',
        width: 500,
      });
    }
  };

  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Owner, Paws & Claws Pet Store",
      location: "Mumbai, Maharashtra",
      text: "Fretso has completely transformed how we manage our pet shop in Mumbai. The GST billing is accurate, inventory tracking saves us hours, and our customers love the professional invoices. Best investment for our business!",
      initials: "PM"
    },
    {
      name: "Rajesh Kumar",
      role: "Founder, Furry Friends Spa",
      location: "Bangalore, Karnataka",
      text: "Running a grooming spa requires perfect appointment scheduling. Fretso's system handles everything - from booking slots to tracking pet vaccination records. Our clients are impressed with how organized we've become!",
      initials: "RK"
    },
    {
      name: "Dr. Sneha Desai",
      role: "Head Veterinarian, PetCare Clinic",
      location: "New Delhi, Delhi",
      text: "As a veterinary clinic, maintaining accurate pet health records is crucial. Fretso's comprehensive CRM with vaccination tracking and medical notes has made our operations seamless. The multi-currency support is perfect for our international clients!",
      initials: "DS"
    },
    {
      name: "Anil Patil",
      role: "Manager, Pet Paradise Store",
      location: "Pune, Maharashtra",
      text: "The profit analysis feature is a game-changer! Now I can see exactly which products are making money and which aren't. The expiry alerts have also saved us from losses. Highly recommend Fretso to every pet business owner!",
      initials: "AP"
    }
  ];

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % 3); // 3 slides: dog image, 0.png, and bird
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.organization),
        }}
      />
      
      {/* Software Application Schema */}
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.softwareApplication),
        }}
      />
      
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is my data safe with Fretso?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! We take data security very seriously. Your data is encrypted both in transit and at rest. We use industry-standard security protocols and regularly backup all data. Your business information, customer records, and transaction history are stored securely on our cloud servers with multiple layers of protection."
                }
              },
              {
                "@type": "Question",
                name: "Do you offer installation and setup support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We provide complete onboarding support. Our team will guide you through the installation process, help you set up your initial inventory, import existing customer data, and train your staff on how to use Fretso effectively. We ensure you're fully comfortable with the system before going live."
                }
              },
              {
                "@type": "Question",
                name: "What if I need updates or new features?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All updates and new features are automatically included in your subscription at no extra cost. We continuously improve Fretso based on customer feedback and industry trends. You'll always have access to the latest version with bug fixes, performance improvements, and new functionality."
                }
              },
              {
                "@type": "Question",
                name: "Can I try Fretso before committing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer a free trial period so you can test all features with your actual business data. No credit card required during the trial. Contact us to get started, and we'll set you up with a demo account where you can explore everything Fretso has to offer."
                }
              },
              {
                "@type": "Question",
                name: "What kind of customer support do you provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide comprehensive support through multiple channels - email, phone, WhatsApp, and live chat. Our support team is available during business hours to help with any questions or issues. We also have detailed documentation, video tutorials, and an active community forum."
                }
              },
              {
                "@type": "Question",
                name: "Will Fretso work for my specific type of pet business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fretso is designed to work for all types of pet businesses - pet shops, grooming salons, pet spas, veterinary clinics, and multi-location chains. Our flexible system adapts to your specific needs whether you sell products, offer services, or both. We can customize features based on your business requirements."
                }
              },
              {
                "@type": "Question",
                name: "Can I export my data if I want to switch systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Your data is always yours. You can export all your data (customers, pets, inventory, transactions, etc.) in standard formats like Excel/CSV at any time. We believe in data portability and will never lock you in. If you decide to move to another system, we'll help you export everything smoothly."
                }
              },
              {
                "@type": "Question",
                name: "How does billing work? Are there any hidden fees?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our pricing is completely transparent with no hidden fees. You'll receive a custom quote based on your specific needs (business size, features, users, etc.). Payment is typically monthly or annually. What you see in your quote is exactly what you pay - no surprises, no additional charges for updates or standard support."
                }
              }
            ]
          }),
        }}
      />
      
      {/* Tally Forms Script */}
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />
      
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Editorial Luxe Design */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        {/* Background with gradient mesh */}
        <div className="absolute inset-0 bg-white dark:bg-background gradient-mesh" />

        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Decorative geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 hero-shape animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 left-1/4 w-32 h-32 hero-shape animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-20 w-20 h-20 rounded-full border-2 border-[#E50914]/20 animate-rotate-slow hidden lg:block" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full border border-[#E50914]/10 animate-rotate-slow hidden lg:block" style={{ animationDirection: 'reverse' }} />

        {/* Main content container */}
        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

          {/* Left Side - Content */}
          <div className="w-full lg:w-[55%] flex items-center justify-center lg:justify-start px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-0 order-2 lg:order-1">
            <div className="max-w-2xl space-y-6 sm:space-y-8">

              {/* Overline tag */}
              <div
                className="opacity-0 animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  #1 Pet Business Software
                </span>
              </div>

              {/* Main heading - Editorial style */}
              <div className="space-y-2 sm:space-y-4">
                <h1
                  className="opacity-0 animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                  style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                >
                  Pet Business
                </h1>
                <h1
                  className="opacity-0 animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                  style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                >
                  Management
                </h1>
                <div
                  className="opacity-0 animate-fade-in-up flex items-center gap-3 sm:gap-4"
                  style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                    Made for
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-text-shimmer">
                    {madeForTexts[currentTextIndex]}
                  </span>
                </div>
              </div>

              {/* Description with accent line */}
              <div
                className="opacity-0 animate-fade-in-up flex items-start gap-4 pt-2"
                style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
              >
                <div className="w-1 h-16 bg-gradient-to-b from-[#E50914] to-[#E50914]/20 rounded-full flex-shrink-0 mt-1" />
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                  The complete solution for Pet Shops, Grooming Spas & Veterinary Clinics across India
                </p>
              </div>

              {/* CTA Buttons with staggered animation */}
              <div
                className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="group relative bg-[#E50914] hover:bg-[#C40812] active:scale-95 text-white font-semibold px-10 py-7 text-lg w-full sm:w-auto transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d5a] to-[#E50914] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('features')}
                  className="group px-10 py-7 text-lg w-full sm:w-auto active:scale-95 transition-all duration-300 border-2 border-gray-900 dark:border-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900"
                >
                  <span className="flex items-center gap-2">
                    Explore Features
                    <svg className="w-5 h-5 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>

              {/* Trust indicators */}
              <div
                className="opacity-0 animate-fade-in-up flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200 dark:border-gray-800"
                style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['PM', 'RK', 'DS', 'AP'].map((initials, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E50914] to-[#ff4d5a] flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-background">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-gray-100">500+</strong> Happy Businesses
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E50914] text-[#E50914]" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Showcase */}
          <div className="w-full lg:w-[45%] relative h-[50vh] sm:h-[60vh] lg:h-auto order-1 lg:order-2">
            {/* Diagonal clip mask for desktop */}
            <div className="absolute inset-0 hero-image-mask">
              {/* Image container with slides */}
              <div className="relative w-full h-full">
                {/* Slide 1 - Dog Image */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-out ${
                    currentHeroSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(/herobg.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 dark:from-background/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/50 lg:dark:from-background/50" />
                </div>

                {/* Slide 2 - Image */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-out ${
                    currentHeroSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E50914] to-[#8B0000]"
                    style={{
                      backgroundImage: 'url(/0.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 dark:from-background/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/50 lg:dark:from-background/50" />
                </div>

                {/* Slide 3 - Bird Image */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-out ${
                    currentHeroSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E50914] to-[#8B0000]"
                    style={{
                      backgroundImage: 'url(/bird.png)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 dark:from-background/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/50 lg:dark:from-background/50" />
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-1/2 lg:left-auto lg:right-8 transform -translate-x-1/2 lg:translate-x-0 flex gap-2 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentHeroSlide
                      ? 'w-8 h-2 bg-white'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating feature cards */}
            <div
              className="hidden lg:block absolute bottom-24 left-0 transform -translate-x-1/2 opacity-0 animate-fade-in-left z-20"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Smart POS</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">GST Compliant Billing</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hidden lg:block absolute top-32 left-8 opacity-0 animate-fade-in-right z-20"
              style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-5 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Appointments</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Grooming & Vet Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <span className="text-xs text-gray-500 dark:text-gray-400 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-[#E50914] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section - Editorial Bento Grid */}
      <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-background" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E50914]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E50914]/30 to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#E50914]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E50914]/3 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                Powerful Features
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Everything you need to
              <span className="block mt-2 animate-text-shimmer">run your pet business</span>
            </h2>

            {/* Description with accent */}
            <div className="flex items-center justify-center gap-4">
              <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent to-[#E50914]" />
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Complete suite of tools for seamless pet care business operations
              </p>
              <div className="hidden sm:block w-12 h-px bg-gradient-to-l from-transparent to-[#E50914]" />
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Large Featured Card - Smart POS */}
            <div className="group md:col-span-2 lg:col-span-2 lg:row-span-2 relative bg-gradient-to-br from-[#E50914] to-[#8B0000] rounded-3xl p-8 sm:p-10 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 border border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Smart POS System</h3>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                  Quick checkout with Cash, Card, UPI, Wallet payments. Grid/Table view toggle, cart management, customer linking & real-time stats dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GST Ready', 'Multi-Payment', 'Real-time'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Medium Cards */}
            {[
              { icon: Package, title: 'Advanced Inventory', description: 'Stock tracking with min/max/reorder points, expiry alerts, batch numbers & profit analysis.', accent: true },
              { icon: Calendar, title: 'Appointment Scheduling', description: 'Book grooming/vet visits with pet linking, time slots & deposit tracking.', accent: false },
              { icon: Users, title: 'Customer & Pet CRM', description: 'Complete profiles with unlimited pets, vaccination history & lifetime value tracking.', accent: false },
              { icon: Receipt, title: 'Smart Discounts', description: 'Flexible percentage or fixed discounts with reason tracking & live preview.', accent: true },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                    feature.accent
                      ? 'bg-gray-900 dark:bg-gray-900'
                      : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                      feature.accent
                        ? 'bg-[#E50914]'
                        : 'bg-[#E50914]/10'
                    }`}>
                      <Icon className={`w-6 h-6 ${feature.accent ? 'text-white' : 'text-[#E50914]'}`} />
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                      feature.accent
                        ? 'text-white'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      feature.accent
                        ? 'text-gray-300'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Wide Card - Vaccination & Certificates */}
            <div className="group md:col-span-2 relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:border-[#E50914]/50">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex gap-4 sm:gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E50914] to-[#ff4d5a] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-[#E50914]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '50ms' }}>
                    <Package className="w-7 h-7 text-[#E50914]" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Vaccination Tracking & Certificates
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Complete pet vaccination records with upcoming & overdue alerts. Generate professional certificates with unique numbers, batch operations & PDF export.
                  </p>
                </div>
              </div>
            </div>

            {/* Remaining Feature Cards */}
            {[
              { icon: Wrench, title: 'Services Management', description: 'Time-based services with categories, pricing & GST configuration.' },
              { icon: Package, title: 'Transaction Management', description: 'Full sales history with GST breakdown & detailed invoices.' },
              { icon: Package, title: 'Stock Movement', description: 'Complete audit trail of all inventory changes.' },
              { icon: BarChart3, title: 'Supplier Management', description: 'Manage contacts, payment terms & order history.' },
              { icon: Package, title: 'Business Analytics', description: 'Revenue trends, top products & comprehensive reports.' },
              { icon: Mail, title: 'Email Integration', description: 'Automated notifications for appointments & vaccinations.' },
              { icon: Settings, title: 'Automated Reminders', description: 'Configurable timing with delivery tracking.' },
              { icon: Receipt, title: 'Advanced Reporting', description: 'Sales analysis, customer behavior & performance metrics.' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#E50914]/50 hover:shadow-lg hover:shadow-[#E50914]/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E50914]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E50914] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#E50914] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-[#E50914] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loyalty Points - Special Card */}
            <div className="group md:col-span-2 lg:col-span-2 relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#E50914] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#E50914] rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#E50914] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex gap-1">
                    {['Bronze', 'Silver', 'Gold'].map((tier, i) => (
                      <div
                        key={tier}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          i === 0 ? 'bg-amber-700 text-amber-100' :
                          i === 1 ? 'bg-gray-400 text-gray-900' :
                          'bg-yellow-500 text-yellow-900'
                        }`}
                      >
                        {tier}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Loyalty Points System
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Reward customers with points on every purchase. Multi-tier system with automatic point calculation, redemption at checkout & email notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('demo')}
              className="group bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-10 py-7 text-lg shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/25 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                See All Features in Action
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section - Marquee Style */}
      <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                Why Fretso
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Why choose Fretso for
              <span className="block mt-2 text-[#E50914]">your pet business?</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Built specifically for the Indian pet care industry with 35+ powerful features
            </p>
          </div>

          {/* Benefits Grid - Categorized */}
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Category 1: Core Business */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Core Business Features</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'GST & Tax Compliant', description: 'Automatic CGST, SGST, IGST calculation with configurable rates' },
                  { title: 'Multi-Currency', description: '7+ currencies with 10+ language formats' },
                  { title: '4 Payment Methods', description: 'Cash, Card, UPI & Digital Wallet support' },
                  { title: 'Cost & Profit Analysis', description: 'Real-time profit margins & revenue analysis' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2: Pet & Health */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Pet Care & Health</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Vaccination Tracking', description: 'Complete records with 30-day alerts & overdue notifications' },
                  { title: 'Certificate Generation', description: 'Professional certificates with unique numbers & PDF export' },
                  { title: 'Pet Health Records', description: 'Medical notes, allergies, microchip & weight tracking' },
                  { title: 'Pet Species & Breed', description: 'Detailed info with age, gender, color & image codes' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3: Inventory & Stock */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Inventory & Stock</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Smart Stock Management', description: 'Min/max/reorder alerts & supplier tracking' },
                  { title: 'Expiry & Batch Tracking', description: 'Auto expiry warnings for medicines & food' },
                  { title: 'Stock Movement Audit', description: 'Complete trail of all inventory changes' },
                  { title: 'SKU & Barcode Support', description: 'Scanner integration for faster checkout' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4: Automation & Communications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Automation & Communications</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Email Integration', description: 'Gmail, Outlook, Yahoo & custom SMTP support' },
                  { title: 'Automated Reminders', description: 'Appointment & vaccination email alerts' },
                  { title: 'Bulk Excel Operations', description: 'Import/export all data with full portability' },
                  { title: 'Email Delivery Tracking', description: 'Monitor send status & troubleshoot issues' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 5: Loyalty & Customers */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Loyalty & Customer Management</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Customer Loyalty Rewards', description: 'Earn points on purchases with 1:1 redemption' },
                  { title: 'Tier-Based Program', description: 'Bronze, Silver & Gold multiplier tiers' },
                  { title: 'Customer Lifetime Value', description: 'Track purchases & spending patterns' },
                  { title: 'Configurable Rules', description: 'Custom earn rates, thresholds & expiry' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 6: Platform */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Platform & Experience</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Dark Mode Support', description: 'Beautiful dark theme across all pages' },
                  { title: 'Responsive Design', description: 'Perfect on desktop, tablet & mobile' },
                  { title: 'Dashboard Statistics', description: 'Real-time sales & inventory insights' },
                  { title: 'Search & Filter', description: 'Powerful search with multiple filters' },
                ].map((benefit, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#E50914]/50 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '35+', label: 'Features' },
                { value: '500+', label: 'Businesses' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl sm:text-4xl font-bold text-[#E50914] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Bold Editorial */}
      <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-white dark:bg-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E50914]/5 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  Simple Pricing
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Flexible Pricing for
                <span className="block mt-2 text-[#E50914]">Your Business</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Every pet business is unique. Get a custom quote tailored to your specific needs.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="relative max-w-4xl mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#E50914]/20 rounded-3xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#E50914]/10 rounded-3xl -z-10" />

              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Top accent bar */}
                <div className="h-2 bg-gradient-to-r from-[#E50914] via-[#ff4d5a] to-[#E50914]" />

                <div className="p-8 sm:p-12 lg:p-16">
                  {/* Price display */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">Custom</span>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Tailored to your business needs</p>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { title: 'Business Size', desc: 'Single store or multi-location', icon: BarChart3 },
                      { title: 'Features Needed', desc: 'Choose only what you use', icon: Package },
                      { title: 'Number of Users', desc: 'Pay for active users only', icon: Users },
                      { title: 'Transaction Volume', desc: 'Scales with your growth', icon: Receipt },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                          <div className="w-10 h-10 bg-[#E50914]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[#E50914]" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={() => scrollToSection('contact')}
                      className="group bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-12 py-7 text-lg shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/25 transition-all duration-300 w-full sm:w-auto"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Custom Quote
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Free trial available. No credit card required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Card Carousel */}
      <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-950">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E50914]/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                Testimonials
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Trusted by Pet Businesses
              <span className="block mt-2 text-[#E50914]">Across India</span>
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote mark */}
              <div className="absolute -top-6 left-8 sm:left-12">
                <Quote className="w-16 h-16 text-[#E50914]/20" />
              </div>

              {/* Main Card */}
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#E50914] text-[#E50914]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-10">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E50914] to-[#ff4d5a] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].initials}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-900 dark:text-white">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E50914] hover:text-white transition-colors duration-300"
                      aria-label="Previous testimonial"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E50914] hover:text-white transition-colors duration-300"
                      aria-label="Next testimonial"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTestimonial
                        ? 'w-10 h-3 bg-[#E50914]'
                        : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-[#E50914]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion */}
      <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-background" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Frequently Asked
                <span className="block mt-2 text-[#E50914]">Questions</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                Got questions? We've got answers.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: "Is my data safe with Fretso?",
                  answer: "Absolutely! We take data security very seriously. Your data is encrypted both in transit and at rest. We use industry-standard security protocols and regularly backup all data. Your business information, customer records, and transaction history are stored securely on our cloud servers with multiple layers of protection."
                },
                {
                  question: "Do you offer installation and setup support?",
                  answer: "Yes! We provide complete onboarding support. Our team will guide you through the installation process, help you set up your initial inventory, import existing customer data, and train your staff on how to use Fretso effectively. We ensure you're fully comfortable with the system before going live."
                },
                {
                  question: "What if I need updates or new features?",
                  answer: "All updates and new features are automatically included in your subscription at no extra cost. We continuously improve Fretso based on customer feedback and industry trends. You'll always have access to the latest version with bug fixes, performance improvements, and new functionality."
                },
                {
                  question: "Can I try Fretso before committing?",
                  answer: "Yes! We offer a free trial period so you can test all features with your actual business data. No credit card required during the trial. Contact us to get started, and we'll set you up with a demo account where you can explore everything Fretso has to offer."
                },
                {
                  question: "What kind of customer support do you provide?",
                  answer: "We provide comprehensive support through multiple channels - email, phone, WhatsApp, and live chat. Our support team is available during business hours to help with any questions or issues. We also have detailed documentation, video tutorials, and an active community forum."
                },
                {
                  question: "Will Fretso work for my specific type of pet business?",
                  answer: "Fretso is designed to work for all types of pet businesses - pet shops, grooming salons, pet spas, veterinary clinics, and multi-location chains. Our flexible system adapts to your specific needs whether you sell products, offer services, or both. We can customize features based on your business requirements."
                },
                {
                  question: "Can I export my data if I want to switch systems?",
                  answer: "Yes! Your data is always yours. You can export all your data (customers, pets, inventory, transactions, etc.) in standard formats like Excel/CSV at any time. We believe in data portability and will never lock you in. If you decide to move to another system, we'll help you export everything smoothly."
                },
                {
                  question: "How does billing work? Are there any hidden fees?",
                  answer: "Our pricing is completely transparent with no hidden fees. You'll receive a custom quote based on your specific needs (business size, features, users, etc.). Payment is typically monthly or annually. What you see in your quote is exactly what you pay - no surprises, no additional charges for updates or standard support."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`group bg-white dark:bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index
                      ? 'border-[#E50914] shadow-lg shadow-[#E50914]/10'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                        openFaqIndex === index
                          ? 'bg-[#E50914] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                      }`}>
                        {index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#E50914] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 pl-[4.5rem] sm:pl-[5.5rem]">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          {/* Still have questions CTA */}
            <div className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Still have questions? We're here to help!
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                className="group bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-8 py-6"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Section - Interactive */}
      <section id="demo" className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E50914]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                  Live Demo
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Experience Fretso
                <span className="block mt-2 text-[#E50914]">in Action</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                See how Fretso can transform your pet business with our interactive demo.
              </p>
            </div>

            {/* Demo Card */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-12">
                {/* Play button animation */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#E50914] rounded-full animate-ping opacity-20" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-[#E50914] to-[#ff4d5a] rounded-full flex items-center justify-center shadow-2xl shadow-[#E50914]/30">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Demo features grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { icon: BarChart3, title: 'POS System', desc: 'Real transactions' },
                    { icon: Package, title: 'Inventory', desc: 'Stock tracking' },
                    { icon: Calendar, title: 'Appointments', desc: 'Scheduling' },
                    { icon: Users, title: 'Customer CRM', desc: 'Pet management' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="w-10 h-10 bg-[#E50914]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-5 h-5 text-[#E50914]" />
                        </div>
                        <p className="font-semibold text-white text-sm">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={handleDemoClick}
                    className="group bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-12 py-7 text-lg shadow-xl hover:shadow-2xl hover:shadow-[#E50914]/25 transition-all duration-300"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Try Live Demo Now
                    </span>
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    No credit card required. Explore all features instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Call to Action */}
      <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E50914] via-[#C40812] to-[#8B0000]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90">
                Get Started Today
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Ready to Transform Your
              <span className="block">Pet Business?</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
              Join 500+ pet shops, spas & clinics across India using Fretso
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
              {[
                { href: "mailto:hello@fretso.in", icon: Mail, label: "Email" },
                { href: "https://www.instagram.com/fretsoindia", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/fretsoindia", icon: Facebook, label: "Facebook" },
                { href: "https://www.linkedin.com/company/fretsoindia/", icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
              <a
                href="https://wa.me/918282867803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={handleContactClick}
              className="group bg-white hover:bg-gray-100 text-[#E50914] font-bold px-14 py-8 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                Contact Us
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-[#E50914] hover:bg-[#C40812] active:scale-95 text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      <Footer />
    </div>
    </>
  );
}
