<script lang="ts">
	import { clickOutside } from '$lib/clickoutside';

	let { photos = $bindable(), index = $bindable(1), onclose } = $props();

	let prev = () => {
		index = (index - 1 + photos.length) % photos.length;
	};

	let next = () => {
		index = (index + 1) % photos.length;
	};
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && onclose()} />

<div
	class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
	id="lightbox"
>
	<div class="lightbox__content m-4 flex flex-col gap-2" use:clickOutside={onclose}>
		{#if photos.length > 0}
			<div class="lightbox__image relative flex-1">
				<img src={photos[index].image} alt={photos[index].title} class="max-h-[80dvh] shadow-lg" />
				<div
					class="lightbox__controls absolute inset-0 flex w-full items-center justify-between p-4 text-3xl"
				>
					<button
						class="lightbox__control flex h-10 w-10 items-center justify-center rounded-full"
						onclick={prev}
						onkeydown={(e) => e.key === 'ArrowLeft' && prev()}
						aria-label="Previous Image"
					>
						<span class="material-symbols-rounded text-4xl">chevron_left</span>
					</button>
					<button
						class="lightbox__control flex h-10 w-10 items-center justify-center rounded-full"
						onclick={next}
						onkeydown={(e) => e.key === 'ArrowRight' && next()}
						aria-label="Next Image"
					>
						<span class="material-symbols-rounded text-4xl">chevron_right</span>
					</button>
				</div>
			</div>
			<div class="lightbox__caption flex-shrink-0 font-bold text-white">
				{photos[index].caption}
			</div>
		{/if}
	</div>
	<button
		aria-label="Close Lightbox"
		class="lightbox__close absolute right-0 top-0 p-4"
		onclick={onclose}
	>
		<span class="material-symbols-rounded">close</span>
	</button>
</div>

<style>
	.lightbox__control {
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
	}
</style>
