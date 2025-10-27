import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import FretsoLogo from '@/components/fretso-logo';

export default function Footer() {
  return (
    <>
      {/* Footer Divider */}
      <div className="relative py-8 sm:py-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-background px-4">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-[#E50914]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E50914]"></div>
              <div className="w-2 h-2 rounded-full bg-[#E50914]"></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/">
                <FretsoLogo size="md" />
              </Link>
              <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
                Pet business management software built for India. Empowering pet shops, spas & clinics with smart tools.
              </p>
              {/* Social Media */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="mailto:fretsoindia@gmail.com" 
                  className="text-[#E50914] dark:text-gray-300 hover:text-[#C40812] dark:hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/fretsoindia?igsh=dThidXRhcnVmYTh1&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E50914] dark:text-gray-300 hover:text-[#C40812] dark:hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E50914] dark:text-gray-300 hover:text-[#C40812] dark:hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/fretsoindia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E50914] dark:text-gray-300 hover:text-[#C40812] dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/918087098711" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E50914] dark:text-gray-300 hover:text-[#C40812] dark:hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/#features" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-base mb-4 text-foreground">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-base mb-4 text-foreground">Get In Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <a href="mailto:fretsoindia@gmail.com" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors break-all">
                    fretsoindia@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <a href="tel:+918087098711" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    +91 80870 98711
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    India
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400 text-center sm:text-left">
                © 2025 Fretso. All rights reserved. Made with ❤️ for India's pet care industry.
              </p>
              <div className="flex gap-6">
                <Link href="/#" className="text-xs sm:text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/#" className="text-xs sm:text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
