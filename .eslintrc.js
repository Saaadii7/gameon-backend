module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 12
    },
    plugins: [
        'require-path-exists',
        'sort-keys-fix'
    ],
    rules: {
        'array-bracket-newline': [
            'error',
            'consistent'
        ],
        // 'array-bracket-spacing': [
        //     'error',
        //     'always',
        //     {
        //         arraysInArrays: true,
        //         objectsInArrays: false
        //     }
        // ],
        // 'array-element-newline': [
        //     'error',
        //     'always'
        // ],
        'arrow-spacing': [
            'error',
            {
                after: true,
                before: true
            }
        ],
        'brace-style': [
            'error',
            'stroustrup'
        ],
        'comma-dangle': [
            'error',
            'never'
        ],
        'comma-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        complexity: [
            'error',
            {
                max: 200
            }
        ],
        curly: [
            'error',
            'multi-or-nest'
        ],
        'default-case': [
            'error'
        ],
        eqeqeq: [
            'error',
            'always'
        ],
        'handle-callback-err': [
            'error'
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                mode: 'strict'
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-lines-per-function': [
            'error',
            {
                max: 500
            }
        ],
        'max-nested-callbacks': [
            'error',
            {
                max: 2
            }
        ],
        'max-statements-per-line': [
            'error',
            {
                max: 1
            }
        ],
        'no-alert': [
            'error'
        ],
        'no-console': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0
            }
        ],
        'no-use-before-define': [
            'error'
        ],
        'no-var': [
            'error'
        ],
        // 'object-curly-newline': [
        //     'error',
        //     {
        //         minProperties: 1
        //     }
        // ],
        'object-property-newline': [
            'error'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*'
            },
            {
                blankLine: 'always',
                next: '*',
                prev: [
                    'const',
                    'let',
                    'var'
                ]
            },
            {
                blankLine: 'any',
                next: [
                    'const',
                    'let',
                    'var'
                ],
                prev: [
                    'const',
                    'let',
                    'var'
                ]
            },
            {
                blankLine: 'always',
                next: '*',
                prev: [
                    'if'
                ]
            },
            {
                blankLine: 'always',
                next: 'if',
                prev: '*'
            },
            {
                blankLine: 'always',
                next: '*',
                prev: 'directive'
            }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single'
        ],
        'require-path-exists/exists': [
            2
        ],
        'require-path-exists/notEmpty': 2,
        'require-path-exists/tooManyArguments': 2,
        semi: [
            'error',
            'always'
        ],
        'sort-keys-fix/sort-keys-fix': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: false
            }
        ],
        'sort-vars': [
            'error',
            {
                ignoreCase: true
            }
        ]
    }
};
