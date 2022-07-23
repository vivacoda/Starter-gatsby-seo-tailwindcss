require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `SEO Agency Bangkok supports you in your Google SEO strategy`,
    description: `Bangkok SEO supports you in your Google SEO strategy, we Make your business visible online more competitive and more.`,
    author: `@gatsbyjs`,
    siteUrl: `https://seo-bkk.com/`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-crisp-chat",
    //   options: {
    //    websiteId: process.env.KEY_CRISP,
    //     enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
    //     enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
    //   },
    //  },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "JetBrains Mono",
            weights: ["100", "400"],
          },
          {
            family: "Roboto Mono",
            weights: ["100..400"],
          },
        ],
      },
    }`gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://seo-bkk.com`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 10,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //  {
    //    resolve: "gatsby-plugin-mailchimp",

    //    options: {
    //       endpoint: process.env.MAILCHIMP_SIGNUP,
    //       timeout: 3500,
    //     },
    //    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://seo-bkk.com",
        sitemap: "https://seo-bkk.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-L0MMEWVDD1", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
