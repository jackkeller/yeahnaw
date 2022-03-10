<script>
	export let count
</script>

<div class={`counter${count === 'done' ? ' done' : ''}`} class:intensify={count <= 40}>
	<span class:extraintense={count <= 20}>{count === 'done' ? 0 : count}</span>
</div>

<style>
	.counter {
		@apply text-center text-6xl md:text-9xl font-normal mx-auto text-textcolor h-16 md:h-28 pt-3 md:pt-6;
	}

	.done {
		@apply w-32 uppercase;
	}
</style>
