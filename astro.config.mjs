// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://epogrebnyak.github',
    base: '/digital-assets-guide', 
	integrations: [
		starlight({
			title: 'Digital Assets Guide',
			social: [{ icon: 'github', 
				      label: 'GitHub', 
					  href: 'https://github.com/epogrebnyak/digital-assets-guide' }],
		}),
	],
});
