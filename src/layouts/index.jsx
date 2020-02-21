import React from 'react';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey } from 'ptz-i18n';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip';

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
      <div className="wrapper">
        {children}

        <ReactTooltip tipPointerPosition="auto" />
      </div>
    </IntlProvider>
  );
};

export default Layout;
