
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { CategoryList } from "@/components/blog/CategoryList";
import { recentPosts, categories } from "@/data/blog-data";

const Blog = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            Blog
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
