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
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: languages.defaultLangKey,
        langKeyForNull: 'any',
        useLangKeyLayout: true,
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`]
          }
        ]
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
