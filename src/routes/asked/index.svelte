<script>
	import Vote from './../../lib/components/Vote.svelte';
	import DisplayQuestion from '@components/DisplayQuestion.svelte'
	import Counter from '@components/Counter.svelte'
	import Thumbs from '@components/Thumbs.svelte'
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="divider-mobile">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
  </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 1201" preserveAspectRatio="none" class="divider-desktop">
      <path d="M92.026 215.144c-20.83 78.99-61.83 161.88-78.64 241.82-17.34 82.26-16.33 168.06.39 250.45 11.73 57.84 31.07 114 41.86 172a600.21 600.21 0 01-29.09 321.39h92.65V.804h-24.2c23.12 67.81 15.51 144.29-2.97 214.34z" class="shape-fill"></path>
    </svg>
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
    grid-area: question;
  }

  .divider {
    grid-area: divider;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      overflow: hidden;
      inset: 0;

      .shape-fill {
        fill: var(--peach);
      }
    }

    .divider-mobile {
      width: 102%;
      height: 40px;

      @screen md {
        display: none;
      }
    }

    .divider-desktop {
      height: 102%;
      width: 62px;

      @screen md {
        display: block;
      }
    }
  }

  .throw-hands {
    @apply bg-peach;

    grid-area: throw-hands;
  }
</style>