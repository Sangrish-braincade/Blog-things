import Loader from '@/components/Loader'
import { useEffect, useState } from 'react'
import { getRecentPosts } from '@/lib/sanityQueries'
import { PostCard } from '@/components/blog/PostCard'

interface PostCardProps {
  post: {
    _id: string // Unique ID of the post
    title: string // Title of the post
    excerpt: string // Short excerpt from the post
    category: string // Category of the post
    date: string // Publish date of the post
    imageUrl: string // Image URL for the post
    slug: string // Slug for the post (used in the URL)
  }
}

const Blog = () => {
  document.title = 'Blogs - Aicade - Create | Play | Win'
  const [recentPosts, setRecentPosts] = useState<PostCardProps['post'][]>([])

  // Fetch data from Sanity
  useEffect(() => {
    getRecentPosts().then(setRecentPosts)
  }, [])

  if (!recentPosts.length) {
    return <Loader />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blog
