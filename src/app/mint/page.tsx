'use client';

import { useState } from 'react';

export default function MintPage() {
  const [tokenURI, setTokenURI] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleMint = async () => {
    setIsLoading(true);
    try {
      // Minting logic will be implemented later
      console.log('Minting NFT with URI:', tokenURI);
    } catch (error) {
      console.error('Error minting NFT:', error);
    } finally {
      setIsLoading(false);
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
            />
          </div>

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