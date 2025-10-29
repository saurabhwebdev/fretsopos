require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');
const crypto = require('crypto');

const client = createClient({
  projectId: 'u1spsndi',
  dataset: 'production',
  useCdn: false,
  token: 'sklhxL4EY0aXoTf5ZpID4fYBKXf5waQfau8etWfEG9I1UlwzfSiljHSTS64FzSF9tGjZQxPEJBalbXmyO06EAfX1WOMsiKs48b4bnQepM31L3cehBRq4RKLPUYFFnGfYKagFlXXtj05It9LSZFj2RKKnof3OFRXwCKvnTNJ3N4sUqTCk51WB',
  apiVersion: '2024-01-01',
});

function genKey() {
  return crypto.randomBytes(12).toString('hex');
}

function createBlock(style, textContent, marks = []) {
  if (Array.isArray(textContent)) {
    return {
      _type: 'block',
      _key: genKey(),
      style,
      markDefs: [],
      children: textContent.map(child => ({
        _type: 'span',
        _key: genKey(),
        text: child.text,
        marks: child.marks || [],
      })),
    };
  } else {
    return {
      _type: 'block',
      _key: genKey(),
      style,
      markDefs: [],
      children: [{
        _type: 'span',
        _key: genKey(),
        text: textContent,
        marks,
      }],
    };
  }
}

