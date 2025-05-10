import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule: { test: { test: (arg0: string) => any } }) =>
			rule.test?.test?.('.svg'),
		);

		config.module.rules.push(
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	images: {
		domains: ['image.tmdb.org'],
	},
};

export default nextConfig;
