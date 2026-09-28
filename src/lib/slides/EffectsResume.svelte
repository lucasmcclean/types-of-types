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
          eff HourOfDay {
              def getCurrentHour(): Int32
          }

        `,
			`
          eff HourOfDay {
              def getCurrentHour(): Int32
          }

          def greeting(): String \ {HourOfDay} = 
              let h = HourOfDay.getCurrentHour();
              if (h <= 12) 
                  "Good morning"
              else
                  "Good afternoon"

        `,
			`
          eff HourOfDay {
              def getCurrentHour(): Int32
          }

          def greeting(): String \ {HourOfDay} = 
              let h = HourOfDay.getCurrentHour();
              if (h <= 12) 
                  "Good morning"
              else
                  "Good afternoon"

          def main(): Unit \ IO = 
              run {
                  println(greeting())
              } with handler HourOfDay {
                  def getCurrentHour(_, resume) = 
                      let dt = LocalDateTime.now();
                      resume(dt.getHour())
              }
        `
		]}
		options={CODE_OPTIONS}
	/>
</Slide>
