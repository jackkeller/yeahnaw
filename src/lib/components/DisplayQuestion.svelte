<script>
	import { Question } from '@app/store.js'
	export let displayQuestion

	Question.subscribe((whatnow) => {
		displayQuestion = whatnow
	})

	displayQuestion === null ? (displayQuestion = 'Yeah Naw') : (displayQuestion = displayQuestion)
</script>

<h1 class="text-4xl md:text-6xl font-semibold mb-8 mx-auto px-8 leading-normal md:px-16">
	{displayQuestion}
</h1>
