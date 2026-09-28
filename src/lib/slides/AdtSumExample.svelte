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
        enum User {
          Anonymous,
          LoggedIn { name: String, email: String },
        }
      `}
		options={CODE_OPTIONS}
	/>

	<Action
		do={() => code.update`
        enum User {
          Anonymous,
          LoggedIn { name: String, email: String },
        }

        fn greet(user: &User) {
          match user {
            User::Anonymous => println!("Hello, guest"),
            User::LoggedIn { name, .. } => println!("Hello, {}", name),
          }
        }
      `}
		undo={() => code.update`
        enum User {
          Anonymous,
          LoggedIn { name: String, email: String },
        }
      `}
	/>
</Slide>
