import { useIntl } from 'react-intl';
import React from 'react';

export function emit(key, props = {}) {
  return {
    key: `${key}`,
    props
  };
}

export function translate(message) {
  if (!message) {
    return null;
  }

  const { key: id, props: values } = message;
  const { formatMessage } = useIntl();

  return (
    <p dangerouslySetInnerHTML={{ __html: formatMessage({ id }, values) }} />
  );
}
