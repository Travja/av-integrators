<script lang="ts">
	import Expandable from '$lib/Expandable.svelte';
	import Badge from '$lib/Badge.svelte';
	import Meta from '$lib/Meta.svelte';

	const services: {
		title: string;
		content: string;
		images?: string[];
		callBadge?: boolean;
		badgeText?: string;
	}[] = [
		{
			title: 'Consultation & Design',
			content: `<p>Whether you are starting from scratch or you want to expand and upgrade your existing equipment,
									we will design a great system to fit your structure and budget.</p>`,
			callBadge: true,
			badgeText: 'Call today to schedule a consultation'
		},
		{
			title: 'Equipment Installation',
			content: `
				<p>We offer customized, professional installation of all Audio/Video and smart home components.
				<br>No job is too big or too small.</p>
			`,
			images: ['/tv-mount.webp']
		},
		{
			title: 'Retro-fit Wiring',
			content: `
				<p>We specialize in installing wires invisibly in completed homes and businesses without compromising aesthetics or sound quality.</p>
				<p>With our specialty tools and experienced installers, your system can be optimized even if there is no existing wiring.</p>
			`,
			images: ['/retro-fit.webp', '/tv-mount.webp']
		},
		{
			title: 'New Construction Wiring',
			content: `
				<p>For all your low-voltage needs including Phone, Network, Cable, Satellite, Distributed Audio,
				 Home Theater, Intercom, Surveillance, Alarm and more.</p>
			`
		},
		{
			title: 'Commercial Audio & Video',
			content: `
				<p>Conference Rooms, Automation, TVs, Surveillance, Background Music, Satellite TV.</p>
			`
		},
		{
			title: 'Automation/Universal Remote',
			content: `
				<p>Integrate your lighting, thermostat, security and TV with a sophisticated Universal Remote from
				Logitech or full Control4 Automation System that will combine the functions into one remote, touchscreen or mobile app.</p>
				<p>The remote control programming is custom tailored to your equipment and your needs. The process
				usually takes a few hours and is followed by detailed personal instruction.</p>
			`
		},
		{
			title: 'Personalized Instruction',
			content: `
				<p>We will teach you how to easily use your equipment to make the most of all the features available.</p>
				<p>Call us today to find out how we can make your system easier to use as well as improve the quality of your audio and video experience.</p>
			`,
			callBadge: true
		}
	];
</script>

<Meta
	description="Audio Video Integrators offers a variety of services from Home Automation to TV Mounting."
	title="Services"
/>

<h1 class="my-4 text-center text-3xl font-bold">Services</h1>

<div class="mx-auto" id="services">
	{#each services as service}
		<div class="mt-2">
			<Expandable header={service.title}>
				{@html service.content}

				{#if service.images}
					<div class="flex flex-wrap justify-center gap-4">
						{#each service.images as image}
							<img alt={service.title} class="max-h-64 rounded-lg shadow-lg" src={image} />
						{/each}
					</div>
				{/if}

				{#if service.callBadge}
					<div>
						<Badge icon="phone" link="tel:+18017550877">
							{#if service.badgeText}
								<div class="font-bold text-black dark:text-white">{service.badgeText}</div>
							{/if}
							<div>(801) 755-0877</div>
						</Badge>
					</div>
				{/if}
			</Expandable>
		</div>
	{/each}
</div>

{#snippet listItem(content)}
	{#each content as item}
		<li class="rounded-md bg-gray-300 p-2 dark:bg-slate-600">
			{item}
		</li>
	{/each}
{/snippet}

<h2 class="my-4 text-center text-2xl font-bold">Systems</h2>
<ul class="mx-auto mt-2 flex w-11/12 flex-wrap justify-center gap-3 sm:w-2/3">
	{@render listItem([
		'Surround Sound Systems',
		'Home Automation',
		'Flat Screen TVs',
		'Home Theater Systems',
		'Network/Phone/Data',
		'Distributed Audio Systems',
		'Dish + DirecTV',
		'Alarm/Surveillance',
		'Intercom Systems'
	])}
</ul>

<style></style>
