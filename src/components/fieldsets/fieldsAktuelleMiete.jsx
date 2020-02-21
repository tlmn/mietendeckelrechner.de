import React, { useEffect } from 'react';
import { FormattedHTMLMessage, useIntl } from 'react-intl';
import InputText from '../atoms/inputText';

const FieldsAktuelleMiete = ({ register, setValue, ...props }) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    register({ name: 'wohnflaeche', required: true });
    register({ name: 'nettokaltmiete', required: true });
  }, [register]);

  return (
    <fieldset {...props}>
      <legend>
        <FormattedHTMLMessage id="aktuelleMiete.fieldTitle" />
      </legend>
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

export default FieldsAktuelleMiete;
