export default {
    name: "recentPost",
    type: "document",
    title: "Recent Post",
    fields: [
      { name: "title", type: "string", title: "Title" },
      // { name: "excerpt", type: "text", title: "Excerpt" },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
                options: {
                  isHighlighted: true
                }
              }
            ]
          }
        ]
      },
      { name: "category", type: "string", title: "Category" },
      { name: "date", type: "date", title: "Date" },
    //   { name: "imageUrl", type: "url", title: "Image URL" },
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
  