/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
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
      {
        internalType: "uint256",
        name: "rewardPerBlock_",
        type: "uint256",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "pid",
        type: "uint256",
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
        name: "nodes_",
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
    name: "opens",
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
    inputs: [],
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
        name: "to",
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
    inputs: [],
    name: "updatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162001edc38038062001edc83398101604081905262000034916200015a565b6200003f336200007d565b6200004a836200007d565b6200005581620000cd565b50600180546001600160a01b0319166001600160a01b039290921691909117905550620001ba565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b806200011f5760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420706172616d732e0000000000604482015260640160405180910390fd5b60038190556040518181527f22c0456177178fec69cb519ce05c0f0b39708187e616a82ceea49f84e19169cd9060200160405180910390a150565b6000806000606084860312156200016f578283fd5b83516200017c81620001a1565b60208501519093506200018f81620001a1565b80925050604084015190509250925092565b6001600160a01b0381168114620001b757600080fd5b50565b611d1280620001ca6000396000f3fe608060405234801561001057600080fd5b50600436106101a85760003560e01c80639f9b1048116100f9578063d5c78a2811610097578063f1ea5cd311610071578063f1ea5cd3146103b4578063f2fde38b146103c7578063f3fef3a3146103da578063fc0c546a146103ed576101a8565b8063d5c78a281461037b578063dbe7e3bd1461038e578063e6a2016e146103a1576101a8565b8063ba899a2e116100d3578063ba899a2e1461032c578063bb872b4a1461033f578063bffbe61c14610352578063c96dc2a214610372576101a8565b80639f9b1048146102ac578063a9fb763c146102cf578063ac4afa38146102e2576101a8565b80634c9b268c11610166578063715018a611610140578063715018a6146102635780638ae39cac1461026b5780638da5cb5b146102745780639506834f14610299576101a8565b80634c9b268c1461023557806357770bee146102485780635c959b6214610250576101a8565b8062c4c106146101ad578063081e3eda146101c25780630aebeb4e146101d957806318a5bbdc146101ec5780631e83409a1461020d57806339db45f614610220575b600080fd5b6101c06101bb36600461194d565b610400565b005b6002545b6040519081526020015b60405180910390f35b6101c06101e7366004611a53565b610506565b6101ff6101fa366004611933565b61063d565b6040516101d0929190611b92565b6101c061021b366004611933565b6106e2565b6102286107a7565b6040516101d09190611ab3565b6101c6610243366004611a53565b610911565b6101c06109d1565b6101c661025e366004611a53565b610ac1565b6101c0610b25565b6101c660035481565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101d0565b6101c06102a736600461194d565b610b5b565b6102bf6102ba366004611933565b610ea6565b60405190151581526020016101d0565b6101c66102dd366004611a53565b610ed9565b6102f56102f0366004611a53565b610f0e565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c0016101d0565b61028161033a366004611a53565b610f5e565b6101c061034d366004611a53565b610fc8565b610365610360366004611933565b611003565b6040516101d09190611b13565b6101c660045481565b6102bf610389366004611a53565b6110b2565b6101c661039c366004611a53565b611119565b6101c66103af366004611a53565b611155565b6101c66103c2366004611a53565b6111d1565b6101c06103d5366004611933565b611234565b6101c06103e8366004611a0a565b6112cc565b600154610281906001600160a01b031681565b6000546001600160a01b031633146104335760405162461bcd60e51b815260040161042a90611b5d565b60405180910390fd5b60008151116104805760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b604482015260640161042a565b6001600160a01b038216600090815260056020908152604090912082516104af9260019092019184019061188c565b506001600160a01b038216600081815260056020526040908190205490517f92f01d2ace5c0ed4c388e5fd7792f9d66dc73028d82f3b6ed4382359a8511d93906104fa908590611b13565b60405180910390a35050565b6000546001600160a01b031633146105305760405162461bcd60e51b815260040161042a90611b5d565b8061053a81611354565b6105565760405162461bcd60e51b815260040161042a90611b26565b61055f826110b2565b156105a75760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b604482015260640161042a565b43600283815481106105c957634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600201819055506105f0826105eb84610f5e565b611367565b506004805490600061060183611c49565b919050555061060e6109d1565b60405182907fbf67515a38ee520223d32c1266d52101c30d936ed1f3e436c8caeb0a43cb06bf90600090a25050565b6005602052600090815260409020805460018201805491929161065f90611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461068b90611c60565b80156106d85780601f106106ad576101008083540402835291602001916106d8565b820191906000526020600020905b8154815290600101906020018083116106bb57829003601f168201915b5050505050905082565b6106eb33610ea6565b6107375760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f6e6578697374656e7420686f6c6465722e00604482015260640161042a565b33600090815260056020526040902054610750816110b2565b156107985760405162461bcd60e51b81526020600482015260186024820152772932bbb0b9322837b7b61d103837b7b61031b637b9b2b21760411b604482015260640161042a565b6107a28183611367565b505050565b60606107b260025490565b67ffffffffffffffff8111156107d857634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561080b57816020015b60608152602001906001900390816107f65790505b50905060005b60025481101561090d57600061082682610f5e565b6001600160a01b038116600090815260056020526040902060010180549192509061085090611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461087c90611c60565b80156108c95780601f1061089e576101008083540402835291602001916108c9565b820191906000526020600020905b8154815290600101906020018083116108ac57829003601f168201915b50505050508383815181106108ee57634e487b7160e01b600052603260045260246000fd5b602002602001018190525050808061090590611c95565b915050610811565b5090565b60008061091d836110b2565b610927574361095b565b6002838154811061094857634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600201545b905060006109a46002858154811061098357634e487b7160e01b600052603260045260246000fd5b906000526020600020906006020160030154836114f690919063ffffffff16565b90506109c76004546109c18360035461150290919063ffffffff16565b9061150e565b925050505b919050565b60005b600254811015610abe576109e7816110b2565b156109f157610aac565b610a3e6109fd82610911565b60028381548110610a1e57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016004015461151a90919063ffffffff16565b60028281548110610a5f57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600401819055504360028281548110610a9657634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600301819055505b80610ab681611c95565b9150506109d4565b50565b600081610acd81611354565b610ae95760405162461bcd60e51b815260040161042a90611b26565b60028381548110610b0a57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016002015491505b50919050565b6000546001600160a01b03163314610b4f5760405162461bcd60e51b815260040161042a90611b5d565b610b596000611526565b565b6000546001600160a01b03163314610b855760405162461bcd60e51b815260040161042a90611b5d565b6001600160a01b038216610bdb5760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420686f6c6465722e0000000000604482015260640161042a565b6000815111610c285760405162461bcd60e51b81526020600482015260196024820152782932bbb0b9322837b7b61d1034b73b30b634b2103737b2329760391b604482015260640161042a565b610c3182610ea6565b15610c7e5760405162461bcd60e51b815260206004820152601a60248201527f526577617264506f6f6c3a20686f6c646572206578697374732e000000000000604482015260640161042a565b6000610c8960025490565b60408051808201825282815260208082018681526001600160a01b0388166000908152600583529390932082518155925180519495509193610cd1926001850192019061188c565b50506040805160c0810182526001600160a01b03868116825243602083018181526000948401858152606085019283526080850186815260a086018781526002805460018101825590895296517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace600690980297880180546001600160a01b031916919097161790955591517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf860155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad085015590517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad1840155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad2830155517f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ad39091015560048054925090610e2783611c95565b9190505550610e346109d1565b60405181907f9648cf7f2eb86b564ae3c4a466bc03e87267933667490eb8737a5a3f2a9b284d90600090a2826001600160a01b0316817f92f01d2ace5c0ed4c388e5fd7792f9d66dc73028d82f3b6ed4382359a8511d9384604051610e999190611b13565b60405180910390a3505050565b6001600160a01b03811660009081526005602052604081206001018054829190610ecf90611c60565b9050119050919050565b6000610f08610ee783610911565b60028481548110610a1e57634e487b7160e01b600052603260045260246000fd5b92915050565b60028181548110610f1e57600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b600081610f6a81611354565b610f865760405162461bcd60e51b815260040161042a90611b26565b60028381548110610fa757634e487b7160e01b600052603260045260246000fd5b60009182526020909120600690910201546001600160a01b03169392505050565b6000546001600160a01b03163314610ff25760405162461bcd60e51b815260040161042a90611b5d565b610ffa6109d1565b610abe81611576565b6001600160a01b038116600090815260056020526040902060010180546060919061102d90611c60565b80601f016020809104026020016040519081016040528092919081815260200182805461105990611c60565b80156110a65780601f1061107b576101008083540402835291602001916110a6565b820191906000526020600020905b81548152906001019060200180831161108957829003601f168201915b50505050509050919050565b6000816110be81611354565b6110da5760405162461bcd60e51b815260040161042a90611b26565b600283815481106110fb57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016002015460001415915050919050565b60006002828154811061113c57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060060201600501549050919050565b60008161116181611354565b61117d5760405162461bcd60e51b815260040161042a90611b26565b6111ca61118984610ed9565b600285815481106111aa57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016005015461151a90919063ffffffff16565b9392505050565b6000816111dd81611354565b6111f95760405162461bcd60e51b815260040161042a90611b26565b6002838154811061121a57634e487b7160e01b600052603260045260246000fd5b906000526020600020906006020160010154915050919050565b6000546001600160a01b0316331461125e5760405162461bcd60e51b815260040161042a90611b5d565b6001600160a01b0381166112c35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161042a565b610abe81611526565b6000546001600160a01b031633146112f65760405162461bcd60e51b815260040161042a90611b5d565b60015461130d906001600160a01b031683836115fe565b816001600160a01b03167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658260405161134891815260200190565b60405180910390a25050565b600061135f60025490565b909110919050565b600061137283610ed9565b9050600081116113c45760405162461bcd60e51b815260206004820152601f60248201527f526577617264506f6f6c3a206e6f2072657761726420746f20636c61696d2e00604482015260640161042a565b6113e981600285815481106111aa57634e487b7160e01b600052603260045260246000fd5b6002848154811061140a57634e487b7160e01b600052603260045260246000fd5b906000526020600020906006020160050181905550436002848154811061144157634e487b7160e01b600052603260045260246000fd5b90600052602060002090600602016003018190555060006002848154811061147957634e487b7160e01b600052603260045260246000fd5b60009182526020909120600460069092020101556001546114a4906001600160a01b031683836115fe565b6114ad83610f5e565b6001600160a01b0316837f3ed1528b0fdc7c5207c1bf935e34a667e13656b9ed165260c522be0bc544f303836040516114e891815260200190565b60405180910390a392915050565b60006111ca8284611c02565b60006111ca8284611be3565b60006111ca8284611bc3565b60006111ca8284611bab565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b806115c35760405162461bcd60e51b815260206004820152601b60248201527f526577617264506f6f6c3a20696e76616c696420706172616d732e0000000000604482015260640161042a565b60038190556040518181527f22c0456177178fec69cb519ce05c0f0b39708187e616a82ceea49f84e19169cd9060200160405180910390a150565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526107a29286929160009161168e91851690849061170b565b8051909150156107a257808060200190518101906116ac9190611a33565b6107a25760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161042a565b606061171a8484600085611722565b949350505050565b6060824710156117835760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161042a565b6001600160a01b0385163b6117da5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161042a565b600080866001600160a01b031685876040516117f69190611a97565b60006040518083038185875af1925050503d8060008114611833576040519150601f19603f3d011682016040523d82523d6000602084013e611838565b606091505b5091509150611848828286611853565b979650505050505050565b606083156118625750816111ca565b8251156118725782518084602001fd5b8160405162461bcd60e51b815260040161042a9190611b13565b82805461189890611c60565b90600052602060002090601f0160209004810192826118ba5760008555611900565b82601f106118d357805160ff1916838001178555611900565b82800160010185558215611900579182015b828111156119005782518255916020019190600101906118e5565b5061090d9291505b8082111561090d5760008155600101611908565b80356001600160a01b03811681146109cc57600080fd5b600060208284031215611944578081fd5b6111ca8261191c565b6000806040838503121561195f578081fd5b6119688361191c565b9150602083013567ffffffffffffffff80821115611984578283fd5b818501915085601f830112611997578283fd5b8135818111156119a9576119a9611cc6565b604051601f8201601f19908116603f011681019083821181831017156119d1576119d1611cc6565b816040528281528860208487010111156119e9578586fd5b82602086016020830137856020848301015280955050505050509250929050565b60008060408385031215611a1c578182fd5b611a258361191c565b946020939093013593505050565b600060208284031215611a44578081fd5b815180151581146111ca578182fd5b600060208284031215611a64578081fd5b5035919050565b60008151808452611a83816020860160208601611c19565b601f01601f19169290920160200192915050565b60008251611aa9818460208701611c19565b9190910192915050565b6000602080830181845280855180835260408601915060408482028701019250838701855b82811015611b0657603f19888603018452611af4858351611a6b565b94509285019290850190600101611ad8565b5092979650505050505050565b6000602082526111ca6020830184611a6b565b6020808252601d908201527f526577617264506f6f6c3a206e6f6e6578697374656e7420706f6f6c2e000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008382526040602083015261171a6040830184611a6b565b60008219821115611bbe57611bbe611cb0565b500190565b600082611bde57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611bfd57611bfd611cb0565b500290565b600082821015611c1457611c14611cb0565b500390565b60005b83811015611c34578181015183820152602001611c1c565b83811115611c43576000848401525b50505050565b600081611c5857611c58611cb0565b506000190190565b600281046001821680611c7457607f821691505b60208210811415610b1f57634e487b7160e01b600052602260045260246000fd5b6000600019821415611ca957611ca9611cb0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212208097367aaf675f22b12961f83dd1d0eceb7be1655f35aac293952822b4842c8f64736f6c63430008020033";

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
    rewardPerBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardPool> {
    return super.deploy(
      admin,
      token_,
      rewardPerBlock_,
      overrides || {}
    ) as Promise<RewardPool>;
  }
  getDeployTransaction(
    admin: string,
    token_: string,
    rewardPerBlock_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      admin,
      token_,
      rewardPerBlock_,
      overrides || {}
    );
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