const blogBody = [
  createBlock('normal', 'Choosing the right management software for your pet shop, grooming salon, or veterinary clinic can make or break your business. Generic accounting software doesn\'t understand pet health records. International platforms don\'t handle GST properly. Basic inventory tools can\'t track vaccinations.'),
  
  createBlock('normal', 'That\'s why we built Fretso—a complete pet business management platform designed specifically for the Indian pet care industry. Here\'s everything you get, and why it matters for your business.'),
  
  createBlock('h2', 'Built Specifically for Indian Pet Businesses'),
  
  createBlock('normal', 'Unlike international software adapted for India, Fretso was created from day one for the Indian pet care market. Every feature solves real problems faced by pet shop owners, groomers, and veterinarians across Mumbai, Delhi, Bangalore, Pune, and beyond.'),
  
  createBlock('h2', 'Complete Financial & Tax Management'),
  
  createBlock('h3', 'GST & Tax Compliant'),
  
  createBlock('normal', 'Indian GST is complex—different rates for different products, CGST/SGST for intra-state, IGST for inter-state. Fretso handles it all automatically:'),
  
  createBlock('normal', '• Automatic CGST, SGST, IGST calculation based on customer location\n• Configurable GST rates per product/service (0%, 5%, 12%, 18%, 28%)\n• Full tax breakdown in every invoice\n• GSTIN validation and tracking\n• GST reports for easy filing\n• Tax summary by period'),
  
  createBlock('normal', 'No more manual GST calculations. No more errors in invoices. Just enter the product, set the GST rate once, and Fretso handles the rest.'),
  
  createBlock('h3', 'Multi-Currency & Global Support'),
  
  createBlock('normal', 'Serving international customers or exporting pet products? Fretso supports:'),
  
  createBlock('normal', '• 7+ major currencies: USD, EUR, GBP, INR, JPY, AUD, CAD\n• 10+ language/locale formats\n• Automatic currency conversion\n• Multi-currency invoicing\n• Perfect for import/export businesses'),
  
  createBlock('h2', 'Advanced Pet Health Management'),
  
  createBlock('h3', 'Vaccination Tracking & Automated Alerts'),
  
  createBlock('normal', 'Never miss a vaccination due date again. Fretso\'s vaccination system includes:'),
  
  createBlock('normal', [
    { text: 'Complete Records:', marks: ['strong'] },
    { text: ' Track every vaccine administered—rabies, distemper, parvo, bordetella, everything' }
  ]),
  
  createBlock('normal', [
    { text: 'Upcoming Alerts:', marks: ['strong'] },
    { text: ' Automatic 30-day advance notifications for due vaccinations' }
  ]),
  
  createBlock('normal', [
    { text: 'Overdue Tracking:', marks: ['strong'] },
    { text: ' Dashboard alerts for overdue vaccinations with priority indicators' }
  ]),
  
  createBlock('normal', [
    { text: 'Next Due Dates:', marks: ['strong'] },
    { text: ' Automatic calculation of booster shots based on vaccine schedules' }
  ]),
  
  createBlock('normal', [
    { text: 'Veterinarian Info:', marks: ['strong'] },
    { text: ' Track which vet administered which vaccine' }
  ]),
  
  createBlock('normal', [
    { text: 'Batch Numbers:', marks: ['strong'] },
    { text: ' Record vaccine batch/lot numbers for compliance and recalls' }
  ]),
  
  createBlock('h3', 'Professional Certificate Generation'),
  
  createBlock('normal', 'Stop using handwritten vaccination cards. Generate professional certificates instantly:'),
  
  createBlock('normal', '• Auto-generate certificates with unique reference numbers\n• Include your clinic logo and details\n• QR code for digital verification\n• PDF export for email or printing\n• Batch certificate generation (vaccinate multiple pets at once)\n• Complete history of all certificates issued\n• Resend lost certificates in seconds'),
  
  createBlock('h3', 'Comprehensive Pet Health Records'),
  
  createBlock('normal', 'Every pet gets a complete digital health profile:'),
  
  createBlock('normal', [
    { text: 'Medical Notes:', marks: ['strong'] },
    { text: ' Up to 1,000 characters per visit for detailed records' }
  ]),
  
  createBlock('normal', [
    { text: 'Allergy Tracking:', marks: ['strong'] },
    { text: ' Flag food allergies, medication reactions, environmental sensitivities' }
  ]),
  
  createBlock('normal', [
    { text: 'Microchip Numbers:', marks: ['strong'] },
    { text: ' Track chip IDs for lost pet recovery' }
  ]),
  
  createBlock('normal', [
    { text: 'Weight Monitoring:', marks: ['strong'] },
    { text: ' Chart weight trends over time' }
  ]),
  
  createBlock('normal', [
    { text: 'Breed & Species:', marks: ['strong'] },
    { text: ' Detailed info with age, DOB, gender, color' }
  ]),
  
  createBlock('normal', [
    { text: 'Visit History:', marks: ['strong'] },
    { text: ' Complete timeline of every grooming, checkup, purchase' }
  ]),
  
  createBlock('h2', 'Smart Inventory & Stock Management'),
  
  createBlock('h3', 'Expiry & Batch Tracking'),
  
  createBlock('normal', 'Pet food, medicines, and treats all have expiry dates. Fretso ensures nothing goes to waste:'),
  
  createBlock('normal', '• Manufacturing date tracking\n• Automatic expiry alerts (30, 15, 7 days before)\n• Batch/lot number management\n• FIFO (First In, First Out) recommendations\n• Expiry dashboard for quick overview\n• Special alerts for medicines and perishables'),
  
  createBlock('h3', 'Cost & Profit Analysis'),
  
  createBlock('normal', 'Know exactly which products make you money:'),
  
  createBlock('normal', '• Track cost price vs selling price for every product\n• Real-time profit margin calculations\n• Revenue analysis by product, category, period\n• Identify your highest-margin items\n• Make data-driven purchasing decisions\n• Optimize pricing strategies'),
  
  createBlock('h3', 'Smart Stock Management'),
  
  createBlock('normal', 'Never run out of popular items or overstock slow movers:'),
  
  createBlock('normal', '• Minimum/Maximum stock level alerts\n• Reorder point notifications\n• Low inventory warnings\n• Stock movement audit trail\n• Supplier lead time tracking\n• Automatic reorder suggestions'),
  
  createBlock('h3', 'Stock Movement Audit'),
  
  createBlock('normal', 'Complete transparency on every inventory change:'),
  
  createBlock('normal', '• Track all stock movements: sales, purchases, adjustments\n• Record returns, damage, theft, corrections\n• Date/time stamps on every transaction\n• User accountability (who made what change)\n• Full audit trail for accounting\n• Investigate discrepancies instantly'),
  
  createBlock('h2', 'Flexible Billing & Payment Management'),
  
  createBlock('h3', '4 Payment Methods Integrated'),
  
  createBlock('normal', 'Accept payments however your customers prefer:'),
  
  createBlock('normal', '• Cash: Traditional, still popular\n• Card: Debit/Credit card processing\n• UPI: India\'s preferred digital payment\n• Digital Wallet: Paytm, PhonePe, Google Pay tracking'),
  
  createBlock('normal', 'Plus get complete analytics:'),
  
  createBlock('normal', '• Today\'s payment stats dashboard\n• Payment method-wise breakdown\n• Trend analysis by payment type\n• Cash vs digital ratios\n• Settlement tracking'),
  
  createBlock('h3', 'Smart Discount System'),
  
  createBlock('normal', 'Flexible discounting that works for your business:'),
  
  createBlock('normal', '• Percentage or fixed amount discounts\n• Optional discount reason tracking (loyalty, damage, promotion, etc.)\n• Applied on subtotal before tax (GST calculated on discounted amount)\n• Live calculation preview before finalizing\n• Discount analytics and reporting\n• Staff permission controls'),
  
  createBlock('h3', 'Appointment-Linked Billing'),
  
  createBlock('normal', 'Seamlessly connect appointments to transactions:'),
  
  createBlock('normal', '• Link invoices to scheduled appointments\n• Track deposit payments\n• Unpaid appointment alerts\n• Service-based billing\n• Automatic appointment completion on payment\n• Full appointment-to-payment audit trail'),
  
  createBlock('h2', 'Customer Relationship Management'),
  
  createBlock('h3', 'Customer Lifetime Value Tracking'),
  
  createBlock('normal', 'Understand your most valuable customers:'),
  
  createBlock('normal', '• Total purchase history per customer\n• Spending pattern analysis\n• Number of pets owned\n• Visit frequency tracking\n• Last visit date alerts\n• Customer loyalty insights\n• Inactive customer identification'),
  
  createBlock('h3', 'Multi-Pet Family Management'),
  
  createBlock('normal', 'One family, multiple pets? No problem:'),
  
  createBlock('normal', '• Link multiple pets to one customer account\n• Individual health records for each pet\n• Family-level billing and communication\n• Pet-specific service history\n• Household vaccination schedules'),
  
  createBlock('h2', 'Professional Services Management'),
  
  createBlock('h3', 'Time-Based Services'),
  
  createBlock('normal', 'Manage grooming and vet services with precision:'),
  
  createBlock('normal', '• Set service duration (15-minute intervals)\n• Service categories and sub-categories\n• Individual pricing per service\n• GST configuration per service type\n• Active/inactive service control\n• Service package bundling'),
  
  createBlock('h3', 'Appointment System'),
  
  createBlock('normal', 'Full-featured appointment scheduling:'),
  
  createBlock('normal', '• Visual calendar interface\n• Staff assignment and availability\n• Service duration blocking\n• WhatsApp/SMS/Email reminders\n• Recurring appointment support\n• Waitlist management\n• No-show tracking'),
  
  createBlock('h2', 'Advanced Business Features'),
  
  createBlock('h3', 'Bulk Excel Operations'),
  
  createBlock('normal', 'Import and export everything:'),
  
  createBlock('normal', '• Products and services\n• Appointments and schedules\n• Customer data and pets\n• Supplier information\n• Vaccination records\n• Certificates and transactions\n• Complete data portability\n• Migrate from other systems easily'),
  
  createBlock('h3', 'Supplier Network Management'),
  
  createBlock('normal', 'Manage your supply chain efficiently:'),
  
  createBlock('normal', '• Supplier contact database\n• Payment terms tracking\n• Credit limit monitoring\n• Lead time management\n• Product-supplier associations\n• Order history and analytics\n• Excel import/export support'),
  
  createBlock('h3', 'Advanced Business Reports'),
  
  createBlock('normal', 'Make data-driven decisions with comprehensive reports:'),
  
  createBlock('normal', '• Sales analysis by period, product, category\n• Inventory status and valuation reports\n• Customer insights and segmentation\n• Revenue trends and forecasting\n• Product performance metrics\n• Profit margin analysis\n• Staff performance tracking\n• Excel export for further analysis'),
  
  createBlock('h2', 'Smart Communication & Automation'),
  
  createBlock('h3', 'Email Notifications & Reminders'),
  
  createBlock('normal', 'Automated email system with professional templates:'),
  
  createBlock('normal', '• Gmail, Outlook, Yahoo integration\n• Custom SMTP server support\n• Appointment reminders (configurable timing)\n• Vaccination due alerts (30-day advance)\n• Invoice delivery via email\n• Custom notification templates\n• Bulk email campaigns'),
  
  createBlock('h3', 'Email Delivery Tracking'),
  
  createBlock('normal', 'Never wonder if emails were sent:'),
  
  createBlock('normal', '• Monitor delivery status\n• Test email configuration\n• View complete send history\n• Troubleshoot delivery issues\n• Detailed logging\n• Bounce and failure tracking'),
  
  createBlock('h2', 'Modern User Experience'),
  
  createBlock('h3', 'Beautiful, Intuitive Interface'),
  
  createBlock('normal', [
    { text: 'Grid & Table View Toggle:', marks: ['strong'] },
    { text: ' Switch between visual grid cards and detailed table views in POS for different workflow preferences' }
  ]),
  
  createBlock('normal', [
    { text: 'Dark Mode Support:', marks: ['strong'] },
    { text: ' Comfortable viewing in any lighting condition with beautiful dark theme' }
  ]),
  
  createBlock('normal', [
    { text: 'Responsive Design:', marks: ['strong'] },
    { text: ' Works perfectly on desktop, tablet, and mobile devices' }
  ]),
  
  createBlock('normal', [
    { text: 'Touch-Friendly:', marks: ['strong'] },
    { text: ' Optimized for touchscreen tablets at the counter' }
  ]),
  
  createBlock('h3', 'Powerful Search & Filtering'),
  
  createBlock('normal', 'Find anything in seconds:'),
  
  createBlock('normal', '• Search across products, customers, pets\n• Filter vaccinations by status and date\n• Certificate search and filtering\n• Multiple filter options everywhere\n• Date range filtering\n• Advanced search operators'),
  
  createBlock('h3', 'Dashboard Statistics'),
  
  createBlock('normal', 'Real-time business insights at a glance:'),
  
  createBlock('normal', '• Today\'s sales totals\n• Transaction count\n• Products in stock\n• Current cart items\n• Vaccination alerts count\n• Clickable stats widgets\n• Customizable dashboard'),
  
  createBlock('h2', 'Technical Excellence'),
  
  createBlock('h3', 'SKU & Barcode Support'),
  
  createBlock('normal', 'Modern retail capabilities:'),
  
  createBlock('normal', '• Assign unique SKUs to products\n• Barcode generation and scanning\n• Faster checkout process\n• Inventory tracking accuracy\n• Integration with barcode scanners\n• Bulk SKU operations'),
  
  createBlock('h3', 'Category Management'),
  
  createBlock('normal', 'Organize your catalog your way:'),
  
  createBlock('normal', '• Custom product and service categories\n• Dynamic filtering by category\n• Nested category hierarchies\n• Easy category assignment\n• Category-based reporting\n• Visual category organization'),
  
  createBlock('h2', 'Why Pet Businesses Choose Fretso'),
  
  createBlock('h3', '1. It\'s Complete'),
  
  createBlock('normal', 'You don\'t need separate software for:'),
  
  createBlock('normal', '• Billing and invoicing\n• Inventory management\n• Appointment scheduling\n• Customer relationship management\n• Pet health records\n• Vaccination tracking\n• Employee management\n• Business analytics'),
  
  createBlock('normal', 'Everything is integrated. One system, one login, one dashboard.'),
  
  createBlock('h3', '2. It Understands India'),
  
  createBlock('normal', 'Built for Indian businesses with Indian requirements:'),
  
  createBlock('normal', '• Proper GST handling (not an afterthought)\n• Indian currency as default\n• Local payment methods (UPI, Paytm, etc.)\n• WhatsApp integration for reminders\n• Multi-language support\n• Indian tax compliance'),
  
  createBlock('h3', '3. It\'s Pet-Specific'),
  
  createBlock('normal', 'Features you won\'t find in generic software:'),
  
  createBlock('normal', '• Vaccination tracking and certificates\n• Pet health records and medical notes\n• Breed and species management\n• Multi-pet family accounts\n• Pet photo galleries\n• Microchip tracking\n• Weight and health monitoring'),
  
  createBlock('h3', '4. It Scales With You'),
  
  createBlock('normal', 'Whether you\'re:'),
  
  createBlock('normal', '• A solo vet starting your practice\n• A small pet shop with 2-3 staff\n• A grooming salon with multiple groomers\n• A multi-location pet retail chain\n• A large veterinary hospital'),
  
  createBlock('normal', 'Fretso scales to match your business size and complexity.'),
  
  createBlock('h3', '5. It Saves Time and Money'),
  
  createBlock('normal', 'Real results from Fretso users:'),
  
  createBlock('normal', '• 50-70% reduction in no-shows (automated reminders)\n• 78% increase in vaccination follow-up revenue\n• 85-95% reduction in expiry losses\n• 10-15 hours saved weekly on admin work\n• 40% improvement in customer satisfaction\n• 3-5x ROI in the first year'),
  
  createBlock('h2', 'Getting Started is Easy'),
  
  createBlock('h3', 'Setup Process (1-2 Days)'),
  
  createBlock('normal', '1. Create your account and business profile\n2. Import products (or use Excel bulk import)\n3. Add your team members\n4. Configure services and pricing\n5. Set up payment methods\n6. Import existing customer data (optional)\n7. Configure email notifications'),
  
  createBlock('h3', 'Training (2-3 Hours)'),
  
  createBlock('normal', 'Fretso is designed to be intuitive:'),
  
  createBlock('normal', '• If your team can use WhatsApp, they can use Fretso\n• Built-in tooltips and help text\n• Video tutorials for every feature\n• Dedicated onboarding support\n• Live chat assistance'),
  
  createBlock('h3', 'Migration Support'),
  
  createBlock('normal', 'Moving from another system?'),
  
  createBlock('normal', '• Excel import for all data types\n• Data migration assistance available\n• Parallel running supported (test before switching)\n• No downtime required\n• Complete data portability'),
  
  createBlock('h2', 'Pricing That Makes Sense'),
  
  createBlock('normal', 'Unlike international software with fixed pricing that doesn\'t fit Indian budgets, Fretso offers:'),
  
  createBlock('normal', '• Customized pricing based on your business size\n• Pay only for features you need\n• No hidden costs or surprise charges\n• Transparent monthly or annual billing\n• Free trial to test everything\n• No credit card required to start'),
  
  createBlock('normal', 'Most businesses save 3-5x the software cost through:'),
  
  createBlock('normal', '• Reduced inventory losses\n• Increased follow-up revenue\n• Time savings on admin work\n• Better customer retention\n• Fewer billing errors\n• Improved staff productivity'),
  
  createBlock('h2', 'Real Success Stories'),
  
  createBlock('normal', [
    { text: 'Pet Paradise Store, Pune:', marks: ['strong'] },
    { text: ' "We were losing ₹85,000 monthly to inventory chaos. Fretso\'s expiry alerts and profit analysis saved us ₹92,000 monthly within 6 months."' }
  ]),
  
  createBlock('normal', [
    { text: 'Paws & Perfection, Bangalore:', marks: ['strong'] },
    { text: ' "No-shows dropped from 20 to 3-4 per month. The WhatsApp reminders alone paid for the software 10x over."' }
  ]),
  
  createBlock('normal', [
    { text: 'Dr. Arjun\'s Clinic, Pune:', marks: ['strong'] },
    { text: ' "Follow-up vaccination revenue increased 78%. Customers love that we remember their pet\'s birthday and send wishes!"' }
  ]),
  
  createBlock('h2', 'Common Questions'),
  
  createBlock('h3', 'Q: Do I need any special hardware?'),
  
  createBlock('normal', 'A: No! Fretso works on any device—laptop, tablet, or smartphone. Use what you already have. Barcode scanners are optional (supported but not required).'),
  
  createBlock('h3', 'Q: What if I have no technical knowledge?'),
  
  createBlock('normal', 'A: Fretso is designed for pet business owners, not IT experts. If you can use WhatsApp, you can use Fretso. Plus, we provide full training and support.'),
  
  createBlock('h3', 'Q: Can I try before committing?'),
  
  createBlock('normal', 'A: Absolutely! We offer a free trial with no credit card required. Test all features, import your data, and see if it fits your workflow.'),
  
  createBlock('h3', 'Q: What if internet goes down?'),
  
  createBlock('normal', 'A: Fretso works offline for critical operations. Data syncs automatically when connectivity is restored. You can always serve customers.'),
  
  createBlock('h3', 'Q: Is my data secure?'),
  
  createBlock('normal', 'A: Yes. Bank-level encryption, regular backups, secure servers. You retain complete ownership of your data. Export anytime.'),
  
  createBlock('h3', 'Q: Do you provide support in regional languages?'),
  
  createBlock('normal', 'A: Yes! Our support team speaks English, Hindi, and other regional languages. Help is available via phone, WhatsApp, and email.'),
  
  createBlock('h2', 'The Bottom Line'),
  
  createBlock('normal', 'Running a pet business in 2025 without proper management software is like trying to compete in Formula 1 with a bicycle. You might be working hard, but you\'re fighting an uphill battle.'),
  
  createBlock('normal', 'Fretso gives you:'),
  
  createBlock('normal', '• Complete business management in one platform\n• Features specifically designed for pet businesses\n• Indian market understanding (GST, UPI, WhatsApp)\n• Time savings of 10-15 hours weekly\n• Revenue increases of 20-30% on average\n• Professional image that builds trust\n• Scalability as you grow'),
  
  createBlock('normal', 'And it pays for itself—usually within the first month—through reduced losses, increased efficiency, and better customer retention.'),
  
  createBlock('h2', 'Ready to Transform Your Pet Business?'),
  
  createBlock('normal', 'Join hundreds of pet shops, grooming salons, and veterinary clinics across India who have already transformed their business with Fretso.'),
  
  createBlock('normal', '📧 Contact us at hello@fretso.in\n📱 WhatsApp: +91 82828 67803\n🌐 Learn more: fretso.in'),
  
  createBlock('normal', '✅ Start your free trial today - no credit card required\n✅ Full setup and training support included\n✅ See results in your first week'),
  
  createBlock('normal', 'Because your pet business deserves software that understands pets, understands India, and understands your success.'),
];

const blogPost = {
  _type: 'post',
  title: 'Why Fretso is the #1 Choice for Pet Businesses in India: Complete Features Guide 2025',
  slug: {
    _type: 'slug',
    current: 'fretso-features-benefits-complete-guide-india-pet-business',
  },
  author: 'Fretso Team',
  publishedAt: new Date().toISOString(),
  excerpt: 'Discover why hundreds of pet shops, grooming salons, and vet clinics across India choose Fretso. Complete guide to features including GST compliance, vaccination tracking, automated reminders, profit analysis, and 40+ powerful tools built specifically for the Indian pet care industry.',
  categories: ['Fretso Features', 'Pet Business Software', 'Complete Guide', 'India Pet Industry', 'Business Management'],
  body: blogBody,
};

async function publishPost() {
  try {
    console.log('Publishing Fretso features & benefits blog post to Sanity...');
    const result = await client.create(blogPost);
    console.log('✅ Blog post published successfully!');
    console.log('Post ID:', result._id);
    console.log('View at: http://localhost:3001/blog/' + blogPost.slug.current);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

publishPost();
