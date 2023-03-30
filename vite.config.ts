import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$styles: path.resolve('./src/styles'),
			$utils: path.resolve('./src/utils'),
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/lib/components'),
			$pages: path.resolve('./src/lib/pages'),
			$sections: path.resolve('./src/lib/sections'),
			$icons: path.resolve('./src/lib/icons')
		}
	}
});
