'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import FretsoLogo from '@/components/fretso-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, ArrowRight, Play } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { label: 'Features', action: () => scrollToSection('features') },
    { label: 'Benefits', action: () => scrollToSection('benefits') },
    { label: 'Pricing', action: () => scrollToSection('pricing') },
    { label: 'Testimonials', action: () => scrollToSection('testimonials') },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'FAQ', action: () => scrollToSection('faq') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar container */}
      <div className={`transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <FretsoLogo
                size="sm"
                className={`transition-colors duration-300 ${
                  isScrolled || !isHomePage
                    ? 'text-[#E50914]'
                    : 'text-white'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                link.href ? (
                  <Link
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isScrolled || !isHomePage
                        ? 'text-gray-700 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={link.action}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isScrolled || !isHomePage
                        ? 'text-gray-700 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <Button
                size="sm"
                variant="ghost"
                onClick={() => scrollToSection('demo')}
                className={`group font-medium transition-all duration-200 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 dark:text-gray-300 hover:text-[#E50914] hover:bg-[#E50914]/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Play className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                Demo
              </Button>

              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-5 shadow-lg shadow-[#E50914]/25 hover:shadow-xl hover:shadow-[#E50914]/30 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-1.5">
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isScrolled || !isHomePage
                        ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white hover:bg-white/10'
                    }`}
                    aria-label="Toggle menu"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate to different sections of the website
                  </SheetDescription>

                  {/* Mobile Menu Content */}
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                      <FretsoLogo size="sm" className="text-[#E50914]" />
                    </div>

                    {/* Nav Links */}
                    <div className="flex-1 overflow-y-auto py-6">
                      <div className="space-y-1 px-4">
                        {navLinks.map((link, index) => (
                          link.href ? (
                            <Link
                              key={index}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-between px-4 py-4 text-base font-medium text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                              {link.label}
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E50914] group-hover:translate-x-1 transition-all" />
                            </Link>
                          ) : (
                            <button
                              key={index}
                              onClick={link.action}
                              className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                            >
                              {link.label}
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#E50914] group-hover:translate-x-1 transition-all" />
                            </button>
                          )
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-3 bg-gray-50 dark:bg-gray-900">
                      <Button
                        size="lg"
                        onClick={() => scrollToSection('demo')}
                        variant="outline"
                        className="w-full font-semibold border-2 border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Try Demo
                      </Button>
                      <Button
                        size="lg"
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-[#E50914] hover:bg-[#C40812] text-white font-semibold shadow-lg"
                      >
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
