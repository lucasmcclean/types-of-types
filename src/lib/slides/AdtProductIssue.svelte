<script lang="ts">
	import { Slide, Transition } from '@animotion/core';
</script>

<Slide class="h-full place-content-center place-items-center">
	<ul class="flex list-none flex-col items-start gap-2 text-4xl">
		<li>
			<Transition class="inline">
				<span class="inline-block w-[1ch] text-yellow-500">!</span>
			</Transition>
			Anonymous <i>with</i> info
		</li>
		<li>
			<span class="inline-block w-[1ch]"></span>
			Anonymous <i>without</i> info
		</li>
		<li class="mt-4">
			<span class="inline-block w-[1ch]"></span>
			Logged in <i>with</i> info
		</li>
		<li>
			<Transition class="inline">
				<span class="inline-block w-[1ch] text-yellow-500">!</span>
			</Transition>
			Logged in <i>without</i> info
		</li>
	</ul>
</Slide>
