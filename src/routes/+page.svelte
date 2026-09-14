<script lang="ts">
	import { Presentation, Slide } from '@animotion/core';
</script>

<Presentation options={{ history: true, transition: 'slide', controls: true, progress: true }}>
	<Slide class="h-full place-content-center place-items-center">
		<div class="flex flex-row items-baseline space-x-8 tracking-widest">
			<p class="text-8xl">Types</p>
			<p><i class="pe-3.5 text-7xl">of</i></p>
			<p class="text-8xl">Types</p>
		</div>
		<p class="-mt-4 place-self-end pe-2 text-sm italic">. . . and type systems</p>
	</Slide>
	<Slide class="h-full place-content-center place-items-center">
		<p>R = {'{'}x | x ∉ x{'}'}</p>
	</Slide>
	<Slide class="h-full place-content-center place-items-center">
		<figure class="m-0">
			<blockquote class="text-start" cite="urn:isbn:0415495475">
				<p>
					You can define the barber as 'one who shaves all those, and those only, who do not shave
					themselves.' The question is, does the barber shave himself?
				</p>
			</blockquote>
			<figcaption class="mt-8 text-end">
				— Bertrand Russell, <cite>The Philosophy of Logical Atomism</cite>
			</figcaption>
		</figure>
	</Slide>
</Presentation>
