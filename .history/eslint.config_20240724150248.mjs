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
      // 禁止未使用的变量
    'no-unused-vars': 'warn',
    },
  }
)
