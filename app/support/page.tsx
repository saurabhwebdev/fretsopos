'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Book, Video, Mail, MessageCircle, Phone, FileText, Search, HelpCircle, BookOpen, PlayCircle, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function SupportPage() {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle form submission (reused from home page)
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mqagkzle', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setIsContactDialogOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    {
      icon: BookOpen,
      title: "Getting Started Guide",
      description: "Learn the basics of setting up and using Fretso",
      link: "#"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all features",
      link: "#"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive documentation for all features",
      link: "#"
    },
    {
      icon: Download,
      title: "Download Resources",
      description: "User manuals, templates, and helpful files",
      link: "#"
    }
  ];

  const popularTopics = [
    "How to add new products to inventory",
    "Setting up GST billing",
    "Managing customer records",
    "Creating appointments",
    "Generating reports",
    "Importing data from Excel",
    "Setting up multiple users",
    "Pet vaccination tracking"
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "fretsoindia@gmail.com",
      link: "mailto:fretsoindia@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us during business hours",
      action: "+91 80870 98711",
      link: "tel:+918087098711"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/918087098711"
    },
    {
      icon: HelpCircle,
      title: "Contact Form",
      description: "Fill out a form and we'll get back to you",
      action: "Open Form",
      link: "#contact-form"
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
              How Can We <span className="text-[#E50914]">Help You?</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get support, access guides, watch tutorials, and find answers to your questions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto pt-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Access</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Jump straight to the resources you need
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardHeader className="text-center p-6">
                      <div className="w-16 h-16 bg-[#E50914]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E50914] transition-colors">
                        <Icon className="w-8 h-8 text-[#E50914] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Topics</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Most searched help topics
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {popularTopics.map((topic, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] transition-colors cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Book className="w-5 h-5 text-[#E50914] flex-shrink-0" />
                    <span className="text-sm sm:text-base">{topic}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Multiple ways to reach our support team
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:border-[#E50914] hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-[#E50914]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-[#E50914]" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {channel.description}
                      </p>
                      {channel.link === '#contact-form' ? (
                        <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                              {channel.action}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-[#E50914]">Get in Touch</DialogTitle>
                              <DialogDescription>
                                Fill out the form below and we'll get back to you shortly.
                              </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                              <div className="space-y-2">
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder="Your name"
                                  required
                                  className="w-full"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder="your@email.com"
                                  required
                                  className="w-full"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  name="phone"
                                  type="tel"
                                  placeholder="Your phone number"
                                  className="w-full"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  placeholder="How can we help you?"
                                  required
                                  className="w-full min-h-[100px]"
                                />
                              </div>
                              {submitStatus === 'success' && (
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                                  ✓ Thank you! We'll get back to you soon.
                                </div>
                              )}
                              {submitStatus === 'error' && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                                  Something went wrong. Please try again or email us directly.
                                </div>
                              )}
                              <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#E50914] hover:bg-[#C40812] text-white font-semibold py-6"
                              >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <a href={channel.link} target={channel.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          <Button variant="outline" className="w-full">
                            {channel.action}
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#E50914]/20">
              <CardContent className="p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Support Hours</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Our support team is available to help you
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                    <span className="font-semibold">Saturday:</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  * Email support available 24/7 - we'll respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#E50914] rounded-2xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Still Need Help?
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-[#E50914] font-semibold px-8 py-6 text-base">
                    Contact Support
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Link href="/#faq">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base w-full sm:w-auto">
                  View FAQ
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
