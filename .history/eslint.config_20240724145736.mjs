// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    rules: {
      // 使用单引号
      quotes: ['warn', 'single'],
      // 结尾不使用分号
      'no-extra-semi': 'warn',
    },
  }
)
