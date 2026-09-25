<script lang="ts">
	import { Slide, Code, Action } from '@animotion/core';

	import { registerDafny } from '$lib/shiki/dafny';
	import { THEME } from './constants';

	let code: Code;
	const dafny = registerDafny();
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		bind:this={code}
		lang={dafny}
		theme={THEME}
		code={`
        method OpenSocket(port: int) {
        }
      `}
		options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
	/>

	<Action
		do={() => code.update`
        method OpenSocket(port: int) {
        }

        method Main() {
          OpenSocket(70000);
        }
      `}
		undo={() => code.update`
        method OpenSocket(port: int) {
        }
      `}
	/>

	<Action
		do={() => code.update`
        type Port = x: int | 0 <= x <= 65535

        method OpenSocket(port: Port) {
        }

        method Main() {
          OpenSocket(8080);
          OpenSocket(70000);
        }
      `}
		undo={() => code.update`
        method OpenSocket(port: int) {
        }

        method Main() {
          OpenSocket(70000);
        }
      `}
	/>
</Slide>
