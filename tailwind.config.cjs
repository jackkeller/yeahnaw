const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: { max: '767px' },
			md: { min: '768px' },
			mdmax: { max: '991px' },
			lg: { min: '992px' },
			xl: { min: '1240px' }
		},
		extend: {
			colors: {
				transparent: 'transparent',
        primary: 'var(--primary)',
        primaryalt: 'var(--primary-alt)',
        secondary: 'var(--secondary)',
        secondaryalt: 'var(--secondary-alt)',
        textcolor: 'var(--text-color)',
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
				content: ['Roboto', 'var(--base-font)']
			}
		}
	},
	plugins: []
}

module.exports = config
