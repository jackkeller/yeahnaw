<script>
	import { Question } from '@app/store.js'
	export let displayQuestion

	Question.subscribe((whatnow) => {
		displayQuestion = whatnow
	})

	displayQuestion === null ? (displayQuestion = 'Yeah Naw') : (displayQuestion = displayQuestion)
</script>

<h1 class="text-3xl font-semibold mb-8 mx-auto">{displayQuestion}</h1>
