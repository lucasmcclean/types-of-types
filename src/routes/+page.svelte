<script lang="ts">
	import { Presentation } from '@animotion/core';

	import {
		Title,
		Index,
		Citations,
		Paradox,
		Russell,
		AdtTitle,
		AdtProductExample,
		AdtProductIssue,
		AdtProductUsage,
		AdtSumExample,
		GenericsTitle,
		GenericsExample
	} from '$lib/slides';
</script>

<Presentation options={{ history: true, transition: 'slide', controls: false, progress: true }}>
	<Title />

	<Index />

	<Paradox />
	<Russell />

	<AdtTitle />
	<AdtProductExample />
	<AdtProductIssue />
	<AdtProductUsage />
	<AdtSumExample />

	<GenericsTitle />
	<GenericsExample />

	<Citations />
</Presentation>
