import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import Checkbox from '../atoms/checkbox';

export default ({ register, ...props }) => {
  return (
    <fieldset {...props}>
      <legend>
        <FormattedHTMLMessage id="awb.title" />
      </legend>

      <Checkbox name="istSozialwohnung" register={register}>
        <FormattedHTMLMessage id="awb.istSozialwohnung" />
      </Checkbox>

      <Checkbox name="istOeffentlichModernisiert" register={register}>
        <FormattedHTMLMessage id="awb.istOeffentlichModernisiert" />
      </Checkbox>

      <Checkbox name="istWohnheim" register={register}>
        <FormattedHTMLMessage id="awb.istWohnheim" />
      </Checkbox>

      <Checkbox name="istBezugsfertigNach2014" register={register}>
        <FormattedHTMLMessage id="awb.istBezugsfertigNach2014" />
      </Checkbox>

      <Checkbox name="istUeberlassungDringenderWohnbedarf" register={register}>
        <FormattedHTMLMessage id="awb.istUeberlassungDringenderWohnbedarf" />
      </Checkbox>
    </fieldset>
  );
};
