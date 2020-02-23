import React from 'react';
import { IntlProvider } from 'react-intl';
import { getCurrentLangKey } from 'ptz-i18n';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip';
import Helmet from 'react-helmet';
import BackgroundImage from '../components/backgroundImage';
import Footer from '../components/atoms/footer';

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
          content="Berlin deckel die Mieten! Ermittle jetzt, ob und wie viel du mit einer Mietabsenkung sparen kannst."
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
      <BackgroundImage>
        <div className="wrapper">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 heading">
                <h1>Berlin deckelt seine Mieten.</h1>
              </div>
              <div className="col-12 heading">
                <h2>
                  Be­rech­ne jetzt, <br />
                  wie viel du sparen kannst!
                </h2>
              </div>
            </div>
            {children}
          </div>
        </div>
      </BackgroundImage>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12 offset-0 col-md-8 offset-md-2">
              <h2 className="text-center">Was ist der Mietendeckel?</h2>
              <p>
                In Berlin wütet der Mietenwahnsinn: Mietpreise steigen in
                astronomische Höhen und Mieter*innen werden aus ihren Kiezen
                verdrängt. Die rot-rot-grüne Landesregierung will dieser
                Entwicklung mit einem Mietendeckel Einhalt gebieten. Der
                Mietendeckel trat am 23. Februar 2020 in Kraft und gilt bis
                2025. Er besteht aus drei Maßnahmen: Mietenstopp, Obergrenzen
                bei Wiedervermietung und Mietabsenkung. Ausgenommen vom
                Mietendeckel sind unter anderem Neubauten ab Baujahr 2014 und
                öffentlich geförderter Wohnraum.
              </p>
              <h3 className="text-center">Mietenstopp</h3>
              <p>
                Ab 23. Februar 2020 dürfen in Berlin die meisten Mieten nicht
                mehr erhöht werden. Kosten für Modernisierungen können mit bis
                zu 1 Euro/m² auf die Mieter*innen umgelegt werden.
              </p>
              <h3 className="text-center">Wiedervermietung</h3>
              <p>
                Bei neu abgeschlossenen Mietverträgen gelten Mietobergrenzen.
                Diese richtet sich nach Baujahr und Ausstattung des Gebäudes und
                deiner Wohnung.
              </p>
              <h3 className="text-center">Mietabsenkungen</h3>
              <p>
                Überhöhte Mieten von mehr als 120 % der Mietobergrenze können
                abgesenkt werden. Diese Mietobergrenze bemisst sich unter
                anderem nach Baujahr des Hauses und Ausstattung der Wohnung.
                Zusätzlich werden je nach Lage deiner Wohnung Ab- oder Zuschläge
                fällig. Diese Maßnahme wird 9 Monate nach Inkrafttreten des
                Mietendeckels greifen. Mit unserem Mietendeckelrechner kannst du
                ermitteln, wie viel du dann sparst.
              </p>
              <p className="disclaimer">
                Grundsätzlich gilt, dass wir als Anbieter keinerlei Gewähr für
                die Aktualität, Korrektheit und Vollständigkeit der
                bereitgestellten Informationen übernehmen. Grundlagen des
                Rechners sind das „Gesetz zur Mietenbegrenzung im Wohnungswesen
                in Berlin“ sowie das Straßenverzeichnis des Mietspiegels 2019
                zur Bestimmung der Wohnlage. Die Programmierung des
                Mietendeckelrechners wurde zwar mit großer Sorgfalt
                durchgeführt, für die Richtigkeit der Ergebnisse des Rechners
                übernehmen wir jedoch keine Haftung. Maßgeblich sind die
                gesetzlichen Regelungen. Ob und wie der Mietendeckel für dich
                gilt, solltest du abschließend in einer Mieterberatung klären.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ReactTooltip tipPointerPosition="auto" />
    </IntlProvider>
  );
};

export default Layout;
