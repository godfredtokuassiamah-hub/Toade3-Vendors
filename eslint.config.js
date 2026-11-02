// https://docs.expo.dev/guides/using-eslint/
const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  globalIgnores(['dist/*', '.expo/*', 'node_modules/*', 'ios/*', 'android/*']),
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': 'warn',
      // Enforce the "@/..." alias over deep relative imports across layers.
      'no-restricted-imports': [
        'error',
        { patterns: [{ group: ['../../*'], message: 'Use the "@/" path alias instead.' }] },
      ],
    },
  },
]);
