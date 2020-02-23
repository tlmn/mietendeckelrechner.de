import React from 'react';

export default () => (
  <div className="col-12 offset-0 col-md-8 offset-md-2">
    <div className="textWrapper">
      <h1>Datenschutzerklärung</h1>
      <p>
        Stand: 18. September 2019
        <h2>Inhaltsübersicht</h2>
        <ul className="index">
          <li>
            <a className="index-link" href="#m3">
              {' '}
              Verantwortlicher
            </a>
          </li>
          <li>
            <a className="index-link" href="#mOverview">
              {' '}
              Übersicht der Verarbeitungen
            </a>
          </li>
          <li>
            <a className="index-link" href="#m13">
              {' '}
              Maßgebliche Rechtsgrundlagen
            </a>
          </li>
          <li>
            <a className="index-link" href="#m27">
              {' '}
              Sicherheitsmaßnahmen
            </a>
          </li>
        </ul>
        <h2 id="m3">Verantwortlicher</h2>
        <p>
          Mietenwatch
          <br />
          Tilman Miraß
          <br />
          Lausitzer Straße 10
          <br />
          Aufgang A
          <br />
          10999 Berlin
        </p>
        <p>
          <strong>E-Mail-Adresse</strong>:{' '}
          <a href="mailto:info@mietenwatch.de">info@mietenwatch.de</a>
        </p>
        <ul className="m-elements" />
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen. Die in den Rechner eingegebenen Daten werden nur
          lokal auf dem Gerät der Nutzer*innen verarbeitet und nicht an einen
          externen Server übermittelt.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>
            <p>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</p>
          </li>
          <li>
            <p>
              Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
              IP-Adressen).
            </p>
          </li>
        </ul>
        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>
            <p>
              Nutzer*innen (z.B. Webseitenbesucher*innen, Nutzer*innen von
              Onlinediensten).
            </p>
          </li>
        </ul>
        <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Im Folgenden teilen wir die Rechtsgrundlagen der
          Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die
          personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass
          zusätzlich zu den Regelungen der DSGVO die nationalen
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten
          können. Dein Klickverhalten oder Eingaben (z.B. Angaben zu deinem
          Einkommen im Kapitel Leistbarkeit) werden nicht gespeichert. Unser
          Hoster{' '}
          <a
            href="https://www.netlify.com/gdpr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            erhebt jedoch Zugriffsstatistiken
          </a>{' '}
          und speichert deshalb für maximal 30 Tage deine IP Adresse.
        </p>
        <p>
          <strong>Nationale Datenschutzregelungen in Deutschland</strong>:
          Zusätzlich zu den Datenschutzregelungen der
          Datenschutz-Grundverordnung gelten nationale Regelungen zum
          Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum
          Schutz vor Missbrauch personenbezogener Daten bei der
          Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
          insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
          Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer
          Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke
          und zur Übermittlung sowie automatisierten Entscheidungsfindung im
          Einzelfall einschließlich Profiling. Des Weiteren regelt es die
          Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26
          BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder
          Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von
          Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen
          Bundesländer zur Anwendung gelangen.
        </p>
        <ul className="m-elements" />
        <h2 id="m27">Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
          Berücksichtigung des Stands der Technik, der Implementierungskosten
          und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung
          sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des
          Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen
          geeignete technische und organisatorische Maßnahmen, um ein dem Risiko
          angemessenes Schutzniveau zu gewährleisten.
        </p>
        <p>
          Zu den Maßnahmen gehören insbesondere die Sicherung der
          Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
          Kontrolle des physischen und elektronischen Zugangs zu den Daten als
          auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
          Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
          Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
          die Löschung von Daten und Reaktionen auf die Gefährdung der Daten
          gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
          Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
          sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
          Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        </p>
        <p>
          <strong>SSL-Verschlüsselung (https)</strong>: Um Ihre via unser
          Online-Angebot übermittelten Daten zu schützen, nutzen wir eine
          SSL-Verschlüsselung. Sie erkennen derart verschlüsselte Verbindungen
          an dem Präfix https:// in der Adresszeile Ihres Browsers.
        </p>
      </p>
      <p className="seal">
        <a
          href="https://datenschutz-generator.de/?l=de"
          title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
          target="_blank"
          rel="noopener noreferrer"
        >
          Erstellt mit Datenschutz-Generator.de von Dr. jur. Thomas Schwenke
        </a>
      </p>
    </div>
  </div>
);
