<script>
	import Meta from '$lib/Meta.svelte';

	let { children } = $props();
</script>

<Meta
	description="Browse images of our installations including Home Theaters, TV Mounts, Security Systems, and more. Browse the gallery to see some of our work, then call to schedule a free consultation."
	title="Photos"
/>

{@render children()}
