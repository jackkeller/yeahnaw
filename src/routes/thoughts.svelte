<script>
	// Hoy hoy!
	const tooling = [
		{
			words: 'Designed in',
			link: {
				name: 'Figma',
				href: 'https://www.figma.com/',
				target: 'figsandsuch',
				title: 'Figma'
			}
		},
		{
			words: 'Developed with',
			link: {
				name: 'SvelteKit',
				href: 'https://kit.svelte.dev/',
				target: 'svelte-is-awesome',
				title: 'SvelteKit is AWeSomE!!!'
			}
		},
		{
			words: 'Styled by',
			link: {
				name: 'TailwindCSS',
				href: 'https://tailwindcss.com/',
				target: 'I really did not want to like TailwindCSS but I do.',
				title: 'TailwindCSS'
			}
		},
		{
			words: 'Code available on',
			link: {
				name: 'Github',
				href: 'https://github.com/jackkeller/yeahnaw',
				target: 'octocat',
				title: 'My Gits Hubs'
			}
		},
		{
			words: 'Served by',
			link: {
				name: 'Netlify',
				href: 'https://netlify.com/',
				target: 'netlify-is-awesome',
				title:
					'You can use anything, I used Netlify but considered Vercel as Rich Harris the creator of Svelekit works there now'
			}
		}
	]

	const approach = [
		'We wanted to do things in a fun way, initial thoughts were of JibJab style but we ran out of time.',
		'We thought about the the possibility of a tie needing a sudden death style playout but again, we ran out of time.'
	]
</script>

<svelte:head>
	<title>Thoughts thought, and choices made for Yeah Naw</title>
</svelte:head>

<div class="container mx-auto px-8 md:px-16 pt-12">
	<h1 class="text-4xl md:text-6xl font-semibold mb-8 leading-normal">Yeah Naw</h1>

	<blockquote class="border-l-4 border-secondary pl-4 mb-8">
		Decisions were made, actions were taken, results happened.
	</blockquote>

	<h2>Tooling and Tech</h2>
	<ul>
		{#each tooling as tool}
			<li>
				{tool.words}
				<a href={tool.link.href} target={tool.link.target} title={tool.link.title}
					>{tool.link.name}</a
				>
			</li>
		{/each}
	</ul>

	<h2>Our Approach</h2>
	<ul>
		{#each approach as item}
			<li>{item}</li>
		{/each}
	</ul>

	Back to the<a href="/asked/answered">Results</a>
</div>

<style>
	h2 {
		@apply text-2xl md:text-4xl font-light mb-4;
	}
	ul {
		@apply list-disc ml-8 mb-12;
	}

	a {
		@apply text-secondary underline hover:text-patina transition-colors duration-300 ease-in-out;
	}
</style>
