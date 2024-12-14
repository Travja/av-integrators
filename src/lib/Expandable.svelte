<script lang="ts">
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const { header = $bindable(), children } = $props();

	let open = $state(true);

	onMount(() => {
		if (browser) open = false;
	});
</script>

<div
	class="mb-2 text-xl font-bold"
	class:open
	onclick={() => (open = !open)}
	onkeydown={(e) => e.key === 'Enter' && (open = !open)}
	role="button"
	tabindex="0"
>
	<h3 class="flex items-center justify-center gap-1">
		<span class="material-symbols-rounded arrow">arrow_right</span>
		{header}
	</h3>
</div>

<div class="content mb-3" class:open transition:slide={{ duration: 300 }}>
	{@render children()}
</div>

<style>
	.arrow {
		transition: transform 0.3s ease;
	}

	.content {
		height: 0;
		overflow: hidden;
		transition: height 0.3s ease;
	}

	.open {
		height: auto;
	}

	.open .arrow {
		transform: rotate(90deg);
	}
</style>
