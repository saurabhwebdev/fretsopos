import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Fretso',
    };
  }

  return {
    title: `${post.title} - Fretso Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
              <span>By {post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-10 prose-h1:leading-tight
            prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-12 prose-h2:text-[#E50914] dark:prose-h2:text-[#E50914] prose-h2:leading-snug
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:font-semibold
            prose-p:text-base prose-p:leading-relaxed prose-p:mb-6 prose-p:text-gray-800 dark:prose-p:text-gray-200
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
            prose-em:text-gray-700 dark:prose-em:text-gray-300 prose-em:italic
            prose-a:text-[#E50914] dark:prose-a:text-[#E50914] prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#C40812]
            prose-ul:my-6 prose-ul:space-y-2
            prose-ol:my-6 prose-ol:space-y-2
            prose-li:text-gray-800 dark:prose-li:text-gray-200 prose-li:leading-relaxed
            prose-li:marker:text-[#E50914]
            prose-blockquote:border-l-4 prose-blockquote:border-[#E50914] prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-6 prose-blockquote:rounded-r-lg
            prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300 prose-blockquote:italic prose-blockquote:font-medium
            prose-code:text-[#E50914] prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-['']
            prose-pre:bg-gray-900 dark:prose-pre:bg-black prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:border prose-pre:border-gray-700
            prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-hr:my-12
            prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8
            prose-table:border-collapse prose-table:w-full
            prose-thead:bg-gray-100 dark:prose-thead:bg-gray-800
            prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border-t prose-td:border-gray-200 dark:prose-td:border-gray-700">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
