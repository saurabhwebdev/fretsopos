import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { urlFor } from '@/lib/sanity.image'
import Image from 'next/image'
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
  categories?: string[]
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    mainImage,
    categories
  }`
  
  const posts = await client.fetch(query, {}, { next: { revalidate: 60 } })
  return posts
}

export const metadata = {
  title: 'Pet Business Blog - Expert Tips & Insights | Fretso',
  description: 'Discover expert insights, practical tips, and success stories from India\'s leading pet care businesses. Learn how to manage your pet shop, grooming salon, or veterinary clinic more effectively.',
  keywords: 'pet business blog, pet shop management tips, pet grooming business, veterinary clinic management, pet retail India, pet business success stories, GST for pet shops, inventory management tips',
  openGraph: {
    title: 'Pet Business Blog - Expert Tips & Insights | Fretso',
    description: 'Expert insights, practical tips, and success stories from India\'s leading pet care businesses',
    url: 'https://www.fretso.in/blog',
    siteName: 'Fretso',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Business Blog - Expert Tips & Insights | Fretso',
    description: 'Expert insights, practical tips, and success stories from India\'s leading pet care businesses',
    creator: '@fretsoindia',
  },
  alternates: {
    canonical: 'https://www.fretso.in/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-background dark:via-background dark:to-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#E50914]/5 via-transparent to-transparent border-b border-border/50">
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium px-4 py-1.5 bg-[#E50914]/10 text-[#E50914] rounded-full border border-[#E50914]/20">
                Pet Business Insights
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#E50914] via-[#E50914] to-[#B20710] bg-clip-text text-transparent">
                Fretso Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert insights, practical tips, and success stories from India's leading pet care businesses
            </p>
          </div>
        </div>
      </div>
      
      {/* Articles Section */}
      <div className="container mx-auto px-4 py-16">

        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E50914]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-lg text-foreground font-medium mb-2">
              No blog posts yet
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon for expert insights and pet care tips!
            </p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-border/50 hover:border-[#E50914]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E50914]/10 hover:-translate-y-1"
              >
                {post.mainImage && (
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#E50914]/5 to-transparent">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-[#E50914]/10 flex items-center justify-center">
                        <span className="text-[#E50914] font-bold text-[10px]">{post.author.charAt(0)}</span>
                      </div>
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <span className="text-muted-foreground/50">•</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-bold leading-snug group-hover:text-[#E50914] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.categories.slice(0, 2).map((category, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-3 py-1 bg-[#E50914]/5 text-[#E50914]/80 rounded-full border border-[#E50914]/10"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
