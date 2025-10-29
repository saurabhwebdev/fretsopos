import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  excerpt?: string
  mainImage?: any
  body: any
  categories?: string[]
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    body,
    categories
  }`
  
  const post = await client.fetch(query, { slug }, { next: { revalidate: 60 } })
  return post
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] { slug }`
  const posts = await client.fetch(query)
  
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-background dark:via-background dark:to-background">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-br from-[#E50914]/5 via-transparent to-transparent">
        <article className="container mx-auto px-4 pt-32 pb-8">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#E50914] transition-all hover:gap-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-16">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-4 py-1.5 bg-[#E50914]/10 text-[#E50914] rounded-full border border-[#E50914]/20 hover:bg-[#E50914]/20 transition-colors"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-muted-foreground border-l-4 border-[#E50914] pl-4 py-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E50914]/10 flex items-center justify-center">
                  <span className="text-[#E50914] font-bold text-sm">{post.author.charAt(0)}</span>
                </div>
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <span className="text-muted-foreground/50">•</span>
              <time dateTime={post.publishedAt} className="text-sm">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>
        </article>
      </div>

      {/* Article Body with Enhanced Styling */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* Excerpt/Lead Paragraph */}
          {post.excerpt && (
            <div className="mb-12 p-6 bg-gradient-to-br from-[#E50914]/5 to-transparent border-l-4 border-[#E50914] rounded-r-lg">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/50
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-[#E50914]
            prose-p:text-[17px] prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-foreground/90
            prose-strong:text-[#E50914] prose-strong:font-semibold prose-strong:text-foreground
            prose-a:text-[#E50914] prose-a:no-underline prose-a:font-medium hover:prose-a:underline prose-a:underline-offset-4
            prose-ul:my-8 prose-ul:space-y-2
            prose-ol:my-8 prose-ol:space-y-2
            prose-li:text-[17px] prose-li:leading-relaxed prose-li:text-foreground/90 prose-li:pl-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#E50914] prose-blockquote:bg-[#E50914]/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-code:text-[#E50914] prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-muted prose-pre:border prose-pre:border-border
            prose-img:rounded-xl prose-img:shadow-lg
          ">
            <PortableText 
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="relative w-full h-96 my-8">
                      <Image
                        src={urlFor(value).width(800).height(600).url()}
                        alt={value.alt || 'Blog post image'}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ),
                },
              }}
            />
          </div>
        </div>
      </article>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-background dark:via-gray-900/30 dark:to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E50914] via-[#C40812] to-[#E50914] p-[2px] shadow-2xl hover:shadow-[#E50914]/20 transition-all duration-500">
              <div className="relative bg-gradient-to-br from-[#E50914] to-[#C40812] rounded-3xl p-8 sm:p-12 md:p-16">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                      Ready to Transform Your Pet Health Management?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                      Fretso is helping pet shops, grooming salons, and veterinary clinics across India manage thousands of pet health records, send millions of vaccination reminders, and build stronger customer relationships.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 py-6">
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Free Trial Available</h3>
                        <p className="text-sm text-white/80">No credit card required</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Quick Setup</h3>
                        <p className="text-sm text-white/80">Import your first 50 pets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Automated Reminders</h3>
                        <p className="text-sm text-white/80">Email & SMS notifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Professional Tools</h3>
                        <p className="text-sm text-white/80">Digital health records</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
                    <p className="text-white/90 text-center font-medium mb-6">
                      Get in touch and see the difference digital management makes
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <a 
                        href="mailto:hello@fretso.in"
                        className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
                      >
                        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="text-left">
                          <p className="text-xs text-white/70">Email</p>
                          <p className="text-sm text-white font-medium">hello@fretso.in</p>
                        </div>
                      </a>
                      <a 
                        href="https://wa.me/918282867803"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
                      >
                        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <div className="text-left">
                          <p className="text-xs text-white/70">WhatsApp</p>
                          <p className="text-sm text-white font-medium">+91 82828 67803</p>
                        </div>
                      </a>
                      <Link 
                        href="/"
                        className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
                      >
                        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div className="text-left">
                          <p className="text-xs text-white/70">Website</p>
                          <p className="text-sm text-white font-medium">fretso.in</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center pt-4">
                    <Link href="/#contact">
                      <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#E50914] rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                        <span>Start Your Free Trial</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </Link>
                    <p className="text-sm text-white/70 mt-4">
                      Because every pet deserves properly tracked health care, and your business deserves the revenue and reputation that comes from providing it professionally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
