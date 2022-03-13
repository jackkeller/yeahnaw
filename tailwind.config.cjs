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
				primaryBackground: 'var(--primary-background)',
				secondaryBackground: 'var(--secondary-background)',
				assetFill: 'var(--asset-fill)',
				assetStroke: 'var(--asset-stroke)',
				yesColor: 'var(--yes-color)',
				noColor: 'var(--no-color)',
				primaryText: 'var(--primary-text)',
				primaryTextHover: 'var(--primary-text-hover)',
				secondaryText: 'var(--secondary-text)',
				secondaryTextHover: 'var(--secondary-text-hover)',
				transparent: 'transparent',
				black: 'var(--black)',
				breakerbay: 'var(--breaker-bay)',
				burningsand: 'var(--burning-sand)',
				carnabytan: 'var(--carnaby-tan)',
				catskillwhite: 'var(--catskill-white)',
				celtic: 'var(--celtic)',
				codgrey: 'var(--cod-grey)',
				copper: 'var(--copper)',
				coralcandy: 'var(--coral-candy)',
				desert: 'var(--desert)',
				lightpeach: 'var(--light-peach)',
				lochinvar: 'var(--lochinvar)',
				oracle: 'var(--oracle)',
				patina: 'var(--patina)',
				peach: 'var(--peach)',
				rodeodust: 'var(--rodeo-dust)',
				scandal: 'var(--scandal)',
				shadowgreen: 'var(--shadow-green)',
				sienna: 'var(--sienna)',
				tepapagreen: 'var(--te-papa-green)',
				tradewind: 'var(--tradewind)',
				white: 'var(--white)',
				zinnwaldite: 'var(--zinnwaldite)'
			},
			fontFamily: {
				content: ['Roboto', 'var(--base-font)']
			}
		}
	},
	plugins: []
}

module.exports = config
