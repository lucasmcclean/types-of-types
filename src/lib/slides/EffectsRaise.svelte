<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { registerKoka } from '$lib/shiki/koka';
	import { THEME } from './constants';

	const koka = registerKoka();
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang={koka}
		theme={THEME}
		codes={[
			`
          effect ctl raise( msg : string ) : a
        `,
			`
          effect ctl raise( msg : string ) : a

          fun safe-divide( x : int, y : int ) : raise int
            if y==0 then raise("div-by-zero") else x / y
        `,
			`
          effect ctl raise( msg : string ) : a

          fun safe-divide( x : int, y : int ) : raise int
            if y==0 then raise("div-by-zero") else x / y

          fun raise-const() : int
            with handler ctl raise(msg) 42
            8 + safe-divide(1,0)
        `
		]}
		options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
	/>
</Slide>
