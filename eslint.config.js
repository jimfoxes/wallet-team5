import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier/recommended'
// опционально, если хочешь проверять несуществующие компоненты
import react from 'eslint-plugin-react'

export default [
    { ignores: ['dist/**', 'node_modules/**'] },

    prettier,

    js.configs.recommended, // ← даёт no-undef, no-unused-vars и другие базовые правила

    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            react: react, // ← раскомментировать, если нужен
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Игнорируем React-компоненты и _переменные
            'no-unused-vars': [
                'error',
                {
                    varsIgnorePattern: '^_[A-Za-z]*|[A-Z][A-Za-z]*$',
                },
            ],

            // Опционально: включаем проверку неопределённых JSX-компонентов
            'react/jsx-no-undef': 'error',

            // Можно переопределить что-то из prettier, если нужно
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                    // ... другие твои предпочтения
                },
            ],
        },
    },
]
