import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	),
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		settings: {
			'import/resolver': {
				typescript: {
					project: './tsconfig.json',
				},
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['**/*.ts', '**/*.tsx'],
			},
		},
		rules: {
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', 'index', 'type', 'parent', 'sibling'],
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
					'newlines-between': 'always',
				},
			],
		},
	},
];

export default eslintConfig;
