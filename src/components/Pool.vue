<template>
	<div>
		<a-card style="height: 21rem">
			<div>
				<span class="Title">#{{ pid }}</span> {{ holder }}
			</div>
			<a-form>
				<div class="Row">
					<span> Node:</span>
					{{ node }}
				</div>
				<div class="Row">
					<span> Reward:</span>
					{{ reward }}
				</div>
				<div class="Row">
					<span> AccumulatedReward:</span>
					{{ accumulatedReward }}
				</div>
				<div class="Row">
					<span> TotalClaimed:</span>
					{{ totalClaimed }}
				</div>
				<div class="Row">
					<span> OpenAt:</span>
					{{ openAt }} (#{{ opened }})
				</div>
				<div
					v-if="isClosed"
					class="Row"
				>
					<span> CloseAt:</span>
					{{ closeAt }} (#{{ closed }})
				</div>
				<div
					v-else
					class="Row"
				>
					Not Closed
				</div>
			</a-form>
			<a-button
				v-show="canClose"
				type="primary"
				:loading="closeLoading"
				@click="close"
			>
				Close
			</a-button>
			<a-button
				v-show="canClaim"
				type="primary"
				style="margin-left: 1rem"
				:loading="claimLoading"
				@click="claim"
			>
				Claim
			</a-button>
		</a-card>
	</div>
</template>

<script lang="ts">
import contracts from '@/contracts'
import { formatToken } from '@/utils'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Pool extends Vue {
	@Prop() pid!: number

	closeLoading = false
	claimLoading = false

	holder = ''
	node = ''
	reward = 0
	totalClaimed = 0
	accumulatedReward = 0
	opened = 0
	openAt = ''
	closed = 0
	closeAt = ''

	canClose = false
	canClaim = false
	isClosed = false

	timer = 0

	async mounted() {
		this.sync()
		this.timer = window.setInterval(() => {
			this.sync()
		}, 10000)
	}

	async destroyed() {
		clearInterval(this.timer)
	}

	async sync() {
		await this.getPool()
		this.getReward()
		this.getAccumulatedReward()
		this.getStatus()
	}

	async getStatus() {
		const admin = await contracts.RewardPool.owner()
		const from = await contracts.signer.getAddress()
		this.isClosed = await contracts.RewardPool.isClosed(this.pid)
		this.canClose = admin == from && !this.isClosed
		this.canClaim = this.holder == from
	}

	async getPool() {
		const pool = await contracts.RewardPool.pools(this.pid)
		this.totalClaimed = formatToken(pool.claimed)
		this.holder = pool.holder
		this.node = await contracts.RewardPool.node(this.holder)
		this.opened = pool.open.toNumber()
		const o = await contracts.provider.getBlock(this.opened)
		this.openAt = new Date(o.timestamp * 1000).toLocaleString()

		this.closed = pool.close.toNumber()
		if (this.closed != 0) {
			const c = await contracts.provider.getBlock(this.closed)
			this.closeAt = new Date(c.timestamp * 1000).toLocaleString()
		}
	}

	async getReward() {
		const r = await contracts.RewardPool.reward(this.pid)
		this.reward = formatToken(r)
	}

	async getAccumulatedReward() {
		const res = await contracts.RewardPool.accumulatedReward(this.pid)
		this.accumulatedReward = formatToken(res)
	}

	async close() {
		try {
			this.closeLoading = true
			const data = contracts.RewardPool.interface.encodeFunctionData('close', [
				this.pid,
			])
			const tx = await contracts.sendTransaction({
				data,
				to: contracts.poolAddress,
			})
			await tx.wait()
			window.location.reload()
		} catch (e) {
			this.popError(e)
		} finally {
			this.closeLoading = false
		}
	}

	async claim() {
		try {
			this.claimLoading = true
			const from = await contracts.signer.getAddress()
			const data = contracts.RewardPool.interface.encodeFunctionData('claim', [
				from,
			])
			const tx = await contracts.sendTransaction({
				data,
				to: contracts.poolAddress,
			})
			await tx.wait()
			window.location.reload()
		} catch (e) {
			this.popError(e)
		} finally {
			this.claimLoading = false
		}
	}
}
</script>

<style>
.Title {
	color: black;
	font-weight: bold;
	font-size: 1.6rem;
}

.Row {
	line-height: 2rem;
}

.Label {
	color: black;
	font-weight: 400;
	font-size: 1rem;
}
</style>
