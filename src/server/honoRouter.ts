import { Hono } from 'hono';
import { logger } from 'hono/logger';

import type { HonoApp } from '@/server/types';
import { vikeHandler } from '@/server/vikeHandler';

const app = new Hono<HonoApp>();

app
	.use(logger())
	.get('/test', (c) => {
		return c.json({ haha: 1 });
	})
	.all('*', vikeHandler());

export default app;
