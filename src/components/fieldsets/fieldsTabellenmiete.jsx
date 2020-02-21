import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Checkbox from '../atoms/checkbox';
import { baujahrsklassen } from '../../lib/vars';

export default ({ register, ...props }) => {
  return (
    <>
      <fieldset {...props}>
        <legend>
          <FormattedMessage id="gebaeudeUndWohnung.fieldTitle" />
        </legend>

        <select name="baujahr" id="baujahr" ref={register}>
          <option selected>
            <FormattedMessage id="gebaeudeUndWohnung.baujahr" />
          </option>
          {baujahrsklassen.map(klasse => (
            <option key={klasse}>{klasse}</option>
          ))}
        </select>

        <Checkbox name="istMehrfamilienhaus" register={register}>
          <FormattedMessage id="gebaeudeUndWohnung.istMehrfamilienhaus" />
        </Checkbox>

        <Checkbox name="hatSammelheizung" register={register}>
          <FormattedMessage id="gebaeudeUndWohnung.hatSammelheizung" />
        </Checkbox>

        <Checkbox name="hatBad" register={register}>
          <FormattedMessage id="gebaeudeUndWohnung.hatBad" />
        </Checkbox>
      </fieldset>
      <fieldset {...props}>
        <legend>
          <FormattedHTMLMessage id="ausstattungsmerkmale.fieldTitle" />
        </legend>
        <p>
          <FormattedMessage id="ausstattungsmerkmale.intro" />
        </p>
        <Checkbox name="hatPersonenaufzug" register={register}>
          <FormattedHTMLMessage id="ausstattungsmerkmale.hatPersonenaufzug" />
        </Checkbox>

        <Checkbox name="hatEinbaukueche" register={register}>
          <FormattedHTMLMessage id="ausstattungsmerkmale.hatEinbaukueche" />
        </Checkbox>

        <Checkbox name="hatHochwertigeSanitaerausstattung" register={register}>
          <FormattedHTMLMessage id="ausstattungsmerkmale.hatHochwertigeSanitaerausstattung" />
        </Checkbox>

        <Checkbox name="hatHochwertigerBoden" register={register}>
          <FormattedHTMLMessage id="ausstattungsmerkmale.hatHochwertigerBoden" />
        </Checkbox>

        <Checkbox name="hatGeringenEVK" register={register}>
          <FormattedHTMLMessage id="ausstattungsmerkmale.hatGeringenEVK" />
        </Checkbox>

        <Checkbox name="istModernisierung" register={register}>
          <FormattedMessage id="modernisierung.istModernisierungNachInkrafttreten" />
        </Checkbox>
      </fieldset>
    </>
  );
};
