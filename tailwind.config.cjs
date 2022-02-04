const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: { max: '767px' },
			md: { min: '768px' },
			lg: { min: '992px' },
			xl: { min: '1240px' }
		},
		extend: {
			colors: {
				transparent: 'transparent',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				black: 'var(--black)',
				mandarin: 'var(--mandarin)',
				lightpeach: 'var(--light-peach)',
				peach: 'var(--peach)',
				burningsand: 'var(--burning-sand)',
				tepapagreen: 'var(--te-papa-green)',
				celtic: 'var(--celtic)',
				patina: 'var(--patina)',
				white: 'var(--white)'
			},
			fontFamily: {
				content: ['Nunito', 'var(--base-font)'],
				heading: ['Nunito', 'var(--base-font)'],
				code: ['Fira Code', 'monospace']
			}
		}
	},
	plugins: []
};

module.exports = config;
