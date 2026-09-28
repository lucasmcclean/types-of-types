<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="rust"
		theme={THEME}
		code={`
        enum Option<T> {
            None,
            Some(T),
        }

        enum Result<T, E> {
            Ok(T),
            Err(E),
        }
      `}
		options={CODE_OPTIONS}
	/>
</Slide>
