'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, Eye, Heart, Zap, Users, Globe, Linkedin, Mail, ChevronDown, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Saurabh",
      role: "Founder & CEO",
      description: "Leading Fretso's vision to empower India's pet care industry",
      linkedin: "#",
      gmail: "mailto:hello@fretso.in",
      initials: "S"
    },
    {
      name: "Ashutosh",
      role: "Head of Outreach",
      description: "Building partnerships and expanding Fretso's reach across India",
      linkedin: "#",
      gmail: "mailto:hello@fretso.in",
      initials: "A"
    },
    {
      name: "Himanshu",
      role: "Tech Head",
      description: "Architecting innovative solutions for pet business management",
      linkedin: "#",
      gmail: "mailto:hello@fretso.in",
      initials: "H"
    },
    {
      name: "Ritesh",
      role: "Social Media & Support Head",
      description: "Ensuring exceptional customer experience and community engagement",
      linkedin: "#",
      gmail: "mailto:hello@fretso.in",
      initials: "R"
    }
  ];

  const coreValues = [
    { icon: Heart, title: 'Customer First', description: 'Every decision we make starts with understanding and solving real problems faced by pet business owners.' },
    { icon: Zap, title: 'Innovation', description: 'We continuously evolve our platform with the latest technology while keeping it simple and accessible.' },
    { icon: Users, title: 'Accessibility', description: 'Premium software shouldn\'t come with premium prices. Every pet business deserves powerful tools.' },
    { icon: Globe, title: 'Made for India', description: 'From GST compliance to multi-currency support—we understand India\'s unique business landscape.' },
    { icon: Target, title: 'Purpose-Built', description: 'We\'re built from the ground up exclusively for pet care businesses, not adapted from generic tools.' },
    { icon: Star, title: 'Transparency', description: 'Clear pricing, honest communication, and straightforward terms. No surprises, no hidden fees.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#E50914]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                Our Story
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              About <span className="text-[#E50914]">Fretso</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering India's pet care industry with intelligent, affordable, and purpose-built management software.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-background" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  The Beginning
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our <span className="text-[#E50914]">Story</span>
              </h2>
            </div>

            {/* Story content */}
            <div className="space-y-8">
              {[
                "Fretso was born from a simple observation: India's booming pet care industry was struggling with outdated management systems that weren't designed for their unique needs. Pet shop owners, grooming salon operators, and veterinary clinics were juggling spreadsheets, manual records, and generic software that didn't understand the complexities of pet care businesses.",
                "We saw passionate entrepreneurs spending more time on paperwork than on what they love most—caring for pets. We witnessed missed appointments, inventory headaches, GST compliance struggles, and lost customer records. We knew there had to be a better way.",
                "That's when Fretso was created. Not as another generic business software, but as a purpose-built solution specifically designed for India's pet care ecosystem. We listened to pet business owners across the country—from small neighborhood pet shops in tier-2 cities to multi-location grooming chains in metropolitan areas.",
                "Today, Fretso serves pet businesses across India, helping them streamline operations, delight their customers, and grow with confidence. Every feature we build, every update we release, is driven by real feedback from real pet business owners who use Fretso every single day."
              ].map((paragraph, index) => (
                <div key={index} className="flex gap-6">
                  <div className="hidden sm:block w-1 bg-gradient-to-b from-[#E50914] to-[#E50914]/20 rounded-full flex-shrink-0" />
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E50914]/30 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 bg-[#E50914] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become India's most trusted technology partner for pet care businesses, enabling every pet shop, spa, and clinic to deliver world-class service while running efficient, profitable operations.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="group relative bg-white dark:bg-gray-900 rounded-3xl p-8 sm:p-10 border-2 border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50914]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 bg-[#E50914] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    To empower pet care entrepreneurs with affordable, intelligent software that simplifies daily operations, enhances customer experiences, and helps their businesses thrive in India's growing pet economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-background" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  What We Believe
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Our Core <span className="text-[#E50914]">Values</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do at Fretso
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-xl hover:shadow-[#E50914]/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#E50914] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#E50914] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#E50914] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/80">
                  The People
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Meet Our <span className="text-[#E50914]">Team</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                The passionate individuals behind Fretso's success
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-[#E50914]/50 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#E50914] to-[#ff4d5a] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#E50914] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 hover:bg-[#E50914] rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={member.gmail}
                      className="w-10 h-10 bg-white/10 hover:bg-[#E50914] rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fretso */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-background" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  Why Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Why Pet Businesses
                <span className="block mt-2 text-[#E50914]">Choose Fretso</span>
              </h2>
            </div>

            {/* Reasons */}
            <div className="space-y-4">
              {[
                { title: "Built Specifically for Pet Businesses", description: "Unlike generic software, every feature in Fretso is designed with pet shops, spas, and clinics in mind." },
                { title: "Flexible, Custom Pricing", description: "Our pricing adapts to your size, features needed, and transaction volume. Pay only for what you use." },
                { title: "GST Compliant & India-Ready", description: "Automatic CGST, SGST, IGST calculations with multi-currency and multi-language options." },
                { title: "Easy to Use, Quick to Learn", description: "Our intuitive interface means your team can start using it productively within hours, not weeks." },
                { title: "Comprehensive Support", description: "From onboarding to ongoing support, we're with you every step of the way." },
                { title: "Continuous Innovation", description: "Regular updates based on customer feedback. Always access to the latest features." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-all duration-300"
                >
                  <span className="w-8 h-8 bg-[#E50914] rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#E50914] mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/5 border border-[#E50914]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E50914]">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Frequently Asked
                <span className="block mt-2 text-[#E50914]">Questions</span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                { question: "How long has Fretso been in the market?", answer: "Fretso has been serving India's pet care industry with continuous improvements based on real customer feedback." },
                { question: "What makes Fretso different from other business management software?", answer: "Unlike generic business software, Fretso is purpose-built exclusively for pet businesses with features like pet vaccination tracking and breed-specific records." },
                { question: "Can Fretso scale as my business grows?", answer: "Absolutely! Whether you're a single-location pet shop or expanding to multiple branches, our flexible features scale according to your needs." },
                { question: "Do you integrate with other systems?", answer: "We offer data import/export in standard formats (Excel, CSV) and can discuss custom integration requirements for larger businesses." },
                { question: "What training and resources do you provide?", answer: "We provide comprehensive onboarding including live training sessions, video tutorials, detailed documentation, and ongoing support." },
                { question: "Is Fretso suitable for mobile use?", answer: "Yes! Fretso is fully responsive and works seamlessly on desktops, tablets, and mobile devices." },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index
                      ? 'border-[#E50914] shadow-lg shadow-[#E50914]/10'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E50914] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/#contact">
                <Button className="group bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-8 py-6">
                  <span className="flex items-center gap-2">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E50914] via-[#C40812] to-[#8B0000]" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/10 rounded-full" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Pet Business?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join hundreds of pet businesses across India who trust Fretso to manage their operations efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-[#E50914] font-bold px-10 py-7 text-lg">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-7 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
