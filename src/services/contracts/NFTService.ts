import { ethers } from 'ethers';
import { NFT, NFT__factory } from '@/types/typechain-types';

export class NFTService {
  private contract: NFT;
  private provider: ethers.Provider;

  constructor(contractAddress: string, provider: ethers.Provider) {
    this.provider = provider;
    this.contract = NFT__factory.connect(contractAddress, provider);
  }

  async mint(tokenURI: string): Promise<ethers.ContractTransactionResponse> {
    if (!this.contract.runner) throw new Error("No signer attached");
    return await this.contract.mint(tokenURI);
  }

  async getTokenURI(tokenId: number): Promise<string> {
    return await this.contract.tokenURI(tokenId);
  }

  async getOwner(): Promise<string> {
    return await this.contract.owner();
  }
} 