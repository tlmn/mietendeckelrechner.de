import React from 'react';

import Mietabsenkung from '../components/formMietabsenkung';
import Layout from '../layouts/de';
import Result from '../components/resultMietabsenkung';
import Steps from '../components/steps';

const MietabsenkungPage = ({ location }) => (
  <Layout location={location}>
    <Steps>
      <Mietabsenkung title="Mietabsenkung" />
      <Result title="Ergebnis" />
    </Steps>
  </Layout>
);

export default MietabsenkungPage;
