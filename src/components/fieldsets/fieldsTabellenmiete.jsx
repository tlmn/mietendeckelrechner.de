import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import Checkbox from '../atoms/checkbox';
import { baujahrsklassen } from '../../lib/vars';

export default ({ register, ...props }) => {
  return (
    <>
      <fieldset {...props}>
        <legend>
          <FormattedHTMLMessage id="gebaeudeUndWohnung.fieldTitle" />
        </legend>
        <FormattedHTMLMessage id="gebaeudeUndWohnung.baujahr" />:
        <select
          name="baujahr"
          id="baujahr"
          ref={register}
          style={{ maxWidth: '10rem', display: 'inline', marginLeft: '1rem' }}
        >
          {baujahrsklassen.map(klasse => (
            <option key={klasse}>{klasse}</option>
          ))}
        </select>
        <Checkbox name="istMehrfamilienhaus" register={register}>
          <FormattedHTMLMessage id="gebaeudeUndWohnung.istMehrfamilienhaus" />
        </Checkbox>
        <Checkbox name="hatSammelheizung" register={register}>
          <FormattedHTMLMessage id="gebaeudeUndWohnung.hatSammelheizung" />
        </Checkbox>
        <Checkbox name="hatBad" register={register}>
          <FormattedHTMLMessage id="gebaeudeUndWohnung.hatBad" />
        </Checkbox>
      </fieldset>
      <fieldset {...props}>
        <legend>
          <FormattedHTMLMessage id="ausstattungsmerkmale.fieldTitle" />
        </legend>
        <Checkbox name="istModernisierung" register={register}>
          <FormattedHTMLMessage id="modernisierung.istModernisierungNachInkrafttreten" />
        </Checkbox>
        <p>
          <FormattedHTMLMessage id="ausstattungsmerkmale.intro" />
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
      </fieldset>
    </>
  );
};
