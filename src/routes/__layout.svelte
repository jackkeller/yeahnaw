<script context="module">
	export const ssr = false

	export const load = async ({ url }) => ({ props: { url } })
</script>

<script>
	import '../styles/app.postcss'
	import { getLocalStorage } from '@lib/utilities.js'
	import { Question, Yeah, Naw } from '@app/store.js'
	import Transition from '@components/Transition.svelte'
	import Theme from '@components/Theme.svelte'

	export let url, displayQuestion, YeahCount, NawCount, TotalCount

	Question.subscribe((whatnow) => {
		displayQuestion = whatnow
	})

	Yeah.subscribe((y) => {
		YeahCount = y
		YeahCount === 0 ? (YeahCount = getLocalStorage('yeah')) : 0
	})

	Naw.subscribe((n) => {
		NawCount = n
		NawCount === 0 ? (NawCount = getLocalStorage('naw')) : 0
	})

	displayQuestion === null ? (displayQuestion = 'Yeah Naw') : (displayQuestion = displayQuestion)

	$: TotalCount = Number(YeahCount) + Number(NawCount)
</script>

<svelte:head>
	<title>Yeah Naw</title>
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#a0c0ba" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#283f3c" />
</svelte:head>

<main>
	<Transition {url}>
		<slot />
	</Transition>
</main>

<footer>
	<div class="container">
		<div class="flex items-center justify-center h-20 text-xl md:text-2xl">
			{#if TotalCount > 0}
				Yeah: {YeahCount !== null ? YeahCount : 0} and Naw: {NawCount !== null ? NawCount : 0} / Total:
				{TotalCount.toString()}
			{/if}
			<Theme />
		</div>
	</div>
</footer>
