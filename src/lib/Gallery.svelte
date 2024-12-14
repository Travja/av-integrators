<script lang="ts">
	import LightBox from '$lib/LightBox.svelte';

	interface Props {
		index?: number;
		title: string;
		photos: { title: string, caption: string, image: string }[];
	}
	let { index = $bindable(-1), title, photos }: Props = $props();
</script>

<h1 class="text-3xl font-bold text-center my-4">{title}</h1>

<div class="mx-auto flex flex-wrap justify-center gap-4" id="photos">
	{#each photos as photo, i}
		<div class="image hover:cursor-pointer hover:z-10"
				 tabindex="0"
				 role="button"
				 onclick={() => index = i}
				 onkeydown={(e) => e.key === 'Enter' && (index = i)}
		>
			<img alt={photo.title} class="mx-auto rounded-lg shadow-lg max-h-64" src={photo.image} />
		</div>
	{/each}
</div>

{#if index !== -1}
	<LightBox {photos} {index} onclose={() => index = -1} />
{/if}

<style>
    #photos {
        position: relative;
    }

    img {
        transform: perspective(1000px);
        transform-style: preserve-3d;

        transition: transform 0.5s ease;
    }

    .image:hover img {
        transform: perspective(1000px) scale(1.08) rotate3d(0.1, 1, 0, 8deg);
    }
</style>