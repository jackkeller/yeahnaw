<script>
	import { setLocalStorage } from '@lib/utilities.js'
	import { goto } from '$app/navigation'
	import { Question } from '@app/store.js'
	import DisplayQuestion from '@components/DisplayQuestion.svelte'

	const randomQuestions = [
		'Do you want free pizza on Fridays?',
		'Do you know the muffin man?',
		'Is the Toxic Crusader a good movie?'
	]

	export let placeholder = randomQuestions[Math.floor(Math.random() * randomQuestions.length)]
	export let question = ''

	const submitQuestion = () => {
		if (question.length === 0) {
			question = placeholder
		}
		setLocalStorage('question', question)
		goto('/asked')
	}
</script>

<svelte:head>
	<title>Yeah Naw</title>
</svelte:head>

<div class="container pt-10">
	<DisplayQuestion />
	<h2 class="text-2xl font-light mb-4 px-8 md:px-16">What do you want to ask?</h2>
	<form on:submit|preventDefault={submitQuestion} class="px-8 md:px-16">
		<label for="question-input" class="block pb-2 text-sm italic">Yes or No questions please.</label
		>
		<div class="flex">
			<input
				id="question-input"
				type="text"
				name="question"
				{placeholder}
				bind:value={question}
				class="text-celtic p-2 flex-1 rounded-sm"
				autocomplete="off"
			/>
			<button type="submit" class="bg-secondaryBackground p-2 text-celtic rounded-sm ml-4"
				>Ask</button
			>
		</div>
	</form>
</div>
