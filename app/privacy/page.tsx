import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Privacy Policy - Fretso',
  description: 'Privacy Policy for Fretso pet business management software',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: January 27, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Welcome to Fretso ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our pet business management software and services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using Fretso, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.1 Personal Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Register for an account</li>
                <li>Use our services</li>
                <li>Contact our support team</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (business name, GSTIN, business type)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Customer data (pet owner information, pet details, appointment records)</li>
                <li>Transaction records and invoices</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                When you access our services, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data (access times, error logs)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our software and services</li>
                <li><strong>Account Management:</strong> To manage your account and provide customer support</li>
                <li><strong>Communication:</strong> To send you updates, newsletters, and marketing communications (you can opt-out anytime)</li>
                <li><strong>Payment Processing:</strong> To process transactions and send billing information</li>
                <li><strong>Analytics:</strong> To understand how users interact with our services and improve user experience</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activities</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.1 Service Providers</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We share information with third-party service providers who help us operate our business, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Email service providers</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.2 Legal Requirements</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">4.3 Business Transfers</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">5. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">6. Data Retention</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When you delete your account, we will delete your personal information within 90 days, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">7. Your Rights and Choices</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent was the basis</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To exercise these rights, please contact us at hello@fretso.in.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">8. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Note that disabling cookies may limit certain features of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">9. Third-Party Links</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our services may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">10. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">11. International Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#E50914]">13. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Email:</strong> hello@fretso.in</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Phone:</strong> +91 82828 67803</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
