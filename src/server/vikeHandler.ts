import { renderPage } from 'vike/server';
import type { Handler } from 'hono';

export const vikeHandler: () => Handler = () => async (ctx) => {
	const pageContext = await renderPage({
		urlOriginal: ctx.req.url,
		headersOriginal: ctx.req.header(),
	});

	const { httpResponse: vikeHttpResponse } = pageContext;

	const { readable, writable } = new TransformStream();

	vikeHttpResponse.pipe(writable);

	return new Response(readable, {
		status: vikeHttpResponse.statusCode,
		headers: vikeHttpResponse.headers,
	});
};
