// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 90,
        trailingComma: 'none',
        endOfLine: 'auto',
        tabWidth: 2
      }
    ],
    },
  }
)
