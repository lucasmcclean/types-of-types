<script lang="ts">
	import { Presentation, Slide, Code, Action, Transition } from '@animotion/core';

	let userCode: Code;
	let greetCode: Code;
	let newUserCode: Code;

	let genericsCode: Code;
</script>

<Presentation options={{ history: true, transition: 'slide', controls: true, progress: true }}>
	<Slide class="h-full place-content-center place-items-center">
		<div class="flex flex-row items-baseline space-x-8 tracking-widest">
			<p class="text-8xl">Types</p>
			<p><i class="pe-3.5 text-7xl">of</i></p>
			<p class="text-8xl">Types</p>
		</div>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<p>R = {'{'}x | x ∉ x{'}'}</p>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<figure class="m-0">
			<blockquote class="text-start" cite="urn:isbn:0415495475">
				<p>
					You can define the barber as 'one who shaves all those, and those only, who do not shave
					themselves.' The question is, does the barber shave himself?
				</p>
			</blockquote>
			<figcaption class="mt-8 text-end">
				— Bertrand Russell, <cite>The Philosophy of Logical Atomism</cite>
			</figcaption>
		</figure>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<h2>Algebraic Data Types</h2>
		<p class="place-self-end italic">ADTs</p>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<Code
			bind:this={userCode}
			lang="go"
			theme="poimandres"
			code={`
        type User struct {
          isAnonymous bool
          name        *string // nil if anonymous
          email       *string // nil if anonymous
        }
      `}
			options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
		/>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<ul class="flex list-none flex-col items-start gap-2 text-4xl">
			<li>
				<Transition class="inline">
					<span class="inline-block w-[1ch] text-yellow-500">!</span>
				</Transition>
				Anonymous <i>with</i> info
			</li>
			<li>
				<span class="inline-block w-[1ch]"></span>
				Anonymous <i>without</i> info
			</li>
			<li class="mt-4">
				<span class="inline-block w-[1ch]"></span>
				Logged in <i>with</i> info
			</li>
			<li>
				<Transition class="inline">
					<span class="inline-block w-[1ch] text-yellow-500">!</span>
				</Transition>
				Logged in <i>without</i> info
			</li>
		</ul>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<Code
			bind:this={greetCode}
			lang="go"
			theme="poimandres"
			code={`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          }
        }
      `}
			options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
		/>

		<Action
			do={() => greetCode.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else {
            fmt.Printf("Hello, %s", user.name)
          }
        }
      `}
			undo={() => greetCode.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          }
        }
      `}
		/>

		<Action
			do={() => greetCode.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else if user.name == nil || user.email == nil {
            panic("Uh oh, someone should've ensured these had values")
          } else {
            fmt.Printf("Hello, %s", user.name)
          }
        }
      `}
			undo={() => greetCode.update`
        func greet(user User) {
          if user.isAnonymous {
            fmt.Println("Hello, guest")
          } else {
            fmt.Printf("Hello, %s", user.name)
          }
        }
      `}
		/>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<Code
			bind:this={newUserCode}
			lang="rust"
			theme="poimandres"
			code={`
        enum User {
          Anonymous,
          LoggedIn { name: String, email: String },
        }
      `}
			options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
		/>

		<Action
			do={() => newUserCode.update`
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
			undo={() => newUserCode.update`
        enum User {
          Anonymous,
          LoggedIn { name: String, email: String },
        }
      `}
		/>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<h2>Parametric Polymorphism</h2>
		<p class="place-self-end italic">Generics</p>
	</Slide>

	<Slide class="h-full place-content-center place-items-center">
		<Code
			bind:this={genericsCode}
			lang="rust"
			theme="poimandres"
			code={`
        fn first<T>(something: &Vec<T>) -> Option<&T> {
          something.first()
        }
      `}
			options={{ duration: 700, stagger: 0.3, lineNumbers: true, containerStyle: false }}
		/>

		<Action do={() => genericsCode.select`T`} undo={() => genericsCode.selectLines`*`} />
		<Action do={() => genericsCode.selectLines`*`} undo={() => genericsCode.select`T`} />

		<Action
			do={() => genericsCode.update`
          fn first<T: Copy>(something: &Vec<T>) -> Option<T> {
            something.first().copied()
          }
        `}
			undo={() => genericsCode.update`
          fn first<T>(something: &Vec<T>) -> Option<&T> {
            something.first()
          }
        `}
		/>

		<Action
			do={() => {
				genericsCode.select`T: Copy`;
				genericsCode.selectAdd`.copied()`;
			}}
			undo={() => genericsCode.selectLines`*`}
		/>

		<Action
			do={() => genericsCode.selectLines`*`}
			undo={() => {
				genericsCode.select`T: Copy`;
				genericsCode.selectAdd`.copied()`;
			}}
		/>
	</Slide>
</Presentation>
