import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 Text */}
          <div className="space-y-6">
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-[#E50914] leading-none">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off. Let's get you back on track!
            </p>
          </div>

          {/* Illustration/Icon */}
          <div className="flex justify-center py-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#E50914]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-[#E50914]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/">
              <Button
                size="lg"
                className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-8 py-3 text-base transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
              >
                Go Back Home
              </Button>
            </Link>
            <Link href="/support">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white font-semibold px-8 py-3 text-base transition-all duration-300 w-full sm:w-auto"
              >
                Get Support
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Popular pages you might be looking for:
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                href="/#features"
                className="text-sm text-[#E50914] hover:text-[#C40812] transition-colors font-medium"
              >
                Features
              </Link>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Link
                href="/#pricing"
                className="text-sm text-[#E50914] hover:text-[#C40812] transition-colors font-medium"
              >
                Pricing
              </Link>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Link
                href="/about"
                className="text-sm text-[#E50914] hover:text-[#C40812] transition-colors font-medium"
              >
                About Us
              </Link>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Link
                href="/#contact"
                className="text-sm text-[#E50914] hover:text-[#C40812] transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
