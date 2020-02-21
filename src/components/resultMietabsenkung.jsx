import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import useFormData from './formData/useFormData';
import StepFooter from './steps/footer';
import mietabsenkung from '../lib/mietabsenkung';
import { translate } from '../lib/message';

const ResultMietabsenkung = ({ previous }) => {
  const [reduction, setReduction] = useState(null);

  const [
    {
      data: {
        baujahr,
        hatSammelheizung,
        hatBad,
        istMehrfamilienhaus,
        hatPersonenaufzug,
        hatEinbaukueche,
        hatHochwertigeSanitaerausstattung,
        hatHochwertigerBoden,
        hatGeringenEVK,
        istModernisierung,
        adresseStrasse,
        adresseHausnummer,
        wohnflaeche,
        nettokaltmiete
      },

      extraProps: { skip }
    }
  ] = useFormData();

  useEffect(() => {
    async function fetchReduction() {
      const response = await mietabsenkung(
        adresseHausnummer,
        adresseStrasse,
        baujahr,
        hatBad,
        hatEinbaukueche,
        hatGeringenEVK,
        hatHochwertigerBoden,
        hatHochwertigeSanitaerausstattung,
        hatPersonenaufzug,
        hatSammelheizung,
        istMehrfamilienhaus,
        istModernisierung,
        nettokaltmiete,
        wohnflaeche
      );

      setReduction(response);
    }

    if (!skip) {
      fetchReduction();
    }
  }, []);

  return (
    <>
      <div className="result">
        {!skip && (
          <>
            {reduction ? (
              translate(reduction)
            ) : (
              <p>
                <FormattedMessage id="loading" />
              </p>
            )}
          </>
        )}
      </div>
      <StepFooter isResult previous={previous} />
    </>
  );
};

export default ResultMietabsenkung;
