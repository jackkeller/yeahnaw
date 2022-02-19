<script>
	import '../styles/app.postcss'
	import { Question, Yeah, Naw } from '@app/store.js'
	export let displayQuestion, YeahCount, NawCount, TotalCount

	Question.subscribe((whatnow) => {
		displayQuestion = whatnow
	})

	Yeah.subscribe((y) => {
		YeahCount = y
	})

	Naw.subscribe((n) => {
		NawCount = n
	})

	displayQuestion === null ? (displayQuestion = 'Yeah Naw') : (displayQuestion = displayQuestion)

	$: TotalCount = YeahCount + NawCount
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
			Yeah: {YeahCount} and Naw: {NawCount} / Total: {TotalCount}
		</div>
	</div>
</footer>
