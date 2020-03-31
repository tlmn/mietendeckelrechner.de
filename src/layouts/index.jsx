import React from 'react';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey } from 'ptz-i18n';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip';
import Helmet from 'react-helmet';

const Layout = ({ children, location, i18nMessages }) => {
  const {
    site: {
      siteMetadata: {
        languages: { langs, defaultLangKey }
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          languages {
            langs
            defaultLangKey
          }
        }
      }
    }
  `);

  const url = location.pathname;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.mietendeckelrechner.de" />
        <title>
          Mietendeckelrechner jetzt mit Wohnlagebestimmung — Be­rech­ne jetzt,
          wie viel du sparen könn­test!
        </title>
        <meta
          name="title"
          content="Mietendeckelrechner jetzt mit Wohnlagebestimmung — Be­rech­ne jetzt, wie viel du sparen könn­test!"
        />
        <meta
          name="description"
          content="Jetzt mit Wohnlagebestimmung! Gegen den Mietenwahnsinn will die Berliner Landesregierung einen Mietendeckel einführen. Ermittle jetzt, wie viel du sparen könntest!"
        />
        <meta
          name="keywords"
          content="Mietendeckel, Mietendeckelrechner, Mietabsenkung, Wuchermiete, Überhöhte Miete, Mietabsenkung berechnen, Mietendeckel sparen, Mietenwahnsinn, Berlin, Mietobergrenze"
        />
        <meta property="og:title" content="Mietendeckelrechner" />
        <meta
          property="og:site_name"
          content="Berlin deckelt die Mieten! Ermittle jetzt, ob und wie viel du mit einer Mietabsenkung sparen kannst."
        />
        <meta property="og:url" content="https://www.mietendeckelrechner.de" />
        <meta
          property="og:description"
          content="Gegen den Mietenwahnsinn führt die Berliner Landesregierung einen Mietendeckel ein. Ermittle jetzt, ob und wie viel du mit einer Mietabsenkung sparen kannst."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.mietendeckelrechner.de/images/mietendeckel-rechner-berechne-jetzt-deine-ersparnis.jpg"
        />
      </Helmet>

      {children}

      <ReactTooltip tipPointerPosition="auto" />
    </IntlProvider>
  );
};

export default Layout;
