<p>
	Wiring your home for all of your low-voltage needs!
</p>

<img alt="TV Mount" class="mx-auto rounded-lg shadow-lg max-h-64" src="/tv-mount.webp" />

{#snippet listItem(content)}
	{#each content as item}
		<li class="p-2 rounded-md bg-gray-300 dark:bg-slate-600">
			{item}
		</li>
	{/each}
{/snippet}

<div class="my-6">
	Whether you are building a new home or remodeling an existing one,
	we can help you with all of your low-voltage needs.
	<br>We can help you with:
	<ul class="mt-2 mx-auto flex flex-wrap gap-3 justify-center w-11/12 sm:w-2/3">
		{@render listItem(
			["Home Theater", "Control4 Automation", "Whole House Audio", "Security Systems",
				"Structured Wiring", "Networking", "Intercom", "TV Mounting", "Stereo Systems",
				"Alarms", "Video Distribution", "Projectors", "Speakers", "HDTV Antennas",
				"Universal Remotes", "Amplifiers"]
		)}
	</ul>
</div>

<div>
	We service <strong>Salt Lake</strong>, <strong>Utah</strong>, <strong>Summit</strong>,
	and <strong>Wasatch</strong> counties.
</div>

<style></style>