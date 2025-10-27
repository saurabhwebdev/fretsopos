'use client';
// Force rebuild: 2025-10-25T10:16:08Z
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { seoConfig } from '@/config/seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
      {/* JSON-LD Schema */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoConfig.organization),
        }}
      />
      
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section flex flex-col lg:flex-row lg:min-h-screen">
        {/* Left Side - Image Slider */}
        <div className="relative w-full lg:w-1/2 h-[45vh] sm:h-[55vh] lg:min-h-screen order-1 lg:order-none overflow-hidden">
          {/* Slide 1 - Dog Image */}
          <div 
            className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ${
              currentHeroSlide === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url(/herobg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
          
          {/* Slide 2 - Image */}
          <div 
            className={`absolute inset-0 w-full h-full bg-[#E50914] transition-all duration-[1500ms] ${
              currentHeroSlide === 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url(/0.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
          
          {/* Slide 3 - Bird Image */}
          <div 
            className={`absolute inset-0 w-full h-full bg-[#E50914] transition-all duration-[1500ms] ${
              currentHeroSlide === 2 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: 'url(/bird.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white dark:bg-background p-8 sm:p-10 lg:p-16 order-2 lg:order-none">
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
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {[
            { icon: BarChart3, title: 'Smart POS System', description: 'Quick checkout with Cash, Card, UPI, Wallet payments. Grid/Table view toggle, cart management, customer linking & real-time stats dashboard.' },
            { icon: Package, title: 'Advanced Inventory', description: 'Stock tracking with min/max/reorder points, expiry alerts, batch numbers, SKU/barcode, cost vs selling price, profit analysis & supplier linking.' },
            { icon: Calendar, title: 'Appointment Scheduling', description: 'Book grooming/vet visits with pet linking, service selection, time slots, deposit tracking, status management & unpaid appointment alerts.' },
            { icon: Users, title: 'Customer & Pet CRM', description: 'Complete profiles with unlimited pets per customer, vaccination history, allergies, medical notes, microchip numbers, visit tracking & lifetime value.' },
            { icon: Receipt, title: 'Smart Discount System', description: 'Flexible discounts - percentage or fixed amount with optional reason tracking. Apply discounts before tax on subtotal with live preview.' },
            { icon: Wrench, title: 'Services Management', description: 'Create time-based services with categories, pricing, 15-min duration intervals, configurable GST rates & active/inactive status control.' },
            { icon: BarChart3, title: 'Vaccination Tracking', description: 'Complete pet vaccination records with upcoming & overdue alerts, veterinarian tracking, next due dates, Excel export & dashboard widgets.' },
            { icon: Package, title: 'Certificate Generation', description: 'Generate professional vaccination certificates with unique certificate numbers, batch operations, search & filter by pet, date range export.' },
            { icon: Package, title: 'Transaction Management', description: 'Full sales history with appointment linking, customer/pet association, payment method tracking, discount records, GST breakdown & detailed invoices.' },
            { icon: Package, title: 'Stock Movement Tracking', description: 'Complete audit trail of inventory changes - sales, purchases, adjustments, returns, damage, theft & corrections with quantity tracking.' },
            { icon: BarChart3, title: 'Supplier Management', description: 'Manage supplier contacts, payment terms, credit limits, lead times, product associations, order history & Excel import/export capabilities.' },
            { icon: Package, title: 'Business Analytics', description: 'Today\'s sales & transaction stats, revenue trends, top products/customers, payment method breakdowns, inventory insights & comprehensive reports.' },
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
      <section id="benefits" className="bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight px-4">Why choose Fretso for your pet business?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 px-4">Built specifically for the Indian pet care industry</p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {[
              { title: 'GST & Tax Compliant', description: 'Automatic CGST, SGST, IGST calculation with configurable GST rates per product/service. Full tax breakdown in invoices.' },
              { title: 'Multi-Currency & Language', description: '7+ currencies (USD, EUR, GBP, INR, JPY, AUD, CAD) with 10+ language/locale formats for global operations' },
              { title: 'Vaccination Tracking & Alerts', description: 'Complete vaccination records with upcoming (30 days) & overdue alerts, next due dates, veterinarian tracking & dashboard notifications' },
              { title: 'Certificate Generation', description: 'Auto-generate professional vaccination certificates with unique numbers, PDF export, batch operations & complete history tracking' },
              { title: 'Smart Discount System', description: 'Flexible percentage or fixed discounts with optional reason tracking, applied on subtotal before tax with live calculation preview' },
              { title: 'Pet Health Records', description: 'Comprehensive medical notes (1000 chars), allergy tracking, microchip numbers, weight monitoring, breed/species info & visit history' },
              { title: 'Expiry & Batch Tracking', description: 'Manufacturing dates, expiry alerts for perishables, batch/lot numbers with automatic expiry warnings for medicines & food' },
              { title: 'Cost & Profit Analysis', description: 'Track cost price vs selling price per product, real-time profit margins, revenue analysis & identify high-margin items' },
              { title: 'Smart Stock Management', description: 'Min/max/reorder point alerts, low inventory notifications, stock movement audit trail & supplier lead time tracking' },
              { title: '4 Payment Methods', description: 'Accept Cash, Card, UPI & Digital Wallet with complete payment analytics, today\'s stats & method-wise breakdowns' },
              { title: 'Appointment Integration', description: 'Link transactions to appointments, track deposit payments, unpaid appointment alerts & service-based billing' },
              { title: 'Customer Lifetime Value', description: 'Track total purchases, spending patterns, number of pets owned, visit frequency & customer loyalty insights' },
              { title: 'Time-Based Services', description: 'Services with precise duration (15min intervals), categories, individual pricing, GST configuration & active/inactive control' },
              { title: 'Bulk Excel Operations', description: 'Import/export products, services, appointments, pets, suppliers, vaccinations, certificates & transactions with full data portability' },
              { title: 'Stock Movement Audit', description: 'Complete trail of inventory changes - sales, purchases, adjustments, returns, damage, theft, corrections with date/time stamps' },
              { title: 'Supplier Network', description: 'Manage supplier contacts, payment terms, credit limits, lead times, product associations & order history with Excel support' },
              { title: 'Grid & Table View Toggle', description: 'Switch between visual grid cards and detailed table views in POS for different workflow preferences' },
              { title: 'Category Management', description: 'Custom product/service categories, dynamic filtering, category-based organization with easy add/remove functionality' },
              { title: 'SKU & Barcode Support', description: 'Assign unique SKUs and barcodes to products for faster checkout, inventory tracking & integration with scanners' },
              { title: 'Dashboard Statistics', description: 'Real-time today\'s sales, transaction count, products in stock, cart items, vaccination alerts & clickable stats widget' },
              { title: 'Pet Species & Breed', description: 'Detailed pet information with species, breed, age, date of birth, gender, color & image codes for visual identification' },
              { title: 'Dark Mode Support', description: 'Beautiful dark theme for comfortable viewing in any lighting condition with consistent styling across all pages' },
              { title: 'Responsive Design', description: 'Works perfectly on desktop, tablet & mobile devices with adaptive layouts, touch-friendly controls & mobile-optimized views' },
              { title: 'Search & Filter Everywhere', description: 'Powerful search across products, customers, pets, vaccinations, certificates with multiple filter options & date ranges' },
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 hover:border-[#E50914] dark:hover:border-[#E50914] hover:shadow-lg dark:hover:shadow-[#E50914]/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base mb-1 dark:text-gray-100">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400 leading-snug">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Flexible Pricing for Your Business</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Every pet business is unique. We understand that your needs are different, which is why our pricing is customized based on your specific requirements.
            </p>
          </div>
          
          <Card className="border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg dark:hover:shadow-[#E50914]/20 transition-all duration-300 dark:bg-black">
            <CardHeader className="text-center p-6 sm:p-10">
              <CardTitle className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#E50914]">Custom Pricing</CardTitle>
              <CardDescription className="text-sm sm:text-base lg:text-lg text-muted-foreground dark:text-gray-400">
                Tailored solutions for your pet business
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-10">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    <strong className="dark:text-gray-100">No business is the same.</strong> Whether you run a small pet shop, a grooming spa, or a multi-location veterinary clinic, we'll create a pricing plan that fits your:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base dark:text-gray-100">Business Size</p>
                      <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">Single store or multi-location</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base dark:text-gray-100">Features Needed</p>
                      <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">Choose only what you use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base dark:text-gray-100">Number of Users</p>
                      <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">Pay for active users only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E50914] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-xs sm:text-base dark:text-gray-100">Transaction Volume</p>
                      <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">Scales with your growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 text-center">
                  <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mb-6">
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

      {/* Testimonials Section - Minimal Slider */}
      <section id="testimonials" className="bg-white dark:bg-background py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">Trusted by Pet Businesses Across India</h3>
              <p className="text-sm sm:text-base text-muted-foreground">See what our customers have to say</p>
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative">
              {/* Main Testimonial Card */}
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8 sm:p-12 shadow-sm transition-all duration-500">
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E50914] text-[#E50914]" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="text-center mb-8">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-[#E50914]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#E50914] font-bold text-xl">{testimonials[currentTestimonial].initials}</span>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-base sm:text-lg dark:text-gray-100">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                    <p className="text-xs text-muted-foreground dark:text-gray-500 mt-1">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentTestimonial
                        ? 'w-8 h-2 bg-[#E50914]'
                        : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Previous Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110 shadow-md"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 w-9 h-9 sm:w-10 sm:h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all hover:scale-110 shadow-md"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

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
              <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-colors overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold pr-8">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#E50914] flex-shrink-0 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto bg-[#E50914] rounded-2xl sm:rounded-3xl p-8 sm:p-16 md:p-20 lg:p-24 text-center space-y-6 sm:space-y-10 shadow-2xl">
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
              href="https://www.instagram.com/fretsoindia?igsh=dThidXRhcnVmYTh1&utm_source=qr" 
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

      <Footer />
    </div>
    </>
  );
}
