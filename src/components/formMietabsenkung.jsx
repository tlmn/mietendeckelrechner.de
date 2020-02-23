import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormattedMessage } from 'react-intl';
import FieldsTabellenmiete from './fieldsets/fieldsTabellenmiete';
import FieldsAdresse from './fieldsets/fieldsAdresse';
import Button from './atoms/button';
import mietabsenkung from '../lib/mietabsenkung';
import useFormData from './formData/useFormData';
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
          <div className="resultBox">
            {reduction ? (
              translate(reduction)
            ) : (
              <p>
                <FormattedMessage id="loading" />
              </p>
            )}
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
