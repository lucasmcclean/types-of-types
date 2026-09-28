<script lang="ts">
	import { Slide } from '@animotion/core';

	const sections = [
		{ title: "Russell's Paradox", subtitle: 'Motivation' },
		{ title: 'Algebraic Data Types', subtitle: 'ADTs' },
		{ title: 'Refinement Types', subtitle: 'Valid Values' },
		{ title: 'Parametric Polymorphism', subtitle: 'Generics' },
		{ title: 'Substructural Typing', subtitle: 'Linear & Affine' },
		{ title: 'Effect Systems', subtitle: 'Algebraic Effects' }
	];
</script>

<Slide class="h-full place-content-center place-items-center">
	<div class="flex flex-row items-start gap-20">
		<h2 class="pt-1 text-3xl tracking-[0.3em] text-cyan-200 uppercase">Index</h2>

		<ol class="flex list-none flex-col gap-5">
			{#each sections as section, i (section.title)}
				<li class="index-item flex flex-row items-baseline gap-6" style="--index: {i}">
					<span class="font-mono text-2xl text-cyan-300/50 tabular-nums">
						{String(i + 1).padStart(2, '0')}
					</span>
					<span class="text-4xl">{section.title}</span>
					<span class="text-2xl text-neutral-300/60 italic">{section.subtitle}</span>
				</li>
			{/each}
		</ol>
	</div>
</Slide>

<style>
	:global(section.present) .index-item {
		animation: index-in 0.5s var(--ease) backwards;
		animation-delay: calc(var(--index) * 0.07s + 0.1s);
	}

	@keyframes index-in {
		from {
			opacity: 0;
			translate: 0 0.5em;
		}
	}
</style>
