<script>
	import { Yeah, Naw } from '@app/store.js'
	import Svg from '@components/Svg.svelte'
	export let yeahPercent,
		nawPercent,
		up,
		down,
		total = 50

	Yeah.subscribe((y) => {
		yeahPercent = y
	})

	Naw.subscribe((n) => {
		nawPercent = n
	})

	$: up = ((100 * yeahPercent) / total).toFixed(0)
	$: down = ((100 * nawPercent) / total).toFixed(0)
</script>

<div class="thumbs">
	<div class="thumb up" style="left: {up}%">
		<div class="entry" />
		<Svg asset="arm-up" />
	</div>
	<div class="thumb down" style="right: {down}%">
		<div class="entry" />
		<Svg asset="arm-down" />
	</div>
</div>

<style lang="postcss">
	.thumbs {
		@apply box-border mx-2 overflow-x-hidden relative h-52 flex items-center;

		&:before {
			@apply absolute bg-peach w-2 block h-full container z-10;
			content: '';
			border-radius: 0 50% 50% 0;
			box-shadow: 0.25rem 0 1rem 0.05rem rgb(0 0 0 / 50%);
		}

		&:after {
			@apply absolute bg-peach w-2 block h-full z-10;
			content: '';
			border-radius: 50% 0 0 50%;
			right: 0;
			box-shadow: -0.25rem 0 1rem 0.05rem rgb(0 0 0 / 50%);
		}

		.thumb {
			@apply absolute;

			transition: all 300ms ease-in-out;

			&.up {
				transform: translateX(-100%);

				svg {
					transform: scale(var(--thumb-scale)) translateX(var(--thumb-translate-yes));
				}
			}

			&.down {
				transform: translateX(100%);

				svg {
					transform: scale(var(--thumb-scale)) translateX(var(--thumb-translate-no));
				}
			}
		}
	}
</style>
