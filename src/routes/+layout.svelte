<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();

	const activeClasses =
		'border-transparent border-white border-b-none bg-gray-200 dark:bg-slate-800';
	const inactiveClasses = 'border-transparent border-b-white bg-gray-400 dark:bg-slate-600';

	let expanded = $state(false);
	let smallScreen = $state(false);

	onMount(() => {
		handleResize();
		if (browser) {
			window.addEventListener('resize', handleResize);
		} else {
			// Server-side rendering
			smallScreen = false;
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', handleResize);
		}
	});

	const handleResize = () => {
		smallScreen = window.innerWidth < 640;
	};
</script>

<header class="w-full">
	<a class="inline-block w-full place-self-center sm:w-80" href="/" id="logo" title="Home">
		<img
			alt="Audio Video Integrators Logo"
			class="mx-auto h-auto max-h-28 max-w-full"
			src="/logo.png"
		/>
		<div class="text-center" id="slogan">Entertainment Built Around You</div>
	</a>

	<div class="text-white" id="contact">
		<div class="text-center">Call Us: <a id="phone" href="tel:+18017550877">(801) 755-0877</a></div>
		<div class="text-center">
			Email Us: <a id="email" href="mailto:sales@audiovideointegrators.com"
				>sales@audiovideointegrators.com</a
			>
		</div>
	</div>

	<nav class="place-self-stretch pt-2 sm:place-self-center sm:pt-0">
		{#if smallScreen}
			<button
				class="link w-full border-b border-b-white bg-gray-400 dark:bg-slate-600"
				onclick={() => (expanded = !expanded)}
			>
				{expanded ? 'Close' : 'Menu'}
			</button>
		{/if}

		<div
			class="items flex w-full flex-grow flex-col justify-evenly sm:mx-4 sm:w-auto sm:flex-row sm:gap-1"
			class:open={(smallScreen && expanded) || !smallScreen}
		>
			<a
				class="link border {$page.route.id === '/' ? activeClasses : inactiveClasses}"
				class:active={$page.route.id === '/'}
				class:rounded-t-lg={!smallScreen}
				href="/"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Home">Home</a
			>
			<a
				class="link border {$page.route.id === '/services' ? activeClasses : inactiveClasses}"
				class:active={$page.route.id === '/services'}
				class:rounded-t-lg={!smallScreen}
				href="/services"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Services">Services</a
			>
			<a
				class="link border {$page.route.id === '/products' ? activeClasses : inactiveClasses}"
				class:active={$page.route.id === '/products'}
				class:rounded-t-lg={!smallScreen}
				href="/products"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Products">Products</a
			>
			<a
				class="link border {$page.route.id?.includes('/photos') ? activeClasses : inactiveClasses}"
				class:active={$page.route.id?.includes('/photos')}
				class:rounded-t-lg={!smallScreen}
				href="/photos"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Photos">Photos</a
			>
			<a
				class="link border {$page.route.id === '/about' ? activeClasses : inactiveClasses}"
				class:active={$page.route.id === '/about'}
				class:rounded-t-lg={!smallScreen}
				href="/about"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Why Us">Why Us</a
			>
			<a
				class="link border {$page.route.id === '/contact' ? activeClasses : inactiveClasses}"
				class:active={$page.route.id === '/contact'}
				class:rounded-t-lg={!smallScreen}
				href="/contact"
				onclick={() => (expanded = false)}
				onkeydown={(e) => e.key === 'Enter' && (expanded = false)}
				title="Contact">Contact</a
			>
		</div>
	</nav>
</header>

<main class="mx-auto mb-3 text-center">
	{@render children()}
</main>

<footer class="mb-2 text-center text-xs">
	&copy; {new Date().getFullYear()} Audio Video Integrators
</footer>

<style>
	header {
		grid-area: header;

		display: grid;

		grid-template-areas:
			'logo'
			'contact'
			'nav';
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
		place-items: center;
		background-color: black;

		box-shadow: inset 0 -1px 0 0 white;

		#logo {
			grid-area: logo;
		}

		a {
			color: #77d8ff;
		}
	}

	#contact {
		grid-area: contact;
		place-self: center;
	}

	nav {
		grid-area: nav;

		.items {
			height: 0;
			transition: height 0.3s ease;
			overflow: hidden;

			&.open {
				height: auto;
			}
		}
	}

	.link {
		color: black;

		@media (prefers-color-scheme: dark) {
			color: white;
		}

		white-space: nowrap;

		padding: 0.5rem;

		&.active {
			border: 1px solid transparent;
			border-bottom: 1px solid white;
		}
	}

	#slogan {
		font-style: italic;
		font-weight: bold;
		color: #d70000;
		padding-bottom: 0.5rem;
	}

	main {
		grid-area: main;

		width: min(1000px, 90%);
		margin-top: 1rem;
	}

	footer {
		grid-area: footer;
	}

	@media (min-width: 640px) {
		header {
			/*
															Grid will have logo on the left.
															On the right-bottom is navigation.
															Right-top is contact details.
															*/
			grid-template-areas:
				'logo contact'
				'nav nav';
			grid-template-columns: auto auto;
			grid-template-rows: 1fr auto;
		}

		nav .link.active {
			/* Give a white border on all but the bottom */
			border-color: white;
			border-bottom-color: transparent;
		}
	}

	@media (min-width: 768px) {
		header {
			/*
															Grid will have logo on the left.
															On the right-bottom is navigation.
															Right-top is contact details.
															*/
			grid-template-areas:
				'logo contact'
				'logo nav';
		}
	}
</style>
