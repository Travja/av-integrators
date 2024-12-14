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

<svelte:window onkeydown={e => e.key === 'Escape' && onclose()} />

<div class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" id="lightbox">
	<div class="lightbox__content flex flex-col m-4 gap-2" use:clickOutside={onclose}>
		{#if photos.length > 0}
			<div class="lightbox__image relative flex-1">
				<img src={photos[index].image} alt={photos[index].title} class="shadow-lg max-h-[80dvh]" />
				<div class="lightbox__controls text-3xl absolute inset-0 flex justify-between items-center w-full p-4">
					<button class="lightbox__control rounded-full flex justify-center items-center h-10 w-10"
									onclick={prev}
									onkeydown={e => e.key === 'ArrowLeft' && prev()}
									aria-label="Previous Image">
						<span class="material-symbols-rounded text-4xl">chevron_left</span>
					</button>
					<button class="lightbox__control rounded-full flex justify-center items-center h-10 w-10"
									onclick={next}
									onkeydown={e => e.key === 'ArrowRight' && next()}
									aria-label="Next Image">
						<span class="material-symbols-rounded text-4xl">chevron_right</span>
					</button>
				</div>
			</div>
			<div class="lightbox__caption text-white font-bold flex-shrink-0">{photos[index].caption}</div>
		{/if}
	</div>
	<button aria-label="Close Lightbox" class="lightbox__close absolute top-0 right-0 p-4"
					onclick={onclose}>
		<span class="material-symbols-rounded">close</span>
	</button>
</div>

<style>
    .lightbox__control {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }
</style>
