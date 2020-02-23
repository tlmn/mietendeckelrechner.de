import React from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../atoms/button';

export default ({ isLastStep = false, isResult = false }) => (
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
  </footer>
);
