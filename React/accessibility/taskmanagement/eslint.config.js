import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';


export default [
  {
    ignores: ['dist'], // Ignore the dist directory
  },
  {
    files: ['**/*.{js,jsx}'], // Apply to all JS/JSX files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true },
        sourceType: 'module', // Enable ES modules
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y, // Include jsx-a11y plugin
      react, // Include the react plugin
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended rules
      ...reactHooks.configs.recommended.rules, // React Hooks recommended rules
      ...jsxA11y.configs.recommended.rules, // Accessibility rules from jsx-a11y
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Explicitly enable label-has-associated-control rule
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either', // Either htmlFor or aria-labelledby is acceptable
          depth: 3, // Specifies the depth to search for associated controls (useful for nested components)
        },
      ],
    },
  },
  {
    // React plugin settings if needed
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/prop-types': 'off', // Example rule to disable prop-types
    },
  },
];
