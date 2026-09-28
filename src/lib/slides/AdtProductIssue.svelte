<script lang="ts">
	import { Slide, Action } from '@animotion/core';

	let list: HTMLUListElement;

	function markInvalid(invalid: boolean) {
		list.querySelectorAll('[data-invalid]').forEach((el) => {
			el.classList.toggle('text-yellow-500', invalid);
		});
	}
</script>

<Slide class="h-full place-content-center place-items-center">
	<ul bind:this={list} class="flex list-none flex-col items-start gap-2 text-4xl">
		<li data-invalid class="transition-colors duration-500">
			Anonymous <i>with</i> info
		</li>
		<li>
			Anonymous <i>without</i> info
		</li>
		<li class="mt-4">
			Logged in <i>with</i> info
		</li>
		<li data-invalid class="transition-colors duration-500">
			Logged in <i>without</i> info
		</li>
	</ul>

	<Action do={() => markInvalid(true)} undo={() => markInvalid(false)} />
</Slide>
