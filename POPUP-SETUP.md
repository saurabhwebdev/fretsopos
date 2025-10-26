# Founder's Offer Popup - Setup Guide

## 🎯 Overview

A conversion-optimized popup that appears based on user behavior to maximize engagement without being intrusive.

## 🚀 Features Implemented

### Psychological Triggers
- ✅ **Scarcity**: Limited seats with real-time remaining count
- ✅ **Urgency**: Live countdown timer (Hours:Minutes:Seconds)
- ✅ **Price Anchoring**: Show original price (₹14,999) vs offer price (₹4,999)
- ✅ **Social Proof**: Real user avatars with names & locations
- ✅ **Live Activity**: "23 viewing now" with dynamic counter
- ✅ **Recent Claims**: Live feed showing who just claimed
- ✅ **Loss Aversion**: "Price goes up after 50 seats"
- ✅ **Visual Progress**: Claimed vs Remaining with gradient bar
- ✅ **FOMO Triggers**: "50% SOLD OUT" flashing indicator
- ✅ **Trust Badges**: Security, instant access, 500+ users
- ✅ **Trending Badge**: Fire emoji with "Trending" label

### Behavioral Triggers
- ✅ **Exit Intent**: Shows when user is about to leave (mouse moves to close tab)
- ✅ **Time Delay**: Shows after 15 seconds on site
- ✅ **Scroll Percentage**: Shows after 50% page scroll
- ✅ **Cookie Control**: Won't show again for 3 days

### Design Features
- ✅ **Responsive**: Works on all devices
- ✅ **Dark Mode**: Full support
- ✅ **Animations**: Smooth scale/slide/fade animations + shimmer effects
- ✅ **Live Counters**: Dynamic viewer count & recent claims
- ✅ **Real-time Countdown**: Hours, minutes, seconds ticker
- ✅ **Gradient Progress Bar**: Visual claimed/remaining indicator
- ✅ **User Avatars**: Colorful initials-based profile pics
- ✅ **Activity Feed**: Recent claimer names, locations, timestamps
- ✅ **Pulsing Effects**: On key urgency elements
- ✅ **Accessibility**: Proper ARIA labels

## 📝 How to Customize

### Option 1: Edit the Config File (Easiest)

Open `config/founder-offer.ts` and modify the values:

```typescript
export const founderOfferConfig = {
  // Turn popup on/off
  enabled: true,
  
  // CHANGE THESE FOR YOUR OFFER
  offer: {
    badge: "🎉 LIMITED TIME OFFER",          // Top badge text
    title: "Founder's Exclusive Deal",       // Main headline
    highlight: "Lifetime Access",            // Yellow badge text
    price: "₹4,999",                         // Current price
    originalPrice: "₹14,999",                // Crossed out price
    savings: "Save 67%",                     // Savings badge
    seatsLeft: 50,                           // Number of seats (visual indicator)
    urgencyMessage: "Only 50 seats left!",   // Urgency text
    benefits: [                              // Bullet points
      "Lifetime access to all features",
      "Free updates forever",
      "Priority support",
      "No monthly fees",
      "All future features included"
    ],
    ctaText: "Claim Your Spot Now",          // Button text
    ctaLink: "#contact",                     // Where button goes (#section or URL)
    disclaimer: "First come, first served. Price goes up to ₹14,999 after 50 seats."
  },
  
  // WHEN TO SHOW POPUP
  triggers: {
    timeDelay: 15000,        // Show after 15 seconds (15000ms)
    exitIntent: true,        // Show when user tries to leave
    scrollPercentage: 50,    // Show after 50% scroll
    cookieExpireDays: 3      // Don't show again for 3 days
  },
  
  // VISUAL SETTINGS
  appearance: {
    overlayOpacity: 85,           // Background darkness (0-100)
    animation: "scale",           // "scale" | "slide" | "fade"
    showCountdown: false,         // Future: countdown timer
    countdownMinutes: 15
  }
};
```

### Option 2: Examples for Different Offers

#### Early Bird Offer
```typescript
offer: {
  badge: "⏰ EARLY BIRD SPECIAL",
  title: "Be Among the First 100",
  highlight: "50% OFF",
  price: "₹2,499",
  originalPrice: "₹4,999",
  savings: "Save 50%",
  seatsLeft: 73,
  urgencyMessage: "Only 27 early bird spots left!",
  // ... rest of config
}
```

#### Flash Sale
```typescript
offer: {
  badge: "⚡ 24-HOUR FLASH SALE",
  title: "Today Only Special",
  highlight: "70% OFF",
  price: "₹1,999",
  originalPrice: "₹6,999",
  savings: "Save ₹5,000",
  seatsLeft: 100,
  urgencyMessage: "Ends in 24 hours!",
  // ... rest of config
}
```

#### Premium Package
```typescript
offer: {
  badge: "💎 PREMIUM PACKAGE",
  title: "Enterprise Plan",
  highlight: "Unlimited Everything",
  price: "₹9,999",
  originalPrice: "₹19,999",
  savings: "Save 50%",
  seatsLeft: 20,
  urgencyMessage: "Only 20 premium slots available!",
  benefits: [
    "Unlimited locations",
    "Unlimited users",
    "White-label solution",
    "Dedicated account manager",
    "Custom integrations"
  ],
  // ... rest of config
}
```

