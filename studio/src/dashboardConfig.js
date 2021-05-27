export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60aef8dcf3507c316dfc9ed3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-oj8gu59o",
                  apiId: "e7cc7089-54a2-498c-9d36-7825fef828c5",
                },
                {
                  buildHookId: "60aef8dc1c22182edda80d19",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ie12nz6q",
                  apiId: "d3db679d-5477-4d91-a482-d7ef79f39654",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/yAOwzers/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ie12nz6q.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
