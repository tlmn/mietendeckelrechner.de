import React from 'react';

import Mietabsenkung from '../components/formMietabsenkung';
import Layout from '../layouts/de';
import Result from '../components/resultMietabsenkung';
import Steps from '../components/steps';

const MietabsenkungPage = ({ location }) => (
  <Layout location={location}>
    <div className="calculator border--radius">
      <div className="calculator__title border--radius">
        Mietendeckelrechner
      </div>
      <div className="calculator__wrapper">
        <div className="text-center">
          <p>
            Ab Dezember 2020 können in Berlin überhöhte Mieten abgesenkt werden.{' '}
            <br />
            Berechne jetzt, ob du Anspruch auf eine Mietabsenkung hättest und
            wie viel du monatlich sparen wirst!
          </p>
        </div>
        <Steps>
          <Mietabsenkung title="Mietabsenkung" />
          <Result title="Ergebnis" />
        </Steps>
      </div>
    </div>
  </Layout>
);

export default MietabsenkungPage;
