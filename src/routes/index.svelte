<script>
  export let placeholder = 'What is the meaning of life?'
  export let question = ''

  const submitQuestion = () => {
    window.localStorage.setItem('question', question)
    window.location.href = '/asked'
  }

</script>

<h1 class="text-2xl font-bold mb-4">What do you want to ask?</h1>

<input type="text" name="question" placeholder={placeholder} bind:value={question} class="text-celtic p-2 rounded-sm">
<button class="bg-peach p-2 text-celtic rounded-sm" on:click={submitQuestion}>Ask</button>
