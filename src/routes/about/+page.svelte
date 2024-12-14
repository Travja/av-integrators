<script lang="ts">
	import Badge from '$lib/Badge.svelte';
	import Meta from '$lib/Meta.svelte';
</script>

<Meta
	description="Audio Video Integrators has been in business for over 20 years thanks to our skilled
	 technicians, guaranteed work, and excellent customer satisfaction. See what makes us special!"
	title="Why Us"
/>

<h1 class="my-4 text-center text-3xl font-bold">Why Us?</h1>

<div class="mx-auto" id="why-us">
	<img
		alt="Owner Operated"
		class="mx-auto mb-4 h-48 rounded-full border-4 shadow-lg"
		src="/person.webp"
	/>
	<p class="text-center">
		Audio Video Integrators has been in business for over 20 years thanks to our skilled
		technicians, guaranteed work, and excellent customer satisfaction.
	</p>
	<p class="text-center">
		Audio Video Integrators is owner-operated to keep quality high and costs low. We don't spend
		money on a showroom or expensive advertising. We special order most equipment to be sure that
		you get what you need, not just what is on sale.
	</p>
	<p class="text-center">
		With competitive prices, quick scheduling and quality service, we are committed to providing you
		with the best products at the best prices.
	</p>
	<p class="text-center">
		Every project is custom tailored to your budget, structure and needs. From concept to
		completion, we will work with you every step of the way.
	</p>
</div>

<div class="badges clear-both mt-4 flex flex-wrap justify-center gap-4">
	<Badge icon="phone" link="tel:+18017550877">
		<div class="font-bold text-black dark:text-white">Call today to schedule a consultation</div>
		<div>(801) 755-0877</div>
	</Badge>
</div>

<style>
	#why-us {
		text-wrap: balance;
		width: min(700px, 90%);
	}
</style>
