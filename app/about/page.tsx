'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Target, Eye, Heart, Zap, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#E50914]/5 to-transparent">
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
    </div>
  );
}
