import { ethers } from 'ethers';
import { Martketplace, Martketplace__factory } from '@/types/typechain-types';

export class MarketplaceService {
  private contract: Martketplace;
  private provider: ethers.Provider;

  constructor(contractAddress: string, provider: ethers.Provider) {
    this.provider = provider;
    this.contract = Martketplace__factory.connect(contractAddress, provider);
  }

  async listNFT(
    tokenAddress: string,
    tokenId: number,
    price: bigint
  ): Promise<ethers.ContractTransactionResponse> {
    if (!this.contract.runner) throw new Error("No signer attached");
    return await this.contract.listNFT(tokenAddress, tokenId, price);
  }

  async buyNFT(
    listingId: number,
    value: bigint
  ): Promise<ethers.ContractTransactionResponse> {
    if (!this.contract.runner) throw new Error("No signer attached");
    return await this.contract.buyNFT(listingId, { value });
  }

  async getActiveListings(): Promise<bigint[]> {
    return await this.contract.getActiveListings();
  }

  async getListing(listingId: number): Promise<[string, string, bigint, bigint, boolean]> {
    return await this.contract.listings(listingId);
  }
} 