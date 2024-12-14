<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title?: string;
		description?: string;
	}

	let { title = $bindable(), description = $bindable() }: Props = $props();

	const decorate = (str?: string) => {
		if (!str) return 'Audio Video Integrators';

		return str + ' | Audio Video Integrators';
	};
</script>

<svelte:head>
	<title>{$page.url.pathname !== '/' ? decorate(title) : title || 'Audio Video Integrators'}</title>
	<meta content={description} name="description" />
	<meta content="index, follow" name="robots" />
	<link href={$page.url.toString()} rel="canonical" />
</svelte:head>
