<script lang="ts">
	import Gallery from '$lib/Gallery.svelte';

	export let photos = [
		{
			title: 'Home Theater',
			caption: 'Home Theater',
			image: '/home-theater.jpeg'
		},
		{
			title: 'Flat Screen TVs',
			caption: 'Flat Screen TVs',
			image: '/tv-mount.webp'
		},
		{
			title: 'Commercial',
			caption: 'Commercial',
			image: '/commercial.jpeg'
		},
		{
			title: 'New Construction',
			caption: 'New Construction',
			image: '/new-construction.jpeg'
		}
	];
</script>

<Gallery {photos} title="Commercial" />

<style></style>
