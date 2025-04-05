
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { PostCard } from "@/components/blog/PostCard";
// import { Newsletter } from "@/components/blog/Newsletter";
// import { CategoryList } from "@/components/blog/CategoryList";
// import { 
//   Carousel, 
//   CarouselContent, 
//   CarouselItem, 
//   CarouselNext, 
//   CarouselPrevious 
// } from "@/components/ui/carousel";
// import { featuredPost, recentPosts, categories } from "@/data/blog-data";
// import { HeroSlide } from "@/components/blog/HeroSlide";

// const Index = () => {
//   const heroSlides = [featuredPost, ...recentPosts.slice(0, 3)];

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1">
//         <section className="container py-8 md:py-12">
//           <Carousel className="w-full">
//             <CarouselContent>
//               {heroSlides.map((post) => (
//                 <CarouselItem key={post.id}>
//                   <HeroSlide post={post} />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden sm:block">
//               <CarouselPrevious className="left-4" />
//               <CarouselNext className="right-4" />
//             </div>
//           </Carousel>
//         </section>

//         <section className="container py-8 md:py-12">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
//             <Button variant="outline" className="rounded-full" asChild>
//               <Link to="/blog">
//                 View All <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {recentPosts.slice(0, 3).map((post) => (
//               <PostCard key={post.id} post={post} />
//             ))}
//           </div>
//         </section>

//         <section className="container py-8 md:py-12">
//           <div className="grid gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//               <h2 className="mb-8 text-3xl font-bold tracking-tight">
//                 Trending Topics
//               </h2>
//               <div className="grid gap-6 sm:grid-cols-2">
//                 {recentPosts.slice(3, 5).map((post) => (
//                   <PostCard key={post.id} post={post} />
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-6">
//               <Newsletter />
//               <CategoryList categories={categories} />
//             </div>
//           </div>
//         </section>

//         <section className="bg-muted/50 py-12 md:py-16">
//           <div className="container text-center">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
//               Join Our AI Gaming Community
//             </h2>
//             <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
//               Connect with fellow AI enthusiasts and gaming developers. Share insights, 
//               stay updated on the latest trends, and explore new possibilities in AI gaming.
//             </p>
//             <Button className="rounded-full" size="lg">
//               Get Started
//             </Button>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { PostCard } from "@/components/blog/PostCard";
// import { Newsletter } from "@/components/blog/Newsletter";
// import { CategoryList } from "@/components/blog/CategoryList";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { HeroSlide } from "@/components/blog/HeroSlide";
// import { sanityClient } from "@/lib/sanityClient"; // import your Sanity client

// const Index = () => {
//   const [featuredPost, setFeaturedPost] = useState<any | null>(null);
//   const [recentPosts, setRecentPosts] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetch the featured post
//       const featuredPostQuery = `*[_type == "featuredPost"] | order(date desc)[0]`;
//       const recentPostsQuery = `*[_type == "recentPost"] | order(date desc)[0...5]`;
//       const categoriesQuery = `*[_type == "category"]`;

//       const [featuredPostData, recentPostsData, categoriesData] = await Promise.all([
//         sanityClient.fetch(featuredPostQuery),
//         sanityClient.fetch(recentPostsQuery),
//         sanityClient.fetch(categoriesQuery),
//       ]);

//       setFeaturedPost(featuredPostData);
//       setRecentPosts(recentPostsData);
//       setCategories(categoriesData);
//     };

//     fetchData();
//   }, []);

 
//   if (!featuredPost || !recentPosts.length || !categories.length) {
//     return <div>Loading...</div>; // Simple loading state
//   }

//   const heroSlides = [featuredPost, ...recentPosts.slice(0, 3)];

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1">
//         <section className="container py-8 md:py-12">
//           <Carousel className="w-full">
//             <CarouselContent>
//               {heroSlides.map((post: any) => (
//                 <CarouselItem key={post._id}>
//                   <HeroSlide post={post} />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden sm:block">
//               <CarouselPrevious className="left-4" />
//               <CarouselNext className="right-4" />
//             </div>
//           </Carousel>
//         </section>

//         <section className="container py-8 md:py-12">
//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold tracking-tight">Latest Articles</h2>
//             <Button variant="outline" className="rounded-full" asChild>
//               <Link to="/blog">
//                 View All <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {recentPosts.slice(0, 3).map((post: any) => (
//               <PostCard key={post._id} post={post} />
//             ))}
//           </div>
//         </section>

//         <section className="container py-8 md:py-12">
//           <div className="grid gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//               <h2 className="mb-8 text-3xl font-bold tracking-tight">
//                 Trending Topics
//               </h2>
//               <div className="grid gap-6 sm:grid-cols-2">
//                 {recentPosts.slice(3, 5).map((post: any) => (
//                   <PostCard key={post._id} post={post} />
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-6">
//               <Newsletter />
//               <CategoryList categories={categories} />
//             </div>
//           </div>
//         </section>

//         <section className="bg-muted/50 py-12 md:py-16">
//           <div className="container text-center">
//             <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
//               Join Our AI Gaming Community
//             </h2>
//             <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
//               Connect with fellow AI enthusiasts and gaming developers. Share insights, 
//               stay updated on the latest trends, and explore new possibilities in AI gaming.
//             </p>
//             <Button className="rounded-full" size="lg">
//               Get Started
//             </Button>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { CategoryList } from "@/components/blog/CategoryList";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HeroSlide } from "@/components/blog/HeroSlide";
import { getFeaturedPost, getRecentPosts, getCategories } from "@/lib/sanityQueries";  // Import your data-fetching functions
import Loader from "@/components/Loader";

const Index = () => {
  const [featuredPost, setFeaturedPost] = useState<any[]>([]);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data using the existing functions
        const featuredPostData = await getFeaturedPost();
        const recentPostsData = await getRecentPosts();
        const categoriesData = await getCategories();

        setFeaturedPost(featuredPostData);
        setRecentPosts(recentPostsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!featuredPost || !recentPosts.length ) {
    return <Loader/>; // Simple loading state
  }

  const heroSlides = [...featuredPost.slice(0,5)];
  // const heroSlides = [featuredPost];
  console.log(heroSlides,"Hero Slides")

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">
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
            {recentPosts.slice(0, 3).map((post: any) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </section>

        {/* <section className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                Trending Topics
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.slice(3, 5).map((post: any) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Newsletter />
              <CategoryList categories={categories} />
            </div>
          </div>
        </section> */}

        {/* <section className="bg-muted/50 py-12 md:py-16">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Join Our AI Gaming Community
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Connect with fellow AI enthusiasts and gaming developers. Share insights, 
              stay updated on the latest trends, and explore new possibilities in AI gaming.
            </p>
      
          <Button
          onClick={() => window.open("https://discord.com/invite/H498VT6DJr", "_blank")}
          className="rounded-full"
          size="lg"
        >
          Get Started
        </Button>

          </div>
        </section> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
