'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-xl font-bold"
            >
              S3T NFT
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/mint"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive('/mint')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Mint NFT
            </Link>

            <Link
              href="/marketplace"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive('/marketplace')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700'}`}
            >
              Marketplace
            </Link>

            <button
              className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
              onClick={() => console.log('Connect Wallet')}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 