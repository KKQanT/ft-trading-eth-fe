'use client';

import { useState } from 'react';

interface NFTListing {
  id: number;
  name: string;
  price: string;
  seller: string;
  image: string;
}

export default function MarketplacePage() {
  const [listings, setListings] = useState<NFTListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for initial UI development
  const mockListings: NFTListing[] = [
    {
      id: 1,
      name: 'Sample NFT #1',
      price: '0.1',
      seller: '0x1234...5678',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Sample NFT #2',
      price: '0.2',
      seller: '0x8765...4321',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">NFT Marketplace</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map((listing) => (
            <div key={listing.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{listing.name}</h3>
                <p className="text-gray-300 mb-4">
                  Seller: {listing.seller}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">
                    {listing.price} ETH
                  </span>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition-colors"
                    onClick={() => console.log('Buy NFT:', listing.id)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mockListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No NFTs listed for sale</p>
          </div>
        )}
      </div>
    </div>
  );
} 