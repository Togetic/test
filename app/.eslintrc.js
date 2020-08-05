module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // '@nuxtjs',
    // 'plugin:nuxt/recommended',
    'plugin:vue/essential'
  ],
  // add your custom rules here
  plugins: [
    'vue'
  ],
  rules: {
    "semi": "off",
    "quotes": "off",
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-unused-vars": "off",
  },
}
