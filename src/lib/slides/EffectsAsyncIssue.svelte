<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="javascript"
		theme={THEME}
		codes={[
			`
        async function dashboard() {
          const user = await get("/user");
          const posts = await get("/posts");
          console.log(user);
          console.log(posts);
        }
      `,
			`
        async function dashboard() {
          const [user, posts] = await Promise.all([
            get("/user"),
            get("/posts")
          ]);
          console.log(user);
          console.log(posts);
        }
      `
		]}
		options={CODE_OPTIONS}
	/>
</Slide>
