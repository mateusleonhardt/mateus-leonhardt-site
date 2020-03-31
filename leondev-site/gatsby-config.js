/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateus Leonhardt`,
        short_name: `Leondev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#F7882F`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#F7882F`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `500`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.js'],
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "projects",
        path: `${__dirname}/src/assets/projects`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ]
}
