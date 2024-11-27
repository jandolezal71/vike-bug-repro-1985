import react from '@vitejs/plugin-react-swc';
import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	build: {
		sourcemap: process.env.NODE_ENV === 'production',
	},
	plugins: [
		tsconfigPaths(),
		vike({}),
		devServer({
			entry: 'src/server/honoRouter.ts',
			exclude: [
				/^\/@.+$/,
				/.*\.(ts|tsx)($|\?)/,
				/.*\.(s?css|less)($|\?)/,
				/^\/favicon\.ico$/,
				/.*\.(svg|png|jpg)($|\?)/,
				/^\/(public|assets|static)\/.+/,
				/^\/node_modules\/.*/,
			],
			injectClientScript: false,
		}),
		react({
			devTarget: 'es2022',
		}),
	],
});
