module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: { // by default eslint rules are dog shit
        indent: ['warn', 4],
        'vue/html-indent': ['warn', 4],
        'no-lone-blocks': ['off'],
        'require-await': ['off'],
        'import/no-mutable-exports': ['off'],
        curly: ['off']
    }

}
