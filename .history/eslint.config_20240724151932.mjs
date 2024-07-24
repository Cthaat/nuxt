// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      // 使用单引号
      quotes: ['warn', 'single'],
      // 禁止使用console
      'no-console': 'warn',
      // 强制使用分号
      'semi': ['warn', 'always'],
      // 强制使用 === 和 !== 而不是 == 和 !=
      'eqeqeq': ['warn', 'always'],
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
