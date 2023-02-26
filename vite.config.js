import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig, searchForWorkspaceRoot } from 'vite'



const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: [
			// search up for workspace root
			searchForWorkspaceRoot(process.cwd()),
			// your custom rules
			'../../static/',
		  ],
		},
	  },
};

export default config;
