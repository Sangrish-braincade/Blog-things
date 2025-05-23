import { Link } from 'react-router-dom'
import Loader from '@/components/Loader'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { PostCard } from '@/components/blog/PostCard'
import { HeroSlide } from '@/components/blog/HeroSlide'
import { getFeaturedPost, getRecentPosts } from '@/lib/sanityQueries' // Import your data-fetching functions
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const Index = () => {
  document.title = 'Aicade - Create | Play | Win'
  const [featuredPost, setFeaturedPost] = useState<any[]>([])
  const [recentPosts, setRecentPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data using the existing functions
        const featuredPostData = await getFeaturedPost()
        const recentPostsData = await getRecentPosts()

        setFeaturedPost(featuredPostData)
        setRecentPosts(recentPostsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  if (!featuredPost || !recentPosts.length) {
    return <Loader /> // Simple loading state
  }

  const heroSlides = [...featuredPost.slice(0, 5)]

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        {heroSlides.length ? (
          <section className="container py-8 md:py-12">
            <Carousel className="w-full">
              <CarouselContent>
                {heroSlides.map((post: any) => (
                  <CarouselItem key={post._id}>
                    <HeroSlide post={post} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </div>
            </Carousel>
          </section>
        ) : null}

        <section className="container py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.slice(0, 3).map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Index
