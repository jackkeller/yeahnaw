<script>
	import { setLocalStorage } from '@lib/utilities.js';
	import { Question } from '@app/store.js';
	export let placeholder = 'What is the meaning of life?';
	export let question = '';

	const submitQuestion = () => {
		setLocalStorage('question', question);
		location.href = '/asked';
	};
</script>

<h1 class="text-2xl font-bold mb-4">What do you want to ask?</h1>

<div class="flex">
	<input
		type="text"
		name="question"
		{placeholder}
		bind:value={question}
		class="text-celtic p-2 flex-1 rounded-sm"
	/>
	<button class="bg-peach p-2 text-celtic rounded-sm ml-4" on:click={submitQuestion}>Ask</button>
</div>
