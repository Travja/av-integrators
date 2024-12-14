<script>
	import Meta from '$lib/Meta.svelte';
</script>

<Meta
	description="Taking care of your low-voltage needs with quality and professionalism.
	 Audio Video Integrators can tackle networking to security. We do residential and commercial projects."
/>

<h1 class="hidden">Audio Video Integrators Home</h1>

<h2 class="mb-4 text-xl">Wiring your home for all of your low-voltage needs!</h2>

<img alt="TV Mount" class="mx-auto max-h-64 rounded-lg shadow-lg" src="/tv-mount.webp" />

{#snippet listItem(content)}
	{#each content as item}
		<li class="rounded-md bg-gray-300 p-2 dark:bg-slate-600">
			{item}
		</li>
	{/each}
{/snippet}

<div class="my-6">
	Whether you are building a new home or remodeling an existing one, we can help you with all of
	your low-voltage needs.
	<br />We can help you with:
	<ul class="mx-auto mt-2 flex w-11/12 flex-wrap justify-center gap-3 sm:w-2/3">
		{@render listItem([
			'Home Theater',
			'Control4 Automation',
			'Whole House Audio',
			'Security Systems',
			'Structured Wiring',
			'Networking',
			'Intercom',
			'TV Mounting',
			'Stereo Systems',
			'Alarms',
			'Video Distribution',
			'Projectors',
			'Speakers',
			'HDTV Antennas',
			'Universal Remotes',
			'Amplifiers'
		])}
	</ul>
</div>

<div>
	We service <strong>Salt Lake</strong>, <strong>Utah</strong>, <strong>Summit</strong>, and
	<strong>Wasatch</strong> counties.
</div>

<style></style>
