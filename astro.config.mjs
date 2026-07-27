// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://epogrebnyak.github.io',
    base: '/digital-assets-guide/',
    build: {
        assets: 'assets' // Change the default '_astro' folder to 'assets'
    },
	integrations: [
		starlight({
			title: 'Digital Assets Guide',
			social: [{ icon: 'github', 
				      label: 'GitHub', 
					  href: 'https://github.com/epogrebnyak/digital-assets-guide' }],
		}),
	],
});
