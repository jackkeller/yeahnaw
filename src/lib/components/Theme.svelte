<script>
	import { getLocalStorage, setLocalStorage } from '@lib/utilities.js'
	import Assets from '@components/Assets.svelte'

	let ariaTitle,
		asset = getLocalStorage('theme') === 'dark' ? 'sun' : 'moon'

  ariaTitle = `Switch to ${getLocalStorage('theme') === 'dark' ? 'Light' : 'Dark'} Mode` 

	const switchTheme = () => {
		const theme = getLocalStorage('theme')
		if (theme === 'dark') {
			setLocalStorage('theme', 'light')
			asset = 'moon'
			document.documentElement.classList.remove('dark')
			ariaTitle = 'Switch to Dark Mode'
		} else {
			setLocalStorage('theme', 'dark')
			asset = 'sun'
			document.documentElement.classList.add('dark')
			ariaTitle = 'Switch to Light Mode'
		}
	}
</script>

<div class="theme-picker w-12 h-12 cursor-pointer" aria-title={ariaTitle} on:click={switchTheme}>
	<Assets name={asset} />
</div>

<style>
	.theme-picker {
		@apply absolute left-2 top-2;
	}
</style>
