
// import { Link } from "react-router-dom";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// interface HeroSlideProps {
//   post: {
//     id: string;
//     title: string;
//     excerpt: string;
//     category: string;
//     date: string;
//     imageUrl: string;
//     slug: string;
//   };
// }

// export function HeroSlide({ post }: HeroSlideProps) {
//   return (
//     <div className="relative overflow-hidden rounded-2xl w-full">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${post.imageUrl})` }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
//       <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-6 sm:p-8 md:p-10">
//         <div className="mb-4">
//           <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
//             {post.category}
//           </Badge>
//           <span className="ml-2 text-sm text-gray-300">{post.date}</span>
//         </div>
//         <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
//           {post.title}
//         </h1>
//         <p className="mb-6 max-w-2xl text-gray-300">{post.excerpt}</p>
//         <Button asChild className="rounded-full w-fit">
//           <Link to={`/blog/${post.slug}`}>Read Article</Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanityQueries"; // Import the urlFor function

interface HeroSlideProps {
  post: {
    _id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: any; // Expected to be the full image asset object from Sanity (using image.asset->)
    slug: string;
  };
}

export function HeroSlide({ post }: HeroSlideProps) {
  // Generate the image URL using the Sanity image URL builder.
  // You can chain additional methods like .width(), .height(), etc.
  const imageUrl = urlFor(post.imageUrl).width(1600).url();

  return (
    <div className="relative overflow-hidden rounded-2xl w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }} // Use the generated image URL as the background
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-end p-6 sm:p-8 md:p-10">
        <div className="mb-4">
          <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
            {post.category}
          </Badge>
          <span className="ml-2 text-sm text-gray-300">{post.date}</span>
        </div>
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mb-6 max-w-2xl text-gray-300 line-clamp-3">{post.excerpt}</p>
        <Button asChild className="rounded-full w-fit">
          <Link to={`/blog/${post.slug}`}>Read Article</Link>
        </Button>
      </div>
    </div>
  );
}
