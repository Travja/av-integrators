<script>
	import { page } from '$app/stores';
	import Meta from '$lib/Meta.svelte';
</script>

<Meta description="We've encountered an error" title="Error" />

<h1>{$page.status}</h1>
<p>{$page.error?.message || ''}</p>
