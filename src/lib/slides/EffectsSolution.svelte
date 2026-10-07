<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { registerFlix } from '$lib/shiki/flix';
	import { CODE_OPTIONS, THEME } from './constants';

	const flix = registerFlix();
</script>

<Slide class="h-full place-content-center place-items-center gap-8">
	<Code
		lang={flix}
		theme={THEME}
		codes={[
			`
          eff Clock {
              def hour(): Int32
          }

          def greeting(): String \ Clock =
              let h = Clock.hour();
              if (h <= 12)
                  "Good morning"
              else
                  "Good afternoon"
        `,
			`
          eff Clock {
              def hour(): Int32
          }

          def greeting(): String \ Clock =
              let h = Clock.hour();
              if (h <= 12)
                  "Good morning"
              else
                  "Good afternoon"

          def main(): Unit \ IO =
              run {
                  println(greeting())
              } with handler Clock {
                  def hour(_, resume) = resume(9)
              }
        `
		]}
		options={CODE_OPTIONS}
	/>
</Slide>
