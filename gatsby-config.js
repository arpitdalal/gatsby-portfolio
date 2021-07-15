module.exports = {
  siteMetadata: {
    title: `Arpit Dalal - A full stack web developer`,
    description: `A full stack web developer's portfolio with projects on react.js, node.js, gatsby.js, javascript, php, wordpress, laravel, and many more technologies`,
    author: `@ArpitDalal6`,
    keywords: `PORTFOLIO, WEB DEVELOPER, JAVASCRIPT, ARPIT, DALAL, ARPIT DALAL, DEVELOPER, WEBSITE, NODEJS, REACT`,
    ogURL: `http://arpitdalal.dev/`,
    ogImg: `/images/og-logo-img.png`,
    ogWidth: `1200`,
    ogHeight: `600`,
    twitterImg: `/images/twitter-card-img.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-static-images"],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5ZM6B4C",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: function () {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
