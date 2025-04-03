
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { recentPosts, categories } from "@/data/blog-data";

const CategoryPosts = () => {
  const { slug } = useParams();
  
  // Find the category with the matching slug
  const category = categories.find((cat) => cat.slug === slug);
  
  // Filter posts by category (for demo purposes, we'll just use all posts)
  // In a real app, you would filter based on the category
  const filteredPosts = recentPosts;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <Button 
            variant="ghost" 
            className="mb-8 rounded-full" 
            asChild
          >
            <Link to="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Categories
            </Link>
          </Button>
          
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            {category ? category.name : "Category"}
          </h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Newsletter />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPosts;
