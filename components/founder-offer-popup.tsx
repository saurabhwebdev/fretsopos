'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Zap, Clock, TrendingUp, Flame, Users, Eye, ShoppingCart } from 'lucide-react';
import { founderOfferConfig } from '@/config/founder-offer';
import { Button } from '@/components/ui/button';

export default function FounderOfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [liveViewers, setLiveViewers] = useState(23);

  // Countdown timer effect
  useEffect(() => {
    if (!isVisible || !founderOfferConfig.appearance.showCountdown) return;

    const targetTime = new Date().getTime() + (founderOfferConfig.appearance.countdownMinutes * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Live viewers counter (simulated)
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setLiveViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(18, Math.min(35, newValue)); // Keep between 18-35
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

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

  const totalSeats = 100;
  const seatsClaimed = totalSeats - offer.seatsLeft;
  const claimedPercentage = (seatsClaimed / totalSeats) * 100;

  // Random recent claimers (simulated)
  const recentClaimers = [
    { name: 'Rahul M.', location: 'Mumbai', time: '2 min ago', initials: 'RM', color: 'from-blue-400 to-blue-600' },
    { name: 'Priya S.', location: 'Delhi', time: '5 min ago', initials: 'PS', color: 'from-purple-400 to-purple-600' },
    { name: 'Amit K.', location: 'Bangalore', time: '8 min ago', initials: 'AK', color: 'from-green-400 to-green-600' },
    { name: 'Sneha P.', location: 'Pune', time: '12 min ago', initials: 'SP', color: 'from-pink-400 to-pink-600' },
  ];

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
        <div className="bg-gradient-to-r from-[#E50914] to-[#C40812] text-white text-center py-3 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <p className="text-sm font-bold tracking-wide relative z-10">{offer.badge}</p>
        </div>

        {/* Live Activity Bar */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-b border-orange-200 dark:border-orange-800 px-4 py-2">
          <div className="flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
              <Eye className="w-3.5 h-3.5" />
              <span className="font-semibold animate-pulse">{liveViewers} viewing now</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
              <Flame className="w-3.5 h-3.5 animate-bounce" />
              <span className="font-semibold">🔥 Trending</span>
            </div>
            <div className="flex items-center gap-1.5 text-orange-600 dark:text-orange-400">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span className="font-semibold">{seatsClaimed} claimed</span>
            </div>
          </div>
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

          {/* Countdown Timer */}
          {appearance.showCountdown && (
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 text-white">
              <p className="text-xs font-semibold text-center mb-3 uppercase tracking-wide animate-pulse">⏰ Offer Expires In:</p>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase">Hours</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase">Mins</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="bg-white/20 backdrop-blur rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-[10px] uppercase">Secs</div>
                </div>
              </div>
            </div>
          )}

          {/* Urgency - Seats Remaining */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 mb-3">
              <Clock className="w-5 h-5 animate-pulse" />
              <p className="font-bold text-sm">
                {offer.urgencyMessage}
              </p>
            </div>
            
            {/* Seats Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-green-600 dark:text-green-400">✅ {seatsClaimed} Claimed</span>
                <span className="text-red-600 dark:text-red-400">{offer.seatsLeft} Left</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-3 rounded-full transition-all duration-500 relative"
                  style={{ width: `${claimedPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-red-600 dark:text-red-400 animate-pulse">{claimedPercentage.toFixed(0)}% SOLD OUT</span>
                </p>
              </div>
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

        {/* Social Proof - Real User Activity */}
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 px-6 py-5 border-t border-gray-200 dark:border-gray-700">
          {/* Main trust indicator */}
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 mb-4">
            <div className="flex -space-x-3">
              {recentClaimers.map((user, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.color} border-3 border-white dark:border-gray-800 flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                  title={`${user.name} from ${user.location}`}
                >
                  {user.initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">
                <span className="text-[#E50914] animate-pulse">47 people</span> claimed today
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Join them before it's too late!</p>
            </div>
          </div>

          {/* Recent activity feed */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <Users className="w-3.5 h-3.5 text-green-500" />
              <span className="font-semibold text-gray-900 dark:text-white">Recent Claims:</span>
            </div>
            {recentClaimers.slice(0, 3).map((user, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1 animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-[10px]`}>
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{user.name}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{user.location}</p>
                  </div>
                </div>
                <span className="text-[10px] text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  ✓ {user.time}
                </span>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-xs font-bold text-gray-900 dark:text-white">🔒 Secure</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">SSL Protected</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-900 dark:text-white">⚡ Instant</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Access</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-900 dark:text-white">💯 Trusted</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">500+ Users</p>
            </div>
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
