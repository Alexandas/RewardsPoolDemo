/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
	ethers,
	EventFilter,
	Signer,
	BigNumber,
	BigNumberish,
	PopulatedTransaction,
	BaseContract,
	ContractTransaction,
	Overrides,
	CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RewardPoolInterface extends ethers.utils.Interface {
	functions: {
		"accumulatedReward(uint256)": FunctionFragment;
		"claim(address)": FunctionFragment;
		"claimed(uint256)": FunctionFragment;
		"close(uint256)": FunctionFragment;
		"closed(uint256)": FunctionFragment;
		"holder(uint256)": FunctionFragment;
		"holderExists(address)": FunctionFragment;
		"holders(address)": FunctionFragment;
		"isClosed(uint256)": FunctionFragment;
		"node(address)": FunctionFragment;
		"nodeList()": FunctionFragment;
		"open(address,string)": FunctionFragment;
		"opened(uint256)": FunctionFragment;
		"opens()": FunctionFragment;
		"owner()": FunctionFragment;
		"poolLength()": FunctionFragment;
		"pools(uint256)": FunctionFragment;
		"renounceOwnership()": FunctionFragment;
		"reward(uint256)": FunctionFragment;
		"rewardPerBlock()": FunctionFragment;
		"setNode(address,string)": FunctionFragment;
		"setRewardPerBlock(uint256)": FunctionFragment;
		"token()": FunctionFragment;
		"transferOwnership(address)": FunctionFragment;
		"unrealised(uint256)": FunctionFragment;
		"updatePools()": FunctionFragment;
		"withdraw(address,uint256)": FunctionFragment;
	};

	encodeFunctionData(
		functionFragment: "accumulatedReward",
		values: [BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "claim", values: [string]): string;
	encodeFunctionData(
		functionFragment: "claimed",
		values: [BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "close", values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: "closed",
		values: [BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: "holder",
		values: [BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: "holderExists",
		values: [string]
	): string;
	encodeFunctionData(functionFragment: "holders", values: [string]): string;
	encodeFunctionData(
		functionFragment: "isClosed",
		values: [BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "node", values: [string]): string;
	encodeFunctionData(functionFragment: "nodeList", values?: undefined): string;
	encodeFunctionData(
		functionFragment: "open",
		values: [string, string]
	): string;
	encodeFunctionData(
		functionFragment: "opened",
		values: [BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "opens", values?: undefined): string;
	encodeFunctionData(functionFragment: "owner", values?: undefined): string;
	encodeFunctionData(
		functionFragment: "poolLength",
		values?: undefined
	): string;
	encodeFunctionData(functionFragment: "pools", values: [BigNumberish]): string;
	encodeFunctionData(
		functionFragment: "renounceOwnership",
		values?: undefined
	): string;
	encodeFunctionData(
		functionFragment: "reward",
		values: [BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: "rewardPerBlock",
		values?: undefined
	): string;
	encodeFunctionData(
		functionFragment: "setNode",
		values: [string, string]
	): string;
	encodeFunctionData(
		functionFragment: "setRewardPerBlock",
		values: [BigNumberish]
	): string;
	encodeFunctionData(functionFragment: "token", values?: undefined): string;
	encodeFunctionData(
		functionFragment: "transferOwnership",
		values: [string]
	): string;
	encodeFunctionData(
		functionFragment: "unrealised",
		values: [BigNumberish]
	): string;
	encodeFunctionData(
		functionFragment: "updatePools",
		values?: undefined
	): string;
	encodeFunctionData(
		functionFragment: "withdraw",
		values: [string, BigNumberish]
	): string;

	decodeFunctionResult(
		functionFragment: "accumulatedReward",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "closed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "holder", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "holderExists",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "holders", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "isClosed", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "node", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "nodeList", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "opened", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "opens", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
	decodeFunctionResult(functionFragment: "pools", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "renounceOwnership",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "rewardPerBlock",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "setNode", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "setRewardPerBlock",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "transferOwnership",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "unrealised", data: BytesLike): Result;
	decodeFunctionResult(
		functionFragment: "updatePools",
		data: BytesLike
	): Result;
	decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

	events: {
		"Claim(uint256,address,uint256)": EventFragment;
		"Close(uint256)": EventFragment;
		"Open(uint256)": EventFragment;
		"OwnershipTransferred(address,address)": EventFragment;
		"SetNode(uint256,address,string)": EventFragment;
		"SetRewardPerBlock(uint256)": EventFragment;
		"Withdrawal(address,uint256)": EventFragment;
	};

	getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "Close"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "Open"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "SetNode"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "SetRewardPerBlock"): EventFragment;
	getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type ClaimEvent = TypedEvent<
	[BigNumber, string, BigNumber] & {
		pid: BigNumber;
		holder: string;
		amount: BigNumber;
	}
>;

export type CloseEvent = TypedEvent<[BigNumber] & { pid: BigNumber }>;

export type OpenEvent = TypedEvent<[BigNumber] & { pid: BigNumber }>;

export type OwnershipTransferredEvent = TypedEvent<
	[string, string] & { previousOwner: string; newOwner: string }
>;

export type SetNodeEvent = TypedEvent<
	[BigNumber, string, string] & { pid: BigNumber; holder: string; node: string }
>;

export type SetRewardPerBlockEvent = TypedEvent<
	[BigNumber] & { rewardPerBlock: BigNumber }
>;

export type WithdrawalEvent = TypedEvent<
	[string, BigNumber] & { to: string; amount: BigNumber }
>;

export class RewardPool extends BaseContract {
	connect(signerOrProvider: Signer | Provider | string): this;
	attach(addressOrName: string): this;
	deployed(): Promise<this>;

	listeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
	): Array<TypedListener<EventArgsArray, EventArgsObject>>;
	off<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	on<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	once<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
		listener: TypedListener<EventArgsArray, EventArgsObject>
	): this;
	removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
		eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
	): this;

	listeners(eventName?: string): Array<Listener>;
	off(eventName: string, listener: Listener): this;
	on(eventName: string, listener: Listener): this;
	once(eventName: string, listener: Listener): this;
	removeListener(eventName: string, listener: Listener): this;
	removeAllListeners(eventName?: string): this;

	queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
		event: TypedEventFilter<EventArgsArray, EventArgsObject>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

	interface: RewardPoolInterface;

	functions: {
		accumulatedReward(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<[BigNumber]>;

		claim(
			to: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		claimed(pid: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

		close(
			pid: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		closed(pid: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

		holder(pid: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

		holderExists(
			holder_: string,
			overrides?: CallOverrides
		): Promise<[boolean]>;

		holders(
			arg0: string,
			overrides?: CallOverrides
		): Promise<[BigNumber, string] & { pid: BigNumber; node: string }>;

		isClosed(pid: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

		node(holder_: string, overrides?: CallOverrides): Promise<[string]>;

		nodeList(
			overrides?: CallOverrides
		): Promise<[string[]] & { nodes_: string[] }>;

		open(
			holder_: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		opened(pid: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

		opens(overrides?: CallOverrides): Promise<[BigNumber]>;

		owner(overrides?: CallOverrides): Promise<[string]>;

		poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

		pools(
			arg0: BigNumberish,
			overrides?: CallOverrides
		): Promise<
			[string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
				holder: string;
				open: BigNumber;
				close: BigNumber;
				lastUpdated: BigNumber;
				realised: BigNumber;
				claimed: BigNumber;
			}
		>;

		renounceOwnership(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		reward(pid: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

		rewardPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

		setNode(
			to: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		setRewardPerBlock(
			rewardPerBlock_: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		token(overrides?: CallOverrides): Promise<[string]>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		unrealised(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<[BigNumber]>;

		updatePools(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;

		withdraw(
			to: string,
			amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<ContractTransaction>;
	};

	accumulatedReward(
		pid: BigNumberish,
		overrides?: CallOverrides
	): Promise<BigNumber>;

	claim(
		to: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	claimed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

	close(
		pid: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	closed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

	holder(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

	holderExists(holder_: string, overrides?: CallOverrides): Promise<boolean>;

	holders(
		arg0: string,
		overrides?: CallOverrides
	): Promise<[BigNumber, string] & { pid: BigNumber; node: string }>;

	isClosed(pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

	node(holder_: string, overrides?: CallOverrides): Promise<string>;

	nodeList(overrides?: CallOverrides): Promise<string[]>;

	open(
		holder_: string,
		node_: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	opened(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

	opens(overrides?: CallOverrides): Promise<BigNumber>;

	owner(overrides?: CallOverrides): Promise<string>;

	poolLength(overrides?: CallOverrides): Promise<BigNumber>;

	pools(
		arg0: BigNumberish,
		overrides?: CallOverrides
	): Promise<
		[string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
			holder: string;
			open: BigNumber;
			close: BigNumber;
			lastUpdated: BigNumber;
			realised: BigNumber;
			claimed: BigNumber;
		}
	>;

	renounceOwnership(
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	reward(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

	rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

	setNode(
		to: string,
		node_: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	setRewardPerBlock(
		rewardPerBlock_: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	token(overrides?: CallOverrides): Promise<string>;

	transferOwnership(
		newOwner: string,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	unrealised(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

	updatePools(
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	withdraw(
		to: string,
		amount: BigNumberish,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<ContractTransaction>;

	callStatic: {
		accumulatedReward(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		claim(to: string, overrides?: CallOverrides): Promise<void>;

		claimed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		close(pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

		closed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		holder(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

		holderExists(holder_: string, overrides?: CallOverrides): Promise<boolean>;

		holders(
			arg0: string,
			overrides?: CallOverrides
		): Promise<[BigNumber, string] & { pid: BigNumber; node: string }>;

		isClosed(pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

		node(holder_: string, overrides?: CallOverrides): Promise<string>;

		nodeList(overrides?: CallOverrides): Promise<string[]>;

		open(
			holder_: string,
			node_: string,
			overrides?: CallOverrides
		): Promise<void>;

		opened(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		opens(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<string>;

		poolLength(overrides?: CallOverrides): Promise<BigNumber>;

		pools(
			arg0: BigNumberish,
			overrides?: CallOverrides
		): Promise<
			[string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
				holder: string;
				open: BigNumber;
				close: BigNumber;
				lastUpdated: BigNumber;
				realised: BigNumber;
				claimed: BigNumber;
			}
		>;

		renounceOwnership(overrides?: CallOverrides): Promise<void>;

		reward(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

		setNode(
			to: string,
			node_: string,
			overrides?: CallOverrides
		): Promise<void>;

		setRewardPerBlock(
			rewardPerBlock_: BigNumberish,
			overrides?: CallOverrides
		): Promise<void>;

		token(overrides?: CallOverrides): Promise<string>;

		transferOwnership(
			newOwner: string,
			overrides?: CallOverrides
		): Promise<void>;

		unrealised(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		updatePools(overrides?: CallOverrides): Promise<void>;

		withdraw(
			to: string,
			amount: BigNumberish,
			overrides?: CallOverrides
		): Promise<void>;
	};

	filters: {
		"Claim(uint256,address,uint256)"(
			pid?: BigNumberish | null,
			holder?: string | null,
			amount?: null
		): TypedEventFilter<
			[BigNumber, string, BigNumber],
			{ pid: BigNumber; holder: string; amount: BigNumber }
		>;

		Claim(
			pid?: BigNumberish | null,
			holder?: string | null,
			amount?: null
		): TypedEventFilter<
			[BigNumber, string, BigNumber],
			{ pid: BigNumber; holder: string; amount: BigNumber }
		>;

		"Close(uint256)"(
			pid?: BigNumberish | null
		): TypedEventFilter<[BigNumber], { pid: BigNumber }>;

		Close(
			pid?: BigNumberish | null
		): TypedEventFilter<[BigNumber], { pid: BigNumber }>;

		"Open(uint256)"(
			pid?: BigNumberish | null
		): TypedEventFilter<[BigNumber], { pid: BigNumber }>;

		Open(
			pid?: BigNumberish | null
		): TypedEventFilter<[BigNumber], { pid: BigNumber }>;

		"OwnershipTransferred(address,address)"(
			previousOwner?: string | null,
			newOwner?: string | null
		): TypedEventFilter<
			[string, string],
			{ previousOwner: string; newOwner: string }
		>;

		OwnershipTransferred(
			previousOwner?: string | null,
			newOwner?: string | null
		): TypedEventFilter<
			[string, string],
			{ previousOwner: string; newOwner: string }
		>;

		"SetNode(uint256,address,string)"(
			pid?: BigNumberish | null,
			holder?: string | null,
			node?: null
		): TypedEventFilter<
			[BigNumber, string, string],
			{ pid: BigNumber; holder: string; node: string }
		>;

		SetNode(
			pid?: BigNumberish | null,
			holder?: string | null,
			node?: null
		): TypedEventFilter<
			[BigNumber, string, string],
			{ pid: BigNumber; holder: string; node: string }
		>;

		"SetRewardPerBlock(uint256)"(
			rewardPerBlock?: null
		): TypedEventFilter<[BigNumber], { rewardPerBlock: BigNumber }>;

		SetRewardPerBlock(
			rewardPerBlock?: null
		): TypedEventFilter<[BigNumber], { rewardPerBlock: BigNumber }>;

		"Withdrawal(address,uint256)"(
			to?: string | null,
			amount?: null
		): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;

		Withdrawal(
			to?: string | null,
			amount?: null
		): TypedEventFilter<[string, BigNumber], { to: string; amount: BigNumber }>;
	};

	estimateGas: {
		accumulatedReward(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		claim(
			to: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		claimed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		close(
			pid: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		closed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		holder(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		holderExists(
			holder_: string,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		holders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

		isClosed(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		node(holder_: string, overrides?: CallOverrides): Promise<BigNumber>;

		nodeList(overrides?: CallOverrides): Promise<BigNumber>;

		open(
			holder_: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		opened(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		opens(overrides?: CallOverrides): Promise<BigNumber>;

		owner(overrides?: CallOverrides): Promise<BigNumber>;

		poolLength(overrides?: CallOverrides): Promise<BigNumber>;

		pools(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		renounceOwnership(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		reward(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

		rewardPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

		setNode(
			to: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		setRewardPerBlock(
			rewardPerBlock_: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		token(overrides?: CallOverrides): Promise<BigNumber>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		unrealised(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<BigNumber>;

		updatePools(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;

		withdraw(
			to: string,
			amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<BigNumber>;
	};

	populateTransaction: {
		accumulatedReward(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		claim(
			to: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		claimed(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		close(
			pid: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		closed(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		holder(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		holderExists(
			holder_: string,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		holders(
			arg0: string,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		isClosed(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		node(
			holder_: string,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		nodeList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		open(
			holder_: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		opened(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		opens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		pools(
			arg0: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		renounceOwnership(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		reward(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		rewardPerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		setNode(
			to: string,
			node_: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		setRewardPerBlock(
			rewardPerBlock_: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

		transferOwnership(
			newOwner: string,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		unrealised(
			pid: BigNumberish,
			overrides?: CallOverrides
		): Promise<PopulatedTransaction>;

		updatePools(
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;

		withdraw(
			to: string,
			amount: BigNumberish,
			overrides?: Overrides & { from?: string | Promise<string> }
		): Promise<PopulatedTransaction>;
	};
}
