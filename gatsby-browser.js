/* eslint-disable react/jsx-filename-extension */

import './src/styles/_all.scss';

import React from 'react';

import FormDataProvider from './src/components/formData';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <FormDataProvider>{element}</FormDataProvider>
);
