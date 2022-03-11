<template>
	<div style="width: 700px">
		<a-modal
			v-model="visible"
			style="width: 700px"
			:ok-button-props="{ style: { display: 'none' } }"
			:cancel-button-props="{ style: { display: 'none' } }"
			@cancel="close"
		>
			<a-form>
				<a-form-item label="RewardPerBlock">
					<a-input v-model="rewardPerBlock" />
				</a-form-item>
				<a-form-item>
					<a-button
						:loading="loading"
						type="primary"
						html-type="submit"
						@click="confirm"
					>
						Confirm
					</a-button>
				</a-form-item>
			</a-form>
		</a-modal>
	</div>
</template>

<script lang="ts">
import contracts from '@/contracts'
import { toToken } from '@/utils'
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'

@Component
export default class EditPool extends Vue {
	loading = false
	visible = false
	rewardPerBlock = '0'

	@Prop()
	show = false

	@Watch('show')
	onShow(newValue: boolean) {
		this.visible = newValue
	}

	async confirm() {
		try {
			this.loading = true
			const data = contracts.RewardPool.interface.encodeFunctionData(
				'setRewardPerBlock',
				[toToken(this.rewardPerBlock)]
			)
			const tx = await contracts.sendTransaction({
				to: contracts.poolAddress,
				data,
			})
			await tx.wait()
			window.location.reload()
		} catch (e) {
			this.popError(e)
		} finally {
			this.loading = false
		}
	}

	@Emit()
	close() {}
}
</script>
