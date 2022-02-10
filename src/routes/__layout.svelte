<script>
	import '../styles/app.postcss'
  // export let displayQuestion

  // const getLocalStorage = (item) => {
  //   return localStorage.getItem(item)
  // }

  // const setLocalStorage = (item, value) => {
  //   localStorage.setItem(item, value)
  // }

  // $: displayQuestion = getLocalStorage('question')
</script>

<svelte:head>
  <title>Yeah Naw</title>
</svelte:head>

<header>
	<div class="container">
		<h1></h1>
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
