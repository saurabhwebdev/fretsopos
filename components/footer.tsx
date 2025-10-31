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
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-0 .605-.15.898-.3.347-.179.726-.376 1.158-.376.504 0 .930.265 1.204.742.399.693.19 1.504-.139 2.131-.195.37-.438.701-.672 1.021-.11.152-.223.306-.331.456.991.468 1.835.85 2.481 1.134.8.351 1.018.628 1.055.764.133.449.039.898-.289 1.305-.375.464-.94.729-1.553.729-.219 0-.444-.043-.668-.132-.182-.073-.358-.159-.541-.248l-.05-.024c-.498-.237-1.051-.506-1.817-.506-.469 0-.979.176-1.535.482-.13.072-.275.15-.432.234-.962.517-2.161 1.164-3.746 1.164-.988 0-1.942-.329-2.819-.677-.472-.188-.916-.365-1.35-.502-.435-.138-.843-.252-1.242-.35l-.232-.055c-.326-.077-.662-.157-1.009-.271-.031-.01-.057-.02-.085-.031-.098-.038-.19-.074-.273-.11-.468-.201-.868-.372-1.181-.743-.333-.395-.482-.86-.444-1.385.032-.433.233-.824.56-1.097.191-.158.414-.276.644-.386.206-.098.42-.188.641-.281l.021-.009c.088-.036.176-.071.264-.107.238-.101.483-.204.728-.31.236-.103.485-.212.733-.322.425-.189.853-.38 1.279-.571.015-.007.029-.014.043-.022.488-.226.945-.438 1.348-.633.177-.086.344-.166.497-.24-.024-.15-.042-.3-.06-.451l-.008-.066c-.104-1.029-.216-2.092.046-3.096.835-3.188 3.996-3.758 5.683-3.758zm0 1.5c-1.335 0-3.759.44-4.381 2.691-.196.712-.107 1.543-.017 2.474l.005.049c.019.159.038.318.062.478.044.28.1.56.161.838.015.066.03.132.046.198.035.142.07.283.105.425.068.273.135.546.202.818.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015.015.061.03.122.045.183.084.336.168.672.252 1.008.014.056.028.112.042.168.084.336.168.672.252 1.008.014.058.028.115.042.173.084.338.168.677.252 1.015z"/>
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
