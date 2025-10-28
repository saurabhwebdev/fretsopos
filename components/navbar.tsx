'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import FretsoLogo from '@/components/fretso-logo';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoColor, setLogoColor] = useState('white');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Logo color logic
      if (isHomePage && scrollY < 500) {
        setLogoColor('white');
      } else {
        setLogoColor('red');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomePage]);

  // Smooth scroll to section (only works on home page)
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
      <div className={`container mx-auto px-4 sm:px-6 py-4 sm:py-6 transition-all duration-500 ${
        isScrolled ? 'sm:mt-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl shadow-2xl md:rounded-full max-w-6xl border border-white/20 dark:border-gray-700/20' : ''
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <FretsoLogo size="sm" className={`transition-colors duration-300 ${logoColor === 'white' && isHomePage && !isScrolled ? 'text-white dark:text-white' : 'text-[#E50914] dark:text-[#E50914]'}`} />
          </Link>
          
          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-1.5">
            <button onClick={() => scrollToSection('features')} className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              Features
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              Benefits
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              Testimonials
            </button>
            <Link href="/about" className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              About
            </Link>
            <Link href="/support" className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              Support
            </Link>
            <button onClick={() => scrollToSection('faq')} className="text-xs lg:text-sm font-medium text-[#E50914] dark:text-white hover:text-[#C40812] dark:hover:text-[#E50914] px-2 py-1.5 transition-colors duration-300">
              FAQ
            </button>
            <ThemeToggle />
            <Button 
              size="sm"
              onClick={() => scrollToSection('demo')}
              className="bg-[#E50914] hover:bg-[#C40812] hover:shadow-lg hover:scale-105 text-white dark:bg-[#E50914] dark:text-white dark:hover:bg-[#C40812] font-semibold transition-all duration-300 text-xs lg:text-sm ml-1"
            >
              Demo
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-white hover:shadow-lg hover:scale-105 text-[#E50914] dark:bg-[#E50914] dark:text-white dark:hover:bg-[#C40812] font-semibold transition-all duration-300 text-xs lg:text-sm ml-1"
            >
              Contact
            </Button>
          </div>
          
          {/* Mobile Menu - Sheet */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`p-2 ${isScrolled ? 'text-[#E50914] dark:text-white' : (isHomePage ? 'text-white' : 'text-[#E50914] dark:text-white')}`}
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
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800"
                  >
                    Benefits
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800"
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800"
                  >
                    Testimonials
                  </button>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800"
                  >
                    FAQ
                  </button>
                  <Link 
                    href="/about"
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/support"
                    className="text-base font-medium text-[#E50914] dark:text-white px-4 py-3 hover:text-[#C40812] dark:hover:text-[#E50914] transition-colors duration-200 text-left border-b border-gray-100 dark:border-gray-800 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('demo')}
                      className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold w-full transition-colors duration-200"
                    >
                      Try Demo
                    </Button>
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('contact')}
                      className="bg-white hover:bg-gray-100 text-[#E50914] border-2 border-[#E50914] font-semibold w-full transition-colors duration-200"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
