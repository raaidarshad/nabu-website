import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				blog: './src/routes/blog/_layout.svelte'
			}
		})
	],

	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: vercel({external: ['*/pg']}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: false
	}
};

export default config;
