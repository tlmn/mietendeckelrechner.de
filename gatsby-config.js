const languages = require('./src/data/languages');

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
    }
  ]
};
