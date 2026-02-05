import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import prettier from 'prettier'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        plugins: {
            js,
            prettier: pluginPrettier,
        },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            // Отключаем встроенное правило о концах строк
            'linebreak-style': 'off',

            // Правила Prettier через ESLint
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto', // Автоматически определять окончания строк
                    parser: 'babel', // или 'typescript' если используете TS
                    usePrettierrc: true, // Использовать настройки из .prettierrc.yaml
                },
            ],

            // React специфичные правила
            'react/react-in-jsx-scope': 'off', // Для React 17+
        },
    },

    // Конфигурация React
    pluginReact.configs.flat.recommended,

    // Отключаем ESLint правила, которые конфликтуют с Prettier
    prettierConfig,
])
