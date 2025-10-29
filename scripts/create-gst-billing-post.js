const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'u1spsndi',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

const blogPost = {
  _type: 'post',
  title: 'GST Billing for Pet Shops in India: Complete Guide 2025',
  slug: {
    _type: 'slug',
    current: 'gst-billing-pet-shops-india-complete-guide-2025',
  },
  author: 'Fretso Team',
  publishedAt: new Date().toISOString(),
  excerpt: 'Everything pet shop owners need to know about GST compliance, billing, invoice formats, tax rates, and avoiding penalties in India. Complete 2025 guide with examples.',
  categories: ['GST Compliance', 'Pet Business', 'Billing', 'Tax Guide'],
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "If you're running a pet shop in India, understanding GST billing isn't just important—it's mandatory. Get it wrong, and you could face hefty penalties, angry customers, and compliance nightmares. Get it right, and you'll run a smooth, professional business that builds trust with every invoice.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "This complete guide covers everything you need to know about GST billing for pet shops in 2025, from tax rates to invoice formats, common mistakes, and how modern software can automate the entire process.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Understanding GST for Pet Businesses',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'What is GST?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "GST (Goods and Services Tax) is India's unified indirect tax system that replaced multiple taxes like VAT, service tax, and excise duty. For pet shop owners, it means:",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Single tax system across India',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Simplified compliance (when done right)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Input tax credit benefits',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Mandatory registration for businesses with turnover above ₹40 lakhs (₹20 lakhs for services)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Types of GST You Need to Know',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'CGST (Central GST): Central government tax on intra-state sales',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'When you sell pet food to a customer in the same state (e.g., Delhi to Delhi), you charge CGST + SGST. If the total GST is 18%, it splits into 9% CGST + 9% SGST.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'SGST (State GST): State government tax on intra-state sales',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Collected along with CGST for same-state transactions.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'IGST (Integrated GST): Tax on inter-state sales',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'When you sell to another state (e.g., Mumbai to Bangalore), you charge only IGST. If the rate is 18%, you charge the full 18% as IGST.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'GST Rates for Pet Products and Services',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Understanding the correct GST rates for your products is crucial. Here are the standard rates for pet shop items:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Pet Food & Nutrition (18% GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Commercial pet food (dry kibble, wet food, treats)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet supplements and vitamins',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Specialized nutrition products',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Pet Accessories (18% GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Collars, leashes, harnesses',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Toys and play equipment',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Bowls, feeders, water bottles',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet beds and carriers',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Grooming Products (18% GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Shampoos and conditioners',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Brushes and grooming tools',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Nail clippers and files',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Veterinary Medicines (12% GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Prescription medications',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Dewormers and parasite control',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Vaccines (some may be exempt)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Pet Services (18% GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Grooming and bathing services',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet boarding and daycare',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Training services',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet photography',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Important: Veterinary consultation services by qualified vets are exempt from GST, but retail pet shops offering grooming are not.',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'GST Invoice Requirements for Pet Shops',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Your GST invoice must contain these mandatory fields:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '1. Business Details',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Your business name and address',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Your GSTIN (15-digit GST identification number)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• State name and code',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '2. Invoice Information',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Unique invoice number (sequential)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Invoice date',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '3. Customer Details',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Customer name and billing address',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Customer GSTIN (if registered business)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• State code',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '4. Product/Service Details',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Description of goods/services',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• HSN/SAC code (Harmonized System of Nomenclature)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Quantity',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Unit price',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Taxable value (before GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '5. Tax Calculation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GST rate (%)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• CGST amount (for intra-state)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• SGST amount (for intra-state)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• IGST amount (for inter-state)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Total invoice value (including GST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Common HSN Codes for Pet Products',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet Food: 2309 (Preparations of a kind used in animal feeding)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet Accessories: 4201 (Saddlery, harness, collars for animals)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet Medicines: 3004 (Medicaments for animal use)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pet Grooming Services: 9993 (Beauty and wellness services)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Step-by-Step: Calculating GST on Pet Shop Sales',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Example 1: Intra-State Sale (Same State)',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'You sell premium dog food for ₹1,000 to a customer in Delhi (your shop is also in Delhi).',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Base Price: ₹1,000',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GST Rate: 18% (9% CGST + 9% SGST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• CGST: ₹90 (9% of ₹1,000)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• SGST: ₹90 (9% of ₹1,000)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Total Amount: ₹1,180',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Example 2: Inter-State Sale (Different State)',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'You sell cat litter for ₹500 to a customer in Mumbai (your shop is in Delhi).',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Base Price: ₹500',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GST Rate: 18% IGST',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• IGST: ₹90 (18% of ₹500)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Total Amount: ₹590',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Common GST Mistakes Pet Shop Owners Make',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '1. Wrong GST Rate Application',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Mistake: Charging 12% GST on pet food instead of 18%.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Solution: Maintain an updated product catalog with correct GST rates. Use software that auto-applies rates based on product category.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '2. Confusing CGST/SGST with IGST',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Mistake: Charging CGST+SGST for interstate sales or IGST for intra-state sales.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Solution: Your billing software should automatically detect state codes and apply the correct tax type. Fretso's POS system does this automatically.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '3. Missing HSN Codes',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Mistake: Invoices without HSN codes (mandatory for businesses with turnover > ₹5 crores, and recommended for all).",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Solution: Add HSN codes to your product master data. Most pet products fall under 4-6 common HSN codes.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '4. Incorrect Invoice Numbering',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Mistake: Duplicate invoice numbers, gaps in sequence, or restarting numbering mid-year.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Solution: Use software that generates sequential invoice numbers automatically. Invoice numbers should be unique within a financial year.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '5. Not Collecting Customer GSTIN',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Mistake: Not asking for GSTIN when selling to other businesses (like pet boarding facilities buying in bulk).',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Solution: Always ask B2B customers for their GSTIN. They need it to claim input tax credit. Store this in your customer database.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '6. Late GSTR Filing',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Mistake: Missing monthly/quarterly GST return filing deadlines.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Solution: Set calendar reminders. Better yet, use accounting software that reminds you and helps prepare GSTR files from your sales data.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'GST Return Filing for Pet Shops',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Types of GST Returns',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'GSTR-1: Outward supplies (sales) - Monthly or Quarterly',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Report all your sales for the period. Due by 11th of the next month (monthly filers) or 13th of the month after quarter (quarterly filers).',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'GSTR-3B: Summary return - Monthly',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Summary of your sales and purchases. This is where you pay your GST liability. Due by 20th of the next month.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'GSTR-9: Annual return',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Consolidated annual summary. Due by 31st December of the next financial year.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Filing Deadlines (Important!)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GSTR-1: 11th of next month (monthly) or 13th after quarter end (quarterly)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GSTR-3B: 20th of next month',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Late fees: ₹50 per day (₹20 for NIL returns) - CGST + SGST = ₹100/day maximum',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Interest: 18% per annum on late payment of tax',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Input Tax Credit (ITC): Save Money on GST',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'ITC lets you reduce the GST you owe by claiming credit for GST you paid on purchases.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'How It Works',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '1. You buy pet food from a supplier for ₹10,000 + ₹1,800 GST (18%)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '2. You sell it for ₹15,000 + ₹2,700 GST (18%)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '3. Without ITC: You pay ₹2,700 to the government',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '4. With ITC: You pay only ₹900 (₹2,700 - ₹1,800)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Conditions for Claiming ITC',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• You must have a valid tax invoice from a GST-registered supplier',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Goods/services must be used for business purposes',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• You must have received the goods/services',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Your supplier must have filed their GSTR-1',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• You must file GSTR-3B on time',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Items You CANNOT Claim ITC On',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Food and beverages for personal consumption',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Personal vehicles (cars, bikes) unless used exclusively for business',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Health and life insurance for employees',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Membership of clubs, fitness centers',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'How Pet Business Software Simplifies GST Compliance',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Manual GST billing is tedious, error-prone, and time-consuming. Here's how modern pet business management software like Fretso automates the entire process:",
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '1. Automatic GST Calculation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "• Software detects whether it's intra-state or inter-state sale based on customer address",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Automatically applies correct CGST+SGST or IGST',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Uses pre-configured GST rates for each product category',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Shows clear GST breakdown on every invoice',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '2. Compliant Invoice Generation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• All mandatory fields auto-populated (GSTIN, HSN codes, sequential numbering)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Professional invoice templates',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Print or email invoices instantly',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• No risk of duplicate or missing invoice numbers',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '3. Easy GSTR Report Generation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• One-click GST reports for GSTR-1 and GSTR-3B',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Export data in government-accepted formats (Excel, JSON)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Tax liability calculated automatically',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Filing reminders so you never miss a deadline',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '4. ITC Management',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Track input tax credit on purchases',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Match your invoices with supplier GSTR-2A',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Identify eligible ITC claims',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Reconcile credit ledger',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '5. Customer GSTIN Validation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Validate customer GSTIN against government database',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Auto-fetch business name and address from GSTIN',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Store GSTIN in customer profile for future transactions',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '6. Multi-State Operations',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Manage multiple branches across different states',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Separate GSTIN for each location',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Consolidated GST reporting across all branches',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Real-World Example: GST Compliance With Fretso',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Case Study: Paws & Claws Pet Store, Mumbai',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Before Fretso:',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "• Priya, the owner, spent 8-10 hours every month manually preparing GST returns",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Hired a CA for ₹5,000/month just for GST compliance',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Made mistakes in CGST/SGST vs IGST calculation',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Paid late fees twice due to missed deadlines',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Lost ₹15,000 in ITC claims because purchase invoices were misplaced',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'After Fretso:',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GST calculated automatically on every sale - no manual work',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• GSTR-1 report generated in 5 minutes with one click',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Email reminders for filing deadlines - never missed again',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• All purchase invoices digitized and stored - full ITC claimed',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Reduced CA fees to ₹1,500/month (only for filing, not preparation)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Saved 8-10 hours per month - reinvested in growing the business',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Annual Savings: ₹42,000 in CA fees + ₹15,000 in ITC claims + Zero late fees = ₹57,000+',
          marks: ['strong'],
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'GST Audit and Penalties: What You Need to Know',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'When Can You Be Audited?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Random selection by GST department',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Significant discrepancies in returns',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Complaints from customers or competitors',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Turnover above ₹2 crores (mandatory annual audit)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Common Violations and Penalties',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Non-registration despite crossing threshold: 100% of tax due',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Tax evasion: 100% of tax amount or ₹10,000, whichever is higher',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Issuing invoices without registration: ₹10,000 or tax amount, whichever is higher',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Wrong ITC claim: 100% of wrongly claimed amount + interest',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Not filing returns: ₹100/day (₹50 CGST + ₹50 SGST)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'How to Stay Audit-Ready',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Keep all invoices (sales and purchase) for 6 years',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Maintain digital backups of records',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• File returns on time, every time',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Reconcile sales with bank statements regularly',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Use compliant billing software that generates audit trails',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Frequently Asked Questions',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q1: Do I need GST registration if my pet shop turnover is below ₹40 lakhs?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Technically no, but it's highly recommended. Benefits include:",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Claiming input tax credit on purchases',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Professional image with GST-compliant invoices',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Ability to sell to other businesses who need GSTIN for ITC',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q2: Can I use the composition scheme for my pet shop?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Yes, if your annual turnover is below ₹1.5 crores. Under composition scheme:",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Pay flat 1% GST on turnover (no ITC)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Quarterly filing (instead of monthly)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Cannot collect GST from customers',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Cannot sell interstate',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q3: What if I sell to customers without collecting their GSTIN?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "It's fine for B2C (retail) sales. Most pet shop customers are individuals who don't have GSTIN. You still charge GST, but don't need their tax ID. However, for B2B sales (selling to other businesses, clinics, etc.), always collect GSTIN.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q4: How do I handle returns and refunds in GST billing?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Issue a credit note (return invoice) with:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Reference to original invoice number',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Negative GST amount',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Reason for return',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This reduces your GST liability for the period. Report credit notes in GSTR-1.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q5: Do I need separate GST registration for online and offline pet shops?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'No. One GSTIN covers both online and offline sales from the same location. However, if you have warehouses or stores in different states, each needs a separate GSTIN.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Conclusion: GST Compliance Made Simple',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "GST compliance doesn't have to be complicated or time-consuming. With the right understanding and tools, you can:",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Generate compliant invoices in seconds',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• File returns accurately and on time',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Claim full input tax credit',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Avoid penalties and late fees',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Stay audit-ready always',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Focus on growing your pet business instead of paperwork',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Modern pet business software like Fretso automates GST calculations, generates compliant invoices, and prepares filing-ready reports—all while you focus on what matters most: providing excellent care for pets and their parents.",
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "The cost of non-compliance far outweighs the investment in proper systems. Don't let GST headaches hold your pet business back.",
        },
      ],
    },
  ],
};

async function createPost() {
  try {
    console.log('Creating GST billing blog post...');
    const result = await client.create(blogPost);
    console.log('✅ Blog post created successfully!');
    console.log('Post ID:', result._id);
    console.log('Slug:', result.slug.current);
    console.log('\nView at: http://localhost:3001/blog/' + result.slug.current);
  } catch (error) {
    console.error('❌ Error creating post:', error);
    process.exit(1);
  }
}

createPost();
