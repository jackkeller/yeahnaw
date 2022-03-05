<script>
	import { setLocalStorage } from '@lib/utilities.js'
	import { Question } from '@app/store.js'
	import DisplayQuestion from '@components/DisplayQuestion.svelte'

	const randomQuestions = [
		'Do you want free pizza on Fridays?',
		'Do these jeans make my butt look big?',
		'Would Kate beat Chike in a zero gravity fight?',
		'Do you know the muffin man?'
	]

	export let placeholder = randomQuestions[Math.floor(Math.random() * randomQuestions.length)]
	export let question = ''

	const submitQuestion = () => {
		if (question.length === 0) {
			question = placeholder
		}
		setLocalStorage('question', question)
		location.href = '/asked'
	}
</script>

<div class="container pt-10">
	<DisplayQuestion />
	<h2 class="text-2xl font-bold mb-4 px-8 md:px-16">What do you want to ask?</h2>
	<form on:submit|preventDefault={submitQuestion} class="px-8 md:px-16">
		<div class="flex">
			<input
				type="text"
				name="question"
				{placeholder}
				bind:value={question}
				class="text-celtic p-2 flex-1 rounded-sm"
			/>
			<button type="submit" class="bg-peach p-2 text-celtic rounded-sm ml-4">Ask</button>
		</div>
	</form>
</div>
