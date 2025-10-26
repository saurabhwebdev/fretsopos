'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Zap, Clock, TrendingUp } from 'lucide-react';
import { founderOfferConfig } from '@/config/founder-offer';
import { Button } from '@/components/ui/button';

export default function FounderOfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup is enabled in config
    if (!founderOfferConfig.enabled) return;

    // Check if user has already seen the popup (cookie check)
    const popupShown = getCookie('fretso_popup_shown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    // Trigger 1: Time delay
    if (founderOfferConfig.triggers.timeDelay > 0) {
      timeoutId = setTimeout(() => {
        if (!hasTriggered && !hasShown) {
          showPopup();
          hasTriggered = true;
        }
      }, founderOfferConfig.triggers.timeDelay);
    }

    // Trigger 2: Exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        founderOfferConfig.triggers.exitIntent &&
        e.clientY <= 0 &&
        !hasTriggered &&
        !hasShown
      ) {
        showPopup();
        hasTriggered = true;
      }
    };

    // Trigger 3: Scroll percentage
    const handleScroll = () => {
      if (!founderOfferConfig.triggers.scrollPercentage) return;
      
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= founderOfferConfig.triggers.scrollPercentage && !hasTriggered && !hasShown) {
        showPopup();
        hasTriggered = true;
      }
    };

    if (founderOfferConfig.triggers.exitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    if (founderOfferConfig.triggers.scrollPercentage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      clearTimeout(timeoutId);
      if (founderOfferConfig.triggers.exitIntent) {
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (founderOfferConfig.triggers.scrollPercentage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasShown]);

  const showPopup = () => {
    setIsVisible(true);
    setHasShown(true);
    // Set cookie to not show again for X days
    setCookie('fretso_popup_shown', 'true', founderOfferConfig.triggers.cookieExpireDays);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    const link = founderOfferConfig.offer.ctaLink;
    if (link.startsWith('#')) {
      // Scroll to section
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // External link
      window.location.href = link;
    }
    closePopup();
  };

  if (!isVisible) return null;

  const { offer, appearance } = founderOfferConfig;
  const animationClass = 
    appearance.animation === 'scale' ? 'animate-in zoom-in-95' :
    appearance.animation === 'slide' ? 'animate-in slide-in-from-bottom' :
    'animate-in fade-in';

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${appearance.overlayOpacity / 100})`,
        backdropFilter: 'blur(8px)'
      }}
    >
      <div 
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden ${animationClass} duration-500`}
      >
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Badge */}
        <div className="bg-gradient-to-r from-[#E50914] to-[#C40812] text-white text-center py-3 px-6">
          <p className="text-sm font-bold tracking-wide">{offer.badge}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Title & Highlight */}
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {offer.title}
            </h3>
            <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">{offer.highlight}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
              <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                {offer.originalPrice}
              </span>
              <span className="text-4xl font-bold text-[#E50914]">
                {offer.price}
              </span>
            </div>
            <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
              {offer.savings}
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400">
              <Clock className="w-5 h-5 animate-pulse" />
              <p className="font-bold text-sm">
                {offer.urgencyMessage}
              </p>
            </div>
            {/* Seats indicator */}
            <div className="mt-3">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(20, (offer.seatsLeft / 100) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">
                {offer.seatsLeft} seats remaining
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            {offer.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleCTA}
            className="w-full bg-[#E50914] hover:bg-[#C40812] text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {offer.ctaText}
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>

          {/* Disclaimer */}
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            {offer.disclaimer}
          </p>
        </div>

        {/* Trust indicator - subtle animation */}
        <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 border-2 border-white dark:border-gray-800"
                />
              ))}
            </div>
            <p className="text-xs">
              <span className="font-semibold">47 founders</span> claimed their spot today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cookie utilities
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
