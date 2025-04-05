
// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { PostCard } from "@/components/blog/PostCard";
// import { Newsletter } from "@/components/blog/Newsletter";
// import { recentPosts, categories } from "@/data/blog-data";

// const CategoryPosts = () => {
//   const { slug } = useParams();
  
//   // Find the category with the matching slug
//   const category = categories.find((cat) => cat.slug === slug);
  
//   // Filter posts by category (for demo purposes, we'll just use all posts)
//   // In a real app, you would filter based on the category
//   const filteredPosts = recentPosts;

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1">
//         <section className="container py-8 md:py-12">
//           <Button 
//             variant="ghost" 
//             className="mb-8 rounded-full" 
//             asChild
//           >
//             <Link to="/categories">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               All Categories
//             </Link>
//           </Button>
          
//           <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
//             {category ? category.name : "Category"}
//           </h1>
          
//           <div className="grid gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//               <div className="grid gap-6 sm:grid-cols-2">
//                 {filteredPosts.map((post) => (
//                   <PostCard key={post.id} post={post} />
//                 ))}
//               </div>
//             </div>
//             <div className="space-y-6">
//               <Newsletter />
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CategoryPosts;
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { PostCard } from "@/components/blog/PostCard";
// import { Newsletter } from "@/components/blog/Newsletter";
// import { getCategories, getRecentPosts } from "@/lib/sanityQueries"

// const CategoryPosts = () => {
//   const { slug } = useParams();
//   const [category, setCategory] = useState(null);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCategoryAndPosts = async () => {
//       try {
//         const categories = await getCategories();
//         const matchedCategory = categories.find(cat => cat.slug === slug);
//         setCategory(matchedCategory);

//         if (matchedCategory) {
//           const posts = await getRecentPosts();
//           const matchingPosts = posts.filter((post) => post.category === matchedCategory.name);
//           setFilteredPosts(matchingPosts);
//         } else {
//           setFilteredPosts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching category or posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategoryAndPosts();
//   }, [slug]);

//   return (
//     <div className="flex min-h-screen flex-col">
//       <Header />
//       <main className="flex-1">
//         <section className="container py-8 md:py-12">
//           <Button variant="ghost" className="mb-8 rounded-full" asChild>
//             <Link to="/categories">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               All Categories
//             </Link>
//           </Button>

//           <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
//             {category ? category.name : "Category Not Found"}
//           </h1>

//           {loading ? (
//             <p>Loading posts...</p>
//           ) : (
//             <div className="grid gap-8 md:grid-cols-3">
//               <div className="md:col-span-2">
//                 <div className="grid gap-6 sm:grid-cols-2">
//                   {filteredPosts.length > 0 ? (
//                     filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
//                   ) : (
//                     <p>No posts available for this category.</p>
//                   )}
//                 </div>
//               </div>
//               <div className="space-y-6">
//                 <Newsletter />
//               </div>
//             </div>
//           )}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CategoryPosts;

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostCard } from "@/components/blog/PostCard";
import { Newsletter } from "@/components/blog/Newsletter";
import { getCategories, getRecentPosts } from "@/lib/sanityQueries";
import { Audio } from 'react-loader-spinner'


const CategoryPosts = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndPosts = async () => {
      try {
        const categories = await getCategories();
        const matchedCategory = categories.find(cat => cat.slug.toLowerCase() === slug.toLowerCase());
        
        if (!matchedCategory) {
          navigate("/categories");
          return;
        }

        setCategory(matchedCategory);

        const posts = await getRecentPosts();
        const matchingPosts = posts.filter((post) => post.category.toLowerCase() === matchedCategory.name.toLowerCase());
        setFilteredPosts(matchingPosts);
      } catch (error) {
        console.error("Error fetching category or posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndPosts();
  }, [slug, navigate]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <Button variant="ghost" className="mb-8 rounded-full" asChild>
            <Link to="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Categories
            </Link>
          </Button>

          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
            {category ? category.name : "Category Not Found"}
          </h1>

          {loading ? (
            <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => <PostCard key={post._id} post={post} />)
                  ) : (
                    <p>No posts available for this category.</p>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                {/* <Newsletter /> */}
              </div>
            </div>
          )}
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default CategoryPosts;
