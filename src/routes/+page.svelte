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
		AdtPaymentExample,
		AdtOptionResult,
		RefinementTitle,
		RefinementExample,
		GenericsTitle,
		GenericsExample,
		SubstructuralTitle,
		SubstructuralTable,
		SubstructuralExample,
		EffectsTitle,
		EffectsExcept,
		EffectsResume,
		EffectsAsyncIssue,
		EffectsAsync
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
	<AdtPaymentExample />
	<AdtOptionResult />

	<RefinementTitle />
	<RefinementExample />

	<GenericsTitle />
	<GenericsExample />

	<SubstructuralTitle />
	<SubstructuralTable />
	<SubstructuralExample />

	<EffectsTitle />
	<EffectsExcept />
	<EffectsResume />
	<EffectsAsyncIssue />
	<EffectsAsync />

	<Citations />
</Presentation>
