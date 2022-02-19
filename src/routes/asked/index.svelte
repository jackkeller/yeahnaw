<script>
	import Vote from './../../lib/components/Vote.svelte';
	import DisplayQuestion from '@components/DisplayQuestion.svelte'
	import Counter from '@components/Counter.svelte'
	import Thumbs from '@components/Thumbs.svelte'
  import Assets from '@components/Assets.svelte'
	import { Question, Yeah, Naw } from '@app/store.js'

	export let TotalCount = 0,
		yeah,
		naw

	Yeah.subscribe((y) => yeah = y)

	Naw.subscribe((n) => naw = n)

	$: TotalCount = yeah + naw

	const randomQuestion = ['yeah', 'naw']
	const randomVoter = () => {
		const random = randomQuestion[Math.floor(Math.random() * randomQuestion.length)]

		switch (random) {
			case 'yeah':
				Yeah.update((n) => n + 1)
				break
			case 'naw':
				Naw.update((n) => n + 1)
				break
		}
	}

	const voting = () => {
		const min = 250,
			max = 1250
		const random = Math.floor(Math.random() * (max - min + 1)) + min

		if (TotalCount < 50) {
			randomVoter()

			setTimeout(() => {
				setTimeout(voting, random)
			}, random)
		}
	}

	voting()
</script>

<svelte:head>
	<title>Asking {$Question} Yeah Naw</title>
</svelte:head>

<div class="voting">
  <div class="question">
    <DisplayQuestion />
    <Vote />
  </div>
  <div class="divider">
    <Assets name="wave-mobile" />
    <Assets name="wave-desktop" />
  </div>
  <div class="throw-hands">
    <Thumbs {yeah} {naw} />
    <Counter />
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
    @apply bg-peach grid content-center;

    grid-area: throw-hands;
  }
</style>