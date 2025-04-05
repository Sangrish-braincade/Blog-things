// export default {
//     name: "featuredPost",
//     type: "document",
//     title: "Featured Post",
//     fields: [
//       { name: "title", type: "string", title: "Title" },
//       { name: "excerpt", type: "text", title: "Excerpt" },
//       { name: "category", type: "string", title: "Category" },
//       { name: "date", type: "date", title: "Date" },
//       { name: "imageUrl", type: "url", title: "Image URL" },
//       {
//         name: "slug",
//         type: "slug",
//         title: "Slug",
//         options: { source: "title", maxLength: 96 },
//       },
//     ],
//   };
  
export default {
    name: "featuredPost",
    type: "document",
    title: "Featured Post",
    fields: [
      { name: "title", type: "string", title: "Title" },
      { name: "excerpt", type: "text", title: "Excerpt" },
      { name: "category", type: "string", title: "Category" },
      { name: "date", type: "date", title: "Date" },
      {
        name: "image",
        type: "image",
        title: "Image",
        options: { hotspot: true },
        fields: [
          { name: "alt", type: "string", title: "Alt Text" },
        ],
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: { source: "title", maxLength: 96 },
      },
    ],
  };