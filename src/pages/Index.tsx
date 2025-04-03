
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { CategoryList } from "@/components/blog/CategoryList";
import { featuredPost, recentPosts, categories } from "@/data/blog-data";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <FeaturedPost post={featuredPost} />
        </section>

        <section className="container py-8 md:py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                Trending Topics
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.slice(3, 5).map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Newsletter />
              <CategoryList categories={categories} />
            </div>
          </div>
        </section>

        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Join Our AI Gaming Community
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Connect with fellow AI enthusiasts and gaming developers. Share insights, 
              stay updated on the latest trends, and explore new possibilities in AI gaming.
            </p>
            <Button className="rounded-full" size="lg">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
