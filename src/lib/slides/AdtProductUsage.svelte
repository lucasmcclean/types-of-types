<script lang="ts">
	import { Slide, Code, Action } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';

	let code: Code;
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		bind:this={code}
		lang="go"
		theme={THEME}
		code={`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          }
        }
      `}
		options={CODE_OPTIONS}
	/>

	<Action
		do={() => code.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else {
            fmt.Printf("Hello, %s\\n", *user.name)
          }
        }
      `}
		undo={() => code.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          }
        }
      `}
	/>

	<Action
		do={() => code.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else if user.name == nil || user.email == nil {
            panic("Uh oh, someone should've ensured these had values")
          } else {
            fmt.Printf("Hello, %s\\n", *user.name)
          }
        }
      `}
		undo={() => code.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else {
            fmt.Printf("Hello, %s\\n", *user.name)
          }
        }
      `}
	/>
</Slide>
