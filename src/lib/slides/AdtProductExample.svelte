<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="go"
		theme={THEME}
		code={`
        type User struct {
          isAnonymous bool
          name        *string // nil if anonymous
          email       *string // nil if anonymous
        }
      `}
		options={{ lineNumbers: true, containerStyle: false }}
	/>
</Slide>
