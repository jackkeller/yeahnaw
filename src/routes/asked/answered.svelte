<script>
	import { goto } from '$app/navigation'
	import { removeLocalStorage } from '@lib/utilities.js'
	import { Question, Yeah, Naw } from '@app/store.js'
	import DisplayQuestion from '@components/DisplayQuestion.svelte'
	import Assets from '@components/Assets.svelte'

	export let TotalCount = 0,
		question,
		yeah,
		naw,
		Winner,
		newQuestion = false

	setTimeout(() => {
		newQuestion = true
	}, 5000)

	Question.subscribe((q) => (question = q))
	Yeah.subscribe((y) => (yeah = y))
	Naw.subscribe((n) => (naw = n))

	$: TotalCount = yeah + naw
	$: Winner = yeah > naw ? 'Yeah' : 'Naw'

	const resetQuestion = () => {
		removeLocalStorage('question')
		removeLocalStorage('yeah')
		removeLocalStorage('naw')
		Question.set(null)
		Yeah.set(0)
		Naw.set(0)

		goto('/')
	}
</script>

<svelte:head>
	<title>Answered "{question}" using Yeah Naw</title>
</svelte:head>

<div class="voting">
	<div class="question">
		<DisplayQuestion />
		{#if newQuestion}
			<button
				on:click={() => resetQuestion()}
				class="bg-peach py-2 px-5 text-celtic inline-block rounded-sm mx-auto"
				>Ask a New Question?</button
			>
		{/if}
	</div>
	<div class="divider">
		<Assets name="wave-mobile" />
		<Assets name="wave-desktop" />
	</div>
	<div class="winner-winner-chicken-dinner">
		<h2>RESULTS: {Winner}</h2>
	</div>
</div>

<style>
	.voting {
		@apply grid h-full relative;

		grid-template-areas: var(--grid-result-areas);
		grid-template-columns: var(--grid-result-columns);
		grid-template-rows: var(--grid-result-rows);
	}

	.question {
		@apply grid content-center;

		grid-area: question;
	}

	.divider {
		@apply absolute overflow-hidden leading-none w-full inset-0;
		grid-area: divider;
	}

	.winner-winner-chicken-dinner {
		@apply bg-peach grid content-center;

		grid-area: winner-winner-chicken-dinner;
	}
</style>
