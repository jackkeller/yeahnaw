<script>
	import { goto } from '$app/navigation'
	import { ConfettiExplosion } from 'svelte-confetti-explosion'
	import { getLocalStorage, clearQuestionData } from '@lib/utilities.js'
	import { Question, Yeah, Naw } from '@app/store.js'
	import DisplayQuestion from '@components/DisplayQuestion.svelte'
	import Assets from '@components/Assets.svelte'

	export let TotalCount = 0,
		question,
		yeah,
		naw,
		Winner,
		WinnerPercent,
		newQuestion = false,
		approach = false

	setTimeout(() => {
		newQuestion = true
	}, 1500)

	setTimeout(() => {
		approach = true
	}, 2000)

	Yeah.subscribe((y) => (yeah = y))
	Naw.subscribe((n) => (naw = n))
	question = getLocalStorage('question')

	$: TotalCount = yeah + naw
	$: Winner = yeah > naw ? 'Yeah' : 'Naw'
	$: WinnerPercent = yeah > naw ? (yeah / 50) * 100 : (naw / 50) * 100

	const resetQuestion = () => {
		clearQuestionData()
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
				class="bg-secondaryBackground py-2 px-5 text-celtic inline-block rounded-sm mx-auto"
				>Ask a New Question?</button
			>
		{/if}
		{#if approach}
			<div class="mx-auto px8 md:px-16 pt-6 md:pt-12">
				<a
					href="/thoughts"
					class="text-primaryText underline hover:text-primaryTextHover transition-colors duration-300 ease-in-out"
					>Read about our approach</a
				>
			</div>
		{/if}
	</div>
	<div class="divider">
		<Assets name="wave-mobile" />
		<Assets name="wave-desktop" />
	</div>
	<div class="winner-winner-chicken-dinner text-primary grid items-center">
		<h2 class="text-primary text-4xl mx-auto px-8 md:px-16 text-center md:text-left font-light">
			<span>{Winner}</span> won with <span>{`${Math.round(WinnerPercent)}%`}</span> of the Vote
		</h2>
		<ConfettiExplosion
			colors={['var(--primary)', 'var(--patina)', 'var(--white)', 'var(--burning-sand)']}
			duration={4000}
			force={0.8}
			particleCount={180}
		/>
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
		@apply bg-secondaryBackground text-secondaryText grid content-center;

		grid-area: winner-winner-chicken-dinner;
	}

	h2 > span {
		@apply font-semibold;
	}
</style>
