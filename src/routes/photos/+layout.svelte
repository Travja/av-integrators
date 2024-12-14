<script>
	import Meta from '$lib/Meta.svelte';

	let { children } = $props();
</script>

<Meta
	description="Browse images of our installations including Home Theaters, TV Mounts, Security Systems, and more."
	title="Photos" />

{@render children()}