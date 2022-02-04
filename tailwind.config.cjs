const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
    screens: {
      xs: { max: '767px'},
			sm: { min: '768px' },
			md: { min: '992px' },
			lg: { min: '1240px' },
			xl: { min: '1920px' }
		},
		extend: {
			colors: {
				transparent: 'transparent',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
        black: 'var(--black)',
        mandarin: 'var(--mandarin)',
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