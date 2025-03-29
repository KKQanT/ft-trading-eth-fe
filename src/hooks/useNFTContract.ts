import { useCallback, useState } from 'react';
import { usePublicClient, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';
import { NFT__factory } from '@/types/typechain-types';
import { MINT_PRICE, NFT_CONTRACT_ADDRESS } from '@/constant/NFTContract';

export function useNFTContract() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  const mintNFT = useCallback(async (tokenURI: string): Promise<boolean> => {
    if (!walletClient || !publicClient) {
      setError('Wallet not connected');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { abi } = NFT__factory;
      const account = walletClient.account.address;
      
      const mintPrice = parseEther(MINT_PRICE);
      
      const gasEstimate = await publicClient.estimateContractGas({
        address: NFT_CONTRACT_ADDRESS,
        abi,
        functionName: 'mint',
        args: [tokenURI],
        account,
        value: mintPrice
      });

      const hash = await walletClient.writeContract({
        address: NFT_CONTRACT_ADDRESS,
        abi,
        functionName: 'mint',
        args: [tokenURI],
        gas: gasEstimate,
        value: mintPrice
      });

      const receipt = await publicClient.waitForTransactionReceipt({ 
        hash 
      });

      return receipt.status === 'success';
    } catch (err) {
      console.error('Error minting NFT:', err);
      setError(err instanceof Error ? err.message : 'Failed to mint NFT');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [walletClient, publicClient]);

  const getTokenURI = useCallback(async (tokenId: bigint): Promise<string> => {
    if (!publicClient) {
      setError('Client not available');
      return '';
    }

    try {
      const { abi } = NFT__factory;
      const data = await publicClient.readContract({
        address: NFT_CONTRACT_ADDRESS,
        abi,
        functionName: 'tokenURI',
        args: [tokenId]
      });
      
      return data as string;
    } catch (err) {
      console.error('Error getting token URI:', err);
      setError(err instanceof Error ? err.message : 'Failed to get token URI');
      return '';
    }
  }, [publicClient]);

  return {
    mintNFT,
    getTokenURI,
    isLoading,
    error
  };
} 