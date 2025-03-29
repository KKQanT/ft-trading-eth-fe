'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNFTContract } from '@/hooks/useNFTContract';

export default function MintPage() {
  const [tokenURI, setTokenURI] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { mintNFT, isLoading, error } = useNFTContract();

  const handleMint = async () => {
    if (!tokenURI) return;
    
    setSuccessMessage('');
    const success = await mintNFT(tokenURI);
    
    if (success) {
      setSuccessMessage('NFT minted successfully!');
      setTokenURI('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mint Your NFT</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Token URI
            </label>
            <input
              type="text"
              value={tokenURI}
              onChange={(e) => setTokenURI(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="https://your-token-uri.json"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 text-red-200 rounded-md">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-900/50 text-green-200 rounded-md">
              {successMessage}
            </div>
          )}

          <button
            onClick={handleMint}
            disabled={isLoading || !tokenURI}
            className={`w-full py-3 px-4 rounded-md font-medium transition-colors
              ${isLoading || !tokenURI
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-orange-600 hover:bg-orange-700'}`}
          >
            {isLoading ? 'Minting...' : 'Mint NFT'}
          </button>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">What is Token URI?</h2>
          <p className="text-gray-300">
            A Token URI is a link to your NFT's metadata, typically a JSON file that includes:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>Name of your NFT</li>
            <li>Description</li>
            <li>Image URL</li>
            <li>Additional attributes</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 