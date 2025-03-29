'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WalletMultiButton from './WalletMultiButton';

export default function NavBar() {
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
              <span className="text-orange-500">S3T</span> NFT
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

            <WalletMultiButton />
          </div>
        </div>
      </div>
    </nav>
  );
} 