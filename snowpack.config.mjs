/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: '/random-tables-roller', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-babel',
		[
			'@snowpack/plugin-typescript',
			{
				/* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
				...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
			},
		],
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		knownEntrypoints: ['react/jsx-runtime', 'web-vitals'],
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		baseUrl: '/random-tables-roller',
		/* ... */
	},
}
