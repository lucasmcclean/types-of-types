<script lang="ts">
	import { Slide, Code, Action } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';

	let code: Code;
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		bind:this={code}
		lang="rust"
		theme={THEME}
		code={`
        fn head<T>(xs: &[T]) -> Option<&T> {
          xs.first()
        }
      `}
		options={CODE_OPTIONS}
	/>

	<Action
		do={() => code.update`
        fn head<T: Clone>(xs: &[T]) -> Option<T> {
          xs.first().cloned()
        }
      `}
		undo={() => code.update`
        fn head<T>(xs: &[T]) -> Option<T> {
          xs.first().cloned()
        }
      `}
	/>

	<Action
		do={() => {
			code.select`T: Clone`;
			code.selectAdd`.cloned()`;
		}}
		undo={() => code.selectLines`*`}
	/>
</Slide>