## 🔧 Advanced Customization

### Change Trigger Behavior

**Make it more aggressive (show sooner):**
```typescript
triggers: {
  timeDelay: 5000,         // 5 seconds instead of 15
  exitIntent: true,
  scrollPercentage: 25,    // 25% scroll instead of 50%
  cookieExpireDays: 1      // Show again next day
}
```

**Make it less aggressive (show later):**
```typescript
triggers: {
  timeDelay: 60000,        // 60 seconds
  exitIntent: true,
  scrollPercentage: 75,    // 75% scroll
  cookieExpireDays: 7      // Show again in 1 week
}
```

**Only exit intent (most subtle):**
```typescript
triggers: {
  timeDelay: 0,            // Disable time trigger
  exitIntent: true,        // Only on exit intent
  scrollPercentage: 0,     // Disable scroll trigger
  cookieExpireDays: 3
}
```

### Disable Popup Temporarily
```typescript
enabled: false,  // Set to false to turn off
```

### Change Animation Style
```typescript
appearance: {
  animation: "slide",  // Options: "scale", "slide", "fade"
}
```

## 🎨 Customizing Styles

The popup uses your existing Tailwind theme colors. Main brand color is `#E50914` (red).

To change colors, edit `components/founder-offer-popup.tsx`:
- Background gradient: `from-[#E50914] to-[#C40812]`
- CTA button: `bg-[#E50914] hover:bg-[#C40812]`

## 📊 Tracking & Analytics

### Add Conversion Tracking

Edit `components/founder-offer-popup.tsx` and add tracking to the `handleCTA` function:

```typescript
const handleCTA = () => {
  // Add your analytics tracking here
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'event_category': 'Popup',
      'event_label': 'Founder Offer Click'
    });
  }
  
  // Or for Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', { 
      content_name: 'Founder Offer Popup' 
    });
  }
  
  // Existing code...
  const link = founderOfferConfig.offer.ctaLink;
  // ... rest of function
};
```

## 🧪 Testing

### Test the Popup Immediately

1. Set `timeDelay: 1000` (1 second)
2. Clear cookies: Press F12 > Application > Cookies > Delete `fretso_popup_shown`
3. Refresh page

### Test Exit Intent

Move your mouse quickly to the top of the browser (as if closing the tab).

### Test Scroll Trigger

Set `scrollPercentage: 10` and scroll down the page.

## 🚫 Temporary Disable

To temporarily hide the popup without removing code:

```typescript
enabled: false,
```

## 🎯 Best Practices

1. **Don't Over-Show**: 3-7 day cookie expiry is ideal
2. **Test Your Copy**: A/B test different headlines and prices
3. **Update Scarcity**: Change `seatsLeft` number weekly to maintain credibility
4. **Match Your Offer**: Ensure popup content matches your actual offer
5. **Mobile First**: Always test on mobile devices
6. **Loading Speed**: Popup is lightweight and won't slow down your site

## 📱 Mobile Optimization

The popup is fully responsive:
- Smaller text on mobile
- Full-width on small screens
- Touch-friendly buttons
- Readable pricing

## ⚠️ Common Issues

**Popup not showing?**
- Check `enabled: true` in config
- Delete the cookie `fretso_popup_shown`
- Check browser console for errors

**Popup showing too often?**
- Increase `cookieExpireDays` value
- Increase `timeDelay` value

**Exit intent not working?**
- Only works on desktop (requires mouse)
- Mobile uses time/scroll triggers instead

## 🔄 Updating the Offer

When you have a new offer:
1. Open `config/founder-offer.ts`
2. Update prices, text, and benefits
3. Save file
4. No restart needed (Next.js hot reload)
5. Delete cookie to test immediately

## 📈 Conversion Psychology Used

### Core Psychological Triggers:
- **Scarcity**: "Only 50 seats left" with visual depletion
- **Urgency**: Live countdown timer creates time pressure
- **Anchoring**: ₹14,999 → ₹4,999 makes savings feel massive
- **Social Proof**: Real user names + locations + timestamps
- **Live Activity**: "23 viewing now" creates competition
- **FOMO**: "50% SOLD OUT" + recent claims feed
- **Loss Aversion**: "Price goes up" triggers fear
- **Authority**: Trust badges (SSL, 500+ users)
- **Reciprocity**: "Lifetime access" feels like massive value
- **Commitment**: Single focused CTA reduces friction

### Visual Psychology:
- **Color Gradient**: Green (claimed) → Yellow → Red (urgency)
- **Progress Bar**: Visual representation of depletion
- **Pulsing Elements**: Draw attention to key urgency points
- **Shimmer Effects**: Make offer feel premium/exclusive
- **Avatar Clustering**: Shows community of buyers
- **Live Feed**: Creates sense of active marketplace
- **Fire Emoji**: Universal symbol of "hot deal"
- **Countdown Numbers**: Ticking clock adds pressure

### Behavioral Nudges:
- **Exit Intent**: Catch users before they leave
- **Scroll Trigger**: Engage when interested (50% scroll)
- **Time Delay**: Let them browse first (15 seconds)
- **Cookie Control**: Don't annoy (3-day frequency cap)
- **Recent Activity**: "Others are buying" creates bandwagon
- **Percentage Sold**: "50% gone" feels more urgent than "50 left"

---

**Need help?** Open an issue or contact support.
