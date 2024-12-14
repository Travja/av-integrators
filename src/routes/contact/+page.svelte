<script lang="ts">
	import Badge from '$lib/Badge.svelte';

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};
</script>

<h1 class="text-3xl font-bold text-center my-4">Contact Us</h1>

<p class="text-center">
	We look forward to doing business with you.
	If you have any questions, we would be happy to help.
	Please feel free to contact us by phone, email, or mail.
</p>
<div class="badges flex flex-wrap gap-4 justify-center mt-4">
	<Badge icon="phone" link="tel:+18017550877">
		<div class="font-bold text-black dark:text-white">Phone</div>
		<div>(801) 755-0877</div>
	</Badge>
	<Badge icon="email" link="mailto:sales@audiovideointegrators.com">
		<div class="font-bold text-black dark:text-white">Email</div>
		<div>sales@audiovideointegrators.com</div>
	</Badge>
	<Badge icon="local_post_office"
				 onclick={() => copyToClipboard('Audio Video Integrators\n1294 South Parkside Drive\nSaratoga Springs, UT 84045')}
				 onkeydown={(e) => e.key === 'Enter' && copyToClipboard('Audio Video Integrators\n1294 South Parkside Drive\nSaratoga Springs, UT 84045')}>
		<div class="font-bold text-black dark:text-white">Mail</div>
		<div
			role="button"
			tabindex="0"
		>
			<div>Audio Video Integrators</div>
			<div>1294 South Parkside Drive</div>
			<div>Saratoga Springs, UT 84045</div>
		</div>
	</Badge>
</div>

<style>
    p {
        text-wrap: balance;
    }
</style>