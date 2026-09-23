<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="rust"
		theme={THEME}
		code={`
        let s = String::from("example");

        consume(s);
        consume(s); // Error: value already used
      `}
		options={{ lineNumbers: true, containerStyle: false }}
	/>
</Slide>
