<script lang="ts">
	import { Slide } from '@animotion/core';
</script>

<Slide class="h-full place-content-center place-items-center text-3xl">
	<table
		class="whitespace-nowrap [&_tbody_td]:border-b-0 [&_tbody_tr:nth-child(odd)]:bg-white/5 [&_td:nth-child(5)]:text-right [&_td:nth-child(n+2):nth-child(-n+4)]:text-center [&_th:nth-child(5)]:text-right [&_th:nth-child(n+2):nth-child(-n+4)]:text-center"
	>
		<thead>
			<tr>
				<th scope="col">System</th>
				<th scope="col">Exchange</th>
				<th scope="col">Weakening</th>
				<th scope="col">Contraction</th>
				<th scope="col">Usage Restrictions</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Normal</td>
				<td>&check;</td>
				<td>&check;</td>
				<td>&check;</td>
				<td>Arbitrarily</td>
			</tr>
			<tr>
				<td>Linear</td>
				<td>&check;</td>
				<td>&cross;</td>
				<td>&cross;</td>
				<td>Exactly once</td>
			</tr>
			<tr>
				<td>Affine</td>
				<td>&check;</td>
				<td>&check;</td>
				<td>&cross;</td>
				<td>At most once</td>
			</tr>
			<tr>
				<td>Relevant</td>
				<td>&check;</td>
				<td>&cross;</td>
				<td>&check;</td>
				<td>At least once</td>
			</tr>
			<tr>
				<td>Ordered</td>
				<td>&cross;</td>
				<td>&cross;</td>
				<td>&cross;</td>
				<td>Exactly once, in order</td>
			</tr>
		</tbody>
	</table>
</Slide>
