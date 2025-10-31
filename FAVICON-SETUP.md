# Favicon & Open Graph Image Setup Guide

## 📍 Where to Place Files

All favicon and OG image files should be placed in the `/public` folder at the root of your project:

```
C:\Webdev\website\public\
```

---

## 🖼️ Required Files & Specifications

### 1. **favicon.ico**
- **Location:** `/public/favicon.ico`
- **Size:** 32x32 pixels
- **Format:** ICO
- **Purpose:** Main favicon displayed in browser tabs
- **Background:** Can be transparent OR use your brand red (#E50914)

### 2. **favicon-16x16.png**
- **Location:** `/public/favicon-16x16.png`
- **Size:** 16x16 pixels
- **Format:** PNG
- **Purpose:** Small favicon for browser tabs

### 3. **favicon-32x32.png**
- **Location:** `/public/favicon-32x32.png`
- **Size:** 32x32 pixels
- **Format:** PNG
- **Purpose:** Standard favicon for most browsers

### 4. **apple-touch-icon.png**
- **Location:** `/public/apple-touch-icon.png`
- **Size:** 180x180 pixels
- **Format:** PNG
- **Purpose:** iOS home screen icon when users add your site
- **Note:** Should have rounded corners (iOS applies its own mask)

### 5. **android-chrome-192x192.png** ✅ (Already exists)
- **Location:** `/public/android-chrome-192x192.png`
- **Size:** 192x192 pixels
- **Format:** PNG
- **Purpose:** Android home screen icon

### 6. **android-chrome-512x512.png** ✅ (Already exists)
- **Location:** `/public/android-chrome-512x512.png`
- **Size:** 512x512 pixels
- **Format:** PNG
- **Purpose:** High-res Android icon

---

## 🌐 Open Graph Image

### **og-image.png**
- **Location:** `/public/og-image.png`
- **Size:** 1200x630 pixels (exact)
- **Format:** PNG or JPG
- **Purpose:** Image displayed when sharing your site on social media (Facebook, LinkedIn, WhatsApp, etc.)
- **Design Tips:**
  - Include your logo prominently
  - Add tagline: "Pet Business Management Made for India"
  - Use brand colors (red #E50914 background with white text works great)
  - Keep important content in the center (some platforms crop edges)
  - File size: Keep under 1MB for fast loading

### **logo.png**
- **Location:** `/public/logo.png`
- **Size:** 512x512 pixels (minimum)
- **Format:** PNG with transparent background
- **Purpose:** Your main logo file used in structured data

---

## 🎨 Design Recommendations

### Color Scheme
- **Primary Brand Red:** `#E50914`
- **White:** `#FFFFFF`
- **For Favicon:** Use a bold "F" letter or your pet paw logo on red background

### Favicon Design Ideas
1. **Option 1:** White "F" on red (#E50914) background
2. **Option 2:** Pet paw icon in white on red background
3. **Option 3:** Simplified Fretso logo mark

### OG Image Layout
```
┌─────────────────────────────────────┐
│                                     │
│          [Your Logo]                │
│                                     │
│         Fretso                      │
│   Pet Business Management           │
│      Made for India                 │
│                                     │
│  GST Billing • Inventory • CRM      │
│                                     │
└─────────────────────────────────────┘
```

---

## ✅ Verification Checklist

After adding all files, verify:

- [ ] `/public/favicon.ico` exists (32x32)
- [ ] `/public/favicon-16x16.png` exists
- [ ] `/public/favicon-32x32.png` exists
- [ ] `/public/apple-touch-icon.png` exists (180x180)
- [ ] `/public/og-image.png` exists (1200x630)
- [ ] `/public/logo.png` exists (512x512+)
- [ ] All files are optimized (compressed)
- [ ] Favicon appears in browser tab
- [ ] OG image shows when sharing link on WhatsApp/Facebook

---

## 🔧 Tools to Create Favicons

### Online Tools
1. **Favicon.io** - https://favicon.io/
   - Create from text, image, or emoji
   - Generates all sizes automatically

2. **RealFaviconGenerator** - https://realfavicongenerator.net/
   - Upload your logo
   - Preview on all devices
   - Downloads complete package

3. **Canva** - https://canva.com
   - For creating OG images (1200x630)
   - Free templates available

### Manual Creation
- Use any image editor (Photoshop, GIMP, Figma)
- Create at largest size first (512x512)
- Scale down for smaller versions
- Export as PNG with transparency

---

## 📝 Current Status

### ✅ Already Exists (No action needed)
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest
- robots.txt

### ❌ Missing (You need to create)
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- og-image.png
- logo.png

---

## 🚀 After Adding Files

Once you've added all the files to `/public/`:

1. Clear your browser cache
2. Visit https://fretso.in
3. Check browser tab for favicon
4. Test OG image: Share link on WhatsApp/Slack
5. Verify in Google Search Console (favicon may take 24-48 hours to appear)

---

## 📞 Questions?

If you need help with design or have questions about sizes/formats, let me know!
