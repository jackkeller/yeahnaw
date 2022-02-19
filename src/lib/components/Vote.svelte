<script>
	import Svg from '@components/Svg.svelte';
</script>

<div class="flex justify-center">
  <button class="button-yeah border-patina">
    <Svg asset="vote-up" />
  </button>
  <button class="button-naw border-burningsand">
    <Svg asset="vote-down" />
  </button>
</div>

<style lang="postcss">
  button {
    @apply overflow-hidden border-4 bg-transparent rounded-full h-28 w-28;

    &.button-yeah {
      * {
        @apply translate-x-4;
      }
    }
  }
</style>