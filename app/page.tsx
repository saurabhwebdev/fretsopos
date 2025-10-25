'use client';
// Force rebuild: 2025-10-25T10:16:08Z
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { seoConfig } from '@/config/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FretsoLogo from '@/components/fretso-logo';
import { CheckCircle2, BarChart3, Package, Calendar, Users, Instagram, Facebook, Linkedin, ArrowUp, Receipt, Wrench, Settings, Mail } from 'lucide-react';

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
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mqagkzle', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setIsContactDialogOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          isScrolled ? 'sm:mt-4 bg-white/30 backdrop-blur-xl shadow-2xl md:rounded-full max-w-4xl border border-white/20' : ''
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
              <button onClick={() => scrollToSection('pricing')} className="text-xs lg:text-sm font-medium text-[#E50914] bg-white/90 px-3 lg:px-4 py-2 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
                Pricing
              </button>
              <Button 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-white hover:shadow-lg hover:scale-105 text-[#E50914] font-semibold transition-all duration-300 text-xs lg:text-sm"
              >
                Contact Us
              </Button>
            </div>
            
            {/* Mobile Menu - Sheet */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className={`p-2 ${isScrolled ? 'text-[#E50914]' : 'text-white'}`}
                    aria-label="Toggle menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate to different sections of the website
                  </SheetDescription>
                  <div className="flex flex-col space-y-4 mt-8">
                    <button 
                      onClick={() => scrollToSection('features')}
                      className="text-base font-medium text-[#E50914] bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300 text-left transform"
                    >
                      Features
                    </button>
                    <button 
                      onClick={() => scrollToSection('benefits')}
                      className="text-base font-medium text-[#E50914] bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300 text-left transform"
                    >
                      Benefits
                    </button>
                    <button 
                      onClick={() => scrollToSection('pricing')}
                      className="text-base font-medium text-[#E50914] bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300 text-left transform"
                    >
                      Pricing
                    </button>
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('contact')}
                      className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold w-full hover:scale-105 hover:shadow-lg transition-all duration-300 transform"
                    >
                      Contact Us
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row lg:min-h-screen">
        {/* Left Side - Image */}
        <div 
          className="w-full lg:w-1/2 h-[45vh] sm:h-[55vh] lg:min-h-screen order-1 lg:order-none"
          style={{
            backgroundImage: 'url(/herobg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 sm:p-10 lg:p-16 order-2 lg:order-none">
          <div className="max-w-lg space-y-5 sm:space-y-8 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-1">
              <FretsoLogo size="lg" />
            </div>
            
            {/* Main heading */}
            <div className="space-y-1.5 sm:space-y-3">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Pet Business Management
              </h2>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E50914] leading-tight">
                Made for <span className="transition-all duration-500">{madeForTexts[currentTextIndex]}</span>
              </h2>
            </div>
            
            {/* Simple description */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed pt-1">
              For Pet Shops, Spas & Clinics
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 sm:pt-6">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-[#E50914] hover:bg-[#C40812] active:scale-95 text-white font-semibold px-8 sm:px-8 py-6 sm:py-6 text-base sm:text-base w-full sm:w-auto transition-all duration-200 shadow-lg"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('features')}
                className="px-8 sm:px-8 py-6 sm:py-6 text-base sm:text-base w-full sm:w-auto active:scale-95 transition-all duration-200 border-2"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-4">Everything you need to run your pet business</h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 px-4">Complete suite of tools for seamless pet care business operations</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
              <Card key={index} className="border border-gray-200 hover:border-[#E50914]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="p-4 sm:p-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E50914]" />
                  </div>
                  <CardTitle className="text-base sm:text-lg mb-1.5">{feature.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-snug">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-4">Why choose Fretso for your pet business?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 px-4">Built specifically for the Indian pet care industry</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {[
              { title: 'GST Compliant', description: 'Automatic GST calculation and invoicing' },
              { title: 'Multi-Location', description: 'Manage multiple stores from one dashboard' },
              { title: 'Pet Health Records', description: 'Track vaccination and medical history' },
              { title: 'Bilingual Support', description: 'Available in Hindi & English' },
              { title: 'WhatsApp Integration', description: 'Automated appointment reminders' },
              { title: 'Affordable Pricing', description: 'Made for Indian small businesses' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-[#E50914] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Flexible Pricing for Your Business</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Every pet business is unique. We understand that your needs are different, which is why our pricing is customized based on your specific requirements.
            </p>
          </div>
          
          <Card className="border-2 border-[#E50914] shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center p-6 sm:p-10 bg-gradient-to-b from-[#E50914]/5 to-white">
              <CardTitle className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Custom Pricing</CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Tailored solutions for your pet business
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-10">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-base sm:text-lg text-gray-700">
                    <strong>No business is the same.</strong> Whether you run a small pet shop, a grooming spa, or a multi-location veterinary clinic, we'll create a pricing plan that fits your:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base">Business Size</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Single store or multi-location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base">Features Needed</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Choose only what you use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base">Number of Users</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Pay for active users only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base">Transaction Volume</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Scales with your growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 text-center">
                  <p className="text-xs sm:text-base text-gray-600 mb-6">
                    Get a personalized quote in minutes. No hidden fees, no surprises.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#E50914] hover:bg-[#C40812] active:scale-95 text-white font-semibold px-10 sm:px-10 py-6 sm:py-6 text-base sm:text-base w-full sm:w-auto transition-all duration-200 shadow-lg"
                  >
                    Get Custom Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              💡 <strong>Free trial available. No CC required.</strong> Contact us for free trial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="bg-[#E50914] rounded-2xl sm:rounded-3xl p-8 sm:p-16 md:p-20 lg:p-24 text-center space-y-6 sm:space-y-10 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your Pet Business?
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Join pet shops, spas & clinics across India using Fretso
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <a 
              href="mailto:fretsoindia@gmail.com" 
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
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
              href="https://www.linkedin.com/company/fretsoindia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a 
              href="https://wa.me/918087098711" 
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
          
          <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 active:scale-95 text-[#E50914] font-semibold px-12 sm:px-14 py-7 sm:py-7 text-lg sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto max-w-xs"
              >
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#E50914]">Get in Touch</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we'll get back to you shortly.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    name="business"
                    placeholder="Your pet business name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full min-h-[100px]"
                  />
                </div>
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E50914] hover:bg-[#C40812] text-white font-semibold py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
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

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <FretsoLogo size="sm" />
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:fretsoindia@gmail.com" 
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
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
                href="https://www.linkedin.com/company/fretsoindia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E50914] hover:text-[#C40812] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/918087098711" 
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
