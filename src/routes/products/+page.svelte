<script lang="ts">
</script>

<h1 class="text-3xl font-bold text-center my-4">Products</h1>

{#snippet listItem(content)}
	{#each content as item}
		<li class="p-2 rounded-md bg-gray-300 dark:bg-slate-600">
			{item}
		</li>
	{/each}
{/snippet}

<div class="mb-6">
	We service and install <u>any</u> major brand including:
	<ul class="mt-2 mx-auto flex flex-wrap gap-3 justify-center w-11/12 sm:w-2/3">
		{@render listItem(
			[
				"Sony", "LG", "Samsung", "Panasonic", "Bose", "Control 4", "Yamaha", "Denon",
				"Sonos", "Polk Audio", "Marantz", "Atlantic Tech", "Jamo", "Crown", "Da-Lite",
				"Epson", "Sound Tube", "Onkyo", "Boston Acoustic", "Harmon Kardon", "Sharp",
				"JBL", "MTX", "Monster", "Pioneer", "Definitive Technology", "Logitech", "Velodyne",
				"Legrand", "Nest", "Ecobee", "Ring"
			]
		)}
	</ul>
</div>

<p>See our <a href="/photos">Photos</a> for pictures of our installations including Home Theaters, TV Mounts, Security Systems, and more.</p>

<style></style>