module.exports = {
  siteMetadata: {
    title: `Varga winery webshop`,
    description: `Webshop`,
    author: `@czuforb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
    {
      resolve: "gatsby-plugin-portal",
      options: {
        key: "age-modal",
        id: "age-modal",
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyBPHFwG1XsLVrSfbQlLy7cV_0bhnGLyTY0`,
        center: `47.814643, 20.587045`,
      },
    },
  ],
}
