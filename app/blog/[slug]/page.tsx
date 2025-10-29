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
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto px-4 pt-32 pb-16">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#E50914] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.map((category, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-[#E50914]/10 text-[#E50914] rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          {post.mainImage && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
              <Image
                src={urlFor(post.mainImage).width(1200).height(800).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-base prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-[#E50914] prose-strong:font-semibold prose-a:text-[#E50914] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-li:text-base prose-ul:my-6 prose-ol:my-6">
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
