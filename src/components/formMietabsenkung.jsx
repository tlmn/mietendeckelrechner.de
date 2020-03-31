import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormattedMessage } from 'react-intl';
import FieldsTabellenmiete from './fieldsets/fieldsTabellenmiete';
import FieldsAdresse from './fieldsets/fieldsAdresse';
import Button from './atoms/button';
import mietabsenkung from '../lib/mietabsenkung';
import useFormData from './formData/useFormData';
/* import FacebookIcon from "../assets/icons/facebook";
import TwitterIcon from "../assets/icons/twitter"; */
import { translate } from '../lib/message';

export default () => {
  const [state] = useFormData();
  const {
    register,
    handleSubmit,
    errors,
    setError,
    setValue,
    clearError
  } = useForm({
    defaultValues: state.data
  });

  const [reduction, setReduction] = useState(null);
  const [show, setShow] = useState(false);

  async function fetchReduction(data) {
    const {
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
    } = data;

    setShow(true);

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
    console.log(response);
    setReduction(response);
  }

  return (
    <form
      onSubmit={handleSubmit(data => {
        fetchReduction(data);
      })}
    >
      <FieldsAdresse
        register={register}
        setValue={setValue}
        setError={setError}
        clearError={clearError}
        errors={errors}
      />
      <FieldsTabellenmiete register={register} />

      <Button type="submit">
        <FormattedMessage id="case.showResults" />
      </Button>

      <div
        className="result"
        style={{ display: show === false ? 'none' : 'block' }}
      >
        <div className="resultWrapper">
          <div className="resultBox border--radius">
            {reduction ? (
              translate(reduction)
            ) : (
              <p>
                <FormattedMessage id="loading" />
              </p>
            )}
            {/* {reduction && reduction.key === "res.mietabsenkung.ersparnis" && (
              <div className="share">
                <h3 className="resultHighlight">Teile jetzt dein Ergebnis: </h3>
                <a
                  className="buttonShare"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                    "https://test.mietendeckelrechner.de/share/"
                  )}${Math.round(
                    parseFloat(reduction.props.ueberhoehteMieteTotal)
                  )}&amp;src=sdkpreparse`}
                  target="_blank"
                >
                  <FacebookIcon width="20" /> teilen
                </a>
                <a
                  className="buttonShare"
                  href={`https://twitter.com/intent/tweet?text=${encodeURI(
                    "Dank Mietendeckel kann ich monatlich Geld sparen! https://test.mietendeckelrechner.de/share/"
                  )}${Math.round(
                    parseFloat(reduction.props.ueberhoehteMieteTotal)
                  )}`}
                  target="_blank"
                >
                  <TwitterIcon width="20" /> teilen
                </a>
              </div>
            )} */}
            <button
              className="button"
              type="button"
              onClick={() => setShow(false)}
            >
              Fenster schließen
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
