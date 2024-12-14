<script lang="ts">
	let { children } = $props();
</script>

<div class="back-button text-left">
	<a aria-label="Back to Photos" class="back-button__link inline-flex items-center gap-1" href="/photos" title="Back to Photos">
		<span class="material-symbols-rounded">arrow_back</span>
		<span class="back-button__text">Back</span>
	</a>
</div>

{#if children}
	{@render children()}
{/if}