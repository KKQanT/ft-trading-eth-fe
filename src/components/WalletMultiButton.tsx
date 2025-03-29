'use client';

import { useEffect, useRef, useState } from 'react';
import { useWallet } from '@/hooks/useWallet';

export default function WalletMultiButton() {
  const { 
    isConnected, 
    address, 
    balance, 
    truncatedAddress, 
    connectWallet, 
    disconnectWallet, 
    copyAddress 
  } = useWallet();
  
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);
  const walletMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenWalletMenu = () => {
    setIsWalletMenuOpen(!isWalletMenuOpen);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setIsWalletMenuOpen(false);
  };

  const handleCopyAddress = () => {
    copyAddress();
    setIsWalletMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (walletMenuRef.current && !walletMenuRef.current.contains(event.target as Node)) {
        setIsWalletMenuOpen(false);
      }
    };

    if (isWalletMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isWalletMenuOpen]);

  return (
    <>
      {isConnected && address ? (
        <div className="flex items-center space-x-3">
          <div className="bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            {balance} ETH
          </div>
          
          <div className="relative" ref={walletMenuRef}>
            <button
              onClick={handleOpenWalletMenu}
              className="px-3 py-2 rounded-md text-sm font-medium bg-orange-600 hover:bg-orange-700 transition-colors cursor-pointer">
              {truncatedAddress}
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
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
} 