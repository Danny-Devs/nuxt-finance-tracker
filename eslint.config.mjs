// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['default', 'index']
    }]
  }
})
