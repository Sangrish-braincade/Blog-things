
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/blog/Newsletter";
import { CategoryList } from "@/components/blog/CategoryList";
import { PostCard } from "@/components/blog/PostCard";
import { featuredPost, recentPosts, categories } from "@/data/blog-data";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the post with the matching slug or use the featured post as fallback
  const post = recentPosts.find((post) => post.slug === slug) || featuredPost;
  
  // Get related posts (excluding current post)
  const relatedPosts = recentPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <article className="container py-8 md:py-12">
          <Button 
            variant="ghost" 
            className="mb-8 rounded-full" 
            asChild
          >
            <Link to="/blog">
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
                src={post.imageUrl}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg mx-auto dark:prose-invert">
              <p>
                Artificial intelligence is revolutionizing the gaming industry at an unprecedented pace. From procedural content generation to adaptive difficulty systems, AI is changing how games are developed, played, and experienced.
              </p>
              
              <p>
                In this article, we'll explore the cutting-edge applications of AI in modern gaming, the challenges developers face when implementing these systems, and how these technologies are creating more immersive and responsive player experiences.
              </p>
              
              <h2>The Evolution of AI in Gaming</h2>
              
              <p>
                The use of artificial intelligence in video games isn't new—simple AI routines have guided enemy behavior since the earliest days of gaming. However, what's changed dramatically is the sophistication, learning capability, and contextual awareness of modern AI systems.
              </p>
              
              <p>
                Today's gaming AI can analyze player behavior, adapt to different play styles, generate unique content, and create experiences that feel remarkably personalized. This evolution represents a fundamental shift from pre-scripted experiences to dynamic, emergent gameplay.
              </p>
              
              <h2>Key Applications of AI in Modern Games</h2>
              
              <ul>
                <li>
                  <strong>Procedural Content Generation:</strong> AI algorithms can create vast, unique game worlds, from No Man's Sky's 18 quintillion planets to Minecraft's endless terrain.
                </li>
                <li>
                  <strong>Dynamic Difficulty Adjustment:</strong> Games now analyze player performance in real-time to subtly adjust challenge levels, keeping players in the "flow state" between boredom and frustration.
                </li>
                <li>
                  <strong>Enhanced NPC Behavior:</strong> Non-player characters increasingly utilize machine learning techniques to exhibit more realistic behaviors, conversations, and emotional responses.
                </li>
                <li>
                  <strong>Player Behavior Prediction:</strong> Modern games analyze how you play to predict preferences and tailor experiences accordingly.
                </li>
              </ul>
              
              <h2>The Future of AI Gaming</h2>
              
              <p>
                As we look ahead, several exciting trends are emerging. Large language models like GPT-4 are being integrated into games to enable truly conversational NPCs. Reinforcement learning is creating game agents that develop novel strategies beyond what developers could program. And neural networks are enabling real-time graphics enhancements that were previously impossible.
              </p>
              
              <p>
                The most revolutionary aspect may be how AI is blurring the line between developer and player. AI tools now allow players to create content within games, modify gameplay on the fly, and experience stories that genuinely react to their choices in complex ways.
              </p>
              
              <h2>Conclusion</h2>
              
              <p>
                The integration of AI into gaming represents one of the most exciting frontiers in interactive entertainment. As these technologies continue to evolve, we can expect games that are more responsive, personalized, and surprising than anything we've experienced before. The future of AI in gaming isn't just about better graphics or more realistic physics—it's about creating truly living worlds that respond and evolve with the player.
              </p>
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
                {relatedPosts.map((post) => (
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

export default BlogPost;
