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
        fn first<T>(something: &Vec<T>) -> Option<&T> {
          something.first()
        }
      `}
		options={CODE_OPTIONS}
	/>

	<Action do={() => code.select`T`} undo={() => code.selectLines`*`} />
	<Action do={() => code.selectLines`*`} undo={() => code.select`T`} />

	<Action
		do={() => code.update`
          fn first<T: Copy>(something: &Vec<T>) -> Option<T> {
            something.first().copied()
          }
        `}
		undo={() => code.update`
          fn first<T>(something: &Vec<T>) -> Option<&T> {
            something.first()
          }
        `}
	/>

	<Action
		do={() => {
			code.select`T: Copy`;
			code.selectAdd`.copied()`;
		}}
		undo={() => code.selectLines`*`}
	/>

	<Action
		do={() => code.selectLines`*`}
		undo={() => {
			code.select`T: Copy`;
			code.selectAdd`.copied()`;
		}}
	/>
</Slide>
