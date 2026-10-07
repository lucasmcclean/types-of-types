<script lang="ts">
	import { Slide, Code, Transition } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center gap-8">
	<Code
		lang="javascript"
		theme={THEME}
		code={`
        function greeting() {
          const hour = new Date().getHours();
          return hour <= 12 ? "Good morning" : "Good afternoon";
        }
      `}
		options={CODE_OPTIONS}
	/>
</Slide>
