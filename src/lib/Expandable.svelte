<script lang="ts">
	import { browser } from '$app/environment';
	import { slide }   from 'svelte/transition';

	const { header = $bindable(), children } = $props();

	let open = $state(false);
</script>

<div class="text-xl font-bold mb-2"
		 class:open={open}
		 onclick={() => open = !open}
		 onkeydown={(e) => e.key === 'Enter' && (open = !open)}
		 role="button"
		 tabindex="0"
>
	<h3 class="flex justify-center items-center gap-1">
		<span class="material-symbols-rounded arrow">arrow_right</span>
		{header}
	</h3>
</div>

{#if open || !browser}
	<div class="content pb-4" transition:slide={{duration: 300}}>
		{@render children()}
	</div>
{/if}

<style>
    .arrow {
        transition: transform 0.3s ease;
    }

    .open .arrow {
        transform: rotate(90deg);
    }
</style>