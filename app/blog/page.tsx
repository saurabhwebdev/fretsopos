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

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#E50914] to-[#B20710] bg-clip-text text-transparent">
            Fretso Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Insights, tips, and stories from the pet care industry
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              No blog posts yet. Check back soon!
            </p>
            <p className="text-sm text-muted-foreground">
              Visit <Link href="/studio" className="text-[#E50914] hover:underline">/studio</Link> to create your first post
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {post.mainImage && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[#E50914] transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.categories.slice(0, 3).map((category, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
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
        )}
      </div>
      <Footer />
    </div>
  )
}
