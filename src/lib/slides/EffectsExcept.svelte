<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { registerFlix } from '$lib/shiki/flix';
	import { CODE_OPTIONS, THEME } from './constants';

	const flix = registerFlix();
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang={flix}
		theme={THEME}
		codes={[
			`
          eff DivByZero {
              def divByZero(): Void
          }
        `,
			`
          eff DivByZero {
              def divByZero(): Void
          }

          def divide(x: Int32, y: Int32): Int32 \ DivByZero = 
              if (y == 0) {
                  DivByZero.divByZero()
              } else {
                  x / y
              }
        `,
			`
          eff DivByZero {
              def divByZero(): Void
          }

          def divide(x: Int32, y: Int32): Int32 \ DivByZero = 
              if (y == 0) {
                  DivByZero.divByZero()
              } else {
                  x / y
              }

          def main(): Unit \ IO = 
              run {
                  println(divide(3, 2));
                  println(divide(3, 0))
              } with handler DivByZero {
                  def divByZero(_resume) = println("Oops: Division by Zero!")
              }
        `
		]}
		options={CODE_OPTIONS}
	/>
</Slide>
