module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:@web-bee-ru/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
    },
};
