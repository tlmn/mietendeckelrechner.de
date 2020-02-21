module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  env: {
    'browser': true,
  },
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      }
    ],
    'react/prop-types': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
