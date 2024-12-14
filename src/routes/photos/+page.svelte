<script lang="ts">
	import Badge from '$lib/Badge.svelte';

	let photos = [
		{
			title: 'Home Theater',
			href: '/photos/home-theater',
			image: '/home-theater.jpeg'
		},
		{
			title: 'Flat Screen TVs',
			href: '/photos/flat-screen-tvs',
			image: '/tv-mount.webp'
		},
		{
			title: 'Commercial',
			href: '/photos/commercial',
			image: '/commercial.jpeg'
		},
		{
			title: 'New Construction',
			href: '/photos/new-construction',
			image: '/new-construction.jpeg'
		}
	];
</script>

<h1 class="my-4 text-center text-3xl font-bold">Photos</h1>

<div class="mx-auto grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2" id="photos">
	{#each photos as photo}
		<div>
			<Badge link={photo.href}>
				<div class="mb-4 text-xl font-bold">{photo.title}</div>
				<img alt={photo.title} class="mx-auto max-h-64 rounded-lg shadow-lg" src={photo.image} />
			</Badge>
		</div>
	{/each}
</div>
