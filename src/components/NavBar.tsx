'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccount, useBalance, useConnect, useDisconnect, useReconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect, useRef, useState } from 'react';
export default function NavBar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // Wagmi hooks for wallet connection
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balanceData } = useBalance({
    address,
  });

  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);

  // Function to truncate address
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleOpenWalletMenu = () => {
    setIsWalletMenuOpen(!isWalletMenuOpen);
  }

  const handleDisconnect = () => {
    disconnect();
    setIsWalletMenuOpen(false);
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address ?? "");
    setIsWalletMenuOpen(false);
  }

  const walletMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (walletMenuRef.current && !walletMenuRef.current.contains(event.target as Node)) {
        setIsWalletMenuOpen(false);
      }
    }

    if (isWalletMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isWalletMenuOpen]);

  const { reconnect } = useReconnect()

  useEffect(() => {
    reconnect()
  }, [])

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

            {isConnected && address ? (
              <div className="flex items-center space-x-3">
                <div className="bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  {balanceData?.formatted.slice(0, 6)} ETH
                </div>
                <div className="relative" ref={walletMenuRef}>
                  <button
                    onClick={handleOpenWalletMenu}
                    className="px-3 py-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer">
                    {truncateAddress(address)}
                  </button>
                  <div className={`absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10 ${isWalletMenuOpen ? 'block' : 'hidden'}`}>
                    <button
                      onClick={handleCopyAddress}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    >
                      Copy Address
                    </button>
                    <button
                      onClick={handleDisconnect}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
                    >
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="px-3 py-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer"
                onClick={() => connect({ connector: injected() })}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 