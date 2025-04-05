
// import { Link } from "react-router-dom";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";

// interface PostCardProps {
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

// export function PostCard({ post }: PostCardProps) {
//   return (
//     <Card className="gaming-card h-full overflow-hidden hover:shadow-lg">
//       <div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl">
//         <img
//           src={post.imageUrl}
//           alt={post.title}
//           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//       <CardContent className="p-6">
//         <div className="mb-2 flex items-center justify-between">
//           <Badge variant="secondary">{post.category}</Badge>
//           <span className="text-xs text-muted-foreground">{post.date}</span>
//         </div>
//         <Link to={`/blog/${post.slug}`}>
//           <h3 className="mb-2 line-clamp-2 text-xl font-bold tracking-tight hover:text-primary">
//             {post.title}
//           </h3>
//         </Link>
//         <p className="line-clamp-3 text-sm text-muted-foreground">
//           {post.excerpt}
//         </p>
//       </CardContent>
//       <CardFooter className="border-t p-6 pt-4">
//         <Link
//           to={`/blog/${post.slug}`}
//           className="text-sm font-medium text-primary hover:underline"
//         >
//           Read More →
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// }

import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { urlFor } from "@/lib/sanityQueries"; // Ensure you import urlFor

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: any;  // This will now be an image asset object
    slug: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="gaming-card h-full overflow-hidden hover:shadow-lg">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-t-xl">
        {/* Generate the image URL using `urlFor` */}
        <img
          src={urlFor(post.imageUrl).url()}  // Use urlFor to get the image URL
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mb-2 line-clamp-2 text-xl font-bold tracking-tight hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter className="border-t p-6 pt-4">
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
}
