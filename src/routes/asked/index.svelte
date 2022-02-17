<script>
	import Counter from '@components/Counter.svelte'
  import Thumbs from '@components/Thumbs.svelte'
	import { Question, Yeah, Naw } from '@app/store.js'

	export let TotalCount = 0,
		yeah,
		naw

	Yeah.subscribe((y) => {
		yeah = y
	})

	Naw.subscribe((n) => {
		naw = n
	})

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

<Counter />

<Thumbs yeah={yeah} naw={naw} />
