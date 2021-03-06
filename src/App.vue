<template>
	<div id="app">
		<div style="width: 100%">
			<a-card style="width: 100%">
				<a-button
					v-if="!isConnected"
					type="primary"
					style="float: left"
					@click="connect"
				>
					Connect
				</a-button>
				<div
					v-else
					style="float: left"
				>
					Connected: {{ formatAccount }} Network: {{ network }}
					<a-icon
						v-if="isNetworkSupported"
						style="color: green"
						type="check-circle"
						theme="filled"
					/>
					<a-icon
						v-else
						style="color: red"
						type="warning"
						theme="filled"
					/>
				</div>
				<span style="float: right">
					<span style="margin-right: 1rem">Pool:{{ balance }}</span>
					<span
						style="margin-right: 1rem"
					>RewardPerBlock:{{ rewardPerBlock }}</span>
					<a-button
						v-show="isAdmin"
						type="primary"
						@click="add"
					>
						Add
					</a-button>
					<a-button
						v-show="isAdmin"
						style="margin-left: 8px"
						type="primary"
						@click="edit"
					>
						Edit
					</a-button>
				</span>
			</a-card>
			<keep-alive>
				<router-view style="margin-left: 8px" />
			</keep-alive>
			<AddPoolModal
				:show="showAddPoolModal"
				@close="closeAddPoolModal"
			/>
			<EditPool
				:show="showEditPoolModal"
				@close="closeEditPoolModal"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { UPDATE_ACCOUNT, UPDATE_CHAINID } from '@/store'
import { formatNetwork, isNetworkSupported, formatToken } from '@/utils'
import contracts from '@/contracts'
import AddPoolModal from '@/components/AddPoolModal.vue'
import EditPool from '@/components/EditPool.vue'

@Component({
	components: {
		AddPoolModal,
		EditPool,
	},
})
export default class App extends Vue {
	isAdmin = false
	showAddPoolModal = false
	showEditPoolModal = false
	balance = 0
	rewardPerBlock = 0

	async created() {
		await this.checkState()
		this.listen()
		this.sync()
		setInterval(() => {
			this.sync()
		}, 10000)
	}

	async sync() {
		const owner = await contracts.RewardPool.owner()
		const from = await contracts.signer.getAddress()
		this.isAdmin = owner == from
		const b = await contracts.token().balanceOf(contracts.poolAddress)
		this.balance = formatToken(b)
		const r = await contracts.RewardPool.rewardPerBlock()
		this.rewardPerBlock = formatToken(r)
	}

	get isNetworkSupported() {
		return isNetworkSupported(this.$store.state.chainId)
	}

	get isConnected() {
		if (!window.ethereum) {
			return false
		}
		return !!this.$store.state.account
	}

	get network() {
		return formatNetwork(this.$store.state.chainId)
	}

	async checkState() {
		if (window.ethereum) {
			const account = await contracts.signer.getAddress()
			const chainId = await contracts.signer.getChainId()
			this.$store.commit(UPDATE_ACCOUNT, account)
			this.$store.commit(UPDATE_CHAINID, chainId)
		}
	}

	async connect() {
		if (!window.ethereum) {
			return this.$message.warn('Please install MetaMask to use this app.')
		}

		const isUnlocked = await window.ethereum._metamask.isUnlocked()
		if (!isUnlocked) {
			return this.$message.warn('Metamask has been locked, please unlock it.')
		}

		if (!isNetworkSupported(parseInt(window.ethereum.chainId))) {
			return this.$message.error(
				'Please MetaMask change your network to `Mumbai`.'
			)
		}

		let accounts = await window.ethereum.request({
			method: 'eth_accounts',
		})
		if (accounts.length == 0) {
			accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			})
		}
		window.location.reload()
	}

	add() {
		this.showAddPoolModal = true
	}

	edit() {
		this.showEditPoolModal = true
	}

	closeAddPoolModal() {
		this.showAddPoolModal = false
	}

	closeEditPoolModal() {
		this.showEditPoolModal = false
	}

	listen() {
		window.ethereum.on('accountsChanged', (accounts) => {
			this.$store.commit(UPDATE_ACCOUNT, accounts[0])
			window.location.reload()
		})

		window.ethereum.on('chainChanged', (chainId) => {
			this.$store.commit(UPDATE_CHAINID, chainId)
			if (isNetworkSupported(chainId)) {
				window.location.reload()
			}
		})
	}

	get formatAccount() {
		const account = this.$store.state.account
		if (account.length > 0) {
			return (
				account.substr(0, 10) + '....' + account.substr(account.length - 8, 8)
			)
		}
		return account
	}
}
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}
</style>
