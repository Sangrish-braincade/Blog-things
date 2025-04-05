import { sanityClient } from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Initialize Sanity Image URL Builder
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch the latest featured post
export async function getFeaturedPost() {
  const query = `*[_type == "featuredPost"] | order(date desc) {
    _id,
    title,
    excerpt,
    category,
    date,
    "imageUrl": image.asset->_id,
    "slug": slug.current
  }`;

  const result = await sanityClient.fetch(query);
  return result;
}

// Fetch all recent posts, sorted by date (most recent first)
export async function getRecentPosts() {
    const query = `*[_type == "recentPost"] | order(date desc) {
      _id,
      title,
      excerpt,
      category,
      date,
      "imageUrl": image.asset->_id,
      "slug": slug.current
    }`;
  
    const result = await sanityClient.fetch(query);
    return result;
  }

  // Fetch Categories
export async function getCategories() {
    const query = `*[_type == "category"] {
      _id,
      name,
      "slug": slug.current,
      count
    }`;
    
    const result = await sanityClient.fetch(query);
    return result;
  }

// Fetch a specific post by slug (for individual blog posts) from "featuredPost" or "recentPost"
export async function getPostBySlug(slug: string) {
    // Try fetching from the "featuredPost" type first
    const featuredQuery = `*[_type == "featuredPost" && slug.current == $slug][0]{
      _id,
      title,
      excerpt,
      category,
      date,
      "imageUrl": image.asset->_id,
      "slug": slug.current,
      content
    }`;
  
    let result = await sanityClient.fetch(featuredQuery, { slug });
  
    // If no result found in "featuredPost", fetch from "recentPost"
    if (!result) {
      const recentQuery = `*[_type == "recentPost" && slug.current == $slug][0]{
        _id,
        title,
        excerpt,
        category,
        date,
        "imageUrl": image.asset->_id,
        "slug": slug.current,
        content
      }`;
  
      result = await sanityClient.fetch(recentQuery, { slug });
    }
  
    return result;
  }
  
  
  // Fetch related posts (excluding current post)
  export async function getRelatedPosts(slug: string) {
    const query = `*[_type == "recentPost" && slug.current != $slug] | order(date desc)[0...2] {
      _id,
      title,
      excerpt,
      category,
      date,
      "imageUrl": image.asset->_id,
      "slug": slug.current
    }`;
  
    const result = await sanityClient.fetch(query, { slug });
    return result;
  }