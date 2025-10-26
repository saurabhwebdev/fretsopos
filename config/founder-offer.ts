export const founderOfferConfig = {
  // Enable/disable the popup
  enabled: true,
  
  // Offer details - EDIT THESE TO CHANGE THE OFFER
  offer: {
    badge: "🎉 LIMITED TIME OFFER",
    title: "Founder's Exclusive Deal",
    highlight: "Lifetime Access",
    price: "₹4,999",
    originalPrice: "₹14,999",
    savings: "Save 67%",
    seatsLeft: 50,
    urgencyMessage: "Only 50 seats left!",
    benefits: [
      "Lifetime access to all features",
      "Free updates forever",
      "Priority support",
      "No monthly fees",
      "All future features included"
    ],
    ctaText: "Claim Your Spot Now",
    ctaLink: "#contact", // Scroll to contact section
    disclaimer: "First come, first served. Price goes up to ₹14,999 after 50 seats."
  },
  
  // Behavioral triggers - when to show the popup
  triggers: {
    // Show after user has been on site for X seconds
    timeDelay: 15000, // 15 seconds (changed from 30 for faster testing)
    
    // Show on exit intent (mouse moves towards closing tab)
    exitIntent: true,
    
    // Show after scrolling X% of the page
    scrollPercentage: 50, // 50% scroll
    
    // Don't show more than once per X days
    cookieExpireDays: 3
  },
  
  // Visual settings
  appearance: {
    // Background overlay opacity (0-100)
    overlayOpacity: 85,
    
    // Animation style
    animation: "scale", // "scale" | "slide" | "fade"
    
    // Show countdown timer
    showCountdown: true,
    countdownMinutes: 15  // Timer duration in minutes
  }
};
