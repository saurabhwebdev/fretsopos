import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FileText, Shield, CreditCard, Settings, Scale, AlertCircle, Mail } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Fretso',
  description: 'Terms of Service for Fretso pet business management software',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E50914]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Scale className="w-4 h-4 text-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                Legal Agreement
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Terms of <span className="text-[#E50914]">Service</span>
            </h1>

            <p className="text-lg text-gray-400">
              Last updated: January 27, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Section 1 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Fretso's pet business management software, website, and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Eligibility</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>You must be at least 18 years old and legally capable of entering into binding contracts to use our Services. By using Fretso, you represent and warrant that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are at least 18 years of age</li>
                  <li>You have the authority to bind your business to these Terms</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>All information you provide is accurate and up-to-date</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Account Registration and Security</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3.1 Account Creation</h3>
                  <p className="mb-3">To use Fretso, you must create an account by providing accurate and complete information. You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                    <li>Ensuring your account information remains accurate and current</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3.2 Account Termination</h3>
                  <p>We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activities.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Subscription and Payment</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.1 Subscription Plans</h3>
                  <p>Fretso offers various subscription plans with different features and pricing. By subscribing, you agree to pay all applicable fees as described in your chosen plan.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.2 Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>You authorize us to charge your payment method for all applicable fees</li>
                    <li>Prices may change with 30 days' notice to existing subscribers</li>
                    <li>Failure to pay may result in service suspension or termination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.3 Free Trial</h3>
                  <p>We may offer a free trial period. At the end of the trial, your subscription will automatically begin unless you cancel before the trial ends. You won't be charged during the trial period.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.4 Cancellation and Refunds</h3>
                  <p>You may cancel your subscription at any time through your account settings. Cancellations take effect at the end of the current billing period. We do not provide refunds for partial subscription periods, except as required by applicable law.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Use of Services</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5.1 Permitted Use</h3>
                  <p>You may use Fretso solely for managing your pet business operations in accordance with these Terms and applicable laws.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">5.2 Prohibited Activities</h3>
                  <p className="mb-3">You agree NOT to:</p>
                  <ul className="list-disc pl-6 space-y-2">
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
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Data and Privacy</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Your use of Fretso is also governed by our Privacy Policy. By using our Services, you consent to our collection and use of your data as described in the Privacy Policy.</p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6.1 Your Data</h3>
                  <p>You retain all rights to the data you input into Fretso ("Your Data"). You grant us a license to use, store, and process Your Data solely to provide the Services to you.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">6.2 Data Backup</h3>
                  <p>While we implement backup procedures, you are responsible for maintaining your own backup copies of Your Data. We are not liable for any loss of data.</p>
                </div>
              </div>
            </div>

            {/* Sections 7-12 (condensed) */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">7. Intellectual Property Rights</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  Fretso and all associated intellectual property rights are owned by us or our licensors. This includes our software, website design, logos, trademarks, and content.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your business purposes.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">8. Service Availability and Support</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  While we strive for 99.9% uptime, we do not guarantee uninterrupted access. We provide customer support via email, phone, and WhatsApp during business hours. We may update, modify, or discontinue features at any time with reasonable notice.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">9. Disclaimers and Limitations of Liability</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed uppercase text-sm">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">10. Indemnification</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You agree to indemnify and hold harmless Fretso from any claims arising out of your violation of these Terms, your use of the Services, or your violation of any rights of another party.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">11. Dispute Resolution</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India. Before initiating legal action, you agree to first contact us to attempt informal resolution.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">12. Miscellaneous</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Fretso. If any provision is found invalid, the remaining provisions remain in effect. Our failure to enforce any right shall not constitute a waiver.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">13. Changes to Terms</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify you of material changes by posting updated Terms and updating the "Last updated" date. Your continued use constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-12 p-6 sm:p-8 bg-gray-900 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">14. Contact Information</h2>
              </div>
              <p className="text-gray-400 mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-white font-medium">hello@fretso.in</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-white font-medium">+91 82828 67803</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                  <p className="text-white font-medium">+91 82828 67803</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>

            {/* Agreement Notice */}
            <div className="p-6 sm:p-8 bg-[#E50914]/10 border-l-4 border-[#E50914] rounded-r-2xl">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#E50914] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  By using Fretso, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
