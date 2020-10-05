module.exports = {
  root: true,

  parser: "babel-eslint",

  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },

  settings: {
    react: {
      version: "16.13.1"
    }
  },

  plugins: ["react", "react-hooks"],

  extends: ["plugin:react-hooks/recommended"],

  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn', {
      enableDangerousAutofixThisMayCauseInfiniteLoops : true
    }],

    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'],
  }
};
