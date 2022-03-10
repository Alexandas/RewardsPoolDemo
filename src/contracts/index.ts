import { BigNumber, providers } from 'ethers'
import { ERC20__factory } from './ERC20__factory'
import { RewardPool__factory } from './types'

class Contracts {

	// DAI
	public readonly tokenAddress = '0x2d2C8ab3A4006823260F862FF042b8cFDBcCE0C7'

	public readonly poolAddress = '0xaCC9DC46fc0c112f3Bc6be6925477476F5447e5F'

	public get provider(): providers.Web3Provider {
		if (!window.ethereum) {
			throw 'no ethereum plugin'
		}
		return new providers.Web3Provider(window.ethereum as any)
	}

	public async sendTransaction(transaction: { to: string, data: string, value?: BigNumber }) {
		const from = await this.signer.getAddress()
		return this.signer.sendTransaction({
			from,
			to: transaction.to,
			data: transaction.data,
			value: transaction.value
		})
	}

	public get signer() {
		return this.provider.getSigner()
	}

	public get signerAddress(): string {
		return this.provider.getSigner()._address
	}

	public ERC20(addr: string) {
		return ERC20__factory.connect(
			addr,
			this.provider
		)
	}

	public token() {
		return this.ERC20(this.tokenAddress)
	}

	public get RewardPool() {
		return RewardPool__factory.connect(
			this.poolAddress,
			this.provider
		)
	}

}

const contracts = new Contracts()
export default contracts