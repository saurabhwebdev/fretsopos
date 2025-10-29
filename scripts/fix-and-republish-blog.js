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

// Helper to generate unique keys
function genKey() {
  return crypto.randomBytes(12).toString('hex');
}

// Helper to create a block with proper keys
function createBlock(style, textContent, marks = []) {
  if (Array.isArray(textContent)) {
    // Multiple children
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
    // Single child
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
  createBlock('normal', 'Running a pet shop in India today is more challenging than ever. With the pet care market booming—expected to reach ₹7,500 crores by 2025—competition is fierce. But while most pet shop owners focus on attracting more customers, there\'s a silent profit killer lurking in plain sight: manual inventory management.'),
  
  createBlock('normal', 'If you\'re still tracking pet food stock, dog accessories, medicines, and grooming supplies using registers, Excel sheets, or even worse—memory alone—this article will reveal exactly how much money you\'re losing every single month.'),
  
  createBlock('h2', 'The Real Cost of Manual Inventory Management in Pet Shops'),
  
  createBlock('normal', 'Let\'s talk numbers. Based on feedback from hundreds of pet shop owners across Mumbai, Delhi, Bangalore, Pune, and other Indian cities, here are the most common—and expensive—problems caused by manual inventory tracking:'),
  
  createBlock('h3', '1. Product Expiry Losses: ₹15,000-₹40,000 Per Month'),
  
  createBlock('normal', 'Pet products—especially dog food, cat food, treats, and medicines—have strict expiry dates. When you\'re managing inventory manually, it\'s nearly impossible to track which products are expiring soon.'),
  
  createBlock('normal', 'Common scenario: A customer asks for premium dog food. You check your stock room and find three bags—only to discover later that one expired last month. That\'s ₹2,500-₹4,000 gone in an instant. Multiply this across multiple products throughout the month, and you\'re looking at massive losses.'),
  
  createBlock('normal', [
    { text: 'The Hidden Impact:', marks: ['strong'] },
    { text: ' Beyond direct product loss, expired items damage your reputation. Word spreads fast in local communities, and one instance of selling near-expiry products can hurt customer trust permanently.' }
  ]),
  
  createBlock('h3', '2. Stockouts Leading to Lost Sales: ₹25,000-₹60,000 Per Month'),
  
  createBlock('normal', 'Picture this: It\'s a Saturday afternoon—your busiest day. A regular customer walks in asking for their dog\'s usual Royal Canin formula. You check and realize you\'re out of stock. The customer leaves, probably heading to your competitor down the street.'),
  
  createBlock('normal', 'With manual tracking, you often don\'t know you\'re running low until it\'s too late. By the time you reorder, 3-5 days have passed, and you\'ve lost multiple sales opportunities.'),
  
  createBlock('normal', [
    { text: 'The Math:', marks: ['strong'] },
    { text: ' If 5-7 customers per week can\'t find what they need (conservative estimate), and average cart value is ₹1,500, that\'s ₹42,000-₹60,000 in monthly lost revenue.' }
  ]),
  
  createBlock('h3', '3. Overstocking and Dead Inventory: ₹20,000-₹50,000 Locked Capital'),
  
  createBlock('normal', 'Without accurate data on what\'s actually selling, you end up ordering too much of slow-moving items and not enough of bestsellers.'),
  
  createBlock('normal', 'That fancy imported cat toy that seemed promising? You ordered 20 units three months ago, and only sold 3. That\'s ₹15,000-₹20,000 sitting idle—money that could have been used to stock fast-moving items or invest in marketing.'),
  
  createBlock('h3', '4. Time Wasted on Manual Stock Counting: 10-15 Hours Weekly'),
  
  createBlock('normal', 'How much time do you or your staff spend doing physical stock counts, updating Excel sheets, and reconciling discrepancies? If you\'re like most pet shop owners, it\'s 1.5-2 hours daily.'),
  
  createBlock('normal', 'That\'s time that could be spent on customer service, marketing your shop on Instagram, or building relationships with pet parents. If you value your time at even ₹500/hour, that\'s ₹6,000-₹8,000 worth of lost productivity every month.'),
  
  createBlock('h3', '5. Theft and Pilferage: ₹8,000-₹15,000 Monthly'),
  
  createBlock('normal', 'This is uncomfortable to discuss, but it\'s real. When there\'s no systematic tracking, small items "disappear." It could be internal (staff) or external (shoplifting), but without accurate inventory records, you\'ll never know.'),
  
  createBlock('normal', 'Dog treats, small toys, supplements—these add up quickly. Most shop owners don\'t realize they have a pilferage problem until they implement proper tracking.'),
  
  createBlock('h2', 'Total Monthly Loss: ₹68,000 - ₹1,65,000'),
  
  createBlock('normal', 'When you add up expiry losses, stockouts, dead inventory, wasted time, and pilferage, the average pet shop loses between ₹68,000 to ₹1,65,000 every month due to poor inventory management.'),
  
  createBlock('normal', 'That\'s ₹8.16 lakhs to ₹19.8 lakhs annually—money that should be in your pocket, not disappearing into inefficiency.'),
  
  createBlock('h2', 'Why Manual Methods Don\'t Work for Modern Pet Businesses'),
  
  createBlock('normal', 'Ten years ago, when pet shops had limited SKUs and slower customer traffic, manual methods were manageable. But today\'s pet business landscape is different:'),
  
  createBlock('normal', '• Product variety has exploded from 50-100 SKUs to 300-500+ products including specialized diets, breed-specific foods, and imported items\n• Customer expectations are higher - pet parents want instant answers about product availability, prices, and expiry dates\n• Competition has intensified with online retailers, chain stores, and local competitors\n• Margins are tighter with price transparency online'),
  
  createBlock('h2', 'The Solution: Automated Pet Business Management Software'),
  
  createBlock('normal', 'The good news? Technology has solved this problem. Modern pet business management software like Fretso is specifically designed for Indian pet shops, grooming salons, and veterinary clinics.'),
  
  createBlock('h3', 'Automated Expiry Alerts'),
  
  createBlock('normal', 'Never lose money to expired products again. The system automatically tracks expiry dates for every batch and sends alerts 30, 15, and 7 days before expiration. You can plan promotional discounts or bundled offers to move products before they expire.'),
  
  createBlock('normal', [
    { text: 'Real Result:', marks: ['strong'] },
    { text: ' Pet shops using Fretso report 85-95% reduction in expiry losses within the first three months.' }
  ]),
  
  createBlock('h3', 'Low Stock Notifications'),
  
  createBlock('normal', 'Set minimum stock levels for each product. When inventory falls below the threshold, you get instant notifications. This means you can reorder before running out completely, ensuring you never lose a sale due to stockouts.'),
  
  createBlock('normal', 'The system also tracks sales velocity—showing you which products sell fast during which seasons or days of the week—helping you plan better.'),
  
  createBlock('h3', 'Smart Profit Analysis'),
  
  createBlock('normal', 'See exactly which products are making you money and which are just taking up shelf space. The profit analysis feature shows profit margin per product, fast-moving vs. slow-moving items, category-wise performance, and monthly trends and patterns.'),
  
  createBlock('h3', 'Real-Time Stock Updates'),
  
  createBlock('normal', 'Every sale automatically updates inventory levels. Whether you\'re billing from the counter, taking phone orders, or processing walk-ins, your stock count is always accurate in real-time.'),
  
  createBlock('h3', 'Theft Detection and Prevention'),
  
  createBlock('normal', 'When every transaction is logged and every product movement is tracked, unexplained inventory shrinkage becomes immediately visible. Most theft stops simply because people know the system is watching.'),
  
  createBlock('h2', 'How Fretso Specifically Helps Indian Pet Businesses'),
  
  createBlock('normal', 'Unlike generic inventory software, Fretso is built specifically for India\'s pet care industry with features that matter to your business:'),
  
  createBlock('h3', '✅ GST-Compliant Billing'),
  
  createBlock('normal', 'Generate GST-compliant invoices automatically. Track GSTIN details, apply correct tax rates, and generate reports for seamless GST filing—all without manual calculations.'),
  
  createBlock('h3', '✅ Multi-Category Support'),
  
  createBlock('normal', 'Manage diverse inventory—pet food (dog, cat, bird, fish), accessories, medicines, grooming supplies, live pets—all in one system with category-specific features.'),
  
  createBlock('h3', '✅ Pet Parent CRM'),
  
  createBlock('normal', 'Track customer purchase history, pet details, vaccination records, and preferred products. Send personalized reminders for vaccination due dates, product refills, or grooming appointments.'),
  
  createBlock('h3', '✅ Appointment Scheduling'),
  
  createBlock('normal', 'For grooming salons and vet clinics—manage appointments, send automated reminders, and reduce no-shows. Integrate with your inventory for seamless service + product billing.'),
  
  createBlock('h3', '✅ Affordable Pricing'),
  
  createBlock('normal', 'Unlike international software with hefty monthly fees, Fretso offers customized pricing based on your business size and needs. Whether you\'re a single-location pet shop or a multi-branch operation, there\'s a plan that fits.'),
  
  createBlock('h2', 'Real Success Story: From Chaos to Clarity'),
  
  createBlock('normal', 'Anil Patil, who runs Pet Paradise Store in Pune, was losing approximately ₹85,000 monthly due to the problems we discussed. Here\'s what changed after implementing Fretso:'),
  
  createBlock('normal', [
    { text: 'Month 1:', marks: ['strong'] },
    { text: ' Identified 15 products nearing expiry, ran a promotion, and recovered ₹18,000 that would have been lost' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 2:', marks: ['strong'] },
    { text: ' Low stock alerts helped prevent stockouts during festive season, capturing an additional ₹45,000 in sales' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 3:', marks: ['strong'] },
    { text: ' Profit analysis revealed two product categories with negative margins—discontinuing them freed up ₹35,000 capital' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 6:', marks: ['strong'] },
    { text: ' Total monthly savings and recovered revenue: ₹92,000—with just 30 minutes daily spent on the system' }
  ]),
  
  createBlock('normal', '"The profit analysis feature is a game-changer! Now I can see exactly which products are making money and which aren\'t. The expiry alerts have also saved us from losses. Highly recommend Fretso to every pet business owner!" - Anil Patil'),
  
  createBlock('h2', 'Getting Started: What You Need to Know'),
  
  createBlock('normal', 'Transitioning from manual to automated inventory management might sound intimidating, but it\'s simpler than you think.'),
  
  createBlock('h3', 'Step 1: Initial Setup (2-3 Hours)'),
  
  createBlock('normal', 'Import your existing product catalog or add items as you go. You don\'t need to enter everything at once—many shops start with their top 50-100 SKUs and add others gradually.'),
  
  createBlock('h3', 'Step 2: Staff Training (1-2 Days)'),
  
  createBlock('normal', 'Fretso is designed to be intuitive. If your staff can use WhatsApp, they can use Fretso. The interface is in simple language with clear icons and functions.'),
  
  createBlock('h3', 'Step 3: Go Live'),
  
  createBlock('normal', 'Start using it for daily transactions. Within a week, you\'ll wonder how you ever managed without it.'),
  
  createBlock('h2', 'Common Concerns Addressed'),
  
  createBlock('h3', '"What if my internet goes down?"'),
  
  createBlock('normal', 'Fretso works both online and offline. Transactions are saved locally and automatically sync when the connection is restored.'),
  
  createBlock('h3', '"Is it expensive?"'),
  
  createBlock('normal', 'The question isn\'t whether you can afford it—it\'s whether you can afford NOT to use it. If you\'re losing even ₹20,000 monthly to inventory problems, the software pays for itself many times over.'),
  
  createBlock('h3', '"Will my staff adapt?"'),
  
  createBlock('normal', 'In our experience, staff actually LOVE the new system because it makes their jobs easier. No more manual calculations, no more hunting for prices, no more stressful stock counts.'),
  
  createBlock('h2', 'The Bottom Line'),
  
  createBlock('normal', 'Manual inventory management made sense 15 years ago. Today, it\'s a liability that\'s quietly draining your profits every single day.'),
  
  createBlock('normal', 'The pet care industry in India is growing rapidly. Customer expectations are rising. Competition is intensifying. Margins are tightening. In this environment, operational efficiency isn\'t optional—it\'s essential for survival and growth.'),
  
  createBlock('normal', 'Every day you delay automating your inventory management is another day of lost profits. The question isn\'t whether to make the change—it\'s how soon you can start.'),
  
  createBlock('h2', 'Ready to Stop Losing Money?'),
  
  createBlock('normal', 'Fretso is currently helping pet shops, grooming salons, and veterinary clinics across India save thousands every month while delivering better customer experiences.'),
  
  createBlock('normal', 'We offer a free trial with no credit card required. See for yourself how much you\'re currently losing—and how much you can save.'),
  
  createBlock('normal', '📧 Contact us at hello@fretso.in\n📱 WhatsApp: +91 82828 67803\n🌐 Learn more: fretso.in'),
  
  createBlock('normal', 'Because your pet business deserves software that understands its unique challenges—and your profits deserve protection.'),
  
  createBlock('h2', 'Frequently Asked Questions'),
  
  createBlock('h3', 'Q: Can Fretso handle multi-location pet businesses?'),
  
  createBlock('normal', 'A: Yes! Fretso supports multi-location setups with centralized inventory tracking, consolidated reporting, and location-specific insights.'),
  
  createBlock('h3', 'Q: Does it work for grooming salons and vet clinics too?'),
  
  createBlock('normal', 'A: Absolutely. Beyond inventory, Fretso includes appointment scheduling, service billing, pet health records, and vaccination tracking—perfect for grooming and veterinary businesses.'),
  
  createBlock('h3', 'Q: How long does it take to see results?'),
  
  createBlock('normal', 'A: Most businesses see immediate benefits from expiry alerts and low stock notifications within the first week. Profit optimization typically shows results within 30-60 days as you gather data and adjust purchasing patterns.'),
  
  createBlock('h3', 'Q: Is my data secure?'),
  
  createBlock('normal', 'A: Yes. All data is encrypted and backed up regularly. You retain complete ownership of your business data, and we never share it with third parties.'),
  
  createBlock('h3', 'Q: What kind of support do you provide?'),
  
  createBlock('normal', 'A: We offer phone, email, and WhatsApp support in English, Hindi, and other regional languages. Our team understands pet businesses and can help you optimize your setup for maximum benefit.'),
];

const blogPost = {
  _type: 'post',
  title: 'How Manual Inventory Management is Costing Your Pet Shop Thousands Every Month (And How to Fix It)',
  slug: {
    _type: 'slug',
    current: 'manual-inventory-management-pet-shop-losses-solution',
  },
  author: 'Fretso Team',
  publishedAt: new Date().toISOString(),
  excerpt: 'Discover the hidden costs of manual inventory management in pet shops and how modern pet business management software can save you thousands while preventing stockouts, expiry losses, and lost sales.',
  categories: ['Inventory Management', 'Pet Business Tips', 'Cost Savings', 'Pet Shop Management', 'India Pet Industry'],
  body: blogBody,
};

async function fixAndRepublish() {
  try {
    console.log('Deleting old blog post...');
    
    // Delete the old post
    try {
      await client.delete('kyM5SM6pgmmk6pzYM9oafG');
      console.log('✅ Old post deleted');
    } catch (err) {
      console.log('⚠️  Could not delete old post (may not exist):', err.message);
    }
    
    console.log('\nPublishing new blog post with proper keys...');
    const result = await client.create(blogPost);
    console.log('✅ Blog post published successfully!');
    console.log('Post ID:', result._id);
    console.log('View at: http://localhost:3001/blog/' + blogPost.slug.current);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

fixAndRepublish();
