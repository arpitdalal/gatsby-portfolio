const siteUrl = `https://arpitdalal.dev`

Date.prototype.toW3CString = function () {
  var year = this.getFullYear()
  var month = this.getMonth()
  month++
  if (month < 10) {
    month = "0" + month
  }
  var day = this.getDate()
  if (day < 10) {
    day = "0" + day
  }
  var hours = this.getHours()
  if (hours < 10) {
    hours = "0" + hours
  }
  var minutes = this.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  var seconds = this.getSeconds()
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  var offset = -this.getTimezoneOffset()
  var offsetHours = Math.abs(Math.floor(offset / 60))
  var offsetMinutes = Math.abs(offset) - offsetHours * 60
  if (offsetHours < 10) {
    offsetHours = "0" + offsetHours
  }
  if (offsetMinutes < 10) {
    offsetMinutes = "0" + offsetMinutes
  }
  var offsetSign = "+"
  if (offset < 0) {
    offsetSign = "-"
  }
  return (
    year +
    "-" +
    month +
    "-" +
    day +
    "T" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    offsetSign +
    offsetHours +
    ":" +
    offsetMinutes
  )
}

function formattedDate() {
  const date = new Date()
  return date.toW3CString()
}

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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
            lastmod: formattedDate(),
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
