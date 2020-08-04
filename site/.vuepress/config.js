require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  title: "Frictionless Data",
  description: "Bringing simplicity and gracefulness to the data experience",
  head: [
    ["link", { rel: "icon", href: "./public/img/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "./public/img/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "./public/img/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "./public/img/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        color: "#000000",
        href: "./public/img/safari-pinned-tab.svg",
      },
    ],
    ["link", { rel: "manifest", href: "./public/img/site.webmanifest" }],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap",
      },
    ],
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
  configureWebpack: (config) => {
    return { plugins: [new webpack.EnvironmentPlugin({ ...process.env })] };
  },
  markdown: {
    linkify: true,
    typographer: true,
    breaks: true,
    html: true,
    toc: {
      includeLevel: [2, 3],
    },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
  themeConfig: {
    logo: "/img/frictionless-color-full-logo.svg",
    // repo: "https://github.com/frictionlessdata",
    // repoLabel: "GitHub",
    docsRepo: "https://github.com/frictionlessdata/website-v2",
    docsDir: "site",
    lastUpdated: "Last Updated",
    // defaults to false, set to true to enable
    editLinks: true,
    smoothScroll: true,
    footer_col1_title: "About",
    footer_col1_row1: "About",
    footer_col1_row2: "Contact",
    footer_col1_row3: "Terms of Use",
    footer_col1_row4: "Privacy Policy",
    footer_col2_title: "Help",
    footer_col2_row1: "Support",
    footer_col2_row2: "Get started",
    footer_col2_row3: "Community",
    footer_col2_row4: "Forum",
    footer_col3_title: "More",
    footer_col3_row1: "Reproducible Research",
    footer_col3_row2: "Design Assets",
    footer_col3_row3: "Blog",
    footer_col3_row4: "Contribute",
    footer_col4_title: "Social",
    footer_col4_row1: "GitHub",
    footer_col4_row2: "Twitter",
    footer_col4_row3: "Discord",
    footer_col4_row4: "Dev",
    navbar_icon1_link: "https://discordapp.com/invite/Sewv6av",
    navbar_icon1_image: "/img/home/discord-icon.svg",
    navbar_icon1_title: "Discord",
    navbar_icon2_link: "https://twitter.com/frictionlessd8a",
    navbar_icon2_image: "/img/home/twitter-icon.svg",
    navbar_icon2_title: "Twitter",
    navbar_icon3_link: "https://github.com/frictionlessdata/project/",
    navbar_icon3_image: "/img/home/github-icon.svg",
    navbar_icon3_title: "GitHub",
    sidebar: "auto",
    nav: [
      {
        text: "Learn",
        ariaLabel: "Learn Menu",
        items: [
          { text: "Guide", link: "/guide/" },
          { text: "How-to guides", link: "/how-to/" },
          { text: "Table Schema", link: "/table-schema/" },
          { text: "Data Package", link: "/data-package/" },
        ],
      },
      {
        text: "Tooling",
        ariaLabel: "Tooling Menu",
        items: [
          { text: "Application", link: "/tooling/application/" },
          { text: "For Python", link: "/tooling/python/" },
          { text: "For JavaScript", link: "/tooling/javascript/" },
          { text: "For R-Lang", link: "/tooling/rlang/" },
          { text: "SDKs", link: "/tooling/sdks/" },
          {
            items: [
              { text: "GoodTables", link: "/tooling/others/goodtables/" },
              { text: "DataHub", link: "/tooling/others/datahub/" },
              { text: "Labs", link: "/tooling/others/labs/" },
            ],
          },
        ],
      },
      {
        text: "Specs",
        ariaLabel: "Specs Menu",
        items: [
          {
            text: "Table Schema",
            link: "https://specs.frictionlessdata.io/table-schema/",
          },
          {
            text: "Data Package",
            link: "https://specs.frictionlessdata.io/data-package/",
          },
        ],
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
        text: "Use Cases",
        ariaLabel: "Use Cases Menu",
        items: [
          { text: "Reproducible Research", link: "/reproducible-research/" },
          { text: "Case Studies", link: "/tag/case-studies/" },
          { text: "Pilots", link: "/tag/pilot/" },
        ],
      },
      {
        text: "Community",
        ariaLabel: "Community Menu",
        items: [
          { text: "Chat", link: "https://discordapp.com/invite/Sewv6av" },
          {
            text: "Forum",
            link: "https://github.com/frictionlessdata/forum/issues",
          },
          { text: "Support", link: "/support/" },
          { text: "Events Calendar", link: "/events/" },
          { text: "Contribute", link: "/contribute/" },
          { text: "Code of Conduct", link: "/code-of-conduct/" },
        ],
      },
      { text: "Team", link: "/team/" },
      { text: "About", link: "/about/" },
      { text: "Blog", link: "/blog/" },
    ],
  },
  plugins: [
    [
      "@vuepress/plugin-google-analytics",
      {
        ga: "UA-33874954-38",
      },
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
              lengthPerPage: 10,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tags",
            scopeLayout: "Tag",
            frontmatter: { title: "Tag" },
          },
        ],
      },
    ],
    ["@vuepress/back-to-top"],
    [
      "vuepress-plugin-dehydrate",
      {
        // disable SSR
        noSSR: "404.html",
        // remove scripts
        noScript: [
          // support glob patterns
          "foo/*.html",
          "**/static.html",
        ],
      },
    ],
    ["@vuepress/back-to-top"],
    [
      "@limdongjin/vuepress-plugin-simple-seo",
      {
        default_site_name: "Frictionless Data",
        default_image: "/img/frictionless-color-logo.png",
      },
    ],
  ],
  head: [
    ["script", { src: "https://unpkg.com/honeycomb-grid@3.1.3" }],
    ["script", { src: "https://unpkg.com/svg.js@2.7.1" }],
  ],
};
