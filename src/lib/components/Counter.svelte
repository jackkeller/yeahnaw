<script>
	export let count
</script>

<div class={`counter${count === 'done' ? ' done' : ''}`}>{count === 'done' ? 0 : count}</div>

<style>
	.counter {
		@apply text-center text-4xl mx-auto text-white w-20 h-20 transition-all duration-100 ease-in-out transform;

		line-height: 2.2;
	}
	.done {
		@apply w-32 uppercase;
	}
</style>
