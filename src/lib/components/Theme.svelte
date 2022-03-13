<script>
	import { getLocalStorage, setLocalStorage } from '@lib/utilities.js'
	import Assets from '@components/Assets.svelte'

	export let asset = getLocalStorage('theme') === 'dark' ? 'sun' : 'moon'

	const switchTheme = () => {
		const theme = getLocalStorage('theme')
		if (theme === 'dark') {
			setLocalStorage('theme', 'light')
			asset = 'moon'
			document.documentElement.classList.remove('dark')
		} else {
			setLocalStorage('theme', 'dark')
			asset = 'sun'
			document.documentElement.classList.add('dark')
		}
	}
</script>

<div
	class="theme-picker w-12 h-12 cursor-pointer"
	aria-title="Theme Switcher"
	on:click={switchTheme}
>
	<Assets name={asset} />
</div>

<style>
	.theme-picker {
		@apply absolute left-2 top-2;
	}
</style>
