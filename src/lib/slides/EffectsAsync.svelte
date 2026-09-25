<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { registerKoka } from '$lib/shiki/koka';
	import { THEME } from './constants';

	const koka = registerKoka();
</script>

<Slide class="h-full place-content-center place-items-center gap-6">
	<Code
		lang={koka}
		theme={THEME}
		codes={[
			`
          effect async
            ctl await(url : string) : string

          fun dashboard() : <async, console> ()
            val user = await("/user")
            val posts = await("/posts")
            println(user)
            println(posts)
        `,
			`
          effect async
            ctl await(url : string) : string

          fun dashboard() : <async, console> ()
            val user = await("/user")
            val posts = await("/posts")
            println(user)
            println(posts)

          val async-handle = handler
            ctl await(url)
              start-fetch(url, resume)
        `,
			`
          effect async
            ctl await(url : string) : string

          fun dashboard() : <async, console> ()
            val user = await("/user")
            val posts = await("/posts")
            println(user)
            println(posts)

          val async-handle = handler
            ctl await(url)
              start-fetch(url, resume)

          fun main() : console ()
            with async-handle
            dashboard()
        `
		]}
		options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
	/>
</Slide>
