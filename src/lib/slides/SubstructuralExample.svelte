<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="rust"
		theme={THEME}
		codes={[
			`let s = String::from("Affine");`,
			`
          let s = String::from("Affine");

          consume(s);
        `,
			`
          let s = String::from("Affine");

          consume(s);
          consume(s); // Error: value already used
        `,
			`
          let s = String::from("Affine(ish)");

          consume(s);
          consume(s); // Error: value already used
        `
		]}
		options={CODE_OPTIONS}
	/>
</Slide>
