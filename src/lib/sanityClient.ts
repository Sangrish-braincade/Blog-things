// import { createClient } from "@sanity/client";

// export const sanityClient = createClient({
//   projectId: "",  // Your Sanity project ID
//   dataset:"production", // Dataset name (default: "production")
//   useCdn: true, // Use the CDN in production for faster queries
//   apiVersion: "2024-01-01", // Sanity API version (use the latest)
// });

// src/lib/sanityClient.ts

import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // ✅ pulled from .env
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",      // ✅ pulled from .env
  useCdn: true,                                       // faster queries in production
  apiVersion: "2024-01-01",                           // set to a specific date
});
