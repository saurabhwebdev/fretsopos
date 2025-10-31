import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import FretsoLogo from '@/components/fretso-logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background border-t border-gray-100 dark:border-gray-800 mt-16">
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
                  href="mailto:hello@fretso.in" 
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/fretsoindia?igsh=dThidXRhcnVmYTh1&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/fretsoindia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@FretsoIndia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.snapchat.com/add/fretsoindia?share_id=NMTPNoCYJ0M&locale=en-IN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="Snapchat"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.166 3c3.682 0 6.928 2.968 6.928 7.65 0 4.68-3.246 7.65-6.928 7.65-.522 0-1.02-.084-1.486-.234-.15.132-.642.592-1.028.856-.764.528-1.632.716-2.274.716-.598 0-.756-.24-.588-.66.186-.468.696-1.146 1.068-1.596-1.062-.684-2.106-1.992-2.106-4.098 0-4.032 2.988-7.29 6.414-7.29zm5.19 13.02c.42 0 .654.084.888.228.216.132.456.3.708.492.228.168.468.348.726.54.72.54 1.308.876 2.022.876.54 0 1.02-.264 1.308-.624.228-.288.312-.624.24-.972-.06-.276-.3-.48-.948-.756-.516-.228-1.176-.516-1.992-.888.852-.42 1.524-.78 2.016-1.104.66-.432 1.068-.912 1.152-1.416.06-.372-.048-.732-.276-1.02-.288-.372-.708-.576-1.188-.576-.372 0-.756.132-1.104.336-.324.192-.66.432-1.008.72-.216.18-.444.372-.684.576-.024-.144-.048-.288-.072-.432-.012-.072-.024-.144-.036-.216-.084-.588-.18-1.224-.18-1.836 0-3.804-2.832-6.54-6.768-6.54-3.936 0-6.768 2.736-6.768 6.54 0 .612-.096 1.248-.18 1.836-.012.072-.024.144-.036.216-.024.144-.048.288-.072.432-.24-.204-.468-.396-.684-.576-.348-.288-.684-.528-1.008-.72-.348-.204-.732-.336-1.104-.336-.48 0-.9.204-1.188.576-.228.288-.336.648-.276 1.02.084.504.492.984 1.152 1.416.492.324 1.164.684 2.016 1.104-.816.372-1.476.66-1.992.888-.648.276-.888.48-.948.756-.072.348.012.684.24.972.288.36.768.624 1.308.624.714 0 1.302-.336 2.022-.876.258-.192.498-.372.726-.54.252-.192.492-.36.708-.492.234-.144.468-.228.888-.228z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/fretsoindia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/918282867803"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
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
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    Blog
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
                  <a href="mailto:hello@fretso.in" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors break-all">
                    hello@fretso.in
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#E50914] mt-0.5 flex-shrink-0" />
                  <a href="tel:+918282867803" className="text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                    +91 82828 67803
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
                <Link href="/privacy" className="text-xs sm:text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-xs sm:text-sm text-muted-foreground hover:text-[#E50914] transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
