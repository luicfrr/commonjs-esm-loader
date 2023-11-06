module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [ 'tsconfig.json', 'tsconfig.dev.json' ],
    sourceType: 'module'
  },
  ignorePatterns: [
    '/build/**/*', // Ignore built files.
    '/**/*.test.*', // Ignore test files.
    '/**/*.spec.*', // Ignore spec files.
    '/**/*.config.*' // Ignore config files.
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
    'import/no-unresolved': 0,
    '@typescript-eslint/no-var-requires': 0,
    'max-len': [ 'error', { 'code': 120 } ],
    'no-useless-catch': 0,
    'no-async-promise-executor': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error', {
        'allowSingleExtends': true
      } ],
    // ////////////////
    // custom rules //
    // ////////////////
    'indent': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      } ],
    '@typescript-eslint/no-namespace': [ 'error', { 'allowDeclarations': true } ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'new-cap': [ 'error', { 'newIsCap': true, 'capIsNew': false } ],
    // change quotes do single
    'quotes': [ 'error', 'single' ],
    // spaces in objetcs, arrays, etc..
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    // disable trailing comma
    'comma-dangle': [ 'error', 'never' ],
    // disable semicolon in end
    'semi': [ 'error', 'never' ]
  }
}
