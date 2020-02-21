import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../atoms/button';

export default ({
  isFirstStep = false,
  isLastStep = false,
  isResult = false,
  previous = () => {}
}) => (
  <footer className="steps__footer">
    {!isResult && (
      <Button type="submit">
        {isLastStep ? (
          <FormattedMessage id="case.showResults" />
        ) : (
          <FormattedMessage id="case.next" />
        )}
      </Button>
    )}

    {!isFirstStep && (
      <Button
        type="button"
        className="button--is-secondary"
        onClick={() => previous()}
      >
        <FormattedMessage id="case.back" />
      </Button>
    )}
  </footer>
);
