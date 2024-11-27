import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

import honoRouter from './honoRouter';

const app = new Hono();

app.use('/assets/*', serveStatic({ root: './dist/client/' })).route('/', honoRouter);

Bun.serve({ port: 8000, fetch: app.fetch });

process.on('SIGINT', () => {
	console.log('SIGINT accepted, exiting!');
	process.exit(0);
});
