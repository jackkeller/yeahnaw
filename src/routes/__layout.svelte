<script context="module">
	export const load = async ({ url }) => ({
		props: {
			key: url.path
		}
	});
</script>

<script>
  import { Question } from '@app/store.js'
  import { onDestroy } from 'svelte'
	import '../styles/app.postcss'
</script>

<svelte:head>
  <title>Yeah Naw</title>
</svelte:head>

<header>
	<div class="container">
		<h1 class="text-3xl font-semibold">{$Question}</h1>
	</div>
</header>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<footer>
	<div class="container">I am a footer</div>
</footer>
