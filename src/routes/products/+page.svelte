<script lang="ts">
	import Meta from '$lib/Meta.svelte';
</script>

<Meta
	description="Audio Video Integrators supports and installs all major brands including Sony, LG, Samsung, and more.
	 We have been in the business for over 20 years and have worked with almost all major brands."
	title="Products"
/>

<h1 class="my-4 text-center text-3xl font-bold">Products</h1>

{#snippet listItem(content)}
	{#each content as item}
		<li class="rounded-md bg-gray-300 p-2 dark:bg-slate-600">
			{item}
		</li>
	{/each}
{/snippet}

<div class="mb-6">
	We service and install <u>any</u> major brand including:
	<ul class="mx-auto mt-2 flex w-11/12 flex-wrap justify-center gap-3 sm:w-2/3">
		{@render listItem([
			'Sony',
			'LG',
			'Samsung',
			'Panasonic',
			'Bose',
			'Control 4',
			'Yamaha',
			'Denon',
			'Sonos',
			'Polk Audio',
			'Marantz',
			'Atlantic Tech',
			'Jamo',
			'Crown',
			'Da-Lite',
			'Epson',
			'Sound Tube',
			'Onkyo',
			'Boston Acoustic',
			'Harmon Kardon',
			'Sharp',
			'JBL',
			'MTX',
			'Monster',
			'Pioneer',
			'Definitive Technology',
			'Logitech',
			'Velodyne',
			'Legrand',
			'Nest',
			'Ecobee',
			'Ring'
		])}
	</ul>
</div>

<p>
	See our <a href="/photos">Photos</a> for pictures of our installations including Home Theaters, TV
	Mounts, Security Systems, and more.
</p>

<style></style>
