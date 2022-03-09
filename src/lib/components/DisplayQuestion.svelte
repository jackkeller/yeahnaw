<script>
	import { getLocalStorage } from '@lib/utilities.js'
	import { Question } from '@app/store.js'
	export let displayQuestion

	Question.subscribe((whatnow) => {
		displayQuestion = whatnow
	})

	displayQuestion = getLocalStorage('question')

	displayQuestion === null ? (displayQuestion = 'Yeah Naw') : (displayQuestion = displayQuestion)
</script>

<h1 class="text-4xl md:text-6xl font-light mb-8 mx-auto px-8 md:px-16 text-center">
	{displayQuestion}
</h1>
