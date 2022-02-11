import path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    vite: {
      ssr: {
        external: ['whatwg-url'],
      },
			resolve: {
        alias: {
          '@app': path.resolve('./src/'),
					'@lib': path.resolve('./src/lib'),
					'@components': path.resolve('./src/lib/components')
				}
			}
    }
	},
	preprocess: [
		preprocess({
			postcss: true,
			sass: true
		})
	]
};

export default config;
