<script>
	import { onMount } from 'svelte';
	export let count = 60;
	let i = count;

	const countdownTimer = () => {
		count = i;
		i--;
		i < 0 ? (count = 'done') : setTimeout(countdownTimer, 1000);
	};

	onMount(countdownTimer);
</script>

<div class={`counter${count === 'done' ? ' done' : ''}`}>{count}</div>

<!-- <button class="mx-auto mt-6 block" on:click={countdownTimer}>Start Countdown</button> -->
<style>
	.counter {
		@apply text-center text-4xl mx-auto bg-white text-celtic w-20 h-20 rounded-md shadow-lg transition-all duration-100 ease-in-out transform;

		line-height: 2.2;
	}
	.done {
		@apply w-32 uppercase;
	}
</style>
