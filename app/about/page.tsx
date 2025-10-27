'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Target, Eye, Heart, Zap, Users, Globe, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      instagram: "#",
      initials: "S"
    },
    {
      name: "Ashutosh",
      role: "Head of Outreach",
      description: "Building partnerships and expanding Fretso's reach across India",
      linkedin: "#",
      instagram: "#",
      initials: "A"
    },
    {
      name: "Himanshu",
      role: "Tech Head",
      description: "Architecting innovative solutions for pet business management",
      linkedin: "#",
      instagram: "#",
      initials: "H"
    },
    {
      name: "Ritesh",
      role: "Social Media & Support Head",
      description: "Ensuring exceptional customer experience and community engagement",
      linkedin: "#",
      instagram: "#",
      initials: "R"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-[#E50914]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="text-[#E50914]">Fretso</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering India's pet care industry with intelligent, affordable, and purpose-built management software.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-[#E50914] mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Fretso was born from a simple observation: India's booming pet care industry was struggling with outdated management systems that weren't designed for their unique needs. Pet shop owners, grooming salon operators, and veterinary clinics were juggling spreadsheets, manual records, and generic software that didn't understand the complexities of pet care businesses.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We saw passionate entrepreneurs spending more time on paperwork than on what they love most—caring for pets. We witnessed missed appointments, inventory headaches, GST compliance struggles, and lost customer records. We knew there had to be a better way.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                That's when Fretso was created. Not as another generic business software, but as a purpose-built solution specifically designed for India's pet care ecosystem. We listened to pet business owners across the country—from small neighborhood pet shops in tier-2 cities to multi-location grooming chains in metropolitan areas. Their challenges became our blueprint.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Today, Fretso serves pet businesses across India, helping them streamline operations, delight their customers, and grow with confidence. Every feature we build, every update we release, is driven by real feedback from real pet business owners who use Fretso every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <Card className="border-2 border-[#E50914]/20 hover:border-[#E50914] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#E50914]/10 rounded-2xl flex items-center justify-center">
                      <Eye className="w-7 h-7 text-[#E50914]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    To become India's most trusted technology partner for pet care businesses, enabling every pet shop, spa, and clinic to deliver world-class service while running efficient, profitable operations.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2 border-[#E50914]/20 hover:border-[#E50914] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#E50914]/10 rounded-2xl flex items-center justify-center">
                      <Target className="w-7 h-7 text-[#E50914]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    To empower pet care entrepreneurs with affordable, intelligent software that simplifies daily operations, enhances customer experiences, and helps their businesses thrive in India's growing pet economy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Fretso
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Value 1 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every decision we make starts with understanding and solving real problems faced by pet business owners. Your success is our success.
                  </p>
                </CardContent>
              </Card>

              {/* Value 2 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We continuously evolve our platform with the latest technology while keeping it simple, intuitive, and accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              {/* Value 3 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Premium software shouldn't come with premium prices. We believe every pet business, regardless of size, deserves powerful tools.
                  </p>
                </CardContent>
              </Card>

              {/* Value 4 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Made for India</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    From GST compliance to multi-currency support and local language options—we understand India's unique business landscape.
                  </p>
                </CardContent>
              </Card>

              {/* Value 5 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Purpose-Built</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're not a generic business tool adapted for pets. We're built from the ground up exclusively for pet care businesses.
                  </p>
                </CardContent>
              </Card>

              {/* Value 6 */}
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#E50914]/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transparency</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clear pricing, honest communication, and straightforward terms. No surprises, no hidden fees, no complicated contracts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                The passionate individuals behind Fretso's success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 bg-[#E50914]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-[#E50914]">{member.initials}</span>
                    </div>
                    
                    {/* Name & Role */}
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-[#E50914] font-medium mb-3">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3">
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-[#E50914] dark:hover:text-[#E50914] transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fretso */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Pet Businesses Choose Fretso</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                What sets us apart in the Indian pet care market
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Built Specifically for Pet Businesses",
                  description: "Unlike generic software, every feature in Fretso is designed with pet shops, spas, and clinics in mind. From pet vaccination tracking to breed-specific records, we understand your unique needs."
                },
                {
                  title: "Flexible, Custom Pricing",
                  description: "We know every pet business is different. That's why our pricing adapts to your size, features needed, and transaction volume. Pay only for what you use, scale as you grow."
                },
                {
                  title: "GST Compliant & India-Ready",
                  description: "Automatic CGST, SGST, IGST calculations, support for 7+ currencies, and multi-language options. Built to handle India's regulatory landscape seamlessly."
                },
                {
                  title: "Easy to Use, Quick to Learn",
                  description: "You don't need to be tech-savvy to use Fretso. Our intuitive interface means your team can start using it productively within hours, not weeks."
                },
                {
                  title: "Comprehensive Support",
                  description: "From onboarding to ongoing support, we're with you every step of the way. Real people, real help, whenever you need it."
                },
                {
                  title: "Continuous Innovation",
                  description: "We regularly update Fretso based on customer feedback and industry trends. You'll always have access to the latest features and improvements."
                }
              ].map((item, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#E50914]">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Everything you need to know about Fretso
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "How long has Fretso been in the market?",
                  answer: "Fretso has been serving India's pet care industry with continuous improvements and updates based on real customer feedback. We've evolved from understanding the challenges faced by pet business owners to building a comprehensive solution that addresses their unique needs."
                },
                {
                  question: "What makes Fretso different from other business management software?",
                  answer: "Unlike generic business software, Fretso is purpose-built exclusively for pet businesses. Every feature—from pet vaccination tracking to breed-specific records—is designed with pet shops, spas, and clinics in mind. We understand the Indian pet care market's unique requirements including GST compliance, multi-currency support, and local language options."
                },
                {
                  question: "Can Fretso scale as my business grows?",
                  answer: "Absolutely! Fretso grows with you. Whether you're a single-location pet shop or expanding to multiple branches, our flexible pricing and features scale according to your needs. You can start small and add more users, locations, and features as your business expands."
                },
                {
                  question: "Do you integrate with other systems?",
                  answer: "We offer data import/export capabilities in standard formats (Excel, CSV) that work with most accounting and business systems. Our team can also discuss custom integration requirements for larger businesses with specific needs."
                },
                {
                  question: "What training and resources do you provide?",
                  answer: "We provide comprehensive onboarding including live training sessions, video tutorials, detailed documentation, and ongoing support. Your team will receive hands-on training to ensure everyone is comfortable using Fretso. We also offer regular webinars and updates on new features."
                },
                {
                  question: "How often do you update Fretso?",
                  answer: "We release updates regularly based on customer feedback, bug fixes, and new feature additions. All updates are automatically available to you at no extra cost. We announce major updates in advance and provide release notes detailing all improvements."
                },
                {
                  question: "Is Fretso suitable for mobile use?",
                  answer: "Yes! Fretso is fully responsive and works seamlessly on desktops, tablets, and mobile devices. You can manage your business, check inventory, process sales, and view reports from anywhere with an internet connection."
                },
                {
                  question: "What happens if I have a technical issue?",
                  answer: "Our support team is here to help! You can reach us via email, phone, WhatsApp, or live chat during business hours. We prioritize quick response times and will work with you until your issue is resolved. Most common questions are answered in our knowledge base for instant self-help."
                }
              ].map((faq, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-colors overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-semibold pr-8">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#E50914] flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-muted-foreground mb-4">
                Have more questions about Fretso?
              </p>
              <Link href="/#contact">
                <Button className="bg-[#E50914] hover:bg-[#C40812] text-white font-semibold px-8 py-6">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#E50914] rounded-2xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Pet Business?
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Join hundreds of pet businesses across India who trust Fretso to manage their operations efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-[#E50914] font-semibold px-8 py-6 text-base w-full sm:w-auto">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base w-full sm:w-auto">
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
