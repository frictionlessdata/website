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
    logo: "/img/frictionless-color-full-logo.svg",
    repo: "https://github.com/frictionlessdata",
    repoLabel: "GitHub",
    docsRepo: "https://github.com/frictionlessdata/website-v2",
    docsDir: "site",
    lastUpdated: 'Last Updated',
    // defaults to false, set to true to enable
    editLinks: true,
    smoothScroll: true,
    footer_col1_title: "About",
    footer_col1_row1: "About",
    footer_col1_row2: "Contact",
    footer_col1_row3: "Privacy Policy",
    footer_col1_row4: "Terms of Use",
    footer_col2_title: "Help",
    footer_col2_row1: "Support",
    footer_col2_row2: "Get started",
    footer_col2_row3: "Community",
    footer_col3_title: "Social",
    footer_col3_row1: "GitHub",
    footer_col3_row2: "Twitter",
    footer_col3_row3: "Gitter",
    sidebar: 'auto',
    nav: [
      {
        text: "Learn",
        ariaLabel: "Learn Menu",
        items: [
          { text: "Guide", link: "/guide/" },
          { text: "Table Schema", link: "/table-schema/" },
          { text: "Data Package", link: "/data-package/" },
        ]
      },
      {
        text: "Tooling",
        ariaLabel: "Tooling Menu",
        items: [
          { text: "Table Schema Tools", link: "/tooling/table-schema-tools/" },
          { text: "Data Package Tools", link: "/tooling/data-package-tools/" },
          { text: "Tabulator", link: "/tooling/tabulator/" },
          { text: "GoodTables", link: "/tooling/goodtables/" },
          { text: "Data Package Pipelines", link: "/tooling/data-package-pipelines/" },
          { text: "DataHub", link: "/tooling/datahub/" },
          {
            items: [{ text: "Labs", link: "/tooling/labs/" }]
          }
        ]
      },
      {
        text: "Specs",
        ariaLabel: "Specs Menu",
        items: [
          { text: "Table Schema", link: "https://specs.frictionlessdata.io/table-schema/" },
          { text: "Data Package", link: "https://specs.frictionlessdata.io/data-package/" },
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
      {
        text: "Help",
        ariaLabel: "Help Menu",
        items: [
          { text: "Community", link: "https://gitter.im/frictionlessdata/chat" },
          { text: "Forum", link: "https://github.com/frictionlessdata/forum/issues" },
          { text: "Support", link: "/support/" },
        ]
      },
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
    ],
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-dehydrate", {
      // disable SSR
      noSSR: '404.html',
      // remove scripts
      noScript: [
        // support glob patterns
        'foo/*.html',
        '**/static.html',
      ],
    }
  ],
  [
    "@vssue/vuepress-plugin-vssue", {
      platform: 'github',
      owner: 'frictionlessdata',
      repo: 'website-v2',
      clientId: 'd043d31f3613a34df29f',
      clientSecret: 'b7477b1561981dc5bd0a710ec6df5900c7bee72a',
    }],
    ["@vuepress/back-to-top"], 
    ["@limdongjin/vuepress-plugin-simple-seo"]
  ],
  head: [
    ["script", { src: "https://unpkg.com/honeycomb-grid@3.1.3" }],
    ["script", { src: "https://unpkg.com/svg.js@2.7.1" }]
  ]
};
