import React, { cloneElement, useState } from 'react';

import { SET_FORM_DATA, SET_FORM_EXTRA_PROPS } from '../formData/actions';
import useFormData from '../formData/useFormData';

const Steps = ({ children }) => {
  const [state, dispatch] = useFormData();
  const [step, setStep] = useState(0);
  const child = cloneElement(children[step], {
    isFirstStep: step === 0,

    isLastStep: children.length === step + 2,

    onSubmit(errors, data, options = { extraProps: null, next: true }) {
      if (Object.keys(errors).length !== 0) {
        return;
      }

      let next = step + 1;

      dispatch({ type: SET_FORM_DATA, payload: data });
      dispatch({ type: SET_FORM_EXTRA_PROPS, payload: options.extraProps });

      if (Number.isInteger(options.next)) {
        next = options.next;

        if (options.next === -1) {
          next = children.length - 1;
        }
      }

      setStep(next);
    },

    previous() {
      let previous = step - 1;

      if (state.extraProps.skip === true) {
        previous = 0;
      }

      setStep(previous);
    }
  });

  return <>{child}</>;
};

export default Steps;
