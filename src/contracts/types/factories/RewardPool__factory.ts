/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardPool, RewardPoolInterface } from "../RewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Close",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Open",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "node",
        type: "string",
      },
    ],
    name: "SetNode",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "SetRewardPerBlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "accumulatedReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "closed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "holder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
    ],
    name: "holderExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "holders",
    outputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdated",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "realised",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "node",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "isClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
    ],
    name: "node",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nodeList",
    outputs: [
      {
        internalType: "string[]",
        name: "nodes",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "node_",
        type: "string",
      },
    ],
    name: "open",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "opened",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "open",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "close",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "realised",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "rewardPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder_",
        type: "address",
      },
      {
        internalType: "string",
        name: "node_",
        type: "string",
      },
    ],
    name: "setNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock_",
        type: "uint256",
      },
    ],
    name: "setRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "unrealised",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ee838038062001ee88339810160408190526200003491620000c1565b6200003f3362000071565b6200004a8262000071565b600180546001600160a01b0319166001600160a01b03929092169190911790555062000118565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060408385031215620000d4578182fd5b8251620000e181620000ff565b6020840151909250620000f481620000ff565b809150509250929050565b6001600160a01b03811681146200011557600080fd5b50565b611dc080620001286000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80639f9b1048116100de578063d5c78a2811610097578063f2fde38b11610071578063f2fde38b146103aa578063f3fef3a3146103bd578063fae65fab146103d0578063fc0c546a146103e357610172565b8063d5c78a2814610371578063e6a2016e14610384578063f1ea5cd31461039757610172565b80639f9b10481461027b578063a9fb763c146102b9578063ac4afa38146102cc578063ba899a2e14610311578063bffbe61c14610324578063c884ef831461034457610172565b806339db45f61161013057806339db45f6146102005780634c9b268c146102155780635c959b6214610228578063715018a61461023b578063791f39cd146102435780638da5cb5b1461025657610172565b8062c4c10614610177578063070dac681461018c578063081e3eda1461019f5780630aebeb4e146101b657806318a5bbdc146101c95780631e83409a146101ed575b600080fd5b61018a610185366004611a1b565b6103f6565b005b61018a61019a366004611b1d565b610553565b6002545b6040519081526020015b60405180910390f35b61018a6101c4366004611b05565b61072a565b6101dc6101d7366004611a01565b61084c565b6040516101ad959493929190611c65565b61018a6101fb366004611a01565b61090a565b610208610918565b6040516101ad9190611b86565b6101a3610223366004611b05565b610a87565b6101a3610236366004611b05565b610b5b565b61018a610bc1565b6101a3610251366004611b05565b610bf7565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101ad565b6102a9610289366004611a01565b6001600160a01b0316600090815260036020526040902060010154151590565b60405190151581526020016101ad565b6101a36102c7366004611b05565b610c5c565b6102df6102da366004611b05565b610ca0565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a0016101ad565b61026361031f366004611b05565b610ceb565b610337610332366004611a01565b610d57565b6040516101ad9190611be6565b6101a3610352366004611a01565b6001600160a01b03166000908152600360208190526040909120015490565b6102a961037f366004611b05565b610e06565b6101a3610392366004611b05565b610eab565b6101a36103a5366004611b05565b610f02565b61018a6103b8366004611a01565b610f67565b61018a6103cb366004611a67565b611002565b61018a6103de366004611a90565b61107e565b600154610263906001600160a01b031681565b6000546001600160a01b031633146104295760405162461bcd60e51b815260040161042090611c30565b60405180910390fd5b6001600160a01b0382166000908152600360205260409020600101546104915760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f6e6578697374656e7420686f6c6465722e006044820152606401610420565b60008151116104de5760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b6044820152606401610420565b6001600160a01b0382166000908152600360209081526040909120825161050d926004909201918401906118d3565b50816001600160a01b03167ffc718f660d0e57b8c550c3297792fd50c990ac920dff26eeef4d8f160bf347b8826040516105479190611be6565b60405180910390a25050565b6000546001600160a01b0316331461057d5760405162461bcd60e51b815260040161042090611c30565b61058682610e06565b156105ce5760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b6044820152606401610420565b60006105d983610ceb565b905060006105e684610a87565b6001600160a01b03831660009081526003602052604090206002015490915061060f908261141e565b6001600160a01b038316600090815260036020526040902060028082019290925543600190910155805461067d9183918790811061065d57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600502016004015461141e90919063ffffffff16565b6002858154811061069e57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600502016004018190555082600285815481106106d557634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020160010181905550837f52c807d1e2187528e4d89ed62cff6903bf27704b73db2e397fd8d9d7d954bd658460405161071c91815260200190565b60405180910390a250505050565b6000546001600160a01b031633146107545760405162461bcd60e51b815260040161042090611c30565b80610760816002541190565b61077c5760405162461bcd60e51b815260040161042090611bf9565b61078582610e06565b156107cd5760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b6044820152606401610420565b60006107d883610ceb565b905043600284815481106107fc57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600502016003018190555061081b818261142a565b5060405183907fbf67515a38ee520223d32c1266d52101c30d936ed1f3e436c8caeb0a43cb06bf90600090a2505050565b600360205280600052604060002060009150905080600001549080600101549080600201549080600301549080600401805461088790611d0e565b80601f01602080910402602001604051908101604052809291908181526020018280546108b390611d0e565b80156109005780601f106108d557610100808354040283529160200191610900565b820191906000526020600020905b8154815290600101906020018083116108e357829003601f168201915b5050505050905085565b610914338261142a565b5050565b606061092360025490565b67ffffffffffffffff81111561094957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561097c57816020015b60608152602001906001900390816109675790505b50905060005b600254811015610a83576003600061099983610ceb565b6001600160a01b03166001600160a01b0316815260200190815260200160002060040180546109c790611d0e565b80601f01602080910402602001604051908101604052809291908181526020018280546109f390611d0e565b8015610a405780601f10610a1557610100808354040283529160200191610a40565b820191906000526020600020905b815481529060010190602001808311610a2357829003601f168201915b5050505050828281518110610a6557634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610a7b90611d43565b915050610982565b5090565b600080610a9383610e06565b610a9d5743610ad1565b60028381548110610abe57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060050201600301545b90506000610ade84610ceb565b6001600160a01b03811660009081526003602052604081206001015491925090610b099084906115ca565b9050610b508160028781548110610b3057634e487b7160e01b600052603260045260246000fd5b9060005260206000209060050201600101546115d690919063ffffffff16565b93505050505b919050565b600081610b69816002541190565b610b855760405162461bcd60e51b815260040161042090611bf9565b60028381548110610ba657634e487b7160e01b600052603260045260246000fd5b90600052602060002090600502016003015491505b50919050565b6000546001600160a01b03163314610beb5760405162461bcd60e51b815260040161042090611c30565b610bf560006115e2565b565b600081610c05816002541190565b610c215760405162461bcd60e51b815260040161042090611bf9565b60028381548110610c4257634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020160010154915050919050565b6000610c9a610c6a83610a87565b60036000610c7786610ceb565b6001600160a01b031681526020810191909152604001600020600201549061141e565b92915050565b60028181548110610cb057600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909185565b600081610cf9816002541190565b610d155760405162461bcd60e51b815260040161042090611bf9565b60028381548110610d3657634e487b7160e01b600052603260045260246000fd5b60009182526020909120600590910201546001600160a01b03169392505050565b6001600160a01b0381166000908152600360205260409020600401805460609190610d8190611d0e565b80601f0160208091040260200160405190810160405280929190818152602001828054610dad90611d0e565b8015610dfa5780601f10610dcf57610100808354040283529160200191610dfa565b820191906000526020600020905b815481529060010190602001808311610ddd57829003601f168201915b50505050509050919050565b600081610e14816002541190565b610e305760405162461bcd60e51b815260040161042090611bf9565b60028381548110610e5157634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020160030154600014158015610ea457504360028481548110610e9057634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020160030154105b9392505050565b600081610eb9816002541190565b610ed55760405162461bcd60e51b815260040161042090611bf9565b610ea4610ee184610a87565b6002858154811061065d57634e487b7160e01b600052603260045260246000fd5b600081610f10816002541190565b610f2c5760405162461bcd60e51b815260040161042090611bf9565b60028381548110610f4d57634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020160020154915050919050565b6000546001600160a01b03163314610f915760405162461bcd60e51b815260040161042090611c30565b6001600160a01b038116610ff65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610420565b610fff816115e2565b50565b6000546001600160a01b0316331461102c5760405162461bcd60e51b815260040161042090611c30565b600154611043906001600160a01b03168383611632565b816001600160a01b03167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658260405161054791815260200190565b6000546001600160a01b031633146110a85760405162461bcd60e51b815260040161042090611c30565b6001600160a01b0383166110fe5760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420686f6c6465722e00000000006044820152606401610420565b816111575760405162461bcd60e51b815260206004820152602360248201527f526577617264506f6f6c3a20696e76616c696420726577617264506572426c6f60448201526231b59760e91b6064820152608401610420565b60008151116111a45760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b6044820152606401610420565b6001600160a01b0383166000908152600360205260409020600101541561120d5760405162461bcd60e51b815260206004820152601a60248201527f526577617264506f6f6c3a20686f6c646572206578697374732e0000000000006044820152606401610420565b600061121860025490565b6040805160a081018252828152436020808301918252600083850181815260608501828152608086018a81526001600160a01b038d1684526003808652979093208651815594516001860155905160028501555194830194909455925180519495509193909261128f9260048501929101906118d3565b50905050836001600160a01b03167ffc718f660d0e57b8c550c3297792fd50c990ac920dff26eeef4d8f160bf347b8836040516112cc9190611be6565b60405180910390a26040805160a0810182526001600160a01b0386811682526020820186815243838501908152600060608501818152608086018281526002805460018101825590845296517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600590980297880180546001600160a01b031916919097161790955592517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf86015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad085015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad184015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad290920191909155905182917f9648cf7f2eb86b564ae3c4a466bc03e87267933667490eb8737a5a3f2a9b284d91a250505050565b6000610ea48284611c90565b6001600160a01b0382166000908152600360205260408120600101546114925760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f6e6578697374656e7420686f6c6465722e006044820152606401610420565b6001600160a01b0383166000908152600360205260409020546114b481610c5c565b91506114e36114c282610a87565b6002838154811061065d57634e487b7160e01b600052603260045260246000fd5b6002828154811061150457634e487b7160e01b600052603260045260246000fd5b60009182526020808320600460059093020191909101929092556001600160a01b0386168152600391829052604090200154611540908361141e565b6001600160a01b03808616600090815260036020819052604082209081019390935543600180850191909155600290930155905461158091168484611632565b836001600160a01b03167f47cee97cb7acd717b3c0aa1435d004cd5b3c8c57d70dbceb4e4458bbd60e39d4836040516115bb91815260200190565b60405180910390a25092915050565b6000610ea48284611cc7565b6000610ea48284611ca8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611684908490611689565b505050565b60006116de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661175b9092919063ffffffff16565b80519091501561168457808060200190518101906116fc9190611ae5565b6116845760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610420565b606061176a8484600085611772565b949350505050565b6060824710156117d35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610420565b843b6118215760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610420565b600080866001600160a01b0316858760405161183d9190611b6a565b60006040518083038185875af1925050503d806000811461187a576040519150601f19603f3d011682016040523d82523d6000602084013e61187f565b606091505b509150915061188f82828661189a565b979650505050505050565b606083156118a9575081610ea4565b8251156118b95782518084602001fd5b8160405162461bcd60e51b81526004016104209190611be6565b8280546118df90611d0e565b90600052602060002090601f0160209004810192826119015760008555611947565b82601f1061191a57805160ff1916838001178555611947565b82800160010185558215611947579182015b8281111561194757825182559160200191906001019061192c565b50610a839291505b80821115610a83576000815560010161194f565b80356001600160a01b0381168114610b5657600080fd5b600082601f83011261198a578081fd5b813567ffffffffffffffff808211156119a5576119a5611d74565b604051601f8301601f19908116603f011681019082821181831017156119cd576119cd611d74565b816040528381528660208588010111156119e5578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611a12578081fd5b610ea482611963565b60008060408385031215611a2d578081fd5b611a3683611963565b9150602083013567ffffffffffffffff811115611a51578182fd5b611a5d8582860161197a565b9150509250929050565b60008060408385031215611a79578182fd5b611a8283611963565b946020939093013593505050565b600080600060608486031215611aa4578081fd5b611aad84611963565b925060208401359150604084013567ffffffffffffffff811115611acf578182fd5b611adb8682870161197a565b9150509250925092565b600060208284031215611af6578081fd5b81518015158114610ea4578182fd5b600060208284031215611b16578081fd5b5035919050565b60008060408385031215611b2f578182fd5b50508035926020909101359150565b60008151808452611b56816020860160208601611cde565b601f01601f19169290920160200192915050565b60008251611b7c818460208701611cde565b9190910192915050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015611bd957603f19888603018452611bc7858351611b3e565b94509285019290850190600101611bab565b5092979650505050505050565b600060208252610ea46020830184611b3e565b6020808252601d908201527f526577617264506f6f6c3a206e6f6e6578697374656e7420706f6f6c2e000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600086825285602083015284604083015283606083015260a0608083015261188f60a0830184611b3e565b60008219821115611ca357611ca3611d5e565b500190565b6000816000190483118215151615611cc257611cc2611d5e565b500290565b600082821015611cd957611cd9611d5e565b500390565b60005b83811015611cf9578181015183820152602001611ce1565b83811115611d08576000848401525b50505050565b600281046001821680611d2257607f821691505b60208210811415610bbb57634e487b7160e01b600052602260045260246000fd5b6000600019821415611d5757611d57611d5e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212200b6e9c33e5627f8bdbf34b8ef4ba305f83ce3cf51e1054a60230ffd10025224164736f6c63430008020033";

export class RewardPool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    admin: string,
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardPool> {
    return super.deploy(admin, token_, overrides || {}) as Promise<RewardPool>;
  }
  getDeployTransaction(
    admin: string,
    token_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, token_, overrides || {});
  }
  attach(address: string): RewardPool {
    return super.attach(address) as RewardPool;
  }
  connect(signer: Signer): RewardPool__factory {
    return super.connect(signer) as RewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardPoolInterface {
    return new utils.Interface(_abi) as RewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardPool {
    return new Contract(address, _abi, signerOrProvider) as RewardPool;
  }
}