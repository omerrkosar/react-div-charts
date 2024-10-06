module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "simple-import-sort"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-constructor-return': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-promise-executor-return': 'error',
    'no-unused-private-class-members': 'error',
    'no-multiple-empty-lines': 'error',
    'require-atomic-updates': 'error',
    'comma-dangle': ['warn', 'always-multiline'],
    'computed-property-spacing': ['error'],
    'eol-last': ['error', 'always'],
    'dot-location': ["error", "property"],
    'function-call-argument-newline': ['warn', 'consistent'],
    'no-trailing-spaces': 'error',
    'no-extra-boolean-cast': "off",
    'object-curly-spacing': ['error', 'always'],
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': [
      'warn',
      2,
      { SwitchCase: 1 }
    ],
    '@typescript-eslint/no-this-alias': [
      'warn',
      { allowDestructuring: true, allowedNames: ['that', 'self'] }
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "no-unused-vars": "off",
    'no-this-alias': "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/ban-types": [
      "warn",
      {
        "types": {
          "Object": false, //fabric.js use Object extensively
        },
        "extendDefaults": true,
      },
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-namespace": "off",
    "prefer-spread": "off",
  },
}
