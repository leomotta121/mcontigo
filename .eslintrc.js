module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['jsx', 'js'] }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-case-declarations': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 'off',
    'no-param-reassign': 0
  }
};
