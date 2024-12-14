<p>
	Wiring your home for all of your low-voltage needs!
</p>

{#snippet listItem(content)}
	{#each content as item}
		<div class="p-2 rounded-md bg-gray-300 dark:bg-slate-600">
			{item}
		</div>
	{/each}
{/snippet}

<div class="mb-6">
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

<p>
	We service <strong>Salt Lake</strong>, <strong>Utah</strong>, <strong>Summit</strong>,
	and <strong>Wasatch</strong> counties.
</p>

<style></style>