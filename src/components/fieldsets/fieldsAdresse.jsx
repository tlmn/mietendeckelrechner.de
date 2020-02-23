import React, { useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FormattedHTMLMessage, useIntl } from 'react-intl';

import ErrorMessage from '../errorMessage';
import streetsList from '../../data/streetsBerlinDistricts.json';
import InputText from '../atoms/inputText';

export default ({
  register,
  setValue,
  clearError,
  setError,
  errors,
  ...props
}) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    register({ name: 'adresseStrasse', required: true });
  }, [register]);

  return (
    <fieldset {...props}>
      <legend>
        <FormattedHTMLMessage id="adresse.fieldTitle" />
      </legend>
      <div className="inputFlexContainer">
        <div className="inputRow isFlex-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="adresseStrasse" className="labelInputText">
            Straße
          </label>
          <Typeahead
            id="adresseStrasse"
            maxResults={5}
            name="adresseStrasse"
            className="inputText"
            placeholder={formatMessage({
              id: 'adresse.strasse.placeholder'
            })}
            options={streetsList.label}
            onChange={([value]) => {
              if (streetsList.label.includes(value)) {
                clearError('addresseStrasse');
                setValue('adresseStrasse', value);
              } else {
                setError('adresseStrasse');
              }
            }}
          />

          {errors && errors.adresseStrasse && (
            <ErrorMessage>
              Es muss eine gültige Straße ausgewählt werden.
            </ErrorMessage>
          )}
        </div>

        <InputText
          name="adresseHausnummer"
          register={register}
          error={errors && errors.adresseHausnummer}
          required
        >
          Hausnummer
        </InputText>
      </div>
      <div className="inputFlexContainer">
        <InputText
          name="wohnflaeche"
          placeholder={formatMessage({
            id: 'aktuelleMiete.wohnflaeche.placeholder'
          })}
          unit={` ${formatMessage({ id: 'aktuelleMiete.wohnflaeche.unit' })}`}
          setValue={setValue}
          isNumeric
          register={register}
          required
        >
          <FormattedHTMLMessage id="aktuelleMiete.wohnflaeche.title" />
        </InputText>

        <InputText
          name="nettokaltmiete"
          placeholder={formatMessage({
            id: 'aktuelleMiete.nettokaltmiete.placeholder'
          })}
          unit={formatMessage({ id: 'aktuelleMiete.nettokaltmiete.unit' })}
          setValue={setValue}
          isNumeric
          register={register}
          required
        >
          <FormattedHTMLMessage id="aktuelleMiete.nettokaltmiete.title" />
        </InputText>
      </div>
    </fieldset>
  );
};
