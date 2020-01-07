module.exports = {
  siteMetadata: {
    title: `Talita Oliveira`,
    position: `Softawre Developer`,
    description: `Tentando começar a escrever alguma coisa`,
    author: `@liitacherry`,
    siteUrl: `https://talitaoliveira.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    // needs to be the first one to work with <gatsby-remar0></gatsby-remar0>
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `uploads`,
          path: `${__dirname}/static/assets/img`,
        },
      },
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
          name: `posts`,
          path: `${__dirname}/posts`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
              {
                  resolve: "gatsby-remark-relative-images",
                  options: {
                      name: "uploads"
                  }
              },
              {
                resolve: "gatsby-remark-images",
                options: {
                    maxWidth: 960,
                    linkImagesToOriginal: false
                }
              },
              `gatsby-remark-lazy-load`,
              `gatsby-remark-prismjs`
          ],
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Talita Oliveira`,
        short_name: `Talita Oliveira`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
