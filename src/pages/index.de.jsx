import BackgroundImage from "../components/backgroundImage";
import Footer from "../components/atoms/footer";
import Layout from "../layouts/de";
import Mietabsenkung from "../components/formMietabsenkung";
import React from "react";
import Result from "../components/resultMietabsenkung";
import Steps from "../components/steps";

const MietabsenkungPage = ({ location }) => (
  <Layout location={location}>
    <BackgroundImage>
      <div className="banner">
        Mietendeckelrechner auf deiner Seite? Schreib an{" "}
        <a href="mailto:info@mietendeckelrechner.de">
          info@mietendeckelrechner.de
        </a>
      </div>
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
          <div className="calculator border--radius">
            <div className="calculator__title border--radius">
              Mietendeckelrechner
            </div>
            <div className="calculator__wrapper">
              <div className="text-center">
                <p>
                  Seit 23. November 2020 können in Berlin überhöhte Mieten
                  abgesenkt werden. <br />
                  Berechne jetzt, ob du Anspruch auf eine Mietabsenkung hast
                  und wie viel du monatlich sparst!
                </p>
              </div>
              <Steps>
                <Mietabsenkung title="Mietabsenkung" />
                <Result title="Ergebnis" />
              </Steps>
            </div>
          </div>
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
              astronomische Höhen und Mieter:innen werden aus ihren Kiezen
              verdrängt. Die rot-rot-grüne Landesregierung will dieser
              Entwicklung mit einem Mietendeckel Einhalt gebieten. Der
              Mietendeckel trat am 23. Februar 2020 in Kraft und gilt bis 2025.
              Er besteht aus drei Maßnahmen: Mietenstopp, Obergrenzen bei
              Wiedervermietung und Mietabsenkung. Ausgenommen vom Mietendeckel
              sind unter anderem Neubauten ab Baujahr 2014 und öffentlich
              geförderter Wohnraum.
            </p>
            <h3 className="text-center">Mietenstopp</h3>
            <p>
              Ab 23. Februar 2020 dürfen in Berlin die meisten Mieten nicht mehr
              erhöht werden. Kosten für Modernisierungen können mit bis zu
              1&nbsp;Euro/m² auf die Mieter*innen umgelegt werden.
            </p>
            <h3 className="text-center">Wiedervermietung</h3>
            <p>
              Bei neu abgeschlossenen Mietverträgen gelten Mietobergrenzen.
              Diese richtet sich nach Baujahr und Ausstattung des Gebäudes und
              deiner Wohnung.
            </p>
            <h3 className="text-center">Mietabsenkungen</h3>
            <p>
              Überhöhte Mieten von mehr als 120&nbsp;% der Mietobergrenze können
              abgesenkt werden. Diese Mietobergrenze bemisst sich unter anderem
              nach Baujahr des Hauses und Ausstattung der Wohnung. Zusätzlich
              werden je nach Lage deiner Wohnung Ab- oder Zuschläge fällig.
              Diese Maßnahme trat am 23. November 2020 in Kraft. Mit unserem
              Mietendeckelrechner kannst du ermitteln, wie viel du sparst.
            </p>
            <p className="disclaimer">
              Grundsätzlich gilt, dass wir als Anbieter keinerlei Gewähr für die
              Aktualität, Korrektheit und Vollständigkeit der bereitgestellten
              Informationen übernehmen. Grundlagen des Rechners sind das „Gesetz
              zur Mietenbegrenzung im Wohnungswesen in Berlin“ sowie das
              Straßenverzeichnis des Mietspiegels 2019 zur Bestimmung der
              Wohnlage. Die Programmierung des Mietendeckelrechners wurde zwar
              mit großer Sorgfalt durchgeführt, für die Richtigkeit der
              Ergebnisse des Rechners übernehmen wir jedoch keine Haftung.
              Maßgeblich sind die gesetzlichen Regelungen. Ob und wie der
              Mietendeckel für dich gilt, solltest du abschließend in einer
              Mieterberatung klären.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default MietabsenkungPage;
