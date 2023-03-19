module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'standard'
  ],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', 'svelte.config.js'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
	},
  rules: {
    // Needs fix from: https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
    // sometimes useful in svelte
    'no-self-assign': 'warn'
  },
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
