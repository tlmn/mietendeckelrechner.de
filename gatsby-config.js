const languages = require('./src/data/languages');

const path = require(`path`);

module.exports = {
  siteMetadata: {
    languages
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mietendeckelrechner`,
        short_name: `Mietendeckelrechner`,
        start_url: `/`,
        background_color: `#dd8893`,
        theme_color: `#dd8893`,
        display: `minimal-ui`,
        icon: `src/images/mw-icon.png`
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        langKeyForNull: 'any',
        useLangKeyLayout: true,
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
