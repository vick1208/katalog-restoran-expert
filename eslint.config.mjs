import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';
import codeceptjs from 'eslint-plugin-codeceptjs';


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
  codeceptjs,
  {
    ignores:['webpack.*.js', '**/node_modules/', '**/dist/'],
  },

];