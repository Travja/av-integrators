<script lang="ts">
	import { page }            from '$app/stores';
	import { PUBLIC_BASE_URL } from '$env/static/public';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
	}

	let { title = $bindable(), description = $bindable(), image = $bindable() }: Props = $props();

	const decorate = (str?: string) => {
		if (!str) return 'Audio Video Integrators';

		return str + ' | Audio Video Integrators';
	};
</script>

<svelte:head>
	<title>{$page.url.pathname !== '/' ? decorate(title) : title || 'Audio Video Integrators'}</title>
	<meta content={description} name="description" />
	<meta content="index, follow" name="robots" />
	<link href={PUBLIC_BASE_URL} rel="canonical" />

	<!-- Social media tags -->
	<meta content="website" property="og:type" />
	<meta content="en_US" property="og:locale" />
	<meta content="Audio Video Integrators" property="og:site_name" />
	<meta content={$page.url.pathname !== '/' ? decorate(title) : title || 'Audio Video Integrators'}
				property="og:title" />
	<meta content={$page.url.toString()} property="og:url" />
	<meta content={description} property="og:description" />
	<meta content="{image ? image : PUBLIC_BASE_URL + '/logo.png'}" property="og:image" />
	<meta content="{image ? image : PUBLIC_BASE_URL + '/logo.png'}" property="twitter:image" />
	<meta content="summary_large_image" name="twitter:card" />
</svelte:head>
