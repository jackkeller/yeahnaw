<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { getLocalStorage, setLocalStorage } from '@lib/utilities.js'
	import { Question, Yeah, Naw } from '@app/store.js'
	import Vote from '@components/Vote.svelte'
	import DisplayQuestion from '@components/DisplayQuestion.svelte'
	import Counter from '@components/Counter.svelte'
	import Thumbs from '@components/Thumbs.svelte'
	import Assets from '@components/Assets.svelte'

	export let TotalCount = 0,
		question,
		yeah,
		naw

	let count = 60,
		pollComplete = false,
		i = count

	const randomQuestion = ['yeah', 'naw']

	Yeah.subscribe((y) => (yeah = y))
	Naw.subscribe((n) => (naw = n))
	question = getLocalStorage('question')

	const countdownTimer = () => {
		if (!pollComplete) {
			count = i
			i--
			i < 0 ? (count = 'done') : setTimeout(countdownTimer, 1000)
		} else {
			count = 'done'
		}
	}

	const randomVoter = () => {
		if (!pollComplete) {
			const random = randomQuestion[Math.floor(Math.random() * randomQuestion.length)]

			switch (random) {
				case 'yeah':
					Yeah.update((n) => n + 1)
					break
				case 'naw':
					Naw.update((n) => n + 1)
					break
			}
		} else {
			pollsClosed()
		}
	}

	const pollsClosed = () => {
		setLocalStorage('naw', naw)
		setLocalStorage('yeah', yeah)
		clearTimeout(countdownTimer)

		goto('/asked/answered')
	}

	const voting = () => {
		if (!pollComplete) {
			const min = 250,
				max = 750
			const random = Math.floor(Math.random() * (max - min + 1)) + min

			if (TotalCount < 50) {
				randomVoter()

				setTimeout(() => {
					setTimeout(voting, random)
				}, random)
			}
		} else {
			pollsClosed()
		}
	}

	$: TotalCount = yeah + naw
	$: pollComplete = TotalCount === 50 || count === 'done'

	onMount(countdownTimer)
	voting()
</script>

<svelte:head>
	<title>Asking "{question}" on Yeah Naw</title>
</svelte:head>

<div class="voting">
	<div class="question">
		<DisplayQuestion />
		<Vote />
		<Counter {count} />
	</div>
	<div class="divider">
		<Assets name="wave-mobile" />
		<Assets name="wave-desktop" />
	</div>
	<div class="throw-hands">
		<Thumbs />
	</div>
</div>

<style>
	.voting {
		@apply grid h-full relative;

		grid-template-areas: var(--grid-vote-areas);
		grid-template-columns: var(--grid-vote-columns);
		grid-template-rows: var(--grid-vote-rows);
	}

	.question {
		@apply grid content-center;

		grid-area: question;
	}

	.divider {
		@apply absolute overflow-hidden leading-none w-full inset-0;
		grid-area: divider;
	}

	.throw-hands {
		@apply bg-secondary grid content-center;

		grid-area: throw-hands;
	}
</style>
