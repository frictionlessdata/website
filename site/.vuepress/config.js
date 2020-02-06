module.exports = {
  title: "Frictionless Data",
  description: "Bringing simplicity and gracefulness to the data experience",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  },
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"));
    }
  },
  themeConfig: {
    logo: "/img/logo.svg",
    repo: "https://github.com/frictionlessdata",
    repoLabel: "GitHub",
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: "auto",
    nav: [
      { text: "About", link: "/about" },
      {
        text: "Products",
        items: [
          { text: "Data Package", link: "/products/data-package/" },
          { text: "Table Schema", link: "/products/table-schema/" },
          { text: "Tabulator", link: "/products/tabulator/" },
          { text: "GoodTables", link: "/products/goodtables/" },
          {
            text: "Data Package Pipelines",
            link: "/products/data-package-pipelines/"
          },
          { text: "DataHub", link: "/products/datahub/" },
          {
            items: [{ text: "Labs", link: "/products/labs/" }]
          }
        ]
      },
      { text: "Specifications", link: "http://specs.frictionlessdata.io" },
      { text: "Contribute", link: "/contribute/" },
      { text: "Blog", link: "/blog/" }
    ]
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        ga: "UA-33874954-38"
      }
    ],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            // Unique ID of current classification
            id: "blog",
            // Target directory
            dirname: "blog",
            // Path of the `entry page` (or `list page`)
            path: "/blog/",
            itemPermalink: "/blog/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 10
            }
          }
        ]
      }
    ]
  ],
  head: [
    ["script", { src: "https://unpkg.com/honeycomb-grid@3.1.3" }],
    ["script", { src: "https://unpkg.com/svg.js@2.7.1" }]
  ]
};
