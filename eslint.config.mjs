import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.jest
    }
  },
  },
  pluginJs.configs.recommended,
  daStyle,
  {
    ignores:['webpack.*.js', '**/node_modules/', '**/dist/','**/e2e/'],
  },

];