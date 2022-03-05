<script>
	import '../styles/app.postcss'
	import { getLocalStorage } from '@lib/utilities.js'
	import { Question, Yeah, Naw } from '@app/store.js'

	export let displayQuestion, YeahCount, NawCount, TotalCount

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
</svelte:head>

<main>
	<slot />
</main>

<footer>
	<div class="container">
		<div class="flex items-center justify-center h-20">
			Yeah: {YeahCount !== null ? YeahCount : 0} and Naw: {NawCount !== null ? NawCount : 0} / Total:
			{TotalCount.toString()}
		</div>
	</div>
</footer>
