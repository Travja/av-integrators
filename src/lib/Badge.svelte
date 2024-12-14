<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon?: string;
		link?: string;
		children: Snippet;
		onclick?: () => void;
		onkeydown?: (e: KeyboardEvent) => void;
	}

	let { icon = $bindable(), link = $bindable(), children, onclick, onkeydown }: Props = $props();
</script>

{#snippet content()}
	{#if icon}
		<div class="badge__icon material-symbols-rounded mb-2 text-black dark:text-white">
			{icon}
		</div>
	{/if}
	<div class="badge__text text-center">
		{@render children()}
	</div>
{/snippet}

{#if link}
	<a
		class="badge inline-flex flex-col
						items-center justify-center
						bg-gray-300 p-4 dark:bg-slate-600"
		href={link}
	>
		{@render content()}
	</a>
{:else}
	<div
		class="badge inline-flex flex-col
						items-center justify-center
						bg-gray-300 p-4 dark:bg-slate-600"
		tabindex="0"
		role="button"
		{onclick}
		{onkeydown}
	>
		{@render content()}
	</div>
{/if}

<style>
	.badge {
		align-items: center;
		border-radius: 1rem;
	}
</style>
