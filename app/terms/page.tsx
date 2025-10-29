import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Terms of Service - Fretso',
  description: 'Terms of Service for Fretso pet business management software',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: January 27, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">1. Agreement to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of Fretso's pet business management software, website, and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">2. Eligibility</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You must be at least 18 years old and legally capable of entering into binding contracts to use our Services. By using Fretso, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>You are at least 18 years of age</li>
                <li>You have the authority to bind your business to these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>All information you provide is accurate and up-to-date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.1 Account Creation</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To use Fretso, you must create an account by providing accurate and complete information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains accurate and current</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.2 Account Termination</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">4. Subscription and Payment</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.1 Subscription Plans</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Fretso offers various subscription plans with different features and pricing. By subscribing, you agree to pay all applicable fees as described in your chosen plan.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.2 Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>You authorize us to charge your payment method for all applicable fees</li>
                <li>Prices may change with 30 days' notice to existing subscribers</li>
                <li>Failure to pay may result in service suspension or termination</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.3 Free Trial</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may offer a free trial period. At the end of the trial, your subscription will automatically begin unless you cancel before the trial ends. You won't be charged during the trial period.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.4 Cancellation and Refunds</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial subscription periods, except as required by applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">5. Use of Services</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.1 Permitted Use</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may use Fretso solely for managing your pet business operations in accordance with these Terms and applicable laws.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.2 Prohibited Activities</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer or decompile our software</li>
                <li>Use the Services for any illegal or fraudulent purpose</li>
                <li>Share your account with unauthorized users</li>
                <li>Scrape, mine, or harvest data from our Services</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Resell or redistribute the Services without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">6. Data and Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your use of Fretso is also governed by our Privacy Policy. By using our Services, you consent to our collection and use of your data as described in the Privacy Policy.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">6.1 Your Data</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You retain all rights to the data you input into Fretso ("Your Data"). You grant us a license to use, store, and process Your Data solely to provide the Services to you.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">6.2 Data Backup</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                While we implement backup procedures, you are responsible for maintaining your own backup copies of Your Data. We are not liable for any loss of data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">7. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7.1 Our Rights</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Fretso and all associated intellectual property rights are owned by us or our licensors. This includes our software, website design, logos, trademarks, and content. You may not use our intellectual property without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">7.2 License Grant</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your business purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">8. Service Availability and Support</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">8.1 Uptime</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                While we strive for 99.9% uptime, we do not guarantee uninterrupted access to the Services. We may perform scheduled maintenance or experience unexpected downtime.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">8.2 Support</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We provide customer support via email, phone, and WhatsApp during business hours. Support response times may vary based on your subscription plan.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">8.3 Updates and Changes</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may update, modify, or discontinue features of the Services at any time. We will provide reasonable notice of significant changes that materially affect your use of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">9. Disclaimers and Limitations of Liability</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">9.1 Disclaimer of Warranties</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">9.2 Limitation of Liability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">10. Indemnification</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Fretso and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Your violation of these Terms</li>
                <li>Your use of the Services</li>
                <li>Your violation of any rights of another party</li>
                <li>Your Data or content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">11. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">11.1 Governing Law</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">11.2 Jurisdiction</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Any disputes arising out of or related to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts located in India.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">11.3 Informal Resolution</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Before initiating any legal action, you agree to first contact us to attempt to resolve any dispute informally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">12. Miscellaneous</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">12.1 Entire Agreement</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fretso regarding the Services.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">12.2 Severability</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">12.3 Waiver</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">12.4 Assignment</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">13. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending an email to your registered email address (for significant changes)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your continued use of the Services after changes become effective constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Email:</strong> hello@fretso.in</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Phone:</strong> +91 82828 67803</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>WhatsApp:</strong> +91 82828 67803</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> India</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-[#E50914]/10 border-l-4 border-[#E50914] p-6 rounded-r-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>By using Fretso, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
