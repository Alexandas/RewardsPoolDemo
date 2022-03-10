<template>
	<div class="Pools">
		<Pool
			v-for="pid in pids"
			:key="pid"
			class="Pool"
			:pid="pid"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import contracts from '@/contracts'
import Pool from '@/components/Pool.vue'

@Component({
	components: {
		Pool,
	},
})
export default class Pools extends Vue {
	total = 0
	pids: number[] = []

	async created() {
		const len = await contracts.RewardPool.poolLength()
		this.total = len.toNumber()
		for (let i = 0; i < len.toNumber(); i++) {
			this.pids.push(i)
		}
	}
}
</script>
<style>
.Pools {
	width: 100%;
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.Pool {
	margin-top: 1rem;
	margin-left: 1rem;
	margin-right: 1rem;
}
</style>
