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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

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
      </article>
      <Footer />
    </div>
  )
}
