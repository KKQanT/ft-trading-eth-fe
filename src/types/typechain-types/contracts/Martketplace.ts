/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MartketplaceInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FEE_DENOMINATOR"
      | "PLATFORM_FEE"
      | "buyNFT"
      | "cancelListing"
      | "getActiveListings"
      | "listNFT"
      | "listings"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "updatePrice"
      | "withdrawFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CanceledListing"
      | "Listed"
      | "OwnershipTransferred"
      | "Saled"
      | "UpdatedPrice"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "FEE_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PLATFORM_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveListings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listNFT",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PLATFORM_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveListings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
}

export namespace CanceledListingEvent {
  export type InputTuple = [listingId: BigNumberish];
  export type OutputTuple = [listingId: bigint];
  export interface OutputObject {
    listingId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ListedEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    seller: AddressLike,
    tokenAddress: AddressLike,
    tokenId: BigNumberish,
    price: BigNumberish
  ];
  export type OutputTuple = [
    listingId: bigint,
    seller: string,
    tokenAddress: string,
    tokenId: bigint,
    price: bigint
  ];
  export interface OutputObject {
    listingId: bigint;
    seller: string;
    tokenAddress: string;
    tokenId: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SaledEvent {
  export type InputTuple = [
    listingId: BigNumberish,
    seller: AddressLike,
    buyer: AddressLike,
    tokenAddress: AddressLike,
    tokenId: BigNumberish,
    price: BigNumberish
  ];
  export type OutputTuple = [
    listingId: bigint,
    seller: string,
    buyer: string,
    tokenAddress: string,
    tokenId: bigint,
    price: bigint
  ];
  export interface OutputObject {
    listingId: bigint;
    seller: string;
    buyer: string;
    tokenAddress: string;
    tokenId: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedPriceEvent {
  export type InputTuple = [listingId: BigNumberish, price: BigNumberish];
  export type OutputTuple = [listingId: bigint, price: bigint];
  export interface OutputObject {
    listingId: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Martketplace extends BaseContract {
  connect(runner?: ContractRunner | null): Martketplace;
  waitForDeployment(): Promise<this>;

  interface: MartketplaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  FEE_DENOMINATOR: TypedContractMethod<[], [bigint], "view">;

  PLATFORM_FEE: TypedContractMethod<[], [bigint], "view">;

  buyNFT: TypedContractMethod<[listingId: BigNumberish], [void], "payable">;

  cancelListing: TypedContractMethod<
    [listingId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getActiveListings: TypedContractMethod<[], [bigint[]], "view">;

  listNFT: TypedContractMethod<
    [tokenAddress: AddressLike, tokenId: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  listings: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, boolean] & {
        seller: string;
        tokenAddress: string;
        tokenId: bigint;
        price: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePrice: TypedContractMethod<
    [listingId: BigNumberish, newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFunds: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FEE_DENOMINATOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PLATFORM_FEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "buyNFT"
  ): TypedContractMethod<[listingId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "cancelListing"
  ): TypedContractMethod<[listingId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getActiveListings"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "listNFT"
  ): TypedContractMethod<
    [tokenAddress: AddressLike, tokenId: BigNumberish, price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "listings"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, boolean] & {
        seller: string;
        tokenAddress: string;
        tokenId: bigint;
        price: bigint;
        isActive: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePrice"
  ): TypedContractMethod<
    [listingId: BigNumberish, newPrice: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFunds"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "CanceledListing"
  ): TypedContractEvent<
    CanceledListingEvent.InputTuple,
    CanceledListingEvent.OutputTuple,
    CanceledListingEvent.OutputObject
  >;
  getEvent(
    key: "Listed"
  ): TypedContractEvent<
    ListedEvent.InputTuple,
    ListedEvent.OutputTuple,
    ListedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Saled"
  ): TypedContractEvent<
    SaledEvent.InputTuple,
    SaledEvent.OutputTuple,
    SaledEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedPrice"
  ): TypedContractEvent<
    UpdatedPriceEvent.InputTuple,
    UpdatedPriceEvent.OutputTuple,
    UpdatedPriceEvent.OutputObject
  >;

  filters: {
    "CanceledListing(uint256)": TypedContractEvent<
      CanceledListingEvent.InputTuple,
      CanceledListingEvent.OutputTuple,
      CanceledListingEvent.OutputObject
    >;
    CanceledListing: TypedContractEvent<
      CanceledListingEvent.InputTuple,
      CanceledListingEvent.OutputTuple,
      CanceledListingEvent.OutputObject
    >;

    "Listed(uint256,address,address,uint256,uint256)": TypedContractEvent<
      ListedEvent.InputTuple,
      ListedEvent.OutputTuple,
      ListedEvent.OutputObject
    >;
    Listed: TypedContractEvent<
      ListedEvent.InputTuple,
      ListedEvent.OutputTuple,
      ListedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Saled(uint256,address,address,address,uint256,uint256)": TypedContractEvent<
      SaledEvent.InputTuple,
      SaledEvent.OutputTuple,
      SaledEvent.OutputObject
    >;
    Saled: TypedContractEvent<
      SaledEvent.InputTuple,
      SaledEvent.OutputTuple,
      SaledEvent.OutputObject
    >;

    "UpdatedPrice(uint256,uint256)": TypedContractEvent<
      UpdatedPriceEvent.InputTuple,
      UpdatedPriceEvent.OutputTuple,
      UpdatedPriceEvent.OutputObject
    >;
    UpdatedPrice: TypedContractEvent<
      UpdatedPriceEvent.InputTuple,
      UpdatedPriceEvent.OutputTuple,
      UpdatedPriceEvent.OutputObject
    >;
  };
}
