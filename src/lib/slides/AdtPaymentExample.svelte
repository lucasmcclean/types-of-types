<script lang="ts">
	import { Slide, Code } from '@animotion/core';

	import { CODE_OPTIONS, THEME } from './constants';
</script>

<Slide class="h-full place-content-center place-items-center">
	<Code
		lang="rust"
		theme={THEME}
		code={`
        enum PaymentResult {
            Success { transaction_id: String, amount: f64 },
            Declined { reason: String },
            NetworkError { retry_after_seconds: u32 },
        }
      `}
		options={CODE_OPTIONS}
	/>
</Slide>
