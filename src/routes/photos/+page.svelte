<script lang="ts">
	import Badge from '$lib/Badge.svelte';

	let photos = [
		{
			title:  'Home Theater',
			href:   '/photos/home-theater',
			image: '/home-theater.jpeg'
		},
		{
			title:  'Flat Screen TVs',
			href:   '/photos/flat-screen-tvs',
			image: '/tv-mount.webp'
		},
		{
			title:  'Commercial',
			href:   '/photos/commercial',
			image: '/commercial.jpeg'
		},
		{
			title:  'New Construction',
			href:   '/photos/new-construction',
			image: '/new-construction.jpeg'
		}
	];
</script>

<h1 class="text-3xl font-bold text-center my-4">Photos</h1>

<div class="mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4" id="photos">
	{#each photos as photo}
		<div>
			<Badge link={photo.href}>
				<div class="text-xl font-bold mb-4">{photo.title}</div>
				<img alt={photo.title} class="mx-auto rounded-lg shadow-lg max-h-64" src={photo.image} />
			</Badge>
		</div>
	{/each}
</div>