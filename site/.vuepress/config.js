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
    logo: "/img/frictionless-data-blue-logo-text.png",
    // don't want navbar item for this atm
    // repo: "https://github.com/frictionlessdata",
    // repoLabel: "GitHub",
    docsRepo: "https://github.com/frictionlessdata/website-v2",
    docsDir: "site",
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: 'auto',
    nav: [
      {
        text: "Learn",
        items: [
          { text: "Guide", link: "/guide/" },
          { text: "Table Schema", link: "/table-schema/" },
          { text: "Data Package", link: "/data-package/" },
        ]
      },
      {
        text: "Tooling",
        items: [
          { text: "Table Schema Tools", link: "/products/table-schema-tools/" },
          { text: "Data Package Tools", link: "/products/data-package/" },
          { text: "Tabulator", link: "/products/tabulator/" },
          { text: "GoodTables", link: "/products/goodtables/" },
          { text: "Data Package Pipelines", link: "/products/data-package-pipelines/" },
          { text: "DataHub", link: "/products/datahub/" },
          {
            items: [{ text: "Labs", link: "/products/labs/" }]
          }
        ]
      },
      {
        text: "Specs",
        items: [
          { text: "Table Schema", link: "https://specs.frictionlessdata.io/table-schema/" },
          { text: "Data Package", link: "https://specs.frictionlessdata.io/data-package/" },
        ]
      },
      {
        text: "Help",
        items: [
          { text: "Chat", link: "https://gitter.im/frictionlessdata/chat" },
          { text: "Forum", link: "https://github.com/frictionlessdata/forum/issues" },
          { text: "Support", link: "/support/" },
        ]
      },
      // {
      //   text: "Jobs to be done",
      //   items: [
      //     { text: "Create Visualizations", link: "/jobs/create-visualizations/" },
      //     { text: "Do Analysis and Machine Learning", link: "/jobs/do-analysis-and-machine-learning/" },
      //     { text: "Do Initial Data Exploration", link: "/jobs/do-initial-data-exploration/" },
      //     { text: "Document Dataset", link: "/jobs/document-dataset/" },
      //     { text: "Find Datasets", link: "/jobs/find-datasets/" },
      //     { text: "Gracefully Scale Scope", link: "/jobs/gracefully-scale-scope/" },
      //     { text: "Gracefully Scale Size", link: "/jobs/gracefully-scale-size/" },
      //     { text: "Have a Data Hub", link: "/jobs/have-a-data-hub/" },
      //     { text: "Orchestrate Data Platform", link: "/jobs/orchestrate-data-platform/" },
      //     { text: "Pipeline transformations", link: "/jobs/pipeline-transformations/" },
      //     { text: "Pull Dataset", link: "/jobs/pull-dataset/" },
      //     { text: "Push Dataset", link: "/jobs/push-dataset/" },
      //     { text: "Quickly edit dataset", link: "/jobs/quickly-edit-dataset/" },
      //     { text: "Store Dataset", link: "/jobs/store-dataset/" },
      //     { text: "Validate Dataset", link: "/jobs/validate-dataset/" },
      //     { text: "Version dataset", link: "/jobs/version-dataset/" }
      //   ]
      // },
      { text: "Contribute", link: "/contribute/" },
      { text: "Team", link: "/team/" },
      { text: "About", link: "/about/" },
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
