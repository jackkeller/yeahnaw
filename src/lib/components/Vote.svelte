<script>
	import Assets from '@components/Assets.svelte'
</script>

<div class="flex justify-center">
	<button class="button-yeah border-patina">
		<Assets name="vote-up" />
	</button>
	<button class="button-naw border-burningsand">
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
