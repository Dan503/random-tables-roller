import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactRefresh(),
	],
	esbuild: {
		// Adds React import so that we don't have to manually write the import in all our files
		jsxInject: `import React from 'react'`
	}
})
