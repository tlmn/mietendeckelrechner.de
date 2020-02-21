/* eslint-disable react/jsx-filename-extension */
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import { emit, translate } from './message';
import testMessages from './testMessages';

const locale = 'en';

const TestIntlContext = ({ children }) => (
  <IntlProvider locale={locale} messages={testMessages[locale]}>
    {children}
  </IntlProvider>
);

describe('message', () => {
  afterEach(cleanup);

  test('Emit', () => {
    expect(emit(1)).toStrictEqual({
      key: '1',
      props: {}
    });

    expect(
      emit(1, {
        prop: 1,
        props: 2
      })
    ).toStrictEqual({
      key: '1',
      props: {
        prop: 1,
        props: 2
      }
    });
  });

  test('Should translate given messages without props', () => {
    const message = emit('message_1');

    const { getByText } = render(
      <TestIntlContext>{translate(message)}</TestIntlContext>
    );

    expect(getByText).toBeDefined();
    expect(getByText('Translated Message')).toBeInTheDocument();
  });

  test('Should fail, if the given key does not exist', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation();

    const message = emit('message_2');

    const { getByText } = render(
      <TestIntlContext>{translate(message)}</TestIntlContext>
    );

    expect(getByText).toThrow();
    expect(spy).toHaveBeenCalled();
  });

  test('Should fail render with variable replacements', () => {
    const message = emit('message_3', {
      wat: 'Wat',
      wat2: 'WatWat'
    });

    const { getByText } = render(
      <TestIntlContext>{translate(message)}</TestIntlContext>
    );

    expect(getByText('Translated Wat Message WatWat')).toBeInTheDocument();
  });
});
