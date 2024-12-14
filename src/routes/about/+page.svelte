<script lang="ts">
	import Badge from '$lib/Badge.svelte';
</script>

<h1 class="text-3xl font-bold text-center my-4">Why Us?</h1>

<div id="why-us" class="mx-auto">
	<p class="text-center">
		Audio Video Integrators has been in business for over 20 years thanks to our skilled technicians,
		guaranteed work, and excellent customer satisfaction.
	</p>
	<p class="text-center">
		Audio Video Integrators is owner-operated to keep quality high and costs low.
		We don't spend money on a showroom or expensive advertising. We special order
		most equipment to be sure that you get what you need, not just what is on sale.
	</p>
</div>

<div class="badges flex flex-wrap gap-4 justify-center mt-4">
	<Badge icon="phone" link="tel:+18017550877">
		<div class="font-bold text-black dark:text-white">Call today to schedule a consultation</div>
		<div>(801) 755-0877</div>
	</Badge>
</div>

<style>
    #why-us {
        text-wrap: balance;
				width: min(700px, 90%)
    }
</style>