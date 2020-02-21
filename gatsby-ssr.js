/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import './src/styles/_all.scss';

import FormDataProvider from './src/components/formData';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <FormDataProvider>{element}</FormDataProvider>
);
