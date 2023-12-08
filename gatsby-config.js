/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jonathanbogasky.com`,
    menuLinks: [
      {
         name: 'Home',
         link: '/'
      },
      {
         name: 'About',
         link: '/about'
      },
      {
        name: 'Projects',
        link: '/projects'
      }
    ]
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: `${__dirname}/content`,
        },
    },
    'gatsby-transformer-remark'
  ],
}
