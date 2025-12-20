import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Shield, Lock, Eye, Database, Mail, Globe, Users, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Fretso',
  description: 'Privacy Policy for Fretso pet business management software',
};

export default function PrivacyPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: FileText },
    { id: 'information', title: '2. Information We Collect', icon: Database },
    { id: 'usage', title: '3. How We Use Your Information', icon: Eye },
    { id: 'sharing', title: '4. Data Sharing and Disclosure', icon: Users },
    { id: 'security', title: '5. Data Security', icon: Shield },
    { id: 'retention', title: '6. Data Retention', icon: Lock },
    { id: 'rights', title: '7. Your Rights and Choices', icon: Users },
    { id: 'contact', title: '13. Contact Us', icon: Mail },
  ];

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
              <Shield className="w-4 h-4 text-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Privacy <span className="text-[#E50914]">Policy</span>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Introduction</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Welcome to Fretso ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our pet business management software and services.
                </p>
                <p>
                  By using Fretso, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Information We Collect</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.1 Personal Information</h3>
                  <p className="mb-3">We collect personal information that you voluntarily provide to us when you:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Register for an account</li>
                    <li>Use our services</li>
                    <li>Contact our support team</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="mb-3">This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Business information (business name, GSTIN, business type)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Customer data (pet owner information, pet details, appointment records)</li>
                    <li>Transaction records and invoices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2.2 Automatically Collected Information</h3>
                  <p className="mb-3">When you access our services, we automatically collect certain information, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, features used, time spent)</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log data (access times, error logs)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-gray-900 dark:text-white">Service Delivery:</strong> To provide, maintain, and improve our software and services</li>
                  <li><strong className="text-gray-900 dark:text-white">Account Management:</strong> To manage your account and provide customer support</li>
                  <li><strong className="text-gray-900 dark:text-white">Communication:</strong> To send you updates, newsletters, and marketing communications (you can opt-out anytime)</li>
                  <li><strong className="text-gray-900 dark:text-white">Payment Processing:</strong> To process transactions and send billing information</li>
                  <li><strong className="text-gray-900 dark:text-white">Analytics:</strong> To understand how users interact with our services and improve user experience</li>
                  <li><strong className="text-gray-900 dark:text-white">Security:</strong> To detect, prevent, and address technical issues and fraudulent activities</li>
                  <li><strong className="text-gray-900 dark:text-white">Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Data Sharing and Disclosure</h2>
              </div>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.1 Service Providers</h3>
                  <p className="mb-3">We share information with third-party service providers who help us operate our business, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud hosting providers</li>
                    <li>Payment processors</li>
                    <li>Email service providers</li>
                    <li>Analytics services</li>
                    <li>Customer support tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.2 Legal Requirements</h3>
                  <p>We may disclose your information if required by law or in response to valid requests by public authorities.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">4.3 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>We implement industry-standard security measures to protect your information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure server infrastructure</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Data Retention</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When you delete your account, we will delete your personal information within 90 days, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">7. Your Rights and Choices</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-gray-900 dark:text-white">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-gray-900 dark:text-white">Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong className="text-gray-900 dark:text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-gray-900 dark:text-white">Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong className="text-gray-900 dark:text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong className="text-gray-900 dark:text-white">Withdraw Consent:</strong> Withdraw consent for data processing where consent was the basis</li>
                </ul>
                <p>To exercise these rights, please contact us at hello@fretso.in.</p>
              </div>
            </div>

            {/* Sections 8-12 (condensed) */}
            <div className="mb-12 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Note that disabling cookies may limit certain features of our services.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">9. Third-Party Links</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">10. Children's Privacy</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">11. International Data Transfers</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#E50914] mb-3">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-6 sm:p-8 bg-gray-900 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">13. Contact Us</h2>
              </div>
              <p className="text-gray-400 mb-6">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="text-white font-medium">hello@fretso.in</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <p className="text-white font-medium">+91 82828 67803</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
