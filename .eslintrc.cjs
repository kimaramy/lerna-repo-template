module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'esprima', // 'esprima' is default parser for eslint
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended', // Add plugin:prettier/recommended as the last extension
    // 'prettier/@typescript-eslint', // prettier/@typescript-eslint has been removed in eslint-config-prettier v8.0.0.
  ],
  plugins: [],
  rules: {
    'no-console': 'warn',
  },
  overrides: [
    {
      files: 'packages/**/*.{ts,jsx,tsx}',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['packages/**/tsconfig?(.node).json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime', // If you are using the new JSX transform from React 17, extend react/jsx-runtime in your eslint config, Make sure it is added after plugin:react/recommended in the extends array.
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
        react: {
          version: 'detect',
        },
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
};
