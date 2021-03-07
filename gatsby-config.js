module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    description: `Distinguiti dagli altri! Affidati a lemurweb per realizzare il tuo sito web creativo, moderno, di qualità.`,
    author: `@lemurweb`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Ubuntu",
            weights: ["300", "400", "500", "600", "700"],
          },
          {
            family: "Quicksand",
            weights: ["300", "400"],
          },
          {
            family: "Josefin Sans",
            weights: ["700"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-image`,
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
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: true, // Enable while using `gatsby develop`
    //     // tailwind: true, // Enable tailwindcss support
    //     // whitelist: ['whitelist'], // Don't remove this selector
    //     // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
