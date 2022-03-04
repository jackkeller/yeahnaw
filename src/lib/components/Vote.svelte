<script>
	import Assets from '@components/Assets.svelte'
	import { Yeah, Naw } from '@app/store.js'

  export let yeah, naw

  Yeah.subscribe((y) => (yeah = y))
	Naw.subscribe((n) => (naw = n))

  const vote = v => {
    if (v === 'y') {
      Yeah.update((n) => n + 1)
    } else {
      Naw.update((n) => n + 1)
    }
  }
</script>

<div class="flex justify-center">
	<button class="button-yeah border-patina" on:click={() => vote('y')}>
		<Assets name="vote-up" />
	</button>
	<button class="button-naw border-burningsand" on:click={() => vote('n')}>
		<Assets name="vote-down" />
	</button>
</div>

<style lang="postcss">
	button {
		@apply overflow-hidden border-4 bg-transparent rounded-full h-28 w-28 flex items-center mx-2 md:mx-4;

		&.button-yeah {
			@apply justify-start;
		}

		&.button-naw {
			@apply justify-end;
		}
	}
</style>
