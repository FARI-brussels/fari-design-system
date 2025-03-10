module.exports = {
root: true,
env: {
    browser: true,
    node: true,
    es2021: true,
},
parser: 'vue-eslint-parser',
parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
},
extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
],
plugins: [
    'vue',
    '@typescript-eslint'
],
rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
}
}
