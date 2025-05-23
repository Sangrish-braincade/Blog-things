import Loader from '@/components/Loader'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PortableText } from '@portabletext/react'
import { useParams, Link } from 'react-router-dom'
import { PostCard } from '@/components/blog/PostCard'
import { urlFor, getPostBySlug, getRelatedPosts } from '@/lib/sanityQueries'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      // Fetch post data by slug
      const postData = await getPostBySlug(slug)
      setPost(postData)

      // Fetch related posts
      const relatedData = await getRelatedPosts(slug)
      setRelatedPosts(relatedData)
    }

    fetchData()
    setLoading(false)
  }, [slug])

  if (loading) {
    return <Loader />
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <img src="/404.png" alt="Not Found" className="w-[25%]" />
        <Link to="/" className="text-white">
          Return to Home
        </Link>
      </div>
    )
  }

  document.title = `${post.title} - Aicade - Create | Play | Win`

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <article className="container py-8 md:py-12">
          <Button variant="ghost" className="mb-8 rounded-full" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>
            </div>

            <div className="mb-8 overflow-hidden rounded-xl">
              <img
                src={urlFor(post.imageUrl).width(1600).url()}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="prose prose-lg mx-auto dark:prose-invert">
              {post.content ? (
                <div>
                  <PortableText value={post.content} />
                </div>
              ) : (
                <p>{post.excerpt}</p>
              )}
            </div>
          </div>
        </article>

        <section className="container pb-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((p) => (
                  <PostCard key={p._id} post={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BlogPost
