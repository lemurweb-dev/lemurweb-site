module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    description: `Distinguiti dagli altri! Affidati a lemurweb per realizzare il tuo sito web creativo, moderno, di qualità.`,
    author: `@lemurweb`,
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lemurweb | Web Developer`,
        short_name: `lemurweb`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-blue.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
