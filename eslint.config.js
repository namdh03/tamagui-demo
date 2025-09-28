// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintPluginSimpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*', '.expo/*', 'node_modules/*'],
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          bracketSameLine: false,
          bracketSpacing: true,
          embeddedLanguageFormatting: 'auto',
          htmlWhitespaceSensitivity: 'css',
          insertPragma: false,
          singleQuote: true,
          jsxSingleQuote: true,
          printWidth: 120,
          proseWrap: 'preserve',
          quoteProps: 'as-needed',
          requirePragma: false,
          semi: true,
          tabWidth: 2,
          useTabs: false,
          endOfLine: 'auto',
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports
            ['^\\u0000'],
            // `react` first
            ['^react$'],
            // `react-native`, second
            ['^react-native', '^@react-navigation'],
            // `expo` third
            ['^expo'],
            // Packages starting with `tamagui`
            ['^@tamagui'],
            // Packages starting with a character
            ['^[a-z]'],
            // Packages starting with `@`
            ['^@'],
            // Packages starting with `~`
            ['^~'],
            // Imports starting with `../`
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Imports starting with `./`
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
