// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Digital Assets Guide',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://epogrebnyak.github.io/blockchain-theme-map/' }],
			// sidebar: [
				// {
				// label: 'Essential!!!',
				// autogenerate: { directory: 'essential' },
				// // order: 2, // 👈 This determines the folder's position in the sidebar
				// },
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	{
			// 		label: 'Reference',
			// 		items: [{ autogenerate: { directory: 'reference' } }],
			// 	},
			// ],
		}),
	],
});
