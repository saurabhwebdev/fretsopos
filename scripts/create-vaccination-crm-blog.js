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
  createBlock('normal', '"When was Max\'s last rabies shot?" Mrs. Gupta asks, worry clear in her voice. You flip through thick folders, searching for the vaccination card. Five minutes pass. The customer behind her is getting impatient. You finally find it—crumpled, coffee-stained, barely readable.'),
  
  createBlock('normal', 'This scene plays out daily in pet shops, grooming salons, and veterinary clinics across India. Poor vaccination record management doesn\'t just waste time—it risks pet health, damages customer trust, and costs you money. Let\'s fix this.'),
  
  createBlock('h2', 'The Hidden Crisis: Why Manual Pet Records Are Dangerous'),
  
  createBlock('normal', 'In India\'s rapidly growing pet care industry (expected to reach ₹7,500 crores by 2025), professional pet health management is no longer optional—it\'s essential. Yet most businesses still rely on paper cards, scattered Excel files, or worse—memory.'),
  
  createBlock('h3', '1. Health Risks: Missing Critical Vaccinations'),
  
  createBlock('normal', 'Rabies, distemper, parvovirus—these aren\'t just words. They\'re life-threatening diseases prevented by timely vaccinations. When you can\'t track which pets are due for shots:'),
  
  createBlock('normal', '• Pets miss critical booster doses\n• Disease outbreaks can happen in your facility\n• You expose other pets and humans to risk\n• Legal liability increases if something goes wrong'),
  
  createBlock('normal', 'A single case of preventable disease can shut down your business for weeks and destroy your reputation overnight.'),
  
  createBlock('h3', '2. Lost Revenue: ₹40,000-₹1,20,000 Annually'),
  
  createBlock('normal', 'Every pet needs regular vaccinations. When you don\'t track due dates, you lose follow-up revenue:'),
  
  createBlock('normal', '• Annual rabies boosters: ₹500-₹1,000 per pet\n• Multi-vaccine combinations: ₹1,500-₹3,000 per pet\n• Deworming treatments: ₹300-₹800 quarterly'),
  
  createBlock('normal', 'If you have 200 regular customers and miss just 30% of follow-up opportunities, that\'s ₹60,000-₹1,20,000 in lost annual revenue.'),
  
  createBlock('h3', '3. Customer Frustration: "They Don\'t Even Remember My Pet"'),
  
  createBlock('normal', 'Today\'s pet parents expect personalized care. When you ask the same questions every visit ("What breed is he? When was his last vaccination? Does he have any allergies?"), customers feel like just another number.'),
  
  createBlock('normal', 'They leave for competitors who make them feel special—who remember that Bruno hates loud noises, Bella prefers chicken treats, and Max needs his anti-anxiety medication before grooming.'),
  
  createBlock('h3', '4. Compliance Nightmares: Municipal Regulations'),
  
  createBlock('normal', 'Many Indian cities now require pet businesses to maintain vaccination records, especially for boarding and grooming services. Manual records make compliance audits stressful and time-consuming.'),
  
  createBlock('normal', 'If you can\'t quickly prove that every pet in your facility has current rabies vaccination, you risk fines, closure orders, or loss of licenses.'),
  
  createBlock('h3', '5. Time Wasted: 8-12 Hours Weekly'),
  
  createBlock('normal', 'How much time does your team spend:'),
  
  createBlock('normal', '• Searching for vaccination cards\n• Calling customers to ask about pet details\n• Manually calculating next due dates\n• Creating reminder lists for follow-ups\n• Re-entering information you already collected'),
  
  createBlock('normal', 'That\'s time not spent serving customers or growing your business.'),
  
  createBlock('h2', 'Why Traditional Methods Fail for Modern Pet Businesses'),
  
  createBlock('h3', 'Problem 1: Paper Vaccination Cards Get Lost or Damaged'),
  
  createBlock('normal', 'Physical cards are fragile. They get lost, torn, wet, or simply forgotten at home. When vaccination records disappear, you have to start from scratch—potentially putting the pet at risk with unnecessary shots or dangerous gaps in protection.'),
  
  createBlock('h3', 'Problem 2: No Automated Follow-Up Reminders'),
  
  createBlock('normal', 'Rabies vaccine due in 30 days? Without automated tracking, you\'re relying on customers to remember or manually calling hundreds of people. Both approaches fail.'),
  
  createBlock('normal', 'The result? Pets show up months overdue for critical vaccinations, or they never come back at all.'),
  
  createBlock('h3', 'Problem 3: Incomplete Medical History'),
  
  createBlock('normal', 'A customer rushes in: "Max ate something toxic! Here\'s his vaccination card." But what about:'),
  
  createBlock('normal', '• Previous medical conditions\n• Medication allergies\n• Past treatments and responses\n• Weight history and trends\n• Behavioral notes from groomers'),
  
  createBlock('normal', 'Paper cards don\'t capture this context. Digital pet health records do.'),
  
  createBlock('h3', 'Problem 4: Can\'t Scale as You Grow'),
  
  createBlock('normal', 'When you had 50 regular customers, manual tracking was manageable. At 200+ customers with 300+ pets, it becomes impossible. You need a system that scales with your business.'),
  
  createBlock('h2', 'The Solution: Digital Pet Health Management & CRM'),
  
  createBlock('normal', 'Modern pet business management software like Fretso includes comprehensive vaccination tracking and customer relationship management designed specifically for Indian pet care businesses.'),
  
  createBlock('h3', 'Complete Pet Health Records'),
  
  createBlock('normal', 'Every pet gets a digital health profile containing:'),
  
  createBlock('normal', [
    { text: 'Basic Information:', marks: ['strong'] },
    { text: ' Name, breed, age, weight history, microchip number, photo' }
  ]),
  
  createBlock('normal', [
    { text: 'Vaccination Records:', marks: ['strong'] },
    { text: ' All shots received, dates administered, next due dates, vaccine brands, batch numbers' }
  ]),
  
  createBlock('normal', [
    { text: 'Medical History:', marks: ['strong'] },
    { text: ' Past illnesses, surgeries, chronic conditions, allergies, medication records' }
  ]),
  
  createBlock('normal', [
    { text: 'Behavioral Notes:', marks: ['strong'] },
    { text: ' Temperament, fears, preferences, special handling requirements' }
  ]),
  
  createBlock('normal', [
    { text: 'Service History:', marks: ['strong'] },
    { text: ' All grooming sessions, vet visits, purchases, with detailed notes' }
  ]),
  
  createBlock('h3', 'Automated Vaccination Due Date Tracking'),
  
  createBlock('normal', 'The system automatically calculates when each pet\'s vaccinations are due based on:'),
  
  createBlock('normal', '• Standard vaccination schedules\n• Indian veterinary guidelines\n• Individual pet age and health status\n• Previous vaccination dates'),
  
  createBlock('normal', 'No more manual calculations or missed doses.'),
  
  createBlock('h3', 'Smart WhatsApp/SMS Reminders'),
  
  createBlock('normal', 'When Bruno\'s annual rabies booster is due in 30 days, the system automatically sends:'),
  
  createBlock('normal', '"Hi Mrs. Gupta! Reminder: Bruno\'s annual rabies vaccination is due on Feb 15th. Book your appointment now to keep him protected. Reply BOOK or call us at [your number]."'),
  
  createBlock('normal', 'Follow-up reminders go out at 15 days and 7 days if they haven\'t booked yet.'),
  
  createBlock('normal', [
    { text: 'Real Result:', marks: ['strong'] },
    { text: ' Pet businesses using Fretso report 65-80% increase in vaccination follow-up revenue within the first quarter.' }
  ]),
  
  createBlock('h3', 'Customer Relationship Management (CRM)'),
  
  createBlock('normal', 'Beyond health records, Fretso\'s CRM tracks:'),
  
  createBlock('normal', [
    { text: 'Contact Information:', marks: ['strong'] },
    { text: ' Phone, WhatsApp, email, address, emergency contacts' }
  ]),
  
  createBlock('normal', [
    { text: 'Multiple Pets:', marks: ['strong'] },
    { text: ' One customer, three dogs, two cats? All linked to the same account' }
  ]),
  
  createBlock('normal', [
    { text: 'Purchase History:', marks: ['strong'] },
    { text: ' What they buy, how often, favorite brands, spending patterns' }
  ]),
  
  createBlock('normal', [
    { text: 'Communication Logs:', marks: ['strong'] },
    { text: ' Every call, message, inquiry, complaint—all documented' }
  ]),
  
  createBlock('normal', [
    { text: 'Preferences & Notes:', marks: ['strong'] },
    { text: ' Preferred groomer, usual appointment time, special requests' }
  ]),
  
  createBlock('h3', 'Instant Access During Customer Interactions'),
  
  createBlock('normal', 'When Mrs. Gupta calls, pull up her account in seconds:'),
  
  createBlock('normal', '"Hi Mrs. Gupta! How\'s Bruno doing? I see he\'s due for his rabies booster next month. Would you like me to book his usual Thursday morning slot with Rajesh?"'),
  
  createBlock('normal', 'This level of personalization builds loyalty and increases customer lifetime value.'),
  
  createBlock('h2', 'How Fretso Vaccination Tracking Works for Indian Pet Businesses'),
  
  createBlock('h3', '✅ Quick Pet Registration'),
  
  createBlock('normal', 'New customer? Register their pet in under 2 minutes:'),
  
  createBlock('normal', '• Scan or upload existing vaccination card\n• Enter basic details (auto-complete helps)\n• Take photo with your phone\n• System creates complete digital profile'),
  
  createBlock('h3', '✅ Vaccination Certificate Generation'),
  
  createBlock('normal', 'After administering vaccines, generate professional certificates instantly:'),
  
  createBlock('normal', '• Includes your clinic logo and details\n• Lists all vaccines given with batch numbers\n• QR code for digital verification\n• Send via WhatsApp or email immediately\n• No more handwritten cards'),
  
  createBlock('h3', '✅ Multi-Pet Family Management'),
  
  createBlock('normal', 'One family, five pets? No problem. See all pets under one customer account. Track each pet\'s individual health records while maintaining family-level billing and communication.'),
  
  createBlock('h3', '✅ Emergency Information Access'),
  
  createBlock('normal', 'Pet emergency? Pull up complete medical history instantly:'),
  
  createBlock('normal', '• All previous vaccinations\n• Known allergies and reactions\n• Current medications\n• Past medical issues\n• Emergency contact numbers'),
  
  createBlock('normal', 'This information can save lives in critical situations.'),
  
  createBlock('h3', '✅ Compliance Reports'),
  
  createBlock('normal', 'Generate instant reports for municipal authorities:'),
  
  createBlock('normal', '• All pets with current rabies vaccination\n• List of overdue vaccinations\n• Vaccine administration logs\n• Client consent forms\n• Compliance certificates'),
  
  createBlock('h2', 'Real Success Story: Dr. Arjun\'s Veterinary Clinic, Pune'),
  
  createBlock('normal', 'Dr. Arjun runs a busy veterinary clinic in Pune serving 400+ regular clients. Before Fretso, vaccination management was chaos:'),
  
  createBlock('normal', '• Filing cabinet full of paper records\n• No systematic follow-up for due vaccinations\n• Customers frustrated repeating information\n• Staff spent hours searching for records\n• Missing 60% of follow-up revenue opportunities'),
  
  createBlock('normal', 'After implementing Fretso:'),
  
  createBlock('normal', [
    { text: 'Month 1:', marks: ['strong'] },
    { text: ' Digitized 400 pet records in one week. Staff amazed at instant access.' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 2:', marks: ['strong'] },
    { text: ' Automated reminders sent to 150 clients with overdue vaccinations. 95 booked appointments—₹85,000 in recovered revenue.' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 3:', marks: ['strong'] },
    { text: ' Zero compliance issues during municipal inspection. Inspector praised digital record-keeping.' }
  ]),
  
  createBlock('normal', [
    { text: 'Month 6:', marks: ['strong'] },
    { text: ' Follow-up vaccination revenue increased by 78%. Customer satisfaction scores up 40%. Staff loves not searching for papers.' }
  ]),
  
  createBlock('normal', '"The vaccination reminder system alone transformed our business. We went from manually calling maybe 20% of clients to automatically reaching 100% of them. Our follow-up revenue tripled, and customers love that we remember their pet\'s birthday and send them wishes!" - Dr. Arjun'),
  
  createBlock('h2', 'Advanced Features That Make the Difference'),
  
  createBlock('h3', 'Deworming & Medication Tracking'),
  
  createBlock('normal', 'Beyond vaccinations, track:'),
  
  createBlock('normal', '• Deworming treatments (typically every 3 months)\n• Heartworm prevention\n• Flea and tick medications\n• Chronic medication schedules\n• Dietary supplements'),
  
  createBlock('normal', 'Automated reminders ensure pets stay on schedule.'),
  
  createBlock('h3', 'Birthday & Anniversary Reminders'),
  
  createBlock('normal', 'Build emotional connections:'),
  
  createBlock('normal', '• Send birthday wishes with special discount offers\n• "1 Year With Us!" anniversary messages\n• Seasonal greetings during festivals\n• Post-service follow-up messages'),
  
  createBlock('h3', 'Breeder & Multi-Pet Management'),
  
  createBlock('normal', 'For breeders or customers with many pets:'),
  
  createBlock('normal', '• Track entire litters with parent information\n• Bulk vaccination scheduling\n• Family tree management\n• Breeding records and pedigrees'),
  
  createBlock('h3', 'Integration with Billing'),
  
  createBlock('normal', 'When you administer a vaccine:'),
  
  createBlock('normal', '1. Record it in the pet\'s health profile\n2. Generate invoice automatically\n3. Send digital certificate to customer\n4. Schedule next due date\n5. Set up automated reminders'),
  
  createBlock('normal', 'All in one seamless flow.'),
  
  createBlock('h2', 'Getting Started with Digital Pet Health Management'),
  
  createBlock('h3', 'Step 1: Data Migration (1-2 Days)'),
  
  createBlock('normal', 'Don\'t worry about your existing records. You can:'),
  
  createBlock('normal', '• Import from Excel/CSV files\n• Scan and upload paper cards\n• Enter data gradually as customers visit\n• Hire Fretso\'s data entry service (optional)'),
  
  createBlock('h3', 'Step 2: Team Training (2-3 Hours)'),
  
  createBlock('normal', 'Train your team on:'),
  
  createBlock('normal', '• Registering new pets\n• Updating vaccination records\n• Generating certificates\n• Searching and accessing records\n• Sending manual reminders if needed'),
  
  createBlock('h3', 'Step 3: Configure Automation'),
  
  createBlock('normal', 'Set up:'),
  
  createBlock('normal', '• Vaccination reminder schedules\n• Message templates\n• Certificate formats\n• Standard vaccination protocols\n• Compliance requirements'),
  
  createBlock('h3', 'Step 4: Go Live'),
  
  createBlock('normal', 'Start using digital records for all new pets. Migrate existing pets gradually. Within 2-3 weeks, you\'ll have complete digital transformation.'),
  
  createBlock('h2', 'Common Questions About Digital Pet Health Records'),
  
  createBlock('h3', 'Q: What if customers already have physical vaccination cards?'),
  
  createBlock('normal', 'A: Simply scan or photograph the card and upload it to the system. All information is digitized while customers keep their physical cards if they prefer.'),
  
  createBlock('h3', 'Q: Can customers access their pet\'s records?'),
  
  createBlock('normal', 'A: Yes! You can enable a customer portal where pet parents can:'),
  
  createBlock('normal', '• View their pet\'s complete health history\n• Download vaccination certificates\n• See upcoming due dates\n• Book appointments\n• Access emergency information'),
  
  createBlock('h3', 'Q: What about data privacy and security?'),
  
  createBlock('normal', 'A: All data is encrypted and stored securely. You retain complete ownership. Customers\' personal information is protected according to Indian data privacy regulations.'),
  
  createBlock('h3', 'Q: Does it work offline?'),
  
  createBlock('normal', 'A: Yes! Critical features work offline. Records sync automatically when connectivity is restored. You can always access emergency information.'),
  
  createBlock('h3', 'Q: Can we share records with other vets if needed?'),
  
  createBlock('normal', 'A: Yes. With customer consent, you can export or share pet health records with other veterinarians, boarding facilities, or groomers.'),
  
  createBlock('h3', 'Q: What about pets without any vaccination history?'),
  
  createBlock('normal', 'A: No problem. Start fresh. Create a new profile, begin the appropriate vaccination schedule, and the system tracks everything going forward.'),
  
  createBlock('h2', 'The Business Case: ROI of Digital Pet Health Management'),
  
  createBlock('normal', 'Let\'s do the math for a typical pet business with 200 regular customers:'),
  
  createBlock('normal', [
    { text: 'Current State (Manual):', marks: ['strong'] }
  ]),
  
  createBlock('normal', '• Missed follow-up vaccinations: 60% of opportunities\n• Lost annual revenue: ₹80,000\n• Staff time wasted: 10 hours/week × ₹500/hour = ₹20,000/month\n• Customer churn from poor experience: 2 customers/month × ₹15,000 lifetime value = ₹30,000/month'),
  
  createBlock('normal', [
    { text: 'Total Monthly Loss: ₹1,30,000', marks: ['strong'] }
  ]),
  
  createBlock('normal', [
    { text: 'With Digital Management:', marks: ['strong'] }
  ]),
  
  createBlock('normal', '• Capture 80% of follow-up opportunities: +₹65,000/month\n• Save 8 hours/week staff time: +₹16,000/month\n• Reduce customer churn by 50%: +₹15,000/month\n• Software cost: -₹5,000/month (approximate)'),
  
  createBlock('normal', [
    { text: 'Net Monthly Benefit: ₹91,000', marks: ['strong'] }
  ]),
  
  createBlock('normal', 'The system pays for itself in the first month and generates massive returns thereafter.'),
  
  createBlock('h2', 'The Bottom Line: Pet Health Records Are Your Business Foundation'),
  
  createBlock('normal', 'In 2025, running a pet business without digital health records is like running a bank without account statements. It\'s not just inefficient—it\'s unprofessional and risky.'),
  
  createBlock('normal', 'Your customers trust you with their beloved pets\' health. Show them that trust is well-placed with organized, accessible, comprehensive digital records.'),
  
  createBlock('h2', 'Ready to Transform Your Pet Health Management?'),
  
  createBlock('normal', 'Fretso is helping pet shops, grooming salons, and veterinary clinics across India manage thousands of pet health records, send millions of vaccination reminders, and build stronger customer relationships.'),
  
  createBlock('normal', 'We offer a free trial with no credit card required. Import your first 50 pets, send automated reminders, and see the difference digital management makes.'),
  
  createBlock('normal', '📧 Contact us at hello@fretso.in\n📱 WhatsApp: +91 82828 67803\n🌐 Learn more: fretso.in'),
  
  createBlock('normal', 'Because every pet deserves properly tracked health care, and your business deserves the revenue and reputation that comes from providing it professionally.'),
];

const blogPost = {
  _type: 'post',
  title: 'Why Manual Vaccination Records Are Costing Your Pet Business ₹1,30,000+ Monthly (And Putting Pets at Risk)',
  slug: {
    _type: 'slug',
    current: 'pet-vaccination-tracking-crm-management-solution',
  },
  author: 'Fretso Team',
  publishedAt: new Date().toISOString(),
  excerpt: 'Discover how poor vaccination tracking and customer records are costing your pet business thousands while risking pet health. Learn how digital pet health management and CRM can increase follow-up revenue by 78% and build stronger customer relationships.',
  categories: ['Pet Health Management', 'Vaccination Tracking', 'CRM for Pet Business', 'Vet Clinic Software', 'India Pet Industry'],
  body: blogBody,
};

async function publishPost() {
  try {
    console.log('Publishing vaccination tracking & CRM blog post to Sanity...');
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
