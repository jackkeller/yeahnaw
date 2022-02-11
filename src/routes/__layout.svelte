<script>
  import { getLocalStorage } from '@lib/utilities'
  import { Question, Yeah, Naw } from '@app/store.js'
	import '../styles/app.postcss'
  export let key
  export let displayQuestion

  $: displayQuestion = getLocalStorage('question')
</script>

<svelte:head>
  <title>Yeah Naw</title>
</svelte:head>

<header>
	<div class="container">
		<h1 class="text-3xl font-semibold">{displayQuestion}</h1>
	</div>
</header>

<main>
	<div class="container">
    <slot />
	</div>
</main>

<footer>
	<div class="container">Yeah: {$Yeah} and Naw: {$Naw}</div>
</footer>
