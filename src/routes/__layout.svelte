<script>
	import '../styles/app.postcss';
</script>

<svelte:head>
  <title>Yeah Naw</title>
</svelte:head>

<header>
	<div class="container">
		<h1>Do you want free pizza on Fridays?</h1>
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
