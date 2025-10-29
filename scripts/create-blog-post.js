require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');
const crypto = require('crypto');

// Helper function to generate unique keys
function generateKey() {
  return crypto.randomBytes(12).toString('hex');
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
});

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
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Running a pet shop in India today is more challenging than ever. With the pet care market booming—expected to reach ₹7,500 crores by 2025—competition is fierce. But while most pet shop owners focus on attracting more customers, there\'s a silent profit killer lurking in plain sight: manual inventory management.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'If you\'re still tracking pet food stock, dog accessories, medicines, and grooming supplies using registers, Excel sheets, or even worse—memory alone—this article will reveal exactly how much money you\'re losing every single month.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'The Real Cost of Manual Inventory Management in Pet Shops',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Let\'s talk numbers. Based on feedback from hundreds of pet shop owners across Mumbai, Delhi, Bangalore, Pune, and other Indian cities, here are the most common—and expensive—problems caused by manual inventory tracking:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '1. Product Expiry Losses: ₹15,000-₹40,000 Per Month',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Pet products—especially dog food, cat food, treats, and medicines—have strict expiry dates. When you\'re managing inventory manually, it\'s nearly impossible to track which products are expiring soon.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Common scenario: A customer asks for premium dog food. You check your stock room and find three bags—only to discover later that one expired last month. That\'s ₹2,500-₹4,000 gone in an instant. Multiply this across multiple products throughout the month, and you\'re looking at massive losses.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'The Hidden Impact:',
        },
        {
          _type: 'span',
          text: ' Beyond direct product loss, expired items damage your reputation. Word spreads fast in local communities, and one instance of selling near-expiry products can hurt customer trust permanently.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '2. Stockouts Leading to Lost Sales: ₹25,000-₹60,000 Per Month',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Picture this: It\'s a Saturday afternoon—your busiest day. A regular customer walks in asking for their dog\'s usual Royal Canin formula. You check and realize you\'re out of stock. The customer leaves, probably heading to your competitor down the street.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'With manual tracking, you often don\'t know you\'re running low until it\'s too late. By the time you reorder, 3-5 days have passed, and you\'ve lost multiple sales opportunities.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'The Math:',
        },
        {
          _type: 'span',
          text: ' If 5-7 customers per week can\'t find what they need (conservative estimate), and average cart value is ₹1,500, that\'s ₹42,000-₹60,000 in monthly lost revenue.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '3. Overstocking and Dead Inventory: ₹20,000-₹50,000 Locked Capital',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Without accurate data on what\'s actually selling, you end up ordering too much of slow-moving items and not enough of bestsellers.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'That fancy imported cat toy that seemed promising? You ordered 20 units three months ago, and only sold 3. That\'s ₹15,000-₹20,000 sitting idle—money that could have been used to stock fast-moving items or invest in marketing.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '4. Time Wasted on Manual Stock Counting: 10-15 Hours Weekly',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'How much time do you or your staff spend doing physical stock counts, updating Excel sheets, and reconciling discrepancies? If you\'re like most pet shop owners, it\'s 1.5-2 hours daily.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'That\'s time that could be spent on customer service, marketing your shop on Instagram, or building relationships with pet parents. If you value your time at even ₹500/hour, that\'s ₹6,000-₹8,000 worth of lost productivity every month.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '5. Theft and Pilferage: ₹8,000-₹15,000 Monthly',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This is uncomfortable to discuss, but it\'s real. When there\'s no systematic tracking, small items "disappear." It could be internal (staff) or external (shoplifting), but without accurate inventory records, you\'ll never know.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Dog treats, small toys, supplements—these add up quickly. Most shop owners don\'t realize they have a pilferage problem until they implement proper tracking.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Total Monthly Loss: ₹68,000 - ₹1,65,000',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'When you add up expiry losses, stockouts, dead inventory, wasted time, and pilferage, the average pet shop loses between ₹68,000 to ₹1,65,000 every month due to poor inventory management.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'That\'s ₹8.16 lakhs to ₹19.8 lakhs annually—money that should be in your pocket, not disappearing into inefficiency.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Why Manual Methods Don\'t Work for Modern Pet Businesses',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Ten years ago, when pet shops had limited SKUs and slower customer traffic, manual methods were manageable. But today\'s pet business landscape is different:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: '• Product variety has exploded:',
        },
        {
          _type: 'span',
          text: ' From 50-100 SKUs to 300-500+ products including specialized diets, breed-specific foods, and imported items',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: '• Customer expectations are higher:',
        },
        {
          _type: 'span',
          text: ' Pet parents want instant answers about product availability, prices, and expiry dates',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: '• Competition has intensified:',
        },
        {
          _type: 'span',
          text: ' Online retailers, chain stores, and local competitors mean you can\'t afford operational inefficiencies',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: '• Margins are tighter:',
        },
        {
          _type: 'span',
          text: ' With price transparency online, every rupee of waste directly impacts your bottom line',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'The Solution: Automated Pet Business Management Software',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The good news? Technology has solved this problem. Modern pet business management software like Fretso is specifically designed for Indian pet shops, grooming salons, and veterinary clinics.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Here\'s how it addresses each problem we discussed:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Automated Expiry Alerts',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Never lose money to expired products again. The system automatically tracks expiry dates for every batch and sends alerts 30, 15, and 7 days before expiration. You can plan promotional discounts or bundled offers to move products before they expire.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Real Result:',
        },
        {
          _type: 'span',
          text: ' Pet shops using Fretso report 85-95% reduction in expiry losses within the first three months.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Low Stock Notifications',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Set minimum stock levels for each product. When inventory falls below the threshold, you get instant notifications. This means you can reorder before running out completely, ensuring you never lose a sale due to stockouts.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The system also tracks sales velocity—showing you which products sell fast during which seasons or days of the week—helping you plan better.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Smart Profit Analysis',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'See exactly which products are making you money and which are just taking up shelf space. The profit analysis feature shows:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '• Profit margin per product\n• Fast-moving vs. slow-moving items\n• Category-wise performance\n• Monthly trends and patterns',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'This data-driven approach helps you make smarter purchasing decisions, reducing dead stock and maximizing profitability.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Real-Time Stock Updates',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Every sale automatically updates inventory levels. Whether you\'re billing from the counter, taking phone orders, or processing walk-ins, your stock count is always accurate in real-time.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'No more daily stock-taking sessions. No more discrepancies between "book stock" and "physical stock." What the system shows is what you have—period.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Theft Detection and Prevention',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'When every transaction is logged and every product movement is tracked, unexplained inventory shrinkage becomes immediately visible. Most theft stops simply because people know the system is watching.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'You can also set user permissions—limiting who can make adjustments, process returns, or access high-value items.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'How Fretso Specifically Helps Indian Pet Businesses',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Unlike generic inventory software, Fretso is built specifically for India\'s pet care industry with features that matter to your business:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '✅ GST-Compliant Billing',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Generate GST-compliant invoices automatically. Track GSTIN details, apply correct tax rates, and generate reports for seamless GST filing—all without manual calculations.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '✅ Multi-Category Support',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Manage diverse inventory—pet food (dog, cat, bird, fish), accessories, medicines, grooming supplies, live pets—all in one system with category-specific features.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '✅ Pet Parent CRM',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Track customer purchase history, pet details, vaccination records, and preferred products. Send personalized reminders for vaccination due dates, product refills, or grooming appointments.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '✅ Appointment Scheduling',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'For grooming salons and vet clinics—manage appointments, send automated reminders, and reduce no-shows. Integrate with your inventory for seamless service + product billing.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '✅ Affordable Pricing',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Unlike international software with hefty monthly fees, Fretso offers customized pricing based on your business size and needs. Whether you\'re a single-location pet shop or a multi-branch operation, there\'s a plan that fits.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Real Success Story: From Chaos to Clarity',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Anil Patil, who runs Pet Paradise Store in Pune, was losing approximately ₹85,000 monthly due to the problems we discussed. Here\'s what changed after implementing Fretso:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Month 1:',
        },
        {
          _type: 'span',
          text: ' Identified 15 products nearing expiry, ran a promotion, and recovered ₹18,000 that would have been lost',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Month 2:',
        },
        {
          _type: 'span',
          text: ' Low stock alerts helped prevent stockouts during festive season, capturing an additional ₹45,000 in sales',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Month 3:',
        },
        {
          _type: 'span',
          text: ' Profit analysis revealed two product categories with negative margins—discontinuing them freed up ₹35,000 capital',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['strong'],
          text: 'Month 6:',
        },
        {
          _type: 'span',
          text: ' Total monthly savings and recovered revenue: ₹92,000—with just 30 minutes daily spent on the system',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '"The profit analysis feature is a game-changer! Now I can see exactly which products are making money and which aren\'t. The expiry alerts have also saved us from losses. Highly recommend Fretso to every pet business owner!" - Anil Patil',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Getting Started: What You Need to Know',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Transitioning from manual to automated inventory management might sound intimidating, but it\'s simpler than you think:',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Step 1: Initial Setup (2-3 Hours)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Import your existing product catalog or add items as you go. You don\'t need to enter everything at once—many shops start with their top 50-100 SKUs and add others gradually.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Step 2: Staff Training (1-2 Days)',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Fretso is designed to be intuitive. If your staff can use WhatsApp, they can use Fretso. The interface is in simple language with clear icons and functions.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Step 3: Go Live',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Start using it for daily transactions. Within a week, you\'ll wonder how you ever managed without it.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Common Concerns Addressed',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '"What if my internet goes down?"',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Fretso works both online and offline. Transactions are saved locally and automatically sync when the connection is restored.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '"Is it expensive?"',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The question isn\'t whether you can afford it—it\'s whether you can afford NOT to use it. If you\'re losing even ₹20,000 monthly to inventory problems, the software pays for itself many times over.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: '"Will my staff adapt?"',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'In our experience, staff actually LOVE the new system because it makes their jobs easier. No more manual calculations, no more hunting for prices, no more stressful stock counts.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'The Bottom Line',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Manual inventory management made sense 15 years ago. Today, it\'s a liability that\'s quietly draining your profits every single day.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The pet care industry in India is growing rapidly. Customer expectations are rising. Competition is intensifying. Margins are tightening. In this environment, operational efficiency isn\'t optional—it\'s essential for survival and growth.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Every day you delay automating your inventory management is another day of lost profits. The question isn\'t whether to make the change—it\'s how soon you can start.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: 'Ready to Stop Losing Money?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Fretso is currently helping pet shops, grooming salons, and veterinary clinics across India save thousands every month while delivering better customer experiences.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'We offer a free trial with no credit card required. See for yourself how much you\'re currently losing—and how much you can save.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '📧 Contact us at hello@fretso.in',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '📱 WhatsApp: +91 82828 67803',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: '🌐 Learn more: fretso.in',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Because your pet business deserves software that understands its unique challenges—and your profits deserve protection.',
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
          text: 'Q: Can Fretso handle multi-location pet businesses?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'A: Yes! Fretso supports multi-location setups with centralized inventory tracking, consolidated reporting, and location-specific insights.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q: Does it work for grooming salons and vet clinics too?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'A: Absolutely. Beyond inventory, Fretso includes appointment scheduling, service billing, pet health records, and vaccination tracking—perfect for grooming and veterinary businesses.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q: How long does it take to see results?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'A: Most businesses see immediate benefits from expiry alerts and low stock notifications within the first week. Profit optimization typically shows results within 30-60 days as you gather data and adjust purchasing patterns.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q: Is my data secure?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'A: Yes. All data is encrypted and backed up regularly. You retain complete ownership of your business data, and we never share it with third parties.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'h3',
      children: [
        {
          _type: 'span',
          text: 'Q: What kind of support do you provide?',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'A: We offer phone, email, and WhatsApp support in English, Hindi, and other regional languages. Our team understands pet businesses and can help you optimize your setup for maximum benefit.',
        },
      ],
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          marks: ['em'],
          text: 'Keywords: pet shop inventory management, pet business software India, automated inventory system, pet store management software, grooming salon software, veterinary clinic management, GST billing for pet shops, pet food inventory tracking, reduce business losses, pet shop profit analysis',
        },
      ],
    },
  ],
};

async function publishPost() {
  try {
    console.log('Publishing blog post to Sanity...');
    const result = await client.create(blogPost);
    console.log('✅ Blog post published successfully!');
    console.log('Post ID:', result._id);
    console.log('View at: http://localhost:3001/blog/' + blogPost.slug.current);
  } catch (error) {
    console.error('❌ Error publishing post:', error);
    process.exit(1);
  }
}

publishPost();
