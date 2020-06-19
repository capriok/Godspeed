module.exports = {
  siteMetadata: {
    title: `Godspeed`,
    description: `Godspeed Component / toolkit Documentation`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `release`,
        path: `${__dirname}/src/pages/release-notes.js`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          docs: require.resolve("./src/components/layouts/documentation.js"),
          release: require.resolve("./src/components/layouts/release-notes.js"),
          default: require.resolve("./src/components/layouts/code-block.js")
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    }
  ],
}
